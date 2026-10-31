/* ======================================================
   PROJECT GALLERY — SITE CONTENT
   Everything people read on the site lives in this file.
   Edit the words between the quote marks, save, and upload.
   Keep the quote marks, commas and brackets as they are.
   ====================================================== */

const SITE = {
  // where the old Squarespace pages live. Change to "https://archive.project-gallery.com"
  // once the old site has moved to that address.
  archive: "https://archive.project-gallery.com",
  email: "trinity@project-gallery.com",
  instagramIcon: "images/instagram.png"   // put the icon file in the images folder with this name
};

// Which home page to use: "cloud" (floating images) or "featured" (current show + one image)
const HOME_STYLE = "cloud";

// THE IMAGE CLOUD (home page)
// The pictures floating in the cloud, one per line.
const CLOUD = [
  "images/mike-nudelman/see-through.jpg",
  "images/mike-nudelman/lonesome-and-empty.jpg",
  "images/mike-nudelman/apparent.jpg",
  "images/mike-nudelman/zipped.jpg",
  "images/mike-nudelman/recess.jpg",
  "images/mike-nudelman/goes-the-other-way.jpg",
  "images/mike-nudelman/make-me-a-moon-23.jpg",
  "images/mike-nudelman/understanding-the-laws-that-the-line-of-their-mysterious-orbits-obeyed-2.jpg",
  "images/mike-nudelman/dusky-dolphin.jpg",
  "images/mike-nudelman/untitled-7.jpg",
  "images/mike-nudelman/anything-but-a-giraffe.jpg",
  "images/mike-nudelman/spit.jpg"
];

// THE CARD that opens when any picture in the cloud is clicked.
const CLOUD_CARD = {
  label: "solo exhibition",
  image: "images/mike-nudelman/zipped.jpg",
  title: "Mike Nudelman: Moving",
  dates: "06.12.2026 ● 07.19.2026",
  description: "Working with familiar materials, Mike Nudelman transforms the recognizable into the unexpected. His intricate ballpoint drawings use sublime landscapes to examine the ways we perceive and construct reality.",
  link: "/mike-nudelman"      // where "enter exhibition" goes
};

// The featured show on the home page (and top of exhibitions).
const CURRENT = {
  title: "Mike Nudelman: Moving",
  dates: "06.12.2026 ● 07.19.2026",
  buttonText: "enter exhibition",
  link: "/mike-nudelman",                   // where the button goes
  image: "images/mike-nudelman/see-through.jpg"  // the picture on the home page
};


// Exhibition pages. Each one opens at its own address, e.g. #mike-nudelman.
const SHOWS = {
  "tdreade": {
    title: "TD Reade: cancel my prayer",
    artist: "TD Reade",
    status: "past show",
    dates: "10.05.2025 ● 11.05.2025",
    lede: "cancel my prayer features 12 original artworks from Melbourne based artist TD Reade.",
    description: "",
    bio: "TD Reade is a self taught artist, in private collections across Europe, USA, South America, and Asia living and working in Melbourne, Australia.",
    statement: "TD Reade’s practice examines the disjunctions that emerge within seemingly ordinary moments, positioning the routine as a site of latent tension. His paintings foreground figures caught within the choreography of social performance, highlighting how engagement is sustained through subtle negotiations of posture, glance, and proximity, gestures that simultaneously express intimacy and reinforce hierarchies. What emerges is not a seamless choreography but a field of tension, where the maintenance of coherence is continually unsettled by the pressures of public visibility, internal sentiment and the shifting evaluation of one’s station.\n\nIn Reade’s work, social interaction is framed less as a transparent exchange than as an ongoing performance that subjects the individual to forms of scrutiny, expectation, and judgment. The familiar setting becomes charged precisely because it reveals the precariousness of belonging: recognition is contingent, and one’s position within the collective can be affirmed or destabilized by the smallest cues. These dynamics foreground the uncertainty of power, showing how authority and deference circulate fluidly through moments that appear otherwise routine.\n\nRather than resolving such tensions, Reade’s compositions sustain them. The works refuse narrative closure, offering instead a space where the visible and the implied coexist. This suspension underscores how interpersonal station is never fixed but must be repeatedly enacted and recalibrated within the collective gaze. Pressures, obligations, and unspoken structures underpin social relations. The tension lies in the balance between genuine connection and the necessity of playing a role. Also sometimes he just does whatever…",
    buttons: [
      { text: "press release", link: "https://archive.project-gallery.com/s/TD-Reade-PRdocx.pdf" },
      { text: "price list",    link: "https://archive.project-gallery.com/s/TDReadeImageListdocx-compressed.pdf" },
      { text: "social media",  link: "https://www.instagram.com/tdreade/" }
    ],
    // details: close-up photos for a work. They appear as small circles when you hover the picture.
    works: [
      { title: "New management", year: "2024", medium: "Acrylic on board", size: "23.6 x 19.7 in (60 x 50 cm)", layout: "left", type: "painting", forSale: false,
        image: "images/td-reade/new-management.jpg", ratio: "2953/3543",
        details: [] },
      { title: "Pirate themed wedding", year: "2024", medium: "Acrylic and epoxy on board", size: "16.5 x 20.1 in (42 x 51 cm)", layout: "center", type: "painting", forSale: false,
        image: "images/td-reade/pirate-themed-wedding.jpg", ratio: "3414/2812",
        details: ["images/td-reade/details/pirate-themed-wedding-1.jpg", "images/td-reade/details/pirate-themed-wedding-2.jpg", "images/td-reade/details/pirate-themed-wedding-3.jpg", "images/td-reade/details/pirate-themed-wedding-4.jpg", "images/td-reade/details/pirate-themed-wedding-5.jpg"] },
      { title: "Authority over creation", year: "2024", medium: "Acrylic on board", size: "23.6 x 19.7 in (60 x 50 cm)", layout: "left", type: "painting", forSale: false,
        image: "images/td-reade/authority-over-creation.jpg", ratio: "2953/3543",
        details: ["images/td-reade/details/authority-over-creation-1.jpg", "images/td-reade/details/authority-over-creation-2.jpg", "images/td-reade/details/authority-over-creation-3.jpg", "images/td-reade/details/authority-over-creation-4.jpg", "images/td-reade/details/authority-over-creation-5.jpg", "images/td-reade/details/authority-over-creation-6.jpg"] },
      { title: "Wounds without cause (work lunch)", year: "2024", medium: "Acrylic on board", size: "19.7 x 23.6 in (50 x 60 cm)", layout: "right", type: "painting", forSale: false,
        image: "images/td-reade/wounds-without-cause-work-lunch.jpg", ratio: "3543/2953",
        details: ["images/td-reade/details/wounds-without-cause-work-lunch-1.jpg", "images/td-reade/details/wounds-without-cause-work-lunch-2.jpg", "images/td-reade/details/wounds-without-cause-work-lunch-3.jpg", "images/td-reade/details/wounds-without-cause-work-lunch-4.jpg"] },
      { title: "Content crisis", year: "2025", medium: "Acrylic on board", size: "23.6 x 19.7 in (60 x 50 cm)", layout: "left", type: "painting", forSale: false,
        image: "images/td-reade/content-crisis.jpg", ratio: "2953/3543",
        details: ["images/td-reade/details/content-crisis-1.jpg", "images/td-reade/details/content-crisis-2.jpg", "images/td-reade/details/content-crisis-3.jpg", "images/td-reade/details/content-crisis-4.jpg"] },
      { title: "Ours is a broken bridge", year: "2024", medium: "Acrylic and graphite on canvas", size: "48 x 48 in (122 x 122 cm)", layout: "center", type: "painting", forSale: false,
        image: "images/td-reade/ours-is-a-broken-bridge.jpg", ratio: "1/1",
        details: [] },
      { title: "The best way to appreciate your job is to imagine yourself without one", year: "2023", medium: "Acrylic on board", size: "19.7 x 19.7 in (50 x 50 cm)", layout: "left", type: "painting", forSale: false,
        image: "images/td-reade/the-best-way-to-appreciate-your-job-is-to-imagine-yourself-without-one.jpg", ratio: "1/1",
        details: ["images/td-reade/details/the-best-way-to-appreciate-your-job-is-to-imagine-yourself-without-one-1.jpg", "images/td-reade/details/the-best-way-to-appreciate-your-job-is-to-imagine-yourself-without-one-2.jpg"] },
      { title: "The typical girl gets the typical boy", year: "2023", medium: "Acrylic on board", size: "23.6 x 19.7 in (60 x 50 cm)", layout: "pair", type: "painting", forSale: false,
        image: "images/td-reade/the-typical-girl-gets-the-typical-boy.jpg", ratio: "2953/3543",
        details: ["images/td-reade/details/the-typical-girl-gets-the-typical-boy-1.jpg"] },
      { title: "Fanfare for the common man", year: "2025", medium: "Acrylic on board", size: "19.7 x 23.6 in (50 x 60 cm)", layout: "pair", type: "painting", forSale: false,
        image: "images/td-reade/fanfare-for-the-common-man.jpg", ratio: "3543/2953",
        details: ["images/td-reade/details/fanfare-for-the-common-man-1.jpg", "images/td-reade/details/fanfare-for-the-common-man-2.jpg", "images/td-reade/details/fanfare-for-the-common-man-3.jpg"] },
      { title: "Heavy misfortunes", year: "2024", medium: "Acrylic and epoxy on board", size: "14.2 x 11 in (36 x 28 cm)", layout: "left", type: "painting", forSale: false,
        image: "images/td-reade/heavy-misfortunes.jpg", ratio: "2866/3685",
        details: ["images/td-reade/details/heavy-misfortunes-1.jpg", "images/td-reade/details/heavy-misfortunes-2.jpg", "images/td-reade/details/heavy-misfortunes-3.jpg"] },
      { title: "Soft suggestion", year: "2024", medium: "Acrylic and epoxy on board", size: "16.1 x 12.2 in (41 x 31 cm)", layout: "right", type: "painting", forSale: false,
        image: "images/td-reade/soft-suggestion.jpg", ratio: "2685/3551",
        details: ["images/td-reade/details/soft-suggestion-1.jpg", "images/td-reade/details/soft-suggestion-2.jpg", "images/td-reade/details/soft-suggestion-3.jpg"] },
      { title: "Material test", year: "2024", medium: "Vinyl, acrylic, and epoxy", size: "12.2 x 10.2 in (31 x 26 cm)", layout: "left", type: "painting", forSale: false,
        image: "images/td-reade/material-test.jpg", ratio: "3071/3661",
        details: [] }
    ]
  },

  "mike-nudelman": {
    title: "Mike Nudelman: Moving",
    artist: "Mike Nudelman",
    status: "past show",          // "current show" or "past show"
    dates: "06.12.2026 ● 07.19.2026",
    lede: "Moving is a solo exhibition featuring 12 works.",
    description: "Working with familiar materials, Mike Nudelman transforms the recognizable into the unexpected. His intricate ballpoint drawings use sublime landscapes to examine the ways we perceive and construct reality.",
    bio: "Mike Nudelman (b. 1985, Smithtown, New York) currently lives and works in Santa Fe, New Mexico. He received a BFA in Printmaking from Cornell University and an MFA in Painting & Drawing from the School of the Art Institute of Chicago. His work has been shown in solo exhibitions at Fortnight Institute (New York, NY), 5. Gallery (Santa Fe, NM), and Thomas Robertello Gallery (Chicago, IL), and in group exhibitions at Geoffrey Young Gallery (Great Barrington, MA), SPRING/BREAK Art Show (New York, NY), Good Naked Gallery (New York, NY), Hyde Park Art Center (Chicago, IL), Devening Projects + Editions (Chicago, IL), The Valley (Taos, NM), and Smoke the Moon (Santa Fe, NM), among others. He recently editioned two lithographs with the Tamarind Institute (Albuquerque, NM).",
    statement: "Working with familiar materials, Nudelman transforms the recognizable into the unexpected. Like the luminous pixels of a digital screen, his intricate ballpoint strokes simultaneously mask and reveal what enigmatic sights lie beyond the paper's surface. For more than a decade, Nudelman’s work has explored the interplay of illusion, time, scale, and mediation, using sublime landscapes as a lens through which to examine the ways we perceive and construct reality. Ultimately, his drawings resist immediate comprehension and invite closer inspection.",
    buttons: [
      { text: "press release", link: "https://archive.project-gallery.com/s/Mike-Nudelman-PR.pdf" },
      { text: "price list",    link: "https://archive.project-gallery.com/s/Mike-Nudelman-Image-List.pdf" },
      { text: "social media",  link: "https://www.instagram.com/mikenudelman/" }
    ],
    // One block per artwork, in the order they appear on the page.
    //   year:   replace "year" with the real year
    //   layout: where the work sits on the page
    //     "left"   picture in the left half, caption bottom-right
    //     "right"  picture in the right half, caption bottom-left
    //     "center" picture in the middle, caption underneath
    //     "pair"   this work and the next one side by side (give both "pair")
    //   type:   "drawing", "painting", "print", "sculpture" (used for tags in my collection)
    //   forSale: false or false
    //   image:  the picture file inside the images folder
    works: [
      { title: "See Through", year: "", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "center", type: "drawing", forSale: false,
        image: "images/mike-nudelman/see-through.jpg", ratio: "1200/927" },
      { title: "Lonesome and Empty", year: "", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "right", type: "drawing", forSale: false,
        image: "images/mike-nudelman/lonesome-and-empty.jpg", ratio: "1200/927" },
      { title: "Apparent", year: "", medium: "Ballpoint pen on paper", size: "5.5 x 4.5 in (13.8 × 11.4 cm)", layout: "left", type: "drawing", forSale: false,
        image: "images/mike-nudelman/apparent.jpg", ratio: "1200/982" },
      { title: "Zipped", year: "", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "center", type: "drawing", forSale: false,
        image: "images/mike-nudelman/zipped.jpg", ratio: "1200/927" },
      { title: "Recess", year: "", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "images/mike-nudelman/recess.jpg", ratio: "1200/927" },
      { title: "Goes the Other Way", year: "", medium: "Ballpoint pen on paper", size: "7 x 5 in (17.8 × 12.7 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "images/mike-nudelman/goes-the-other-way.jpg", ratio: "1200/857" },
      { title: "Make Me a Moon 23", year: "", medium: "Ballpoint pen on paper", size: "3 x 2 in (7.6 × 5 cm)", layout: "right", type: "drawing", forSale: false,
        image: "images/mike-nudelman/make-me-a-moon-23.jpg", ratio: "1200/800" },
      { title: "Understanding the Laws that the Line of their Mysterious Orbits Obeyed 2", year: "", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "center", type: "drawing", forSale: false,
        image: "images/mike-nudelman/understanding-the-laws-that-the-line-of-their-mysterious-orbits-obeyed-2.jpg", ratio: "1200/927" },
      { title: "Dusky Dolphin", year: "", medium: "Ballpoint pen on paper", size: "5 x 4.25 in (12.7 × 10.8 cm)", layout: "left", type: "drawing", forSale: false,
        image: "images/mike-nudelman/dusky-dolphin.jpg", ratio: "1200/1020" },
      { title: "Untitled 7", year: "", medium: "Ballpoint pen on paper", size: "5.5 x 4 in (13.9 × 10.2 cm)", layout: "right", type: "drawing", forSale: false,
        image: "images/mike-nudelman/untitled-7.jpg", ratio: "1200/871" },
      { title: "Anything But a Giraffe", year: "", medium: "Ballpoint pen on paper", size: "4.1 x 3.9 in (10.5 × 9.9 cm)", layout: "center", type: "drawing", forSale: false,
        image: "images/mike-nudelman/anything-but-a-giraffe.jpg", ratio: "1200/1124" },
      { title: "Spit", year: "", medium: "Ballpoint pen on paper", size: "5.5 x 5.5 in (13.9 × 13.9 cm)", layout: "left", type: "drawing", forSale: false,
        image: "images/mike-nudelman/spit.jpg", ratio: "1200/1200" }
    ]
  },

  "ryker-woodward": {
    size: "large",          // works shown bigger on the page
    title: "Ryker Woodward: Nostalgic Signifiers From Digital Realms",
    artist: "Ryker Woodward",
    status: "past show",
    dates: "08.01.2024 ● 09.15.2024",
    lede: "Featuring 20 works from Monterey, CA based artist Ryker Woodward.",
    description: "",
    bio: "Ryker Woodward (born in 1998, in San Diego, California) currently lives and works in Monterey, California. Ryker moved to Portland, Oregon in 2017, to attain an BFA in Painting and drawing from the Pacific Northwest College of Art where he graduated from in 2022.",
    statement: "Ryker Woodward’s work is a resonant mnemonic, evoking the pervasive influence of video-gaming within the collective psyche of its participants. Transmuting often glanced-over gaming artifacts into fine art canvases, he beckons viewers to reassess and deepen their own experiences with these seemingly banal images. A split screen, a user interface, a minimap, an inventory —artifacts. And then, pushing further, appraising these symbols as if, in their moments, they belong to a separate Art History: the esteemed weaponry, the opening vista, the deciding moments of a tournament, the LAN party, equipment, exploration, victories, losses. As in history, these moments are known, at a glance, to those who partook in or study them; Woodward’s artwork speaks directly to that global cohort.\n\nIn this exploration of the cultural echoes of gaming histories, Woodward excavates these nostalgic vignettes for emotive paintings. His work imbues sincerity and affective resonance, affording viewers an evocative realm where memory and narrative converge. There, the line blurs between observer and participant, where the act of creation becomes an act of remembrance and cultural critique. His paintings, first, limn moments frozen in digital time, but also serve as conduits for introspection and collective reevaluation. As he continues deeper into the themes of digital escapism and communal gaming experiences, Ryker Woodward remains steadfast in his pursuit of authenticity and emotional depth, ensuring that his artworks resonate as vibrant testimonies to the profound impact of gaming on contemporary consciousness.",
    buttons: [
      { text: "press release", link: "https://archive.project-gallery.com/s/Ryker-Woodward-PRdocx.pdf" },
      { text: "price list", link: "https://archive.project-gallery.com/s/Ryker-Woodward-Image-Listdocx.pdf" },
      { text: "prints available", link: "https://www.inprnt.com/gallery/artist_ryker/" },
      { text: "social media", link: "https://www.instagram.com/artist_ryker/" }
    ],
    // pictures still come from the old Squarespace site; swap in files under images/ before Squarespace is cancelled
    works: [
      { title: "Split Screen Capture The Flag", year: "2024", medium: "Oil on canvas", size: "four 9 x 12 in canvases (22.86 x 30.48 cm), 18 x 24 in (45.72 x 60.96 cm) total", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/8ef24228-bc1b-49f0-be73-4aaa8f36cb4a/halo_2_ctf_splitscreen_v1.jpg", ratio: "2500/1849" },
      { title: "Halo 3 Game Lobby", year: "2024", medium: "Gouache on panel", size: "5 x 7 in (12.7 x 17.78 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/38f60b2e-3582-47c3-8217-657c4d9764b1/halo_3_custom_game_lobby_gouache_2024.jpg", ratio: "2500/1796" },
      { title: "Warthog Jump", year: "2024", medium: "Gouache on panel", size: "5 x 7 in (12.7 x 17.78 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/98285438-5200-4c4f-8962-dfc7f33a1a81/haloce_warthog_jump_gouache_2024.jpg", ratio: "2500/1776" },
      { title: "Noob Tube Loadout", year: "2024", medium: "Oil on board", size: "5 x 7 in (12.7 x 17.78 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/b7f65211-6c18-47b1-9360-1994a78cddc7/cod_mw2_noob_tube_loadout_oil_2024_formated.jpg", ratio: "1823/2500" },
      { title: "Door stuck", year: "2024", medium: "Gouache on panel", size: "5 x 7 in (12.7 x 17.78 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/cd8ef6b0-8489-499a-954c-14cdfc705c7d/cs_door_stuck_gouache_2023.jpg", ratio: "2392/1749" },
      { title: "gm_flatgrass", year: "2024", medium: "Oil on panel", size: "5 x 7 in (12.7 x 17.78 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/a5feed8f-4b36-4ab7-a2d4-f2eb6ab3f456/gm_flatgrass_oil_2024.jpg", ratio: "2402/1752" },
      { title: "Blood Gulch", year: "2022", medium: "Oil on canvas", size: "22 x 28 in (55.88 x 71.12 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/a5fb9b07-3d3d-4cd8-b9d9-83b447eb92f5/haloce_blood_gulch_2022_oil.jpg", ratio: "1123/872" },
      { title: "Radar", year: "2024", medium: "Oil on wood panel", size: "8 x 10 in (20.32 x 25.4 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/74d108ff-b6de-47a9-a2cf-8a15ec4d0156/halo_2_radar_ops_oil_2024.jpg", ratio: "1953/2416" },
      { title: "Button Combos", year: "2024", medium: "Gouache on cotton", size: "4 x 7 in (10.16 x 17.78 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/bedb977c-fd3f-4463-8442-fe5c6daa777c/button_combos_gouache_2024.jpg", ratio: "2500/1427" },
      { title: "Shadow The Hedgehog", year: "2023", medium: "Oil on wood panel", size: "8 x 10 in (20.32 x 25.4 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/7e419f3c-051e-4e14-b483-c3125fa15a29/shadow_blops_oil_2024.jpg", ratio: "1886/2355" },
      { title: "Cyberdemon", year: "2023", medium: "Gouache on cotton", size: "7 x 9 in (17.78 x 22.86 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/27a155f5-c880-414e-9fc6-ffd454c35e71/doom_cyber_demon_2023.jpg", ratio: "2392/1900" },
      { title: "Five Nights at Freddy's - Part 1", year: "2024", medium: "Gouache on cotton", size: "4 x 6 in (10.16 x 15.24 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/758a143a-166f-4835-9186-6dce347d7a35/fnaf_markiplier_gouache.jpg", ratio: "2382/1611" },
      { title: "Get into cover", year: "2024", medium: "Oil on panel", size: "5 x 7 in (12.7 x 17.78 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/0328d4f4-21e2-4de2-94c2-b55db0bec89b/gow_cover_oil_2024.jpg", ratio: "2500/1792" },
      { title: "The Valley of Fire (Green Archer and Wizard)", year: "2024", medium: "Gouache on cotton", size: "4 x 6 in (10.16 x 15.24 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1b3bae25-6495-475f-877c-e25dbffaa699/gauntlet_legends_green_archer_wizard_gouache_2024.jpg", ratio: "2382/1621" },
      { title: "Mango vs Hax$ - The Big House 4", year: "2024", medium: "Gouache on panel", size: "5 x 7 in (12.7 x 17.78 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/8adc7f9f-ee2b-4de1-ab53-c37350332d2f/melee_did_he_just_downsmash__2024.jpg", ratio: "2432/1789" },
      { title: "School", year: "2024", medium: "Oil on wood panel", size: "8 x 10 in (20.32 x 25.4 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1737694c-64fb-47e4-a0f2-238605aa24df/thps_school_oil_2024.jpg", ratio: "2500/1983" },
      { title: "Your First View of The Outside World", year: "2024", medium: "Oil on canvas", size: "18 x 24 in (45.72 x 60.96 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/75aa4a3d-9256-40c6-b918-ab378fce8652/tes_iv_oblivion_imperial_sewer_midday_oil_2024.jpg", ratio: "2500/1792" },
      { title: "Elite Portrait", year: "2024", medium: "Gouache on paper", size: "4.5 x 4 in (11.43 x 10.16 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/2c410c55-152c-4c0d-80d3-818d2fcd44a1/halo_ce_elite_gouache_2024_ed.jpg", ratio: "2077/1940" },
      { title: "Emulation windows - Vimm’s Lair / Dolphin", year: "2024", medium: "Oil on wood panel", size: "8 x 10 in (20.32 x 25.4 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/e8a25ddc-c0d1-41aa-9f92-a75398a853e4/vimms_lair_dolphin_oil_2024.jpg", ratio: "2500/1973" },
      { title: "Spice Orange Gamecube Controller", year: "2022", medium: "Oil and cord on wood panel", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/369a2186-f53c-4ef4-ae79-840e09ff2570/woodward_orange_gcn_oil_8%E2%80%9Dx8%E2%80%9D.JPG", ratio: "2048/1872" }
    ]
  },

  "gitte-maria-moller": {
    title: "Gitte Maria Möller: Running away forever",
    artist: "Gitte Maria Möller",
    status: "past show",
    dates: "05.23.2024 ● 06.30.2024",
    lede: "Running away forever is a solo exhibition featuring 19 works by artist Gitte Maria Möller.",
    description: "",
    bio: "Gitte Maria Möller (b. 1991, Cape Town, South Africa) is a painter, multi-disciplinary artist and pre-school teacher. She received her BAFA from the Michaelis School of Fine Art in 2015 and has exhibited internationally across the USA, UK, Europe and South Africa. She lives and works in New York City.",
    statement: "“These paintings and drawings were made over the last 5 years moving between Cape Town and New York City. I spend a lot of time alone so I inevitably end up thinking about attachments when I make my work; to objects, people and places. My internal monologue can be very tyrannical, and I need to consciously pour a lot of softness, flexibility and patience into my work and life. My art teaches me how to do this by creating peaceful moments in my day and helping me enjoy my solitude. My paintings and drawings are my children and my friends.”\n\n— Gitte Maria Möller",
    buttons: [
      { text: "press release", link: "https://archive.project-gallery.com/s/Gitte-Maria-PRdocx.pdf" },
      { text: "price list", link: "https://archive.project-gallery.com/s/Gitte-Image-List24.pdf" }
    ],
    // pictures still come from the old Squarespace site; swap in files under images/ before Squarespace is cancelled
    works: [
      { title: "To the moon", year: "2022", medium: "4 colour Riso print on Acid Free 250 gsm paper", size: "11.8 x 11.8 in (30 x 30 cm)", layout: "left", type: "print", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/4bdca162-ae48-44d1-9d8e-b2e700495047/To+the+moon+res.jpg", ratio: "2400/2268" },
      { title: "14 - 02 – 2021", year: "2021", medium: "Pencil crayon on paper", size: "11.8 x 15.4 in (30 x 39 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d96114e0-9819-4954-a85a-1fe543835964/14+-+02+-+2021+res.jpg", ratio: "2100/2755" },
      { title: "Dust bunny", year: "2021", medium: "6 colour Riso print on Acid Free 250 gsm paper", size: "10.6 x 10.6 in (27 x 27 cm)", layout: "left", type: "print", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/b711a0f3-ed89-4598-9802-b805e7be36eb/Dust+bunny+res.jpg", ratio: "2400/2436" },
      { title: "Clubhouse (you don’t love me)", year: "2024", medium: "Oil on canvas", size: "14.1 x 17.7 in (36 x 45 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/ad5ed0ab-c75e-4724-9bc6-d18b081bee08/Clubhouse+%28you+don%E2%80%99t+love+me%29.jpg", ratio: "3929/4910" },
      { title: "Ghost girls", year: "2020", medium: "Pencil crayon on paper", size: "5.9 x 5.9 in (15 x 15 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/134be6a8-bd36-4270-a4b4-698f553670b3/Ghost+girls+res.jpg", ratio: "1576/1969" },
      { title: "Lost glove, Coney Island", year: "2020", medium: "Pencil crayon on paper", size: "5.5 x 7 in (14 x 18 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/028c1870-e121-4442-b7f5-7d0c78eecc82/Lost+Glove+Coney+Island+res.jpg", ratio: "1763/2203" },
      { title: "Vision of Forgiveness", year: "2020", medium: "Pencil crayon on paper", size: "7.1 x 11.8 in (18 x 30 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/42e9ea39-59f0-4218-90a5-95490c29e399/Vision+of+forgiveness+res.jpg", ratio: "2070/3313" },
      { title: "Snow Day", year: "2024", medium: "Colored pencil and silver printed snowflakes with a luminescent star center on a digital print, edition of 33", size: "7 x 7 in (17.78 x 17.78 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/e79d26b3-82a8-4b77-b8c2-d3f4938df03a/snowdayprintfinalcrop.jpg", ratio: "2198/2239" },
      { title: "Chamber 0013", year: "2023", medium: "Oil on panel", size: "48 x 27.5 in (122 x 70 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/5e315ad7-6fce-489f-95df-5dba4ded19f5/Chamber+0013.jpg", ratio: "4500/5625" },
      { title: "Misty’s Tears", year: "2023", medium: "Oil on panel", size: "54 x 32.25 in (137 x 82 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d1559b26-654c-42c8-95cb-ae4b3b64035e/Misty_s+Tears.jpg", ratio: "1912/2875" },
      { title: "Running away forever", year: "2024", medium: "Oil on panel", size: "17.7 x 14.1 in (45 x 36 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/3a5431b4-ad93-4fca-b00e-360e48b55750/Running+away+forever.jpg", ratio: "1975/3125" },
      { title: "Fall Portrait", year: "2023", medium: "Oil on panel", size: "24 x 16.9 in (61 x 43 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/38af251a-4964-4658-acf0-db2fa503174b/Fall+Portrait.jpg", ratio: "3060/4000" },
      { title: "Community Garden (Chinatown)", year: "2023", medium: "Oil on panel", size: "48 x 30 in (121.9 x 76.2 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/8e9c93e4-0017-45db-8a23-9973a09de5ce/Community+Garden+%28Chinatown%29.jpg", ratio: "3200/4000" },
      { title: "Pushy Passion", year: "2023", medium: "Oil on panel", size: "47.25 x 47.25 in (120 x 120 cm)", layout: "pair", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/c1970491-f5ed-44ff-aa71-cc4badb40184/Pushy+Passion.jpg", ratio: "4000/5000" },
      { title: "Lady Liberty", year: "2023", medium: "Pencil crayon on paper", size: "7.9 x 11.8 in (20 x 30 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/a27bff39-167e-4057-b078-0c98d44123b6/Lady+Liberty.jpg", ratio: "3969/4563" },
      { title: "Feetjie Prinses", year: "2020", medium: "Pencil crayon on paper", size: "4.7 x 8.7 in (12 x 22 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/865941bf-3fbb-44b6-8bb8-a4a013fa9543/Feetjie+Prinses+res.jpg", ratio: "2100/3217" },
      { title: "New York City Fairy Garden", year: "2020", medium: "Pencil crayon on paper", size: "3.9 x 7 in (10 x 18 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/b631a435-31e6-413f-a553-5a0858aa9d4f/New+York+City+Fairy+Garden+res.jpg", ratio: "1931/2744" },
      { title: "Apology", year: "2022", medium: "Pencil crayon on paper", size: "15.7 x 18.9 in (40 x 48 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/6f207d0f-f6ee-4c5f-bb47-5a14b384c990/Apology+res.jpg", ratio: "2340/2925" },
      { title: "The End", year: "2020", medium: "Pencil crayon on paper", size: "16.5 x 22.8 in (42 x 58 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/21af2d54-82e4-4682-ace2-9789075df629/The+End+res.jpg", ratio: "2340/2922" }
    ]
  },

  "lumierebelge": {
    title: "lumierebelge, lineage mayhem.",
    artist: "lumierebelge",
    status: "past show",
    dates: "04.17.2024 ● 05.22.2024",
    lede: "This exhibition features 18 notebook drawings from artist lumierebelge.",
    description: "",
    bio: "lumierebelge is a 21-year-old independent artist from Argentina.",
    statement: "“My name is lumierebelge. I'm a 21-year-old independent artist from Argentina. This is a selection of notebook drawings made in the years 2023 and 2024. The materials used are pen, pencils, and notebook paper.”\n\n— lumierebelge",
    buttons: [
      { text: "press release", link: "https://archive.project-gallery.com/s/Lumierebelge-PRdocx.pdf" },
      { text: "artist's website", link: "https://www.inprnt.com/gallery/lumierebelge/" }
    ],
    // pictures still come from the old Squarespace site; swap in files under images/ before Squarespace is cancelled
    works: [
      { title: "untitled 1 (theyallmatter)", year: "2024", medium: "Colored pencil on paper", size: "4.7 x 5.9 in (12 x 15 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1ff12319-5b09-4d60-9a27-0fa3ee5934ca/theyallmatter.jpg", ratio: "3444/4365" },
      { title: "untitled 2 (elcaicer)", year: "2023", medium: "Colored pencil on paper", size: "4.7 x 5.9 in (12 x 15 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/3b6d6bd3-6b9c-44a7-b3fa-e779c62b22e9/elcaicer.png", ratio: "2604/3454" },
      { title: "untitled 3", year: "2024", medium: "Colored pencil on paper", size: "3.9 x 5.9 in (10 x 15 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/f2ed7b81-b1db-43ea-887b-a1b71ab2ae0f/000000000.png", ratio: "2572/3180" },
      { title: "untitled 4 (tigreblanco [finalizado])", year: "2024", medium: "Colored pencil on paper", size: "3.9 x 5.9 in (10 x 15 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/2f5c2da2-3ef7-450d-9499-8a37f384d6b7/tigreblanco%28finalizado%29.png", ratio: "3016/3781" },
      { title: "untitled 5 (whichoneismirai)", year: "2024", medium: "Pencil on paper", size: "3.9 x 5.9 in (10 x 15 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/7d53aea6-2c8a-4b6e-886d-0d583a65f218/Screen+Shot+2024-04-16+at+1.06.21+PM.png", ratio: "1456/1782" },
      { title: "untitled 6 (acoldcell)", year: "2024", medium: "Colored pencil on paper", size: "3.9 x 5.9 in (10 x 15 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/0ce245d0-f36a-4f35-8ba1-f94b58b0e6c6/Screen+Shot+2024-04-16+at+1.07.32+PM.png", ratio: "1382/1722" },
      { title: "untitled 7 (fireemblem0000)", year: "2024", medium: "Colored pencil on paper and digital painting", size: "3.9 x 7.9 in (10 x 20 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/37b78a59-28d9-4551-80ba-d36fb74c82b7/fireemblem0000.jpg", ratio: "3840/3041" },
      { title: "untitled 8 (MONASTERY0)", year: "2024", medium: "Pencil on paper (original black and white)", size: "3.9 x 5.9 in (10 x 15 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1c9c8c53-d936-4ca2-bae4-27b0742f8e50/Screen+Shot+2024-04-16+at+1.19.35+PM.png", ratio: "1358/1674" },
      { title: "untitled 9 (61211234)", year: "2024", medium: "Colored pencil on paper", size: "7.9 x 11.8 in (20 x 30 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/5e190004-aea9-426e-bf0a-dd547a5a0752/Screen+Shot+2024-04-16+at+1.17.48+PM.png", ratio: "1354/1670" },
      { title: "untitled 10 (dosmujeres)", year: "2024", medium: "Colored pencil on paper and digital painting", size: "3.9 x 4.7 in (10 x 12 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/527ab5c6-8229-4bff-9f48-94d54f80986e/dosmujeres+-+copia.jpg", ratio: "3514/4674" },
      { title: "untitled 11 (puede)", year: "2024", medium: "Colored pencil on paper", size: "4.7 x 5.9 in (12 x 15 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/dd9e2536-a553-4b70-aae7-ec76cfdfb095/puede.jpg", ratio: "2932/3714" },
      { title: "untitled 12 (4)", year: "2024", medium: "Colored pencil on paper", size: "3.9 x 5.9 in (10 x 15 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/bf48674a-79a1-459a-805f-dc48acef9cec/4+%282%29.jpg", ratio: "2047/2824" },
      { title: "untitled 13 (1)", year: "2024", medium: "Colored pencil on paper", size: "4.7 x 5.9 in (12 x 15 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/acc6dd2b-66cf-429d-81a5-95074d290640/1+%281%29.jpg", ratio: "3004/3869" },
      { title: "untitled 14 (2)", year: "2024", medium: "Colored pencil on paper", size: "4.7 x 5.9 in (12 x 15 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/575b0053-c42f-4887-a0ab-2b3c54de5699/2+%281%29.jpg", ratio: "3502/4423" },
      { title: "untitled 15 (3)", year: "2024", medium: "Colored pencil on paper", size: "3.9 x 4.7 in (10 x 12 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/53844cea-b832-431c-b6e9-d2934d4010cf/3+%281%29.jpg", ratio: "3324/4163" },
      { title: "untitled 16 (incase [4])", year: "2024", medium: "Graphite on paper", size: "5.9 x 7.9 in (15 x 20 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/4332816f-5fae-4d0a-b522-0c144f45cb63/incase+%284%29.jpg", ratio: "3467/4295" },
      { title: "untitled 17 (interlay [final])", year: "2024", medium: "Pencil on paper", size: "3.9 x 4.7 in (10 x 12 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/cb7f211b-c587-40ef-b6dc-4e09a474188f/interlay%28final%29.png", ratio: "3066/4104" },
      { title: "untitled 18 (pajarosvolando)", year: "2024", medium: "Pencil on paper", size: "3.9 x 4.7 in (10 x 12 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/6eec046f-bf5e-498b-95cd-56b94fb6c5bb/Screen+Shot+2024-04-16+at+1.15.03+PM.png", ratio: "1374/1714" }
    ]
  },

  "tao-lin": {
    size: "large",          // works shown bigger on the page
    title: "Mandalas: Tao Lin",
    artist: "Tao Lin",
    status: "past show",
    dates: "03.16.2024 ● 04.16.2024",
    lede: "A solo exhibition featuring 20 works made by artist and author Tao Lin over the course of ten years.",
    description: "",
    bio: "Tao Lin (b. 1983) is the author of ten books, including the novels Leave Society (2021) and Taipei (2013), and the nonfiction book Trip: Psychedelics, Alienation, and Change (2018). His writing has been published by New York Times, New York Times Book Review, Granta, Paris Review Daily, and Vice, among other newspapers and magazines. He is the founder and editor of Muumuu House, a small press and online magazine. He's working on a nonfiction book titled Self Heal. He lives in Hawaii.",
    statement: "“These are some of the mandalas that I drew over the past ten years, from 2014 to 2024. My only rule for my mandala form is to not have any rules. By using 8\" x 8\" paper, I'm able to turn the paper to draw from different perspectives (instead of having to put the paper on the floor and walk around it, like Jackson Pollock), and I'm also able, using this small paper size, to draw anywhere—sitting in front of a desk, standing in front of a tall desk, lying stomachdown on various floors.”\n\n— Tao Lin",
    buttons: [
      { text: "press release", link: "https://archive.project-gallery.com/s/Mandalas_-Tao-Lin-PR-1.pdf" },
      { text: "price list", link: "https://archive.project-gallery.com/s/Mandalas-Image-List-compressed.pdf" },
      { text: "artist's website", link: "http://taolin.us/" }
    ],
    // pictures still come from the old Squarespace site; swap in files under images/ before Squarespace is cancelled
    works: [
      { title: "star mandala", year: "2021", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fd0b8d82-3b4e-4c59-af4d-dfdb119e9b74/starmandala2k.jpg", ratio: "2048/2048" },
      { title: "loop mandala", year: "2021", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/9401395e-4cf7-4ebc-9d78-d0b04739cbbc/loopmandala1k.jpg", ratio: "2043/2043" },
      { title: "time mandala", year: "2023", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/68013cee-340e-4146-910e-75f05c04f50e/timemandala.jpg", ratio: "2048/2048" },
      { title: "mandala 16", year: "2015", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/9631c084-549b-474a-b8ca-fddfaae21a88/mandala16.jpg", ratio: "2048/2048" },
      { title: "dudu mandala", year: "2014", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/b7b82279-ae9a-4fc1-87a2-1f08addbdf55/dudumandala.jpg", ratio: "2377/2377" },
      { title: "mandala 25", year: "2015", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/24f833ed-a2b8-4917-9aba-aab7b81730df/mandala25.jpg", ratio: "2393/2373" },
      { title: "mandala 59", year: "2023", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d6853389-f4db-42c1-bd39-dc34e9c2a074/mandala59k.jpg", ratio: "2047/2048" },
      { title: "100,000 dots", year: "2018", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/e71cb6b3-46a5-413e-9cfe-ec81262dafac/100000dots.jpg", ratio: "2381/2378" },
      { title: "numbers mandala", year: "2015", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/c5c8e451-c186-4d8f-be85-39c8caf4d0e3/numbersmandala.jpg", ratio: "2370/2387" },
      { title: "blue mandala", year: "2023", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/f68e0d8a-3bc9-4a4e-899d-8ca82de06dc6/bluemandala.jpg", ratio: "3143/3143" },
      { title: "mandala 66", year: "2024", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/b1c4c6b1-c457-4daa-920d-3eb2c2603879/mandala66.jpg", ratio: "6042/6144" },
      { title: "mandala 12", year: "2014", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/90bbddd4-2e68-4dbf-8887-011c5260c169/mandala12.jpg", ratio: "2395/2374" },
      { title: "mandala 10", year: "2014", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/a9adb333-c80e-4a65-99d8-15b94fbd1b91/mandala10.jpg", ratio: "2405/2379" },
      { title: "mandala 8", year: "2014", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/f1524b12-a04c-4d75-8606-104d4c22ec41/mandala8.jpg", ratio: "2380/2380" },
      { title: "disc mandala", year: "2015", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/3cfcfe36-11d1-4fb1-a14e-a8c8b2de93f8/discmandala.jpg", ratio: "2370/2334" },
      { title: "mandala 9", year: "2014", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/11ef4ca2-357c-4af6-a13f-55948cd4f124/mandala9.jpg", ratio: "1024/1033" },
      { title: "torsion mandala", year: "2021", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/3ff4c228-2b09-4bff-8390-32b7f25de379/torsionmandala.jpg", ratio: "2388/2389" },
      { title: "circle mandala", year: "2020", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/e1be5a5e-ba51-4016-979e-7bad41ce37d7/circlemandala.jpg", ratio: "1280/1280" },
      { title: "water mandala", year: "2020", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/180b7b9d-d345-4e3e-aed6-0ae69db96ae4/watermandala6k.jpg", ratio: "6144/6144" },
      { title: "ring mandala", year: "2020", medium: "Pen and colored pencil on watercolor paper", size: "8 x 8 in (20.32 x 20.32 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/bd8f798b-4737-43dd-a070-ca7544b67053/ringmandala.jpg", ratio: "9543/9571" }
    ]
  },

  "person-place-thing": {
    title: "Person, Place, or Thing",
    artist: "various artists",
    status: "past show",
    dates: "02.01.2024 ● 03.15.2024",
    lede: "Featuring the work of Jennifer Amadeo-Holl, Wai Yi Chung, Megan Du, Dimitra Gkoutzou, Jiacun Li, Keshawna Logan, Andrew James McKay, James Niwat Moore, Sheila Rennick, Christine Schmitt, Olivia Springberg, Reilly Stasienko, Norah Stone, Parker Lily Tuson-Morse, Melissa Wallen, minzhi zheng, and DW Zinsser. Juried by Cynthia Cruz of Top Painters To Paintings (@topainterstopaintings).",
    description: "",
    bioLabel: "the artists",
    bio: "Jennifer Amadeo-Holl (Boston, MA), Wai Yi Chung (London, UK), Megan Du (London/Southampton, UK), Dimitra Gkoutzou (Athens, Greece), Jiacun Li (London, UK), Keshawna Logan (Philadelphia, PA), Andrew James McKay (Vancouver, BC/Canada), James Niwat Moore (Centereach, NY), Sheila Rennick (London, UK), Christine Schmitt (Queens, NY), Olivia Springberg (Washington, DC), Reilly Stasienko (Miamisburg, OH), Norah Stone (Brooklyn, NY), Parker Lily Tuson-Morse (New York, NY), Melissa Wallen (Miami, FL), minzhi zheng (Chicago, IL) and DW Zinsser (Brooklyn, NY).\n\nminzhi zheng's work in the show, Ground (2023), is a 4k digital video, 5:42 minutes.",
    statementLabel: "juror's statement",
    statement: "“Going beyond predetermined themes, Person, Place, or Thing encourages viewers to embark on a fundamental exploration of artistic creation. Drawing inspiration from the iconic game show, the exhibition breaks down the world into its essential components: the individual, the environment, and the object. Liberated from thematic constraints, audiences establish connections and construct their understanding within the framework of these elemental categories. Person, Place, or Thing celebrates the inherent diversity of artistic expression, prompting viewers to actively participate in the meaning-making process. Ultimately, it emphasizes that the true magic lies not in a definitive answer but in the boundless possibilities of artistic exploration.”\n\n— Cynthia Cruz",
    buttons: [
      { text: "press release", link: "https://archive.project-gallery.com/s/Person-Place-or-Thing-PRdocx-1.pdf" },
      { text: "price list", link: "https://archive.project-gallery.com/s/Person-Place-or-Thing-Image-List.pdf" },
      { text: "juror's instagram", link: "https://www.instagram.com/topainterstopaintings/" }
    ],
    // pictures still come from the old Squarespace site; swap in files under images/ before Squarespace is cancelled
    works: [
      { artist: "Dimitra Gkoutzou", place: "Athens, Greece", title: "An Amorous Flight", year: "2021", medium: "Oil on canvas", size: "23.6 x 35.4 in (60 x 90 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d1f0990a-c48c-46d4-80ab-1b2180585d45/dscf14663_copy+%281%29.jpg", ratio: "2771/3947" },
      { artist: "Norah Stone", place: "Brooklyn, NY", title: "Cavity", year: "2023", medium: "Stoneware, glaze, epoxy, earring, wing", size: "19 x 12 x 2 in (48.3 x 30.5 x 5 cm)", layout: "right", type: "sculpture", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/ea64ff1f-a263-4384-975a-0aa6b980b730/norahstone_cavity.jpg", ratio: "800/1200" },
      { artist: "Melissa Wallen", place: "Miami, FL", title: "getting in your own way", year: "2023", medium: "Oil on linen", size: "32 x 40 in (81.3 x 101.6 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/2942f538-0d14-4965-b823-5694ae63d120/img_8080.jpg", ratio: "687/552" },
      { artist: "Wai Yi Chung", place: "London, UK", title: "Error12-Not Enough Memory", year: "2023", medium: "Acrylic on canvas", size: "19.7 x 23.6 in (50 x 60 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/517d6940-71d9-4500-9ef6-a3cb19581bd5/img_0677.jpeg.jpg", ratio: "3270/3921" },
      { artist: "Sheila Rennick", place: "London, UK", title: "Love Island Rejects", year: "2023", medium: "Oil on canvas", size: "47.2 x 35.4 in (120 x 90 cm)", layout: "pair", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/e095a2bb-ee99-48fa-9531-fb9a35354597/love_island_rejects+%281%29.jpg", ratio: "2205/2971" },
      { artist: "Sheila Rennick", place: "London, UK", title: "Long Hot London", year: "2023", medium: "Oil on canvas", size: "39.4 x 29.5 in (100 x 75 cm)", layout: "pair", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/73a2e681-d87d-4ce2-95e3-ab6295345ccb/long_hot_london+%281%29.jpg", ratio: "2236/3020" },
      { artist: "James Niwat Moore", place: "Centereach, NY", title: "Hermit Of The Pond", year: "2023", medium: "Oil paint", size: "30 x 40 in (76.2 x 101.6 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/3c3ec5e1-cb50-4cec-9689-5cba9c946597/hermit_of_the_pond_moore_james.jpg", ratio: "2607/3083" },
      { artist: "Andrew James McKay", place: "Vancouver, BC/Canada", title: "Neil at Sunset", year: "2022", medium: "Acrylic, ink and graphite on panel", size: "24 x 20 in (61 x 50.8 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/c2cd9128-7987-4391-9cd2-e96f04c54471/mckay_neilatsunset.jpeg.jpg", ratio: "1018/1200" },
      { artist: "Keshawna Logan", place: "Philadelphia, PA", title: "Resting", year: "2023", medium: "Oil, mixed media", size: "24 x 36 in (61 x 91.4 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/35efdaa9-be43-4710-b657-a5e5b919dd1a/resting_in_the_sun_copy.jpg", ratio: "3774/2740" },
      { artist: "Parker Lily Tuson-Morse", place: "New York, NY", title: "Veiled-Erotic", year: "2023", medium: "Acrylic and oil on canvas", size: "40 x 66 in (101.6 x 167.6 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/8fd94bee-873e-43b1-9f04-a7dff906d483/veilederoticfinal.jpg", ratio: "748/1200" },
      { artist: "Olivia Springberg", place: "Washington, DC", title: "Tentful", year: "2023", medium: "Oil on canvas", size: "38 x 48 in (96.5 x 121.9 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/6148dd20-2b3e-407b-99f6-04c53c7549a6/olivia_springberg_tentfulcopy.jpg", ratio: "950/1200" },
      { artist: "Jennifer Amadeo-Holl", place: "Boston, MA", title: "Blue Tales: History + Hope", year: "2023", medium: "Oil on canvas", size: "56 x 54 in (142.2 x 137.2 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/af93659d-81cf-4f61-9746-7c819ae65cdc/1_blue_tales_history__hope_2023_oilcanv_56x54in_1200pix.jpg", ratio: "1169/1200" },
      { artist: "Reilly Stasienko", place: "Miamisburg, OH", title: "Everyone's up in my Room", year: "2023", medium: "Oil on unstretched canvas", size: "36 x 48 in (91.4 x 121.9 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/6b674d10-a346-4420-8daf-7820838dfdc7/everyonesupinmyroom.jpg", ratio: "2000/1297" },
      { artist: "DW Zinsser", place: "Brooklyn, NY", title: "Sacroilitis", year: "2023", medium: "Pen and watercolor on paper", size: "40 x 60 in (101 x 152 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/085dda66-65b0-4214-bbaa-794a0594a09b/dwz_sacroilitis_2023.jpg", ratio: "3574/2511" },
      { artist: "Jiacun Li", place: "London, UK", title: "Fly me to the moon with your cooking", year: "2023", medium: "Colored pencils on paper", size: "11.8 x 16.1 in (30 x 41 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/23a5d1be-618a-43e8-8c07-0d8a0038819f/5c5bd9a41afd4fbfa1f9615b9d484e14.jpeg.jpg", ratio: "2651/3709" },
      { artist: "Christine Schmitt", place: "Queens, NY", title: "Molly", year: "2023", medium: "Yarn", size: "14 x 14 in (35.6 x 35.6 cm)", layout: "right", type: "textile", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/3ae95ae4-7743-4b04-bd48-e5ff905d3206/ic3a5268.jpg", ratio: "3006/4329" },
      { artist: "Megan Du", place: "London/Southampton, UK", title: "Tribe zine-Flat plan", year: "2022", medium: "Digital drawing, inkjet printing", size: "", layout: "left", type: "print", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/7c29eb8c-a0e3-4964-8104-cbd9a6f928b2/1fronttribe.jpg", ratio: "1753/2480" },
      { artist: "Jiacun Li", place: "London, UK", title: "Ice cream or the fake snow on Bond Street?", year: "2023", medium: "Watercolor, ink, colored pencils, digital colors", size: "10.6 x 14.2 in (27 x 36 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fe986ca2-2980-43e0-9c03-43607124d889/c738211d1ed54671a915b29cf32d643a.jpeg.jpg", ratio: "3600/4800" }
    ]
  },

  "chaeri-kim": {
    title: "Love, Light, Gravity: Chaeri Kim",
    artist: "Chaeri Kim",
    status: "past show",
    dates: "12.19.2023 ● 01.19.2024",
    lede: "Love, Light, Gravity is a solo exhibition featuring 19 works by artist Chaeri Kim.",
    description: "",
    bio: "Chaeri Kim (b. 1995, Busan, South Korea) is a visual artist currently residing in Seoul, South Korea. Having completed her bachelor’s in Fine Art (B.A.) at Seoul National University of Science and Technology in Seoul, South Korea, her practice explores new rhythms of relationships between spiritual and fantastical personal episodes in a progressively commercialized and objectified world. Her charcoal drawings and digital collages expand and morph into other physical forms of medium such as painting, printing, weaving, tufting and mixed media installation.",
    statement: "“This is my dream journal, my own records of emotions and daily log turn into the language of graphite or ink on paper and the digital collage on screen. It mainly deals with images produced in the world of consciousness and unconsciousness, and I capture the most primitive feelings found in the moment that comfort me, give me anxiety, pain, sadness and happiness.\n\nThe images I irrationally draw on paper or screen consist of a mixture of history, mystery and a gift/present. I like to visualize the data collected from reality and screens which I call ‘unreality/surreality’. Stereotypes of typical roles portrayed in society, violent news — crimes, wars, poverty, and natural disasters occurring in everyday life, are faded away and cloyed by shallow layers such as algorithmic Ad pop-up windows.”\n\n— Chaeri Kim",
    buttons: [
      { text: "press release", link: "https://archive.project-gallery.com/s/Chaeri-Kim-PR.pdf" },
      { text: "price list", link: "https://archive.project-gallery.com/s/Chaeri-Kim-Image-List.pdf" }
    ],
    // pictures still come from the old Squarespace site; swap in files under images/ before Squarespace is cancelled
    works: [
      { title: "Love, light, gravity", year: "2023", medium: "Acrylic, epoxy, wool on canvas", size: "31.4 x 39.3 in (80 x 100 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fd5c248e-ca0a-4db3-8bea-a7afdccb70e7/7.+Love%2C+Light%2C+Gravity.jpg", ratio: "4473/5523",
        details: ["https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/87224e9f-e589-43fd-a279-172f9c214693/7.+Love%2C+Light%2C+Gravity+%28Installation+shot%29.jpg"] },
      { title: "Solomon's love", year: "2020", medium: "Dry point on aquatint", size: "7.6 x 5.9 in (19.5 x 15 cm)", layout: "right", type: "print", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/59b917a0-b037-4624-aa23-c062b82a6a85/12._Solomon_s+love.jpg", ratio: "2885/3847" },
      { title: "Trinity drawing series proto: 00", year: "2022", medium: "Color pencil and pencil, label sticker on graph paper", size: "8.2 x 11.8 in (21 x 30 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/76d8aaa3-5ab3-4c1c-8ac5-2cbd7bc12895/01.+Trinity+drawing+series_+proto+00.jpg", ratio: "2288/3192",
        details: ["https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/b86bfc65-e0c8-45bf-a77b-b43d17bf84ad/02.+Trinity+drawing+series_+proto+00.jpg"] },
      { title: "Black rose dragon – Very fragile affinity", year: "2022", medium: "Digital print and acrylic on stainless steel, bracket and dog leash", size: "51.5 x 51.5 in (131 x 131 cm)", layout: "right", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/03e47ab9-feb8-40f6-891c-def56a835787/8.+Black+rose+dragon+%E2%80%93+Very+fragile+affinity.jpeg", ratio: "3603/4805",
        details: ["https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/b7ffa165-cea2-4bc7-b813-53f9dbb1d624/8_9.+Black+rose+dragon+%28Installation+shot%29.JPG"] },
      { title: "Black rose dragon – on its own", year: "2022", medium: "Digital print and acrylic on stainless steel, bracket", size: "7 x 7 in (18 x 18 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d77446ba-f925-4b38-9802-1778139fd87e/9.+Black+rose+dragon+%E2%80%93+on+its+own.jpeg", ratio: "5472/3648" },
      { title: "Salvation drawing", year: "2020", medium: "Pencil on paper", size: "8.2 x 11.8 in (21 x 30 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/31375d9f-a429-483a-94ed-2173da24f508/18.+Salvation+drawing7mb.png", ratio: "1440/1800" },
      { title: "Salvation", year: "2020", medium: "Tufting on cotton", size: "60.6 x 44.8 in (158 x 114 cm)", layout: "left", type: "textile", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/aaf0d528-577f-4799-b06c-7a62fe6307ba/19.+Salvation.jpg", ratio: "1318/1647" },
      { title: "Because of you", year: "2022", medium: "Digital print and acrylic on stainless steel, sliding rail", size: "23.2 x 33 in (59 x 84 cm)", layout: "center", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fa0d1667-9ad0-4b70-ac34-f63d8f5e20c0/10.+Because+of+you.jpeg", ratio: "4411/3308" },
      { title: "La mirada profunda c/p", year: "2020", medium: "Ink on slate", size: "8.3 x 10.6 in (21 x 26.9 cm)", layout: "right", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/5eb7cede-b719-4e79-87c2-d5a95b266dee/17.+La+mirada+profunda.jpg", ratio: "2758/3260" },
      { title: "Incy Wincy Spider", year: "2023", medium: "Tufting on cotton", size: "51.5 x 51.5 in (131 x 131 cm)", layout: "center", type: "textile", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/a5e546e5-8ad2-4690-8761-eb29bc9851de/14.+Incy+Wincy+Spider.jpg", ratio: "3288/3270" },
      { title: "Trinity drawing series 01", year: "2023", medium: "Color pencil and pencil, label sticker on graph paper", size: "8.2 x 11.8 in (21 x 30 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/e32e5778-0f14-447f-a18a-a817c9678588/03.+Trinity+drawing+series+01.jpg", ratio: "2264/3192" },
      { title: "Trinity drawing series 02", year: "2023", medium: "Color pencil and pencil, label sticker on graph paper", size: "8.2 x 11.8 in (21 x 30 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/f6a9972d-6804-4c69-a25f-723a5c3037e6/04.+Trinity+drawing+series+02.jpg", ratio: "2260/3000" },
      { title: "Love, light, gravity", year: "2023", medium: "Acrylic, epoxy, wool on canvas", size: "23.6 x 28.5 in (60 x 72.5 cm)", layout: "left", type: "painting", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/289bf1e4-693f-4cd6-b568-54d587aca011/6.+Love%2C+Light%2C+Gravity.jpg", ratio: "2934/3422" },
      { title: "Hilo y aguja 2", year: "2020", medium: "Conté on paper", size: "7.6 x 5.9 in (19.5 x 15 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fb92a346-10ec-4096-87df-c035ad4bf4ac/16.+Hilo+y+aguja2.jpg", ratio: "3024/4032" },
      { title: "Hilo y aguja 1", year: "2020", medium: "Conté on paper", size: "7.6 x 5.9 in (19.5 x 15 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d7ca3705-f3ce-4593-b6bb-5920d696ec7c/15.+Hilo+y+aguja+1.jpg", ratio: "2899/3865" },
      { title: "Nectar", year: "2023", medium: "Tufting on cotton", size: "15.7 x 23.6 in (40 x 60 cm)", layout: "right", type: "textile", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/4f8d5bb4-468e-4f17-8fc8-f51d99b07351/13.+Nectar.jpg", ratio: "2180/3021",
        details: ["https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/10cddd9a-49b0-48fe-a727-c12f5d73b374/13.+Nectar+%28Istallation+shot%29.jpg", "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/ee046e0f-17fe-4b8e-837c-240bf680cabf/Screen+Shot+2023-12-13+at+2.30.45+PM.png"] },
      { title: "Trinity drawing series 03", year: "2023", medium: "Color pencil and pencil, label sticker on graph paper", size: "8.2 x 11.8 in (21 x 30 cm)", layout: "left", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/b119ad6d-f1cc-4a9f-961b-05da0e0e004a/05.+Trinity+drawing+series+03.jpg", ratio: "2268/3092" },
      { title: "Bubble amor", year: "2020", medium: "Conté on Korean traditional paper", size: "5.9 x 5.9 in (15 x 15 cm)", layout: "center", type: "drawing", forSale: false,
        image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/f3f87b73-6161-49dc-bc8e-2bd0486cf91f/11.+bubble+amo.jpg", ratio: "2887/2990" }
    ]
  }
};

// Past shows. Newest year first.
const PAST_EXHIBITIONS = [
  // { year: 2025, title: "TD Reade: cancel my prayer", dates: "10.05.2025 – 11.05.2025" },
];

// NUMBERS for the artist archive counters are counted automatically.
const STATS = {};

// ARTIST ARCHIVE: one line per artist per show, like a spreadsheet.
//   show:      the show's key in SHOW_CARDS (gives the title and year)
//   artist:    name as it should appear
//   instagram: handle without @ (leave "" if none)
const ARTISTS = [
  { show: "mike-nudelman", artist: "Mike Nudelman", instagram: "mikenudelman" },
  { show: "tdreade", artist: "TD Reade", instagram: "tdreade" },
  { show: "ryker-woodward", artist: "Ryker Woodward", instagram: "artist_ryker" },
  { show: "gitte-maria-moller", artist: "Gitte Maria Möller", instagram: "gitte_maria" },
  { show: "lumierebelge", artist: "lumierebelge", instagram: "lumierebelge" },
  { show: "tao-lin", artist: "Tao Lin", instagram: "taolin" },
  { show: "person-place-thing", artist: "Jennifer Amadeo-Holl", instagram: "jahamadeoholl" },
  { show: "person-place-thing", artist: "Wai Yi Chung", instagram: "waiyi.chung.art" },
  { show: "person-place-thing", artist: "Megan Du", instagram: "megandu_" },
  { show: "person-place-thing", artist: "Dimitra Gkoutzou", instagram: "ambi_blue_tamashi" },
  { show: "person-place-thing", artist: "Jiacun Li", instagram: "06juelz" },
  { show: "person-place-thing", artist: "Keshawna Logan", instagram: "kesh_logan" },
  { show: "person-place-thing", artist: "Andrew James McKay", instagram: "andrewjamesmckay" },
  { show: "person-place-thing", artist: "James Niwat Moore", instagram: "jamesnmoore_art" },
  { show: "person-place-thing", artist: "Sheila Rennick", instagram: "sheilarennick" },
  { show: "person-place-thing", artist: "Christine Schmitt", instagram: "art.by.schmitty" },
  { show: "person-place-thing", artist: "Olivia Springberg", instagram: "oliviasprng" },
  { show: "person-place-thing", artist: "Reilly Stasienko", instagram: "stazienko" },
  { show: "person-place-thing", artist: "Norah Stone", instagram: "norahstoner" },
  { show: "person-place-thing", artist: "Parker Lily Tuson-Morse", instagram: "parkerlilytm" },
  { show: "person-place-thing", artist: "Melissa Wallen", instagram: "oilslickrainbow" },
  { show: "person-place-thing", artist: "minzhi zheng", instagram: "minzhi411" },
  { show: "person-place-thing", artist: "DW Zinsser", instagram: "sunpuppie" },
  { show: "chaeri-kim", artist: "Chaeri Kim", instagram: "chaerik1m" },
  { show: "grace-nkem", artist: "Grace Nkem", instagram: "grcnkm" },
  { show: "nutsa-gogaladze", artist: "Nutsa Gogaladze", instagram: "noutssya" },
  { show: "artist-curator", artist: "Karen Fitzgerald", instagram: "kbfitzgeraldart" },
  { show: "artist-curator", artist: "Cary Hulbert", instagram: "cary_hulbert" },
  { show: "artist-curator", artist: "Casey Jex Smith", instagram: "caseyjexsmith" },
  { show: "artist-curator", artist: "Adam Liam Rose", instagram: "adamliamrose" },
  { show: "artist-curator", artist: "Cara Lynch", instagram: "cara_lynch_" },
  { show: "artist-curator", artist: "Farah Mohammad", instagram: "famojee" },
  { show: "artist-curator", artist: "Kellyann Monaghan", instagram: "kellyannmonaghanart" },
  { show: "artist-curator", artist: "Trinity Lester", instagram: "triiinity.lester" },
  { show: "artist-curator", artist: "Libbi Ponce", instagram: "libbi.ponce" },
  { show: "ara-hao", artist: "Ara Hao", instagram: "ara.persimmon" },
  { show: "inimitable", artist: "Hanimal-Mario Alvarez", instagram: "hanimal0088" },
  { show: "inimitable", artist: "Amelie Barnathan", instagram: "ameliabarnath" },
  { show: "inimitable", artist: "Jeffrey Beebe", instagram: "refractorian" },
  { show: "inimitable", artist: "Darien Bird", instagram: "darienbird" },
  { show: "inimitable", artist: "Caroline Blum", instagram: "carolineblum_" },
  { show: "inimitable", artist: "Shea Chang", instagram: "sheachang" },
  { show: "inimitable", artist: "Katya Labowe-Stoll", instagram: "katyalabowestoll" },
  { show: "inimitable", artist: "Jiacun Li", instagram: "06juelz" },
  { show: "inimitable", artist: "Emily Loughlin", instagram: "3m_ly_" },
  { show: "inimitable", artist: "Anwar Mahdi", instagram: "Boi_venus" },
  { show: "inimitable", artist: "carrie R", instagram: "crudddd" },
  { show: "inimitable", artist: "Jenna Ransom", instagram: "iamjennaransom" },
  { show: "inimitable", artist: "Teh-Hsuan (Momo) Chen", instagram: "wusomomoko" },
  { show: "inimitable", artist: "Jen Dwyer", instagram: "jen_dwyer_" },
  { show: "inimitable", artist: "Jared Freschman", instagram: "JaredFresch" },
  { show: "inimitable", artist: "Tim Furey", instagram: "timfureydraw" },
  { show: "inimitable", artist: "Austin Joseph Gregory", instagram: "austinjosephgregory" },
  { show: "inimitable", artist: "Marilyn Holsing", instagram: "marilynholsing" },
  { show: "inimitable", artist: "Henry Rosenberg", instagram: "hen_pen_" },
  { show: "inimitable", artist: "Alfred Rosenbluth", instagram: "_aallffrreedd" },
  { show: "inimitable", artist: "Todd Stong", instagram: "toddstong" },
  { show: "inimitable", artist: "Brian Uhl", instagram: "gentlemercies" },
  { show: "inimitable", artist: "Mo Vleeshouwers", instagram: "Mooovooom" },
  { show: "inimitable", artist: "Claire Downes Whitehurst", instagram: "claire_downes" },
  { show: "inimitable", artist: "DW Zinsser", instagram: "sunpuppie" },
  { show: "filip-lav", artist: "Filip Lav", instagram: "filiplav_" },
  { show: "hearts-of-palm", artist: "Ben Browne", instagram: "benrbrowne1" },
  { show: "hearts-of-palm", artist: "Keira Curwen", instagram: "keiracurwen" },
  { show: "hearts-of-palm", artist: "Gabriella Grill", instagram: "gabbigrill" },
  { show: "hearts-of-palm", artist: "Erik Hougen", instagram: "erikhougen" },
  { show: "hearts-of-palm", artist: "Cary Hulbert", instagram: "cary_hulbert" },
  { show: "hearts-of-palm", artist: "TianTian Lou", instagram: "tiantianll" },
  { show: "hearts-of-palm", artist: "Jeremy Ruiz", instagram: "jeremyruiz" },
  { show: "hearts-of-palm", artist: "Saloni Shah", instagram: "salonishah_art" },
  { show: "hearts-of-palm", artist: "Tom Smith", instagram: "instatomsmith" },
  { show: "hearts-of-palm", artist: "Sarika Sugla", instagram: "sarikasugla" },
  { show: "hearts-of-palm", artist: "Orli Swergold", instagram: "orli_s_art" },
  { show: "neurosis", artist: "Yerrie Choo", instagram: "yerriechoo" },
  { show: "neurosis", artist: "Cecelia Condit", instagram: "ceceliacondit" },
  { show: "neurosis", artist: "Seth Cosford", instagram: "cosfordchild_no2" },
  { show: "neurosis", artist: "Erica Eyres", instagram: "erica_eyres" },
  { show: "neurosis", artist: "Starkey Fossgreen", instagram: "star_key_f" },
  { show: "neurosis", artist: "Simon Floris", instagram: "simonofloris" },
  { show: "neurosis", artist: "Joana Azevedo Rodrigues", instagram: "joana___azevedo" },
  { show: "neurosis", artist: "Liev Sibilla", instagram: "levsibilla" },
  { show: "neurosis", artist: "Léa Tissot-Laura", instagram: "" },
  { show: "neurosis", artist: "Anna Sougy", instagram: "anna_2.poney" },
  { show: "neurosis", artist: "Amber Tutwiler", instagram: "ambertutwiler" },
  { show: "neurosis", artist: "Klara Vertes", instagram: "fairyicarus" },
  { show: "first-note", artist: "Hyoju Cheon", instagram: "hyo_ju_cheon" },
  { show: "first-note", artist: "Matt Coombs", instagram: "coombs.matt" },
  { show: "first-note", artist: "Misha Davydov", instagram: "gelatinandsilver" },
  { show: "first-note", artist: "Maria Haag", instagram: "mariahaagart" },
  { show: "first-note", artist: "Andy N Li", instagram: "andy_n_li" },
  { show: "first-note", artist: "Crystal Marshall", instagram: "crysart1983" },
  { show: "first-note", artist: "Steven Pennett", instagram: "steven_pennett" },
  { show: "first-note", artist: "Sarah Sipling", instagram: "Sarah_sipling" },
  { show: "betwixt-and-between", artist: "Jordin Alanis", instagram: "mexican.fairy" },
  { show: "betwixt-and-between", artist: "Santina Amato", instagram: "santina_amato" },
  { show: "betwixt-and-between", artist: "Katina Bitsicas", instagram: "katinabitsicas" },
  { show: "betwixt-and-between", artist: "Shelby Corso", instagram: "shelbyteddicorso" },
  { show: "betwixt-and-between", artist: "Vanezza Cruz", instagram: "vanezza_cruz" },
  { show: "betwixt-and-between", artist: "Marilla Cubberley", instagram: "Marillacubberley" },
  { show: "betwixt-and-between", artist: "Julia Curran", instagram: "Julia.s.curran" },
  { show: "betwixt-and-between", artist: "Daisy Diamond", instagram: "daisydiamondart" },
  { show: "betwixt-and-between", artist: "Jan Dickey", instagram: "Jan.dickey" },
  { show: "betwixt-and-between", artist: "John Brendan Guinan", instagram: "johnbrendanguinan" },
  { show: "betwixt-and-between", artist: "Zach Hill", instagram: "bottomaspirations" },
  { show: "betwixt-and-between", artist: "Peishan Huang", instagram: "_peishan_huang_" },
  { show: "betwixt-and-between", artist: "Doi Kim", instagram: "_doikim" },
  { show: "betwixt-and-between", artist: "Cydney M Lewis", instagram: "cydneyml" },
  { show: "betwixt-and-between", artist: "Michael Saunders", instagram: "michael___saunders" },
  { show: "betwixt-and-between", artist: "Ayshia Taskin", instagram: "" },
  { show: "betwixt-and-between", artist: "Andy Van Dinh", instagram: "andyvandinh" },
  { show: "betwixt-and-between", artist: "Til Will", instagram: "til_will" },
  { show: "betwixt-and-between", artist: "Hayley Youngs", instagram: "hayleyey" },
  { show: "betwixt-and-between", artist: "Daniela Lucato", instagram: "daniela.lucato" },
  { show: "betwixt-and-between", artist: "Farrell Mason-Brown", instagram: "ffawo" },
  { show: "betwixt-and-between", artist: "Casey Neumann", instagram: "caseyneumannart" },
  { show: "betwixt-and-between", artist: "Michelle Paterok", instagram: "2ndmichelle" },
  { show: "betwixt-and-between", artist: "Ophélie Paris", instagram: "ophelieparis" },
  { show: "betwixt-and-between", artist: "Katrina Slavik", instagram: "katrina_slavik" },
  { show: "betwixt-and-between", artist: "Assunta Saulle", instagram: "assunta_saulle" },
  { show: "unfolding-pattern", artist: "Saloni Shah", instagram: "salonishah_art" },
  { show: "unfolding-pattern", artist: "TianTian Lou", instagram: "tiantianll" },
  { show: "new-light", artist: "Andrea Bagdon", instagram: "mercurialstudio" },
  { show: "new-light", artist: "MK Bailey", instagram: "mk.bailey" },
  { show: "new-light", artist: "Sarah Baldwin", instagram: "sarahvaleria.art" },
  { show: "new-light", artist: "Asha Elana Casey", instagram: "ashaelanacasey" },
  { show: "new-light", artist: "Mandy Cooper", instagram: "mandylcooper" },
  { show: "new-light", artist: "Khadija Jahmila", instagram: "khadija.jahmila" },
  { show: "new-light", artist: "Katrina Jurjans", instagram: "katrinajurjans" },
  { show: "new-light", artist: "Isabel Manalo", instagram: "isabelmanalo" },
  { show: "new-light", artist: "Sarah Norman", instagram: "unicornorman" },
  { show: "new-light", artist: "Jessica Rubin", instagram: "planetjess" },
  { show: "new-light", artist: "Julie-Ann Simpson", instagram: "" },
  { show: "new-light", artist: "Salomé Wu", instagram: "salome_wu" },
  { show: "wet-dream", artist: "Rebecca Arp", instagram: "rebeccaarpstudio" },
  { show: "wet-dream", artist: "Basak Kilicbeyli", instagram: "basakkilicbeyli" },
  { show: "wet-dream", artist: "Haley Darya Parsa", instagram: "haleydaryaparsa" },
  { show: "wet-dream", artist: "Srishti Dass", instagram: "lostwherever" },
  { show: "wet-dream", artist: "Yuquan Duan", instagram: "onemorecig_" },
  { show: "wet-dream", artist: "JB Fry", instagram: "jbfry_" },
  { show: "wet-dream", artist: "Eriko Hattori", instagram: "_erikohattori_" },
  { show: "wet-dream", artist: "Tiffany Heng Hui Lee", instagram: "tiffanylee944" },
  { show: "wet-dream", artist: "Chris Horner", instagram: "chrishornerart" },
  { show: "wet-dream", artist: "Chris LaGow", instagram: "internet_lag" },
  { show: "wet-dream", artist: "Marianne L Walker", instagram: "mariannelwalker" },
  { show: "wet-dream", artist: "Moss YLOC", instagram: "moss.yloc" },
  { show: "syncretic", artist: "Priscilla Aleman", instagram: "priscillaaleman.studio" },
  { show: "syncretic", artist: "Ruhee Maknojia", instagram: "ruheemaknojia" },
  { show: "syncretic", artist: "Dante Migone-Ojeda", instagram: "d_m_ojeda" },
  { show: "syncretic", artist: "Shani Strand", instagram: "foxybrownfastcar" },
  { show: "syncretic", artist: "A young Yu", instagram: "ayoungyustudio" },
  { show: "splinters", artist: "Aurora Abzug", instagram: "auroraabzug" },
  { show: "splinters", artist: "Louisa Armbrust", instagram: "louisaarmbrust" },
  { show: "splinters", artist: "Julia Baroni", instagram: "" },
  { show: "splinters", artist: "Emily Bartolone", instagram: "emilyb.art.olone" },
  { show: "splinters", artist: "Katina Bitsicas", instagram: "katinabitsicas" },
  { show: "splinters", artist: "Sunny Moxin Chen", instagram: "notsunnychen" },
  { show: "splinters", artist: "Annie Chen Ziyao", instagram: "anniechanzy" },
  { show: "splinters", artist: "Kelly Chuning", instagram: "kelly_chuning" },
  { show: "splinters", artist: "Larkin Cook", instagram: "pulp_depiction" },
  { show: "splinters", artist: "Ana Maria Farina", instagram: "anamafarina" },
  { show: "splinters", artist: "Robyn A. Frank", instagram: "robynafrank" },
  { show: "splinters", artist: "Pauline Galiana", instagram: "paulinegaliana" },
  { show: "splinters", artist: "Kristi Gallup", instagram: "kristi.gallup" },
  { show: "splinters", artist: "Sara Hess", instagram: "sarahess1" },
  { show: "splinters", artist: "Megan Adams Irving", instagram: "meganadamsirving" },
  { show: "splinters", artist: "Bonam Kim", instagram: "bonamkimstudio" },
  { show: "splinters", artist: "Christine Lee", instagram: "" },
  { show: "splinters", artist: "Em Miller", instagram: "cypresssure" },
  { show: "splinters", artist: "Di Miranda", instagram: "artdimiranda" },
  { show: "splinters", artist: "Judith Mullen", instagram: "judithmullen" },
  { show: "splinters", artist: "Aaron Nemec", instagram: "todaysaaron" },
  { show: "splinters", artist: "Megan Nugroho", instagram: "megan_nugroho" },
  { show: "splinters", artist: "Ami Park", instagram: "iam__ami_" },
  { show: "splinters", artist: "Lily Prince", instagram: "lilyprince_studio" },
  { show: "splinters", artist: "PlantBotGenetics", instagram: "plantbot_genetics" },
  { show: "splinters", artist: "Abby Robinson", instagram: "abigailvrobinson" },
  { show: "splinters", artist: "Hulievych Serhii", instagram: "hulievych_graphic" },
  { show: "splinters", artist: "Malu Tan", instagram: "malutanart" },
  { show: "splinters", artist: "Siyuan Tan", instagram: "siyuan_tatara_hala" },
  { show: "splinters", artist: "Theo Trotter", instagram: "theotrotter" },
  { show: "splinters", artist: "Curtis Widem", instagram: "curtiswidem" },
  { show: "splinters", artist: "William Glaser Wilson", instagram: "williamglaserwilson" },
  { show: "splinters", artist: "Lizzie Zelter", instagram: "the_lizard_of_oz" },
  { show: "erika-shiba", artist: "Erika Shiba", instagram: "erkashba" },
  { show: "we-are-still-in-eden", artist: "Morgan Adler", instagram: "m0rgtr0n" },
  { show: "we-are-still-in-eden", artist: "Anne Canfield", instagram: "Anne_Canfield_studio" },
  { show: "we-are-still-in-eden", artist: "Laura Colomb", instagram: "Colombstudio" },
  { show: "we-are-still-in-eden", artist: "Yun-Fei Ji", instagram: "" },
  { show: "we-are-still-in-eden", artist: "Nicola López", instagram: "nicolalopezstudio" },
  { show: "we-are-still-in-eden", artist: "Laini Nemett", instagram: "Laini.nemett" },
  { show: "we-are-still-in-eden", artist: "Sarah Roche", instagram: "" },
  { show: "we-are-still-in-eden", artist: "Hiro Sakaguchi", instagram: "hiro.sakaguchi.studio" },
  { show: "we-are-still-in-eden", artist: "Laura Von Rosk", instagram: "lvonrosk" },
  { show: "we-are-still-in-eden", artist: "Virginia Wagner", instagram: "virginiawagner" },
  { show: "if-fluid-was-a-song", artist: "Nouran Husain Alhazmi", instagram: "" },
  { show: "if-fluid-was-a-song", artist: "Leslie Anne", instagram: "myleslieanne" },
  { show: "if-fluid-was-a-song", artist: "Paul Ayihawu", instagram: "paul_ayihawu" },
  { show: "if-fluid-was-a-song", artist: "Frank Boyce", instagram: "frankboyceart" },
  { show: "if-fluid-was-a-song", artist: "Kyle Choy", instagram: "kyle.choy" },
  { show: "if-fluid-was-a-song", artist: "Lisa A Fanning", instagram: "fabphotog" },
  { show: "if-fluid-was-a-song", artist: "Jessica Parker Foley", instagram: "" },
  { show: "if-fluid-was-a-song", artist: "Katerina Ganchak", instagram: "katerina_ganchak" },
  { show: "if-fluid-was-a-song", artist: "Vinay Hira", instagram: "thevinayverse" },
  { show: "if-fluid-was-a-song", artist: "Ruth Jeyaveeran", instagram: "r_jeyaveeran" },
  { show: "if-fluid-was-a-song", artist: "Fei Ji", instagram: "" },
  { show: "if-fluid-was-a-song", artist: "Saskia Kahn", instagram: "ohsaskia" },
  { show: "if-fluid-was-a-song", artist: "Lena Krashevka", instagram: "krashevka" },
  { show: "if-fluid-was-a-song", artist: "C. Pazia Mannella", instagram: "pazia.mannella" },
  { show: "if-fluid-was-a-song", artist: "Ashley Mclean", instagram: "ashleysmclean" },
  { show: "if-fluid-was-a-song", artist: "Aliyah Mickens", instagram: "ipaint_aliyah" },
  { show: "if-fluid-was-a-song", artist: "James Morton", instagram: "jamesfrmphilly" },
  { show: "if-fluid-was-a-song", artist: "Chantal Powell", instagram: "chantalpowell" },
  { show: "if-fluid-was-a-song", artist: "Phoenix Robles", instagram: "" },
  { show: "if-fluid-was-a-song", artist: "Cyle Warner", instagram: "cylewarner" },
  { show: "time-wont-tell", artist: "Jovita Alvares", instagram: "afrojojo93" },
  { show: "time-wont-tell", artist: "Ivana Carman", instagram: "ivanacarman" },
  { show: "time-wont-tell", artist: "Kevin Claiborne", instagram: "kevinclaiborne" },
  { show: "time-wont-tell", artist: "Noga Cohen", instagram: "nogie_" },
  { show: "time-wont-tell", artist: "Takuji Hamanaka", instagram: "takujihanga" },
  { show: "time-wont-tell", artist: "Melissa Joseph", instagram: "melissajoseph_art" },
  { show: "time-wont-tell", artist: "Lucy Kim", instagram: "slucykim" },
  { show: "time-wont-tell", artist: "Ruhee Maknojia", instagram: "ruheemaknojia" },
  { show: "time-wont-tell", artist: "Cheryl Mukherji", instagram: "cherylmukherji" },
  { show: "time-wont-tell", artist: "Luján Perez", instagram: "lujanperez" },
  { show: "time-wont-tell", artist: "Hafsa Riaz", instagram: "hafsanama" },
  { show: "time-wont-tell", artist: "Keli Safia Maksud", instagram: "kelisafiamaksud" },
  { show: "time-wont-tell", artist: "Shahzia Sikander (LNCPS)", instagram: "shahzia.sikander" },
  { show: "spliced-energy", artist: "Deborah Barlow", instagram: "deborahbarlow" },
  { show: "spliced-energy", artist: "Daniel Berlin (Van Deb Editions)", instagram: "danielberlinpainter" },
  { show: "spliced-energy", artist: "Ken Buhler (Van Deb Editions)", instagram: "kbuhlerworld" },
  { show: "spliced-energy", artist: "Michael Dal Cerro", instagram: "michael.dalcerro" },
  { show: "spliced-energy", artist: "Nancy Cohen (Van Deb Editions)", instagram: "" },
  { show: "spliced-energy", artist: "Patricia Dahlman", instagram: "watpaetki" },
  { show: "spliced-energy", artist: "Caroline Golden", instagram: "cgcollage" },
  { show: "spliced-energy", artist: "Rachel Goldsmith", instagram: "artistrachelg" },
  { show: "spliced-energy", artist: "Larry Rushing", instagram: "larryrushing" },
  { show: "spliced-energy", artist: "Kandi Spindler", instagram: "kandispindler" },
  { show: "spliced-energy", artist: "Priscilla Stadler", instagram: "priscillastudio" },
  { show: "spliced-energy", artist: "Kathleen Velo", instagram: "kathleenvelostudio" },
  { show: "spliced-energy", artist: "Natalie Woodson", instagram: "nataliewdsn" },
  { show: "spliced-energy", artist: "Dudley Zopp", instagram: "dudleyzopp" },
  { show: "spliced-energy", artist: "Orestes Gonzalez", instagram: "orestesgonzalezfoto" },
  { show: "spliced-energy", artist: "Hannah Kerin", instagram: "hannahkerinart" },
  { show: "spliced-energy", artist: "Susan Knight", instagram: "susan_r._knight" },
  { show: "spliced-energy", artist: "Mahnoor Nasir Khan", instagram: "noormnkphoto" },
  { show: "spliced-energy", artist: "Saroj Kumar", instagram: "" },
  { show: "spliced-energy", artist: "Mary Pinto", instagram: "maryfpinto" },
  { show: "spliced-energy", artist: "Eleanor Rahim", instagram: "eleanorrahim" },
  { show: "spliced-energy", artist: "Winn Rea", instagram: "winnrea" },
  { show: "transcendental-states", artist: "Elliot Avis", instagram: "smelliotavis" },
  { show: "transcendental-states", artist: "Loren Eiferman", instagram: "loreneiferman" },
  { show: "transcendental-states", artist: "Jeong Hur", instagram: "jeong.h.something" },
  { show: "transcendental-states", artist: "Kieren Jeane", instagram: "kierenjeane" },
  { show: "transcendental-states", artist: "Sidney Mullis", instagram: "sidney_mullis" },
  { show: "transcendental-states", artist: "Nola Parker", instagram: "nola.parker" },
  { show: "transcendental-states", artist: "Kelsey Skordal", instagram: "" },
  { show: "transcendental-states", artist: "Chelsea Wrightson", instagram: "c.wright.son" },
  { show: "illuminated", artist: "Alina Birkner", instagram: "new.age.shit" },
  { show: "illuminated", artist: "Isabel Cavenecia", instagram: "isabelcavenecia" },
  { show: "illuminated", artist: "Jeffrey Dell", instagram: "dellpesce" },
  { show: "illuminated", artist: "Megan Foster", instagram: "fostermegan" },
  { show: "illuminated", artist: "Gyun Hur", instagram: "gyunhurstudio" },
  { show: "illuminated", artist: "Seo Kim", instagram: "instantdoodles" },
  { show: "illuminated", artist: "Lucy Lord Campana", instagram: "lucylordcampana" },
  { show: "illuminated", artist: "Jasmine Murrell", instagram: "jasminemurrell" },
  { show: "illuminated", artist: "Robert Rauschenberg (ULAE)", instagram: "rauschenbergfoundation" },
  { show: "illuminated", artist: "Elizabeth Shull", instagram: "elizabethshullart" },
  { show: "illuminated", artist: "Sarah Sze (LNCPS)", instagram: "sarahszestudio" },
  { show: "illuminated", artist: "Catalina Viejo Lopez de Roda", instagram: "catalinaviejo" },
  { show: "illuminated", artist: "Paula Wilson", instagram: "paulalights" },
  { show: "people-places-things", artist: "Adina Andrus", instagram: "adinaandrus" },
  { show: "people-places-things", artist: "Aharon B. Cohen", instagram: "aaronbenjamincohen" },
  { show: "people-places-things", artist: "Alex Hutton", instagram: "" },
  { show: "people-places-things", artist: "Alexandra Chiou", instagram: "alexandrachiou" },
  { show: "people-places-things", artist: "Alexis Hill", instagram: "a__hill" },
  { show: "people-places-things", artist: "Anna Sorokina", instagram: "annasorokinaart" },
  { show: "people-places-things", artist: "Ashley Houghton", instagram: "aphoughtonart" },
  { show: "people-places-things", artist: "Bridey McGlynn", instagram: "bmstudioarts" },
  { show: "people-places-things", artist: "Dalila Sanabria", instagram: "dalila.sanabria" },
  { show: "people-places-things", artist: "Danqi Cai", instagram: "danqicai" },
  { show: "people-places-things", artist: "Dante Migone-Ojeda", instagram: "d_m_ojeda" },
  { show: "people-places-things", artist: "David Murgio", instagram: "davidmurgio" },
  { show: "people-places-things", artist: "Deborah Druick", instagram: "ddruick" },
  { show: "people-places-things", artist: "Diane Pribojan", instagram: "dianepribojan" },
  { show: "people-places-things", artist: "Elizabeth Riley", instagram: "elizabethrileyprojects" },
  { show: "people-places-things", artist: "Ellen Weider", instagram: "ellenmweider" },
  { show: "people-places-things", artist: "Fábián Emőke", instagram: "emoke_fbn" },
  { show: "people-places-things", artist: "Gary Cruz", instagram: "garycruzstudio" },
  { show: "people-places-things", artist: "Morgan Rose Free", instagram: "morganrosefree" },
  { show: "people-places-things", artist: "Naho Taruishi", instagram: "naho_taruishi" },
  { show: "people-places-things", artist: "Omar Reyna", instagram: "omar_reyna_flores" },
  { show: "people-places-things", artist: "Rayden Lawrence", instagram: "rayden_lawrence" },
  { show: "people-places-things", artist: "Roberto Jackson Harrington", instagram: "roberto.jackson.harrington" },
  { show: "people-places-things", artist: "Vy Trịnh", instagram: "vvyytrinh" },
  { show: "people-places-things", artist: "William Glaser Wilson", instagram: "williamglaserwilson" },
  { show: "people-places-things", artist: "Hannah Duggan", instagram: "hannahdugganart" },
  { show: "people-places-things", artist: "Heather Drayzen", instagram: "heatherdrayzen" },
  { show: "people-places-things", artist: "Heeseung Nam", instagram: "hi_heeseung" },
  { show: "people-places-things", artist: "Hui Tian", instagram: "tianhuiart" },
  { show: "people-places-things", artist: "J Myszka Lewis", instagram: "j.myszka.lewis" },
  { show: "people-places-things", artist: "Jennifer Joanou", instagram: "jenniferjoanou" },
  { show: "people-places-things", artist: "Julia Forrest", instagram: "juliajuliaajuliaa" },
  { show: "people-places-things", artist: "Lee Miller", instagram: "leemiller.art" },
  { show: "people-places-things", artist: "Mike Dowley", instagram: "dowleymike" },
  { show: "the-alternative-states", artist: "Amy Bravo", instagram: "_amybravo_" },
  { show: "the-alternative-states", artist: "Cecily Brown (LNCPS)", instagram: "aujourdhuirose" },
  { show: "the-alternative-states", artist: "Kirill Burygin", instagram: "burygin" },
  { show: "the-alternative-states", artist: "Daria Denisova", instagram: "dashkamonashka" },
  { show: "the-alternative-states", artist: "Alisa Gvozdeva", instagram: "vizhu.figu" },
  { show: "the-alternative-states", artist: "Luis Gutierrez", instagram: "luis__gutierrez_" },
  { show: "the-alternative-states", artist: "Eric Kogan", instagram: "erickogan" },
  { show: "the-alternative-states", artist: "Erica Mao", instagram: "erica.mao" },
  { show: "the-alternative-states", artist: "Brittany Miller", instagram: "brittanyjmiller" },
  { show: "the-alternative-states", artist: "Lucía Rodríguez", instagram: "luciadivina" },
  { show: "the-alternative-states", artist: "Alina Vinogradova", instagram: "alina.vinogradina" },
  { show: "the-alternative-states", artist: "Alexey Yakovlev", instagram: "alexeyyakovlev_" },
  { show: "the-alternative-states", artist: "Sofia Yalalova", instagram: "sofia_yalalova" },
  { show: "the-alternative-states", artist: "Marsel Yalalov", instagram: "marsel.yalalov" },
  { show: "the-alternative-states", artist: "Yuri Yuan", instagram: "yuri_hatake" },
  { show: "multitudes", artist: "Paloma Barhaugh-Bordas", instagram: "palomababo" },
  { show: "multitudes", artist: "Julie Buffalohead (Highpoint Editions)", instagram: "juliebuffalohead" },
  { show: "multitudes", artist: "Andrea Carlson (Highpoint Editions)", instagram: "andrea.carlson" },
  { show: "multitudes", artist: "Aaron Coleman", instagram: "aaron_s_coleman" },
  { show: "multitudes", artist: "Zachary Carlisle Davidson", instagram: "zlalclhl" },
  { show: "multitudes", artist: "Ellen Gallagher (Two Palms)", instagram: "" },
  { show: "multitudes", artist: "Toba Khedoori (Gemini G.E.L.)", instagram: "" },
  { show: "multitudes", artist: "Alison Saar (Tandem Press)", instagram: "alison_saar" },
  { show: "multitudes", artist: "Haley Takahashi", instagram: "haleytokiko" },
  { show: "eternal-flame", artist: "Lauren Skelly Bailey", instagram: "skelly__bailey" },
  { show: "eternal-flame", artist: "Rachel M Barron", instagram: "raembarron" },
  { show: "eternal-flame", artist: "Valeria Divinorum", instagram: "valeriadivinorum" },
  { show: "eternal-flame", artist: "Flavia Bertorello", instagram: "flabertorello" },
  { show: "eternal-flame", artist: "William Cordova (LNCPS)", instagram: "" },
  { show: "eternal-flame", artist: "Joanna Cortez", instagram: "joanna.c.cortez" },
  { show: "eternal-flame", artist: "Rosemarie Fiore", instagram: "rosemariefiorenyc" },
  { show: "eternal-flame", artist: "Carson Fox", instagram: "carsonfoxstudio" },
  { show: "eternal-flame", artist: "Josephine Halvorson", instagram: "halvorsonstudio" },
  { show: "eternal-flame", artist: "Juan Hinojosa", instagram: "juan_hinojosa_" },
  { show: "eternal-flame", artist: "Sandy Williams IV", instagram: "sandywilliams_iv" },
  { show: "eternal-flame", artist: "Susanna Koetter", instagram: "team__jolie" },
  { show: "eternal-flame", artist: "Dante Migone-Ojeda", instagram: "d_m_ojeda" },
  { show: "eternal-flame", artist: "Kellyann Monaghan", instagram: "kellyannmonaghanart" },
  { show: "eternal-flame", artist: "Steve Reinke", instagram: "spreinke" },
  { show: "eternal-flame", artist: "Rachel Stern", instagram: "rachelstern" },
  { show: "in-the-cool-of-the-evening", artist: "Nathan Catlin", instagram: "natcatwhisperer" },
  { show: "in-the-cool-of-the-evening", artist: "Trenton Doyle Hancock", instagram: "trenton_doyle_hancock" },
  { show: "in-the-cool-of-the-evening", artist: "Cara Lynch", instagram: "cara_lynch_" },
  { show: "in-the-cool-of-the-evening", artist: "Erica Mao", instagram: "erica.mao" },
  { show: "in-the-cool-of-the-evening", artist: "Lina Puerta", instagram: "linapuertaart" },
  { show: "in-the-cool-of-the-evening", artist: "Jennifer Schmidt", instagram: "jenniferannschmidt" },
  { show: "in-the-cool-of-the-evening", artist: "Kiki Smith", instagram: "" },
  { show: "in-the-cool-of-the-evening", artist: "Craig Zammiello", instagram: "craigzammiello" }
];


// THE GUEST BOOK
// Words that can't be posted. Add more inside the brackets, in quotes, separated by commas.
// (A fuller filter and your approval step get added when the guest book goes live.)
const GUESTBOOK = {
  intro: "sign the book. leave a note about a show, a work, or just that you were here.",
  blockedWords: ["fuck", "shit", "bitch", "cunt", "asshole"]
};

// THE EXHIBITIONS PAGE
// The featured show at the top: its pictures fade from one to the next.
const EXHIBITIONS_FEATURE = {
  show: "mike-nudelman",
  label: "solo exhibition",
  lede: "Moving is a solo exhibition of 12 works by Mike Nudelman.",
  images: [
    "images/mike-nudelman/see-through.jpg",
    "images/mike-nudelman/zipped-square.jpg",
    "images/mike-nudelman/make-me-a-moon-23-square.jpg"
  ]
};

// SHOW CARDS: one block per past show. The ticker and the archive list both open these.
//   kind:  "solo exhibition", "two-person exhibition" or "group exhibition"
//   show:  the show's key in SHOWS if it has a page on this site (gives the little icons)
//   link:  where "enter exhibition" goes ("/tdreade" for this site, or "archive:/eternal-flame" for an old Squarespace page)
//   note:  "curated by ..." / "juried by ..." (shown under the dates)
//   image: the spotlight picture. Older shows borrow theirs from the Squarespace site for now;
//          swap in your own file (images/...) before Squarespace is turned off.
//   artists: names for group shows, shown as "including artists ..."
const SHOW_CARDS = {
  "white-whale": {
    kind: "", title: "White Whale", year: "2026", dates: "coming soon", soon: true, note: "",
    image: "", description: "opening December 2026.",
    link: "", show: "", artists: []
  },
  "tdreade": {
    kind: "solo exhibition",
    title: "TD Reade: cancel my prayer",
    year: "2025", note: "",
    dates: "10.05.2025 – 11.05.2025",
    image: "images/td-reade/heavy-misfortunes.jpg",
    description: "cancel my prayer features 12 original artworks from Melbourne based artist TD Reade. His paintings foreground figures caught within the choreography of social performance, where ordinary moments become sites of latent tension.",
    link: "/tdreade",
    show: "tdreade",
    artists: []
  },
  "mike-nudelman": {
    kind: "solo exhibition",
    title: "Mike Nudelman: Moving",
    year: "2026",
    dates: "06.12.2026 – 07.19.2026",
    image: "images/mike-nudelman/zipped-square.jpg",
    description: "Working with familiar materials, Mike Nudelman transforms the recognizable into the unexpected. His intricate ballpoint drawings use sublime landscapes to examine the ways we perceive and construct reality.",
    link: "/mike-nudelman",
    show: "mike-nudelman",
    artists: []
  },
  "ryker-woodward": {
    kind: "solo exhibition", title: "Ryker Woodward: Nostalgic Signifiers From Digital Realms", year: "2024", dates: "08.01.2024 – 09.15.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/8ef24228-bc1b-49f0-be73-4aaa8f36cb4a/halo_2_ctf_splitscreen_v1.jpg", description: "Ryker Woodward paints the overlooked artifacts of video games, split screens, lobbies, loadouts and minimaps, as nostalgic records of a shared digital history.",
    link: "/ryker-woodward", show: "ryker-woodward",
    artists: []
  },
  "gitte-maria-moller": {
    kind: "solo exhibition", title: "Gitte Maria Möller: Running away forever", year: "2024", dates: "05.23.2024 – 06.30.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/4bdca162-ae48-44d1-9d8e-b2e700495047/To+the+moon+res.jpg", description: "Paintings and drawings made over five years between Cape Town and New York City, about attachment to objects, people and places, and the softness of solitude.",
    link: "/gitte-maria-moller", show: "gitte-maria-moller",
    artists: []
  },
  "lumierebelge": {
    kind: "solo exhibition", title: "lumierebelge, lineage mayhem.", year: "2024", dates: "04.17.2024 – 05.22.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1ff12319-5b09-4d60-9a27-0fa3ee5934ca/theyallmatter.jpg", description: "Eighteen notebook drawings from 2023 and 2024 by lumierebelge, an independent artist from Argentina, made with pen, pencils and notebook paper.",
    link: "/lumierebelge", show: "lumierebelge",
    artists: []
  },
  "tao-lin": {
    kind: "solo exhibition", title: "Mandalas: Tao Lin", year: "2024", dates: "03.16.2024 – 04.16.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fd0b8d82-3b4e-4c59-af4d-dfdb119e9b74/starmandala2k.jpg", description: "Twenty mandalas drawn by artist and author Tao Lin between 2014 and 2024, each made on small 8 x 8 inch paper with one rule: no rules.",
    link: "/tao-lin", show: "tao-lin",
    artists: []
  },
  "person-place-thing": {
    kind: "group exhibition", title: "Person, Place, or Thing", year: "2024", dates: "02.01.2024 – 03.15.2024", note: "juried by Cynthia Cruz",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d1f0990a-c48c-46d4-80ab-1b2180585d45/dscf14663_copy+%281%29.jpg", description: "A juried group exhibition of 17 artists that breaks the world down into its essential parts: the individual, the environment and the object.",
    link: "/person-place-thing", show: "person-place-thing",
    artists: ["Jennifer Amadeo-Holl", "Wai Yi Chung", "Megan Du", "Dimitra Gkoutzou", "Jiacun Li", "Keshawna Logan", "Andrew James McKay", "James Niwat Moore", "Sheila Rennick", "Christine Schmitt", "Olivia Springberg", "Reilly Stasienko", "Norah Stone", "Parker Lily Tuson-Morse", "Melissa Wallen", "minzhi zheng", "DW Zinsser"]
  },
  "chaeri-kim": {
    kind: "solo exhibition", title: "Love, Light, Gravity: Chaeri Kim", year: "2023", dates: "12.19.2023 – 01.19.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fd5c248e-ca0a-4db3-8bea-a7afdccb70e7/7.+Love%2C+Light%2C+Gravity.jpg", description: "Chaeri Kim's dream journal: drawings, tufted works, prints and works on steel that turn daily emotions into images of the conscious and unconscious.",
    link: "/chaeri-kim", show: "chaeri-kim",
    artists: []
  },
  "grace-nkem": {
    kind: "solo exhibition", title: "Grace Nkem: CLOWN WORLD", year: "2023", dates: "11.18.2023 – 12.18.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/dc195051-bd02-4e48-9564-84e04a4e8610/_Disambiguation_%2C+2023%2C+24+x+36in%2C+Oil+on+masonite.jpg", description: "",
    link: "archive:/grace-nkem", show: "",
    artists: []
  },
  "nutsa-gogaladze": {
    kind: "solo exhibition", title: "I walked a lot to arrive in this garden: Nutsa Gogaladze", year: "2023", dates: "10.17.2023 – 11.17.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d2a189b3-d9d6-45ef-bbe4-4e68852b4b9f/Another+story.JPG", description: "",
    link: "archive:/nutsa-gogaladze", show: "",
    artists: []
  },
  "artist-curator": {
    kind: "group exhibition", title: "Artist/Curator", year: "2023", dates: "09.08.2023 – 10.16.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/a1aa4e45-a22f-4480-9132-c580a6058684/learn+lightness.jpg", description: "",
    link: "archive:/artist-curator", show: "",
    artists: ["Karen Fitzgerald", "Cary Hulbert", "Casey Jex Smith", "Adam Liam Rose", "Cara Lynch", "Farah Mohammad", "Kellyann Monaghan", "Trinity Lester", "Libbi Ponce"]
  },
  "ara-hao": {
    kind: "solo exhibition", title: "Nourish Life Anonymously: Ara Hao", year: "2023", dates: "08.07.2023 – 09.07.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/c704e314-2c81-4b08-bb2a-9effaab79991/red+leaves+scan+sm+sm+.jpg", description: "",
    link: "archive:/ara-hao", show: "",
    artists: []
  },
  "inimitable": {
    kind: "group exhibition", title: "Inimitable", year: "2023", dates: "06.30.2023 – 07.30.2023", note: "juried by Casey Jex Smith",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d32dcbb5-f890-48fa-b5b6-8fe02e56ffea/11.jpg", description: "",
    link: "archive:/inimitable", show: "",
    artists: ["Hanimal-Mario Alvarez", "Amelie Barnathan", "Jeffrey Beebe", "Darien Bird", "Caroline Blum", "Shea Chang", "Katya Labowe-Stoll", "Jiacun Li", "Emily Loughlin", "Anwar Mahdi", "carrie R", "Jenna Ransom", "Teh-Hsuan (Momo) Chen", "Jen Dwyer", "Jared Freschman", "Tim Furey", "Austin Joseph Gregory", "Marilyn Holsing", "Henry Rosenberg", "Alfred Rosenbluth", "Todd Stong", "Brian Uhl", "Mo Vleeshouwers", "Claire Downes Whitehurst", "DW Zinsser"]
  },
  "filip-lav": {
    kind: "solo exhibition", title: "Gentle Doom: Filip Lav", year: "2023", dates: "06.01.2023 – 06.29.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/dd0b1b00-f2a0-4bf4-917d-0bec74a17076/AnAmericanPrayer_FilipLav_2+copy.jpg", description: "",
    link: "archive:/filip-lav", show: "",
    artists: []
  },
  "hearts-of-palm": {
    kind: "group exhibition", title: "Hearts of Palm", year: "2023", dates: "05.15.2023 – 06.15.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/017ed8b2-c665-479c-a3b3-bb1bb5670c67/TomSmith_Peepers.jpg", description: "",
    link: "archive:/hearts-of-palm", show: "",
    artists: ["Ben Browne", "Keira Curwen", "Gabriella Grill", "Erik Hougen", "Cary Hulbert", "TianTian Lou", "Jeremy Ruiz", "Saloni Shah", "Tom Smith", "Sarika Sugla", "Orli Swergold"]
  },
  "neurosis": {
    kind: "group exhibition", title: "Neurosis", year: "2023", dates: "01.15.2023 – 03.15.2023", note: "curated by Bethelihem Gebresilasie",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/cc22412e-ab33-4e0f-874a-44545b861c1b/IMG_0120.JPG", description: "",
    link: "archive:/neurosis", show: "",
    artists: ["Yerrie Choo", "Cecelia Condit", "Seth Cosford", "Erica Eyres", "Starkey Fossgreen", "Simon Floris", "Joana Azevedo Rodrigues", "Liev Sibilla", "Léa Tissot-Laura", "Anna Sougy", "Amber Tutwiler", "Klara Vertes"]
  },
  "first-note": {
    kind: "group exhibition", title: "First Note", year: "2023", dates: "01.15.2023 – 03.15.2023", note: "juried by Faust Luo",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/64f983c7-0d21-4a33-840f-c8c45df4ba13/bigbird1a.jpg", description: "",
    link: "archive:/first-note", show: "",
    artists: ["Hyoju Cheon", "Matt Coombs", "Misha Davydov", "Maria Haag", "Andy N Li", "Crystal Marshall", "Steven Pennett", "Sarah Sipling"]
  },
  "betwixt-and-between": {
    kind: "group exhibition", title: "betwixt and between", year: "2022", dates: "11.01.2022 – 12.15.2022", note: "juried by Trinity Lester and Cary Hulbert",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/e3dd1082-b574-4c5b-8bf6-350ee73ff2c0/Assunta+Saulle_tempio_di_iside_1.png", description: "",
    link: "archive:/betwixt-and-between", show: "",
    artists: ["Jordin Alanis", "Santina Amato", "Katina Bitsicas", "Shelby Corso", "Vanezza Cruz", "Marilla Cubberley", "Julia Curran", "Daisy Diamond", "Jan Dickey", "John Brendan Guinan", "Zach Hill", "Peishan Huang", "Doi Kim", "Cydney M Lewis", "Michael Saunders", "Ayshia Taskin", "Andy Van Dinh", "Til Will", "Hayley Youngs", "Daniela Lucato", "Farrell Mason-Brown", "Casey Neumann", "Michelle Paterok", "Ophélie Paris", "Katrina Slavik", "Assunta Saulle"]
  },
  "unfolding-pattern": {
    kind: "two-person exhibition", title: "Unfolding Pattern: Saloni Shah and Tiantian Lou", year: "2022", dates: "10.01.2022 – 11.30.2022", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d12bfe94-3039-434a-8257-3ee2e23a81c0/SoftVessel%23017_Lou_2022.jpg", description: "",
    link: "archive:/unfolding-pattern", show: "",
    artists: []
  },
  "new-light": {
    kind: "group exhibition", title: "New Light", year: "2022", dates: "07.07.2022 – 08.31.2022", note: "curated by Mills Brown",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/c22e9b43-76d7-4c1c-8004-f6489c14dacb/Norman%2C+Sarah+_To+you%2C+2000+years+from+now_+2019_oil%2C+graphite%2C+pastel+and+color+pencil+on+paper_22.5x30in_1.jpg", description: "",
    link: "archive:/new-light", show: "",
    artists: ["Andrea Bagdon", "MK Bailey", "Sarah Baldwin", "Asha Elana Casey", "Mandy Cooper", "Khadija Jahmila", "Katrina Jurjans", "Isabel Manalo", "Sarah Norman", "Jessica Rubin", "Julie-Ann Simpson", "Salomé Wu"]
  },
  "wet-dream": {
    kind: "group exhibition", title: "wet dream", year: "2022", dates: "06.15.2022 – 07.15.2022", note: "curated by Libbi Ponce",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/6966da22-d463-4b08-b3ca-c2a2ff53b4bf/the_seer.jpg", description: "",
    link: "archive:/wet-dream", show: "",
    artists: ["Rebecca Arp", "Basak Kilicbeyli", "Haley Darya Parsa", "Srishti Dass", "Yuquan Duan", "JB Fry", "Eriko Hattori", "Tiffany Heng Hui Lee", "Chris Horner", "Chris LaGow", "Marianne L Walker", "Moss YLOC"]
  },
  "syncretic": {
    kind: "group exhibition", title: "Syncretic: Religion and Ritual in Diaspora", year: "2022", dates: "05.02.2022 – 06.30.2022", note: "curated by Dante Migone-Ojeda",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/dcd4cf79-af3f-4efe-af87-91c2f943e033/Dante_Migone-Ojeda_Mano+de+Obra_2022_Cast+Stone%2C+Copper+Nails%2C+Found+Branch%2C+Jute+Twine_6_x4_x2__%245900.jpg", description: "",
    link: "archive:/syncretic", show: "",
    artists: ["Priscilla Aleman", "Ruhee Maknojia", "Dante Migone-Ojeda", "Shani Strand", "A young Yu"]
  },
  "splinters": {
    kind: "group exhibition", title: "Splinters in the ongoing normal", year: "2022", dates: "03.15.2022 – 04.15.2022", note: "curated by Junni Chen",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/6126c9a5-1e08-48a7-b587-dbafdfa5f5ea/serhii_hulievych_anthill_etching_2019_24.5x28.5.jpg", description: "",
    link: "archive:/splinters-in-the-ongoing-normal", show: "",
    artists: ["Aurora Abzug", "Louisa Armbrust", "Julia Baroni", "Emily Bartolone", "Katina Bitsicas", "Sunny Moxin Chen", "Annie Chen Ziyao", "Kelly Chuning", "Larkin Cook", "Ana Maria Farina", "Robyn A. Frank", "Pauline Galiana", "Kristi Gallup", "Sara Hess", "Megan Adams Irving", "Bonam Kim", "Christine Lee", "Em Miller", "Di Miranda", "Judith Mullen", "Aaron Nemec", "Megan Nugroho", "Ami Park", "Lily Prince", "PlantBotGenetics", "Abby Robinson", "Hulievych Serhii", "Malu Tan", "Siyuan Tan", "Theo Trotter", "Curtis Widem", "William Glaser Wilson", "Lizzie Zelter"]
  },
  "erika-shiba": {
    kind: "solo exhibition", title: "Mentalscapes: Erika Shiba", year: "2022", dates: "03.03.2022 – 04.29.2022", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/06afe04a-af8b-48f0-b15f-0eb1a9e86008/%5B2022_2001%5D.jpg", description: "",
    link: "archive:/erika-shiba", show: "",
    artists: []
  },
  "we-are-still-in-eden": {
    kind: "group exhibition", title: "We Are Still in Eden", year: "2022", dates: "01.07.2022 – 02.28.2022", note: "curated by KellyAnn Monaghan",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fe3aeb53-ea8c-4f1b-91e0-ede374846fe2/AC_ALMOST_AWAKE.jpg", description: "",
    link: "archive:/we-are-still-in-eden", show: "",
    artists: ["Morgan Adler", "Anne Canfield", "Laura Colomb", "Yun-Fei Ji", "Nicola López", "Laini Nemett", "Sarah Roche", "Hiro Sakaguchi", "Laura Von Rosk", "Virginia Wagner"]
  },
  "if-fluid-was-a-song": {
    kind: "group exhibition", title: "If fluid was a song…", year: "2022", dates: "12.15.2021 – 01.15.2022", note: "curated by Adama Delphine Fawundu",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/bc41a9f2-9306-4ed3-a11e-a816ee267fc1/saskia_kahn_2021_beatingchest_tonedcyanotype_13x19_375.jpg", description: "",
    link: "archive:/if-fluid-was-a-song", show: "",
    artists: ["Nouran Husain Alhazmi", "Leslie Anne", "Paul Ayihawu", "Frank Boyce", "Kyle Choy", "Lisa A Fanning", "Jessica Parker Foley", "Katerina Ganchak", "Vinay Hira", "Ruth Jeyaveeran", "Fei Ji", "Saskia Kahn", "Lena Krashevka", "C. Pazia Mannella", "Ashley Mclean", "Aliyah Mickens", "James Morton", "Chantal Powell", "Phoenix Robles", "Cyle Warner"]
  },
  "time-wont-tell": {
    kind: "group exhibition", title: "Time Won’t Tell", year: "2021", dates: "11.01.2021 – 12.30.2021", note: "curated by Farah Mohammad",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/f52e71ab-dda6-412f-a426-5cdee5b95a85/Untitled+Composition+I.jpg", description: "",
    link: "archive:/time-wont-tell", show: "",
    artists: ["Jovita Alvares", "Ivana Carman", "Kevin Claiborne", "Noga Cohen", "Takuji Hamanaka", "Melissa Joseph", "Lucy Kim", "Ruhee Maknojia", "Cheryl Mukherji", "Luján Perez", "Hafsa Riaz", "Keli Safia Maksud", "Shahzia Sikander (LNCPS)"]
  },
  "spliced-energy": {
    kind: "group exhibition", title: "Spliced Energy", year: "2021", dates: "09.01.2021 – 10.30.2021", note: "curated by Karen Fitzgerald",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1628972095581-80MOS1006S1KXLKAFZD2/2_NancyCohen_Liquid+Sound8_30x22Monotype_1900.jpg", description: "",
    link: "archive:/spliced-energy", show: "",
    artists: ["Deborah Barlow", "Daniel Berlin (Van Deb Editions)", "Ken Buhler (Van Deb Editions)", "Michael Dal Cerro", "Nancy Cohen (Van Deb Editions)", "Patricia Dahlman", "Caroline Golden", "Rachel Goldsmith", "Larry Rushing", "Kandi Spindler", "Priscilla Stadler", "Kathleen Velo", "Natalie Woodson", "Dudley Zopp", "Orestes Gonzalez", "Hannah Kerin", "Susan Knight", "Mahnoor Nasir Khan", "Saroj Kumar", "Mary Pinto", "Eleanor Rahim", "Winn Rea"]
  },
  "transcendental-states": {
    kind: "group exhibition", title: "Transcendental States", year: "2021", dates: "09.15.2021 – 10.15.2021", note: "juried by Adam Liam Rose",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1631588817675-U2X023M20YN3J3VW6HM0/Sidney+Mullis_2019_Altar+to+resurrect+my+seven-year-old+self_handmade+pulp%2C+gravestone+dust%2C+wax%2C+sand%2C+pasta%2C+pleather%2C+teddies%2C+streamers%2C+olive+pits%2C+paint%2C+wire%2C+shells+_+coins+from+my+childhood+collections_NFS+-+Sidney+Mullis.jpg", description: "",
    link: "archive:/transcendental-states", show: "",
    artists: ["Elliot Avis", "Loren Eiferman", "Jeong Hur", "Kieren Jeane", "Sidney Mullis", "Nola Parker", "Kelsey Skordal", "Chelsea Wrightson"]
  },
  "illuminated": {
    kind: "group exhibition", title: "Illuminated", year: "2021", dates: "07.09.2021 – 08.30.2021", note: "curated by Trinity Lester and Cary Hulbert",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1625326947019-ESC6BTAUAEOCA5S4QEGO/sarahsze_2021_whiteflash.jpg", description: "",
    link: "archive:/illuminated", show: "",
    artists: ["Alina Birkner", "Isabel Cavenecia", "Jeffrey Dell", "Megan Foster", "Gyun Hur", "Seo Kim", "Lucy Lord Campana", "Jasmine Murrell", "Robert Rauschenberg (ULAE)", "Elizabeth Shull", "Sarah Sze (LNCPS)", "Catalina Viejo Lopez de Roda", "Paula Wilson"]
  },
  "people-places-things": {
    kind: "group exhibition", title: "People Places Things", year: "2021", dates: "06.15.2021 – 07.15.2021", note: "juried by Samantha Rippner",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1623246735672-30BO9744M0RYNGJPWKF4/01_R_Lawrence_Rio_Small+-+Raaayden.jpg", description: "",
    link: "archive:/people-places-things", show: "",
    artists: ["Adina Andrus", "Aharon B. Cohen", "Alex Hutton", "Alexandra Chiou", "Alexis Hill", "Anna Sorokina", "Ashley Houghton", "Bridey McGlynn", "Dalila Sanabria", "Danqi Cai", "Dante Migone-Ojeda", "David Murgio", "Deborah Druick", "Diane Pribojan", "Elizabeth Riley", "Ellen Weider", "Fábián Emőke", "Gary Cruz", "Morgan Rose Free", "Naho Taruishi", "Omar Reyna", "Rayden Lawrence", "Roberto Jackson Harrington", "Vy Trịnh", "William Glaser Wilson", "Hannah Duggan", "Heather Drayzen", "Heeseung Nam", "Hui Tian", "J Myszka Lewis", "Jennifer Joanou", "Julia Forrest", "Lee Miller", "Mike Dowley"]
  },
  "the-alternative-states": {
    kind: "group exhibition", title: "The Alternative States", year: "2021", dates: "05.03.2021 – 06.30.2021", note: "curated by Arina Novak",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1617807188683-2UHEYSK68MR55YLPHF23/Yuan_Traffic+Jam+in+New+Jersey.jpg", description: "",
    link: "archive:/the-alternative-states", show: "",
    artists: ["Amy Bravo", "Cecily Brown (LNCPS)", "Kirill Burygin", "Daria Denisova", "Alisa Gvozdeva", "Luis Gutierrez", "Eric Kogan", "Erica Mao", "Brittany Miller", "Lucía Rodríguez", "Alina Vinogradova", "Alexey Yakovlev", "Sofia Yalalova", "Marsel Yalalov", "Yuri Yuan"]
  },
  "multitudes": {
    kind: "group exhibition", title: "Multitudes", year: "2021", dates: "03.01.2021 – 04.30.2021", note: "curated by Jade Hoyer",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1614886162217-B3TP0Z08FAH14ZU56PYJ/Buffalohead_Tone+Deaf.jpg", description: "",
    link: "archive:/multitudes", show: "",
    artists: ["Paloma Barhaugh-Bordas", "Julie Buffalohead (Highpoint Editions)", "Andrea Carlson (Highpoint Editions)", "Aaron Coleman", "Zachary Carlisle Davidson", "Ellen Gallagher (Two Palms)", "Toba Khedoori (Gemini G.E.L.)", "Alison Saar (Tandem Press)", "Haley Takahashi"]
  },
  "eternal-flame": {
    kind: "group exhibition", title: "Eternal Flame", year: "2021", dates: "01.01.2021 – 02.28.2021", note: "curated by Cara Lynch",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1607958867310-3ZTYKGPF9ZLT09HA1NOQ/wingatestudio_halvorson_fire_2019-1.jpg", description: "",
    link: "archive:/eternal-flame", show: "",
    artists: ["Lauren Skelly Bailey", "Rachel M Barron", "Valeria Divinorum & Flavia Bertorello", "William Cordova (LNCPS)", "Joanna Cortez", "Rosemarie Fiore", "Carson Fox", "Josephine Halvorson", "Juan Hinojosa", "Sandy Williams IV", "Susanna Koetter", "Dante Migone-Ojeda", "Kellyann Monaghan", "Steve Reinke", "Rachel Stern"]
  },
  "in-the-cool-of-the-evening": {
    kind: "group exhibition", title: "In the Cool of the Evening", year: "2020", dates: "10.30.2020 – 12.30.2020", note: "curated by Cary Hulbert and Trinity Lester",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1603141880052-9WRBJ8BBCE0DRC15B6IT/Untitled-turtle+1.jpg", description: "",
    link: "archive:/in-the-cool-of-the-evening", show: "",
    artists: ["Nathan Catlin", "Trenton Doyle Hancock", "Cara Lynch", "Erica Mao", "Lina Puerta", "Jennifer Schmidt", "Kiki Smith", "Craig Zammiello"]
  }
};

// THE TICKER: pictures sliding slowly across the exhibitions page.
// card: which show card it opens (from SHOW_CARDS). Leave "" until the show has a card.
const TICKER = [
  { image: "images/archive/archive-01.jpg", card: "" },
  { image: "images/td-reade/heavy-misfortunes.jpg", card: "tdreade" },
  { image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/0328d4f4-21e2-4de2-94c2-b55db0bec89b/gow_cover_oil_2024.jpg", card: "ryker-woodward" },
  { image: "images/archive/archive-02.jpg", card: "" },
  { image: "images/archive/archive-03.jpg", card: "" },
  { image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/3a5431b4-ad93-4fca-b00e-360e48b55750/Running+away+forever.jpg", card: "gitte-maria-moller" },
  { image: "images/td-reade/new-management.jpg", card: "tdreade" },
  { image: "images/archive/archive-04.jpg", card: "" },
  { image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/dd9e2536-a553-4b70-aae7-ec76cfdfb095/puede.jpg", card: "lumierebelge" },
  { image: "images/archive/archive-05.jpg", card: "" },
  { image: "images/archive/archive-06.jpg", card: "" },
  { image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/9401395e-4cf7-4ebc-9d78-d0b04739cbbc/loopmandala1k.jpg", card: "tao-lin" },
  { image: "images/td-reade/material-test.jpg", card: "tdreade" },
  { image: "images/archive/archive-07.jpg", card: "" },
  { image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/6148dd20-2b3e-407b-99f6-04c53c7549a6/olivia_springberg_tentfulcopy.jpg", card: "person-place-thing" },
  { image: "images/archive/archive-08.jpg", card: "" },
  { image: "images/archive/archive-09.jpg", card: "" },
  { image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/a5e546e5-8ad2-4690-8761-eb29bc9851de/14.+Incy+Wincy+Spider.jpg", card: "chaeri-kim" },
  { image: "images/archive/archive-10.jpg", card: "" },
  { image: "images/archive/archive-11.jpg", card: "" }
];

// THE ARCHIVE LIST under "exhibitions": card keys, newest first.
const ARCHIVE_LIST = ["white-whale", "mike-nudelman", "tdreade", "ryker-woodward", "gitte-maria-moller", "lumierebelge", "tao-lin", "person-place-thing", "chaeri-kim", "grace-nkem", "nutsa-gogaladze", "artist-curator", "ara-hao", "inimitable", "filip-lav", "hearts-of-palm", "neurosis", "first-note", "betwixt-and-between", "unfolding-pattern", "new-light", "wet-dream", "syncretic", "splinters", "erika-shiba", "we-are-still-in-eden", "if-fluid-was-a-song", "time-wont-tell", "spliced-energy", "transcendental-states", "illuminated", "people-places-things", "the-alternative-states", "multitudes", "eternal-flame", "in-the-cool-of-the-evening"];

// NEWSLETTER: offered after someone signs the guest book.
// Paste the sign-up form address from your newsletter service here when you have one.
const NEWSLETTER = {
  formAction: ""
};

// LEADERSHIP on the about page. "image" shows when someone hovers the name.
const LEADERSHIP = [
  {
    name: "Trinity Lester",
    bio: "is the director of project gallery and an artist and curator in new york city.",
    image: "images/about/trinity-lester.jpg",
    links: [
      { text: "instagram", url: "https://www.instagram.com/triiinity.lester/" },
      { text: "website", url: "https://trinitylester.com" }
    ]
  },
  {
    name: "Cary Hulbert",
    bio: "was a co-founder of project gallery who left in 2023. she is an artist in new york city.",
    image: "images/about/cary-hulbert.jpg",
    links: [
      { text: "instagram", url: "https://www.instagram.com/cary_hulbert/" },
      { text: "website", url: "https://www.caryhulbert.com/" }
    ]
  }
];

// THE GRANT PAGE
// tallyFormId: the letters at the end of your Tally share link
//   (tally.so/r/wA8bQz  ->  "wA8bQz"). Leave "" to show "under construction".
const GRANT = {
  title: "project grant 2026",
  intro: "",
  tallyFormId: "5XbBrv"
};
