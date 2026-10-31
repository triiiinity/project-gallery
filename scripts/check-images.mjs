// Checks that every picture on the 2020-2022 show pages loads. Runs on GitHub (see .github/workflows/check-images.yml).
import { readFileSync, writeFileSync } from "node:fs";
const src = readFileSync("content.js", "utf8");
const keys = ["betwixt-and-between","unfolding-pattern","new-light","wet-dream","syncretic","splinters","erika-shiba","we-are-still-in-eden","if-fluid-was-a-song","time-wont-tell","spliced-energy","transcendental-states","illuminated","people-places-things","the-alternative-states","multitudes","eternal-flame","in-the-cool-of-the-evening"];
const log = []; let bad = 0, n = 0;
for (const k of keys) {
  const a = src.indexOf(`\n  "${k}": {\n    `, src.indexOf("const SHOWS")); const b = src.indexOf("\n  }", a);
  const urls = [...new Set([...src.slice(a, b).matchAll(/"(https:\/\/[^"]+\.(?:jpe?g|png|gif|webp|JPG|JPEG|PNG)[^"]*|https:\/\/[^"]*(?:thumbnail|hqdefault\.jpg|vimeocdn[^"]*))"/g)].map(m => m[1]))];
  for (const u of urls) {
    n++;
    const t = /images\.squarespace-cdn/.test(u) ? u + "?format=1500w" : u;
    try { const r = await fetch(t, { method: "GET", headers: { "user-agent": "Mozilla/5.0" } }); const ty = r.headers.get("content-type") || ""; if (!r.ok || !/image/.test(ty)) { bad++; log.push(`BAD ${k} ${r.status} ${ty} ${u}`); } }
    catch (e) { bad++; log.push(`BAD ${k} ${e.message} ${u}`); }
  }
}
log.unshift(`${n} pictures checked, ${bad} failed`);
writeFileSync("scripts/check-images.log", log.join("\n") + "\n"); console.log(log.join("\n"));
