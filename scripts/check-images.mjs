// Live check before announcing the grant: the site and the Tally form, from outside. Runs on GitHub.
import { writeFileSync } from "node:fs";
const log = [];
const get = async (u) => { try { const r = await fetch(u, { headers: { "user-agent": "Mozilla/5.0" } }); return [r.status, await r.text()]; } catch (e) { return [0, e.message]; } };
const [s1, home] = await get("https://project-gallery.com/");
const [s2, content] = await get("https://project-gallery.com/content.js");
const [s3, grant] = await get("https://project-gallery.com/grant");
const [s4, font] = await get("https://project-gallery.com/fonts/golos-text-latin-400-normal.woff2");
log.push(`homepage ${s1}; grant page ${s3}; content.js ${s2}; font ${s4}`);
log.push(`grant in menu: ${home.includes('href="/grant" data-view="grant"')}; grant window: ${home.includes('id="gwin"')}; tile bar: ${home.includes('id="grant-tiles"')}`);
log.push(`grant settings: ${(content.match(/tallyFormId: "[^"]*"/) || [""])[0]}; ${(content.match(/until: "[^"]*"/) || [""])[0]}; ${(content.match(/due: "[^"]*"/) || [""])[0]}; on: ${/popup: \{\s*on: true/.test(content)}`);
const [t1, tally] = await get("https://tally.so/r/5XbBrv");
const [t2, embed] = await get("https://tally.so/embed/5XbBrv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1");
const closed = /form is closed|no longer accepting|not accepting|closed for submissions/i.test(tally + embed);
const title = (tally.match(/<title>([^<]*)<\/title>/) || [])[1];
const dates = [...new Set((tally.replace(/<[^>]+>/g, " ").match(/(december|dec\.?)\s+\d{1,2}(st|nd|rd|th)?(,?\s*20\d\d)?/gi) || []))];
const fee = /\$\s?5\b|5\.00|payment|stripe/i.test(tally);
log.push(`tally form ${t1}, embed ${t2}; title: ${title}; says closed: ${closed}; dates mentioned: ${dates.join(", ") || "none found"}; payment step present: ${fee}`);
writeFileSync("scripts/check-images.log", log.join("\n") + "\n"); console.log(log.join("\n"));
