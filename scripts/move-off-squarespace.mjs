// One-time move off Squarespace: copies every picture, video and PDF the site still loads from Squarespace
// into the site itself, then points the site at the copies. Runs on GitHub (.github/workflows/move-off-squarespace.yml).
//   pictures -> images/sq/<id>/{s,m,l}.webp   (small 400px, medium 1000px, large 2000px wide)
//   files    -> files/<name>                   (press releases, price lists)
//   videos   -> videos/<id>.mp4
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const TEXT = ["content.js", "interviews.js", "index.html"];
const all = TEXT.map(f => readFileSync(f, "utf8")).join("\n");
const uniq = re => [...new Set([...all.matchAll(re)].map(m => m[0]))];
const pics = uniq(/https:\/\/images\.squarespace-cdn\.com\/[^"'\s)\\]+/g).concat(uniq(/https:\/\/video\.squarespace-cdn\.com\/[^"'\s)\\]+\/thumbnail/g));
const files = uniq(/https:\/\/archive\.project-gallery\.com\/s\/[^"'\s)\\]+/g);
const vids = uniq(/https:\/\/video\.squarespace-cdn\.com\/[^"'\s)\\]+\/video\.mp4/g);
const map = {}, log = [];
const UA = { "user-agent": "Mozilla/5.0 (project-gallery move)" };
const get = async u => { for (let k = 0; k < 3; k++) { try { const r = await fetch(u, { headers: UA }); if (r.ok) return Buffer.from(await r.arrayBuffer()); log.push(`  try ${k + 1}: ${r.status} ${u}`); } catch (e) { log.push(`  try ${k + 1}: ${e.message} ${u}`); } await new Promise(r => setTimeout(r, 1500)); } return null; };

// pictures
let done = 0, failed = 0;
const idOf = u => { const m = /\/content\/v1\/[^/]+\/([^/]+)\/([^/?]+)/.exec(u); return (m ? m[1] : "x") + "-" + (m ? m[2] : u).replace(/\.[a-z0-9]+$/i, "").replace(/[^\w-]+/g, "").slice(0, 40); };
async function pic(u) {
  const id = idOf(u), dir = `images/sq/${id}`;
  if (existsSync(`${dir}/l.webp`)) { map[u] = "/" + dir; done++; return; }
  const src = /images\.squarespace-cdn/.test(u) ? u + "?format=2500w" : u;
  const buf = await get(src);
  if (!buf) { failed++; log.push(`PICTURE FAILED ${u}`); return; }
  try {
    mkdirSync(dir, { recursive: true });
    const img = sharp(buf, { failOn: "none" }).rotate();
    for (const [n, w, q] of [["s", 400, 78], ["m", 1000, 80], ["l", 2000, 82]])
      await img.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: q }).toFile(`${dir}/${n}.webp`);
    map[u] = "/" + dir; done++;
  } catch (e) { failed++; log.push(`PICTURE UNREADABLE ${u}: ${e.message}`); }
}
for (let i = 0; i < pics.length; i += 8) await Promise.all(pics.slice(i, i + 8).map(pic));
log.unshift(`pictures: ${done} copied, ${failed} failed, of ${pics.length}`);

// files
mkdirSync("files", { recursive: true });
let fd = 0;
for (const u of files) {
  const name = decodeURIComponent(u.split("/s/")[1]).replace(/[^\w.\-]+/g, "-");
  const buf = await get(u);
  if (!buf || buf.length < 500 || /^<!doctype|^<html/i.test(buf.slice(0, 20).toString())) { log.push(`FILE FAILED ${u}`); continue; }
  writeFileSync(`files/${name}`, buf); map[u] = `/files/${name}`; fd++;
}
log.push(`files: ${fd} copied of ${files.length}`);

// videos (Squarespace serves them as streams; ffmpeg saves a copy small enough for the site, under 25 MB)
mkdirSync("videos", { recursive: true });
for (const u of vids) {
  const id = /\/([0-9a-f-]{36})\//.exec(u)[1], out = `videos/${id}.mp4`;
  const base = u.replace(/\/1920:1080\/video\.mp4$/, "");
  let ok = false;
  for (const input of [u, base + "/playlist.m3u8", base + "/1920:1080/playlist.m3u8", base + "/1280:720/playlist.m3u8"]) {
    try {
      execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-user_agent", UA["user-agent"], "-i", input, "-vf", "scale='min(1280,iw)':-2", "-c:v", "libx264", "-preset", "veryfast", "-crf", "28", "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", out], { stdio: "pipe", timeout: 600000 });
      const mb = statSync(out).size / 1e6;
      if (mb > 24) { execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", out, "-vf", "scale='min(854,iw)':-2", "-c:v", "libx264", "-preset", "veryfast", "-crf", "32", "-c:a", "aac", "-b:a", "64k", "-movflags", "+faststart", out + ".tmp.mp4"]); execFileSync("mv", [out + ".tmp.mp4", out]); }
      log.push(`video ${id}: from ${input.split("/").slice(-2).join("/")}, ${(statSync(out).size / 1e6).toFixed(1)} MB`);
      if (statSync(out).size < 25e6) { map[u] = "/" + out; ok = true; }
      break;
    } catch (e) { log.push(`  video ${id} via ${input.split("/").slice(-2).join("/")}: ${String(e.stderr || e.message).slice(0, 200)}`); }
  }
  if (!ok) log.push(`VIDEO NOT COPIED ${u}`);
}

writeFileSync("scripts/sq-map.json", JSON.stringify(map, null, 1));
writeFileSync("scripts/move-off-squarespace.log", log.join("\n") + "\n");
console.log(log.join("\n"));
