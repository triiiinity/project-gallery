// One-time: finds the Kit form's submit address from its embed script. Runs on GitHub.
import { writeFileSync } from "node:fs";
const out = [];
for (const u of ["https://project-gallery.kit.com/a8b9264c15/index.js", "https://project-gallery.kit.com/a8b9264c15"]) {
  try {
    const t = await fetch(u, { headers: { "user-agent": "Mozilla/5.0" } }).then(r => r.text());
    out.push(`${u}: ${t.length} chars`);
    for (const re of [/https?:\/\/app\.(?:kit|convertkit)\.com\/forms\/\d+\/subscriptions/g, /data-sv-form=\\?"(\d+)/g, /name=\\?"(email_address|email)\\?"/g, /"id":\s*(\d{5,})/g])
      out.push("  " + [...new Set([...t.matchAll(re)].map(m => m[0]))].slice(0, 5).join(" | "));
  } catch (e) { out.push(`${u}: ${e.message}`); }
}
writeFileSync("scripts/kit-form.log", out.join("\n") + "\n"); console.log(out.join("\n"));
