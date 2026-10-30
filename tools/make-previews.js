// Makes the small page pictures shown when hovering the menu.
// Run from the repo folder with a local server on :8765:  node tools/make-previews.js
const { chromium } = require("playwright");
(async () => {
  const views = ["home", "exhibitions", "artists", "grant", "about", "guestbook", "contact", "collection"];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
  for (const v of views) {
    await p.goto(`http://localhost:8765/index.html#${v}`);
    await p.waitForTimeout(v === "home" ? 9500 : v === "grant" ? 3000 : 700);
    await p.screenshot({ path: `images/previews/${v}.jpg`, type: "jpeg", quality: 70, scale: "css" });
  }
  await b.close();
})();
