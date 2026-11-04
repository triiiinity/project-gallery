// Live check of the email-list box on the contact page (desktop Chrome + Safari, phone). Runs on GitHub.
import { chromium, webkit } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("scripts/kit-check", { recursive: true });
await new Promise(r => setTimeout(r, 90000));      // let the deploy finish
const log = [];
const api = await fetch("https://project-gallery.com/api/subscribers").then(r => r.status).catch(e => e.message);
log.push(`email list download without password answers: ${api} (401 = working and locked)`);
for (const [bname, type, vp] of [["chrome-desktop", chromium, { width: 1280, height: 800 }], ["safari-desktop", webkit, { width: 1280, height: 800 }], ["chrome-phone", chromium, { width: 390, height: 800 }]]) {
  const b = await type.launch(); const p = await (await b.newContext({ viewport: vp })).newPage();
  await p.goto("https://project-gallery.com/contact", { waitUntil: "networkidle" }).catch(() => {});
  await p.waitForTimeout(1500); await p.click("#nl-contact").catch(() => {}); await p.waitForTimeout(4000);
  const st = await p.evaluate(() => ({ ownForm: !document.getElementById("nl-form").hidden && !!document.querySelector("#nl-form button[type=submit]").offsetWidth, kitForm: !document.getElementById("nl-kit").hidden }));
  log.push(`${bname}: ${JSON.stringify(st)}`);
  await p.screenshot({ path: `scripts/kit-check/${bname}.png` }); await b.close();
}
writeFileSync("scripts/make-previews.log", log.join("\n") + "\n");
