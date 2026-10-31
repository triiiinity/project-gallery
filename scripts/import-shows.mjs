// One-time import: reads the older show pages on the Squarespace archive and saves what is on them,
// in page order, to scripts/shows-raw.json. The show pages themselves are then built from that file.
// Runs on GitHub (see .github/workflows/import-shows.yml).
import { parseHTML } from "linkedom";
import { writeFileSync } from "node:fs";

const BASE = "https://archive.project-gallery.com";
const SHOWS = ["betwixt-and-between", "unfolding-pattern", "new-light", "wet-dream", "syncretic",
  "splinters-in-the-ongoing-normal", "erika-shiba", "we-are-still-in-eden", "if-fluid-was-a-song",
  "time-wont-tell", "spliced-energy", "transcendental-states", "illuminated", "people-places-things",
  "the-alternative-states", "multitudes", "eternal-flame", "in-the-cool-of-the-evening"];
const log = [];
const clean = s => String(s || "").replace(/ /g, " ").replace(/[ \t]+/g, " ").replace(/\s*\n\s*/g, "\n").trim();
const textOf = el => {
  if (!el) return "";
  const c = el.cloneNode(true);
  c.querySelectorAll("br").forEach(b => b.replaceWith(c.ownerDocument.createTextNode("\n")));
  c.querySelectorAll("style, script").forEach(x => x.remove());
  return c.textContent;
};
const srcOf = img => (img.getAttribute("data-src") || img.getAttribute("data-image") || img.getAttribute("src") || "").split("?")[0];

async function vimeoThumb(id) {
  try {
    const j = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}&width=1280`).then(r => r.json());
    return { thumb: j.thumbnail_url || "", ratio: j.width && j.height ? `${j.width}/${j.height}` : "16/9", vtitle: j.title || "" };
  } catch (e) { return { thumb: "", ratio: "16/9", vtitle: "" }; }
}

// where a block sits: free-form grid area (newer pages) or column span chain (older pages)
function placeOf(block, css) {
  const fe = block.closest(".fe-block");
  if (fe) {
    const cls = [...fe.classList].find(c => c.startsWith("fe-block-"));
    if (cls) {
      const re = new RegExp("@media \\(min-width: 768px\\)\\s*\\{\\s*\\." + cls + "\\s*\\{\\s*grid-area:\\s*([\\d/ ]+);");
      const m = re.exec(css);
      if (m) return { ga: m[1].trim() };
    }
    return { ga: "" };
  }
  const cols = [];
  let el = block.parentElement;
  while (el && !el.classList?.contains("sqs-layout")) {
    if (el.classList && el.classList.contains("col")) {
      const span = [...el.classList].map(c => /^span-(\d+)$/.exec(c)).find(Boolean);
      const row = el.parentElement;
      const sibs = row ? [...row.children].filter(x => x.classList && x.classList.contains("col")) : [];
      cols.unshift({ span: span ? Number(span[1]) : 12, i: sibs.indexOf(el), of: sibs.length,
        before: sibs.slice(0, Math.max(0, sibs.indexOf(el))).reduce((t, x) => { const s = [...x.classList].map(c => /^span-(\d+)$/.exec(c)).find(Boolean); return t + (s ? Number(s[1]) : 0); }, 0) });
    }
    el = el.parentElement;
  }
  return { cols };
}

const out = {};
for (const slug of SHOWS) {
  try {
    const r = await fetch(BASE + "/" + slug, { headers: { "user-agent": "project-gallery-import" }, redirect: "follow" });
    if (!r.ok) { log.push(`FAILED ${slug}: ${r.status} ${r.url}`); continue; }
    const d = parseHTML(await r.text()).document;
    const css = [...d.querySelectorAll("style")].map(s => s.textContent).join("\n");
    const main = d.querySelector("main, #page, .content, #content") || d.body;
    const blocks = [];
    let section = 0;
    const sections = [...main.querySelectorAll("section.page-section")];
    const roots = sections.length ? sections : [main];
    for (const sec of roots) {
      section++;
      for (const b of sec.querySelectorAll(".sqs-block")) {
        if (b.parentElement && b.parentElement.closest(".sqs-block")) continue;      // nested
        const place = placeOf(b, css);
        const base = { s: section, ...place };
        if (b.classList.contains("video-block") || b.classList.contains("sqs-block-video") || b.querySelector(".sqs-video-wrapper, .sqs-native-video")) {
          const w = b.querySelector(".sqs-video-wrapper");
          const html = (w && w.getAttribute("data-html")) || "";
          const src = (/src="([^"]+)"/.exec(html) || [])[1] || "";
          const title = (/title="([^"]*)"/.exec(html) || [])[1] || "";
          const v = { ...base, type: "video", vtitle: title, video: "", thumb: "", ratio: "16/9", html: html.slice(0, 600), url: (w && w.getAttribute("data-provider-name")) || "" };
          const yt = /(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{6,})/.exec(src + " " + html.replace(/&amp;/g, "&")), vm = /vimeo\.com\/video\/(\d+)/.exec(src);
          if (yt) { v.video = "https://www.youtube.com/watch?v=" + yt[1]; v.thumb = `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`; v.ratio = "4/3"; }
          else if (vm) {
            v.video = "https://vimeo.com/" + vm[1]; Object.assign(v, await vimeoThumb(vm[1])); v.vtitle = title || v.vtitle;
            if (!v.thumb) {      // private or domain-locked videos leave the thumbnail out; try the page, then the player config
              for (const u of ["https://vimeo.com/api/v2/video/" + vm[1] + ".json", "https://player.vimeo.com/video/" + vm[1], "https://vimeo.com/" + vm[1], "https://player.vimeo.com/video/" + vm[1] + "/config"]) {
                try {
                  const t = await fetch(u, { headers: { referer: BASE + "/", "user-agent": "Mozilla/5.0" } }).then(r => r.text());
                  const m = /"thumbnail_large":"([^"]+)"/.exec(t) || /property="og:image" content="([^"]+)"/.exec(t) || /"base":"(https:\/\/i\.vimeocdn\.com\/video\/[^"]+)"/.exec(t) || /(https:\/\/i\.vimeocdn\.com\/video\/[\w-]+)/.exec(t);
                  log.push(`  vimeo ${vm[1]} ${u}: ${t.length} chars${m ? " found" : ""}`);
                  if (m) { v.thumb = m[1].replace(/\\\//g, "/"); break; }
                } catch (e) {}
              }
            }
          }
          else {
            const nat = b.querySelector(".sqs-native-video");
            const cfg = nat ? nat.getAttribute("data-config-video") : "";
            const a = cfg ? /"alexandriaUrl":"([^"]+)\/\{variant\}"/.exec(cfg) : null;
            if (a) { v.video = a[1] + "/1920:1080/video.mp4"; v.thumb = a[1] + "/thumbnail"; }
            const ar = cfg ? /"aspectRatio":([\d.]+)/.exec(cfg) : null;
            if (ar) v.ratio = `${Math.round(Number(ar[1]) * 1000)}/1000`;
            const custom = b.querySelector("img");
            if (!v.thumb && custom) v.thumb = srcOf(custom);
          }
          v.caption = clean(textOf(b.querySelector(".video-caption, .sqs-video-caption, figcaption")));
          blocks.push(v);
          continue;
        }
        if (b.classList.contains("gallery-block") || b.classList.contains("sqs-block-gallery") || b.querySelector(".sqs-gallery, .sqs-gallery-container")) {
          const imgs = [];
          for (const slide of b.querySelectorAll(".slide, .sqs-gallery-design-grid-slide, .image-slide, img")) {
            const img = slide.tagName === "IMG" ? slide : slide.querySelector("img");
            if (!img) continue;
            const src = srcOf(img);
            if (!/squarespace-cdn/.test(src) || imgs.some(x => x.src === src)) continue;
            const meta = slide.tagName === "IMG" ? null : slide;
            imgs.push({ src, dim: img.getAttribute("data-image-dimensions") || "", alt: clean(img.getAttribute("alt")),
              title: clean(meta && (meta.getAttribute("data-title") || textOf(meta.querySelector(".image-slide-title, .meta-title")))),
              desc: clean(meta && textOf(meta.querySelector(".image-slide-description, .meta-description, .sqs-gallery-meta-container"))) });
          }
          blocks.push({ ...base, type: "gallery", images: imgs });
          continue;
        }
        const img = b.querySelector("img");
        if (img && /squarespace-cdn/.test(srcOf(img)) && !b.querySelector(".sqs-html-content")) {
          blocks.push({ ...base, type: "img", src: srcOf(img), dim: img.getAttribute("data-image-dimensions") || "",
            alt: clean(img.getAttribute("alt")), caption: clean(textOf(b.querySelector(".image-caption, figcaption, .image-card-wrapper .image-subtitle"))),
            title: clean(textOf(b.querySelector(".image-title"))), link: (b.querySelector("a[href]") || { getAttribute: () => "" }).getAttribute("href") || "" });
          continue;
        }
        const hc = b.querySelector(".sqs-html-content");
        if (hc) {
          const paras = [];
          for (const el of hc.children) {
            const t = clean(textOf(el));
            if (!t) continue;
            const strong = el.querySelector("strong, b");
            paras.push({ t, tag: el.tagName.toLowerCase(), bold: !!strong && clean([...el.querySelectorAll("strong, b")].map(x => x.textContent).join(" ")).replace(/\s+/g, " ") === t.replace(/\s+/g, " "),
              links: [...el.querySelectorAll("a[href]")].map(a => [clean(a.textContent), a.getAttribute("href")]).filter(x => x[0]) });
          }
          if (paras.length) blocks.push({ ...base, type: "text", paras });
          continue;
        }
        const btn = b.querySelector("a[href]");
        if (btn && clean(btn.textContent)) blocks.push({ ...base, type: "btn", text: clean(btn.textContent), href: btn.getAttribute("href") });
      }
    }
    out[slug] = { url: r.url, title: clean(d.title.replace(/ — project gallery$/, "")), blocks };
    const n = t => blocks.filter(x => x.type === t).length;
    log.push(`${slug}: ${blocks.length} blocks, ${n("img")} images, ${blocks.filter(x => x.type === "gallery").reduce((a, g) => a + g.images.length, 0)} in slideshows, ${n("video")} videos, ${n("text")} text, ${n("btn")} buttons${r.url !== BASE + "/" + slug ? " (redirected to " + r.url + ")" : ""}`);
  } catch (e) {
    log.push(`FAILED ${slug}: ${e.message}`);
  }
}
writeFileSync("scripts/shows-raw.json", JSON.stringify(out, null, 1));
writeFileSync("scripts/import-shows.log", log.join("\n") + "\n");
console.log(log.join("\n"));
