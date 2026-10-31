// Live check after moving off Squarespace: every copied picture, file and video answers on project-gallery.com. Runs on GitHub.
import { readFileSync, writeFileSync } from "node:fs";
await new Promise(r => setTimeout(r, 240000));          // give the deploy a few minutes
const map = JSON.parse(readFileSync("scripts/sq-map.json", "utf8"));
const paths = Object.values(map).flatMap(p => p.startsWith("/images/sq/") ? ["s", "m", "l"].map(n => `${p}/${n}.webp`) : [p]);
const log = []; let bad = 0;
const home = await fetch("https://project-gallery.com/").then(r => r.text()).catch(() => "");
log.push(`homepage has the grant window: ${home.includes('id="gwin"')}; still mentions squarespace-cdn: ${(await fetch("https://project-gallery.com/content.js").then(r => r.text())).includes("squarespace-cdn")}`);
for (let i = 0; i < paths.length; i += 16) {
  await Promise.all(paths.slice(i, i + 16).map(async p => {
    try { const r = await fetch("https://project-gallery.com" + p, { method: "HEAD" }); const t = r.headers.get("content-type") || ""; if (!r.ok || /text\/html/.test(t)) { bad++; log.push(`BAD ${r.status} ${t} ${p}`); } }
    catch (e) { bad++; log.push(`BAD ${e.message} ${p}`); }
  }));
}
log.splice(1, 0, `${paths.length} files checked on the live site, ${bad} missing`);
writeFileSync("scripts/check-images.log", log.join("\n") + "\n"); console.log(log.join("\n"));
