// Retakes the small page pictures that show when you hover the menu (images/previews/<page>.jpg)
// from the live site. Runs on GitHub (.github/workflows/make-previews.yml), since the grant form only loads from the real internet.
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
const PAGES = { home: "/", exhibitions: "/exhibitions", artists: "/artists", interviews: "/interviews", grant: "/grant", about: "/about", guestbook: "/guestbook", contact: "/contact", collection: "/collection" };
const log = [];
const b = await chromium.launch();
for (const [name, path] of Object.entries(PAGES)) {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
  await ctx.addInitScript(() => { try { localStorage.setItem("pg-grant-closed:project grant 2026", "1"); localStorage.setItem("pg-awards", JSON.stringify(Object.fromEntries(["firstdoor","reader","guestbook","applied","closer","collector","grid","gridexplorer","explorer","doors"].map(k => [k, 1])))); } catch (e) {} });
  const p = await ctx.newPage();
  await p.goto("https://project-gallery.com" + path, { waitUntil: "networkidle" }).catch(() => {});
  await p.waitForTimeout(name === "grant" ? 9000 : name === "home" ? 6000 : 3500);
  await p.screenshot({ path: `/tmp/${name}.png` });
  log.push(`${name}: done`);
  await ctx.close();
}
await b.close();
writeFileSync("scripts/make-previews.log", log.join("\n") + "\n");
