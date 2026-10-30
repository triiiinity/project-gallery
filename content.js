/* ======================================================
   PROJECT GALLERY — SITE CONTENT
   Everything people read on the site lives in this file.
   Edit the words between the quote marks, save, and upload.
   Keep the quote marks, commas and brackets as they are.
   ====================================================== */

const SITE = {
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
  link: "#mike-nudelman"      // where "enter exhibition" goes
};

// The featured show on the home page (and top of exhibitions).
const CURRENT = {
  title: "Mike Nudelman: Moving",
  dates: "06.12.2026 ● 07.19.2026",
  buttonText: "enter exhibition",
  link: "#mike-nudelman",                   // where the button goes
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
      { text: "press release", link: "https://project-gallery.com/s/TD-Reade-PRdocx.pdf" },
      { text: "price list",    link: "https://project-gallery.com/s/TDReadeImageListdocx-compressed.pdf" },
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
      { text: "press release", link: "https://project-gallery.com/s/Mike-Nudelman-PR.pdf" },
      { text: "price list",    link: "https://project-gallery.com/s/Mike-Nudelman-Image-List.pdf" },
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
      { title: "See Through", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "center", type: "drawing", forSale: false,
        image: "images/mike-nudelman/see-through.jpg", ratio: "1200/927" },
      { title: "Lonesome and Empty", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "right", type: "drawing", forSale: false,
        image: "images/mike-nudelman/lonesome-and-empty.jpg", ratio: "1200/927" },
      { title: "Apparent", year: "year", medium: "Ballpoint pen on paper", size: "5.5 x 4.5 in (13.8 × 11.4 cm)", layout: "left", type: "drawing", forSale: false,
        image: "images/mike-nudelman/apparent.jpg", ratio: "1200/982" },
      { title: "Zipped", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "center", type: "drawing", forSale: false,
        image: "images/mike-nudelman/zipped.jpg", ratio: "1200/927" },
      { title: "Recess", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "images/mike-nudelman/recess.jpg", ratio: "1200/927" },
      { title: "Goes the Other Way", year: "year", medium: "Ballpoint pen on paper", size: "7 x 5 in (17.8 × 12.7 cm)", layout: "pair", type: "drawing", forSale: false,
        image: "images/mike-nudelman/goes-the-other-way.jpg", ratio: "1200/857" },
      { title: "Make Me a Moon 23", year: "year", medium: "Ballpoint pen on paper", size: "3 x 2 in (7.6 × 5 cm)", layout: "right", type: "drawing", forSale: false,
        image: "images/mike-nudelman/make-me-a-moon-23.jpg", ratio: "1200/800" },
      { title: "Understanding the Laws that the Line of their Mysterious Orbits Obeyed 2", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "center", type: "drawing", forSale: false,
        image: "images/mike-nudelman/understanding-the-laws-that-the-line-of-their-mysterious-orbits-obeyed-2.jpg", ratio: "1200/927" },
      { title: "Dusky Dolphin", year: "year", medium: "Ballpoint pen on paper", size: "5 x 4.25 in (12.7 × 10.8 cm)", layout: "left", type: "drawing", forSale: false,
        image: "images/mike-nudelman/dusky-dolphin.jpg", ratio: "1200/1020" },
      { title: "Untitled 7", year: "year", medium: "Ballpoint pen on paper", size: "5.5 x 4 in (13.9 × 10.2 cm)", layout: "right", type: "drawing", forSale: false,
        image: "images/mike-nudelman/untitled-7.jpg", ratio: "1200/871" },
      { title: "Anything But a Giraffe", year: "year", medium: "Ballpoint pen on paper", size: "4.1 x 3.9 in (10.5 × 9.9 cm)", layout: "center", type: "drawing", forSale: false,
        image: "images/mike-nudelman/anything-but-a-giraffe.jpg", ratio: "1200/1124" },
      { title: "Spit", year: "year", medium: "Ballpoint pen on paper", size: "5.5 x 5.5 in (13.9 × 13.9 cm)", layout: "left", type: "drawing", forSale: false,
        image: "images/mike-nudelman/spit.jpg", ratio: "1200/1200" }
    ]
  }
};

// Past shows. Newest year first.
const PAST_EXHIBITIONS = [
  // { year: 2025, title: "TD Reade: cancel my prayer", dates: "10.05.2025 – 11.05.2025" },
];

// Artist archive, like a spreadsheet: year | show | artist | instagram handle (no @)
const ARTISTS = [
  // { year: 2025, show: "TD Reade: cancel my prayer", artist: "TD Reade", instagram: "" },
];


// THE GUEST BOOK
// Words that can't be posted. Add more inside the brackets, in quotes, separated by commas.
// (A fuller filter and your approval step get added when the guest book goes live.)
const GUESTBOOK = {
  intro: "sign the book. leave a note about a show, a work, or just that you were here.",
  blockedWords: ["fuck", "shit", "bitch", "cunt", "asshole"]
};

// THE GRANT PAGE
// tallyFormId: the letters at the end of your Tally share link
//   (tally.so/r/wA8bQz  ->  "wA8bQz"). Leave "" to show "under construction".
const GRANT = {
  title: "artist grant",
  intro: "",
  tallyFormId: "5XbBrv"
};
