// Checks the email-list box on the live contact page in a fresh browser (desktop + phone) and keeps pictures of it.
// Runs on GitHub (.github/workflows/make-previews.yml).
import { chromium, webkit } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("scripts/kit-check", { recursive: true });
const log = [];
for (const [bname, type, vp] of [["chrome-desktop", chromium, { width: 1280, height: 800 }], ["safari-desktop", webkit, { width: 1280, height: 800 }], ["chrome-phone", chromium, { width: 390, height: 800 }]]) {
  const b = await type.launch(); const p = await (await b.newContext({ viewport: vp })).newPage();
  p.on("console", m => { if (m.type() === "error" || m.type() === "warning") log.push(`  [${bname} console] ${m.text().slice(0, 200)}`); });
  p.on("requestfailed", r => log.push(`  [${bname} failed] ${r.url().slice(0, 120)} ${r.failure() && r.failure().errorText}`));
  p.on("response", r => { if (/kit\.com|convertkit/.test(r.url())) log.push(`  [${bname} kit] ${r.status()} ${r.url().slice(0, 120)}`); });
  await p.goto("https://project-gallery.com/contact", { waitUntil: "networkidle" }).catch(() => {});
  await p.waitForTimeout(1500);
  await p.click("#nl-contact").catch(e => log.push(`  [${bname}] click failed ${e.message}`));
  for (const t of [1500, 6000]) {
    await p.waitForTimeout(t === 1500 ? 1500 : 4500);
    const st = await p.evaluate(() => ({
      open: document.getElementById("nl").classList.contains("open"),
      ownFormShown: !document.getElementById("nl-form").hidden,
      kitBoxShown: !document.getElementById("nl-kit").hidden,
      kitHTML: document.getElementById("nl-kit").innerHTML.length,
      kitInputs: [...document.querySelectorAll("#nl-kit input")].map(i => i.type + ":" + (i.offsetWidth > 0)).join(","),
      kitButtons: [...document.querySelectorAll("#nl-kit button")].map(x => (x.textContent.trim() || "?") + ":" + (x.offsetWidth > 0)).join(","),
      kitForms: document.querySelectorAll("form.formkit-form, .formkit-form").length,
      bodyKit: document.querySelectorAll("body > .formkit-form, body > [data-uid], .formkit-modal, .formkit-slide-in").length
    }));
    log.push(`${bname} after ${t}ms: ${JSON.stringify(st)}`);
  }
  await p.screenshot({ path: `scripts/kit-check/${bname}.png` });
  await b.close();
}
writeFileSync("scripts/make-previews.log", log.join("\n") + "\n");
