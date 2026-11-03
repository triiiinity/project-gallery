// Checks that the Kit sign-up form loads and that the live site has the email list in all three places.
// Runs on GitHub when this file changes; writes scripts/check-kit.log.
import { writeFileSync } from "node:fs";
const out = [];
const log = s => { console.log(s); out.push(s); };
const uid = "a8b9264c15";
const get = async u => { try { const r = await fetch(u, { redirect: "follow" }); return { status: r.status, text: await r.text() }; } catch (e) { return { status: 0, text: String(e) }; } };

const kit = await get(`https://project-gallery.kit.com/${uid}/index.js`);
log(`kit form script: HTTP ${kit.status}, ${kit.text.length} bytes`);
const fmt = (kit.text.match(/data-format\\?=\\?"(\w+)"/) || kit.text.match(/"format":"(\w+)"/) || [])[1];
log(`kit form format: ${fmt || "not found"}  (inline is what the site expects)`);
log(`kit form posts to: ${(kit.text.match(/https:\/\/app\.(?:kit|convertkit)\.com\/forms\/\d+\/subscriptions/) || ["not found"])[0]}`);
const opt = (kit.text.match(/double.?opt.?in[^,]{0,40}/i) || [])[0];
if (opt) log(`opt-in hint: ${opt}`);

const page = await get("https://project-gallery.com/");
log(`live index.html: HTTP ${page.status}`);
log(`  contact page link: ${page.text.includes('id="nl-contact"') ? "live" : "not live yet"}`);
log(`  grant page offer:  ${page.text.includes("afterApplying") ? "live" : "not live yet"}`);
log(`  guest book offer:  ${page.text.includes("openNewsletter") ? "live" : "missing"}`);
log(`checked ${new Date().toISOString()}`);
writeFileSync("scripts/check-kit.log", out.join("\n") + "\n");
