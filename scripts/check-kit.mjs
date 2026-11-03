// Checks that the Kit sign-up form loads and that the live site has the email list in all three places.
// Runs on GitHub when this file changes; writes scripts/check-kit.log.
import { writeFileSync } from "node:fs";
const out = [];
const log = s => { console.log(s); out.push(s); };
const uid = "a8b9264c15";
const get = async u => { try { const r = await fetch(u, { redirect: "follow" }); return { status: r.status, text: await r.text() }; } catch (e) { return { status: 0, text: String(e) }; } };

const UA = { "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36", "referer": "https://project-gallery.com/" };
let kit = { status: 0, text: "" };
for (const u of [`https://project-gallery.kit.com/${uid}/index.js`, `https://app.kit.com/forms/${uid}/index.js`, `https://f.convertkit.com/${uid}/index.js`]) {
  try { const r = await fetch(u, { headers: UA, redirect: "follow" }); const t = await r.text();
    log(`${u} -> HTTP ${r.status}, ${t.length} bytes, server: ${r.headers.get("server")}, cf-mitigated: ${r.headers.get("cf-mitigated")}`);
    log(`   starts: ${t.slice(0, 160).replace(/\s+/g, " ")}`);
    if (r.ok && !kit.text) kit = { status: r.status, text: t };
  } catch (e) { log(`${u} -> ${e}`); }
}
const fmt = (kit.text.match(/data-format\\?=\\?"(\w+)"/) || kit.text.match(/"format":"(\w+)"/) || [])[1];
log(`kit form format: ${fmt || "not found"}  (inline is what the site expects)`);
log(`kit form posts to: ${(kit.text.match(/https:\/\/app\.(?:kit|convertkit)\.com\/forms\/\d+\/subscriptions/) || ["not found"])[0]}`);
const opt = (kit.text.match(/double.?opt.?in[^,]{0,40}/i) || [])[0];
if (opt) log(`opt-in hint: ${opt}`);

const page = await get("https://project-gallery.com/?v=" + Date.now());
log(`live index.html: HTTP ${page.status}`);
log(`  contact page link: ${page.text.includes('id="nl-contact"') ? "live" : "not live yet"}`);
log(`  grant page offer:  ${page.text.includes("afterApplying") ? "live" : "not live yet"}`);
log(`  guest book offer:  ${page.text.includes("openNewsletter") ? "live" : "missing"}`);
log(`checked ${new Date().toISOString()}`);
writeFileSync("scripts/check-kit.log", out.join("\n") + "\n");
