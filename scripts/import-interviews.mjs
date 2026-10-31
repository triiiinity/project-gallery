// One-time import: copies every old "spotlights" post from the Squarespace archive into interviews.js.
// Runs on GitHub (see .github/workflows/import-interviews.yml). Text is kept exactly as written;
// pictures stay on Squarespace's image servers for now, like the rebuilt show pages.
import { parseHTML } from "linkedom";
import { writeFileSync } from "node:fs";

const BASE = "https://archive.project-gallery.com";
const log = [];
const get = async path => {
  const r = await fetch(BASE + path, { headers: { "user-agent": "project-gallery-import" } });
  if (!r.ok) throw new Error(path + " → " + r.status);
  return parseHTML(await r.text()).document;
};
const clean = s => String(s || "").replace(/ /g, " ").replace(/[ \t]+/g, " ").replace(/\s*\n\s*/g, "\n").trim();

// 1. every post, following "older posts" until the end
const posts = [], seenPages = new Set();
let page = "/spotlights";
while (page && !seenPages.has(page) && seenPages.size < 30) {
  seenPages.add(page);
  const d = await get(page);
  for (const a of d.querySelectorAll("a[href]")) {
    const h = a.getAttribute("href");
    if (/^\/spotlights\/(?!category|tag)[^?#]+$/.test(h) && !posts.includes(h)) posts.push(h);
  }
  const older = [...d.querySelectorAll("a[href*='offset=']")].map(a => a.getAttribute("href")).find(h => !seenPages.has(h));
  page = older || null;
}
log.push(`pages: ${seenPages.size}, posts: ${posts.length}`);

// 2. each post: title, date, tags, then its text and pictures in order
const out = [];
for (const path of posts) {
  try {
    const d = await get(path);
    const title = clean((d.querySelector("h1.entry-title, .blog-item-title h1, h1") || {}).textContent || d.title.replace(/ — project gallery$/, ""));
    const time = d.querySelector("time[datetime]");
    const date = time ? time.getAttribute("datetime").slice(0, 10) : "";
    const tags = [...new Set([...d.querySelectorAll("a[href*='/spotlights/category/'], a[href*='/spotlights/tag/']")].map(a => clean(a.textContent)).filter(Boolean))];
    const root = d.querySelector(".blog-item-content") || d.querySelector("article") || d.body;
    const blocks = [];
    for (const el of root.querySelectorAll(".sqs-html-content > *, .image-block, .sqs-block-image, .sqs-gallery img, .gallery-grid img")) {
      if (el.closest(".sqs-html-content") && el.parentElement && !el.parentElement.classList.contains("sqs-html-content")) continue;
      if (el.tagName === "IMG" || el.classList.contains("image-block") || el.classList.contains("sqs-block-image")) {
        const img = el.tagName === "IMG" ? el : el.querySelector("img");
        if (!img) continue;
        const src = (img.getAttribute("data-src") || img.getAttribute("src") || "").split("?")[0];
        if (!/squarespace-cdn/.test(src)) continue;
        if (blocks.some(b => b.img === src)) continue;
        const cap = el.querySelector ? clean((el.querySelector(".image-caption, figcaption") || {}).textContent) : "";
        const dim = img.getAttribute("data-image-dimensions") || "";
        blocks.push({ img: src, ratio: dim.replace("x", "/"), caption: cap });
        continue;
      }
      const tag = el.tagName.toLowerCase();
      if (tag === "ul" || tag === "ol") {
        for (const li of el.querySelectorAll("li")) { const t = clean(li.textContent); if (t) blocks.push({ p: "• " + t }); }
        continue;
      }
      const t = clean(el.textContent);
      if (!t) continue;
      const strongOnly = el.querySelector("strong, b") && clean([...el.querySelectorAll("strong, b")].map(s => s.textContent).join(" ")) === t;
      const isQ = /^h[2-6]$/.test(tag) || strongOnly || (t.length < 320 && /\?["”’)]?$/.test(t));
      blocks.push(isQ ? { q: t } : { p: t });
    }
    // drop the "Written by" line and the title repeated at the top
    const trimmed = blocks.filter(b => !(b.p && /^written by /i.test(b.p)) && !(b.q && b.q === title));
    const slug = path.replace(/^\/spotlights\//, "");
    out.push({ slug, title, date, tags, blocks: trimmed });
    log.push(`${date} ${slug}: ${trimmed.filter(b => b.p || b.q).length} paragraphs, ${trimmed.filter(b => b.q).length} questions, ${trimmed.filter(b => b.img).length} pictures`);
  } catch (e) {
    log.push(`FAILED ${path}: ${e.message}`);
  }
}
out.sort((a, b) => b.date.localeCompare(a.date));

const header = `// INTERVIEWS: the old "spotlights" posts from the Squarespace site, copied word for word on ${new Date().toISOString().slice(0, 10)}.
// Each one: slug (its address, /interviews/<slug>), title, date, tags, and blocks in order:
//   { p: "paragraph" }, { q: "a question" }, { img: "picture", ratio: "w/h", caption: "" }
// Loaded only when someone opens the interviews page.
`;
writeFileSync("interviews.js", header + "const INTERVIEWS = " + JSON.stringify(out, null, 1) + ";\n");
writeFileSync("scripts/import-interviews.log", log.join("\n") + "\n");
console.log(log.join("\n"));
