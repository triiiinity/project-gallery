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
//   link:  where "enter exhibition" goes ("#tdreade" for this site, or the old Squarespace address)
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
    link: "#tdreade",
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
    link: "#mike-nudelman",
    show: "mike-nudelman",
    artists: []
  },
  "ryker-woodward": {
    kind: "solo exhibition", title: "Ryker Woodward: Nostalgic Signifiers From Digital Realms", year: "2024", dates: "08.01.2024 – 09.15.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/8ef24228-bc1b-49f0-be73-4aaa8f36cb4a/halo_2_ctf_splitscreen_v1.jpg", description: "",
    link: "https://project-gallery.com/ryker-woodward", show: "",
    artists: []
  },
  "gitte-maria-moller": {
    kind: "solo exhibition", title: "Gitte Maria Möller: Running away forever", year: "2024", dates: "05.23.2024 – 06.30.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/4bdca162-ae48-44d1-9d8e-b2e700495047/To+the+moon+res.jpg", description: "",
    link: "https://project-gallery.com/gitte-maria-moller", show: "",
    artists: []
  },
  "lumierebelge": {
    kind: "solo exhibition", title: "lumierebelge, lineage mayhem.", year: "2024", dates: "04.17.2024 – 05.22.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1ff12319-5b09-4d60-9a27-0fa3ee5934ca/theyallmatter.jpg", description: "",
    link: "https://project-gallery.com/lumierebelge", show: "",
    artists: []
  },
  "tao-lin": {
    kind: "solo exhibition", title: "Mandalas: Tao Lin", year: "2024", dates: "03.16.2024 – 04.16.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fd0b8d82-3b4e-4c59-af4d-dfdb119e9b74/starmandala2k.jpg", description: "",
    link: "https://project-gallery.com/tao-lin", show: "",
    artists: []
  },
  "person-place-thing": {
    kind: "group exhibition", title: "Person, Place, or Thing", year: "2024", dates: "02.01.2024 – 03.15.2024", note: "juried by Cynthia Cruz",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d1f0990a-c48c-46d4-80ab-1b2180585d45/dscf14663_copy+%281%29.jpg", description: "",
    link: "https://project-gallery.com/person-place-thing", show: "",
    artists: ["Jennifer Amadeo-Holl", "Wai Yi Chung", "Megan Du", "Dimitra Gkoutzou", "Jiacun Li", "Keshawna Logan", "Andrew James McKay", "James Niwat Moore", "Sheila Rennick", "Christine Schmitt", "Olivia Springberg", "Reilly Stasienko", "Norah Stone", "Parker Lily Tuson-Morse", "Melissa Wallen", "minzhi zheng", "DW Zinsser"]
  },
  "chaeri-kim": {
    kind: "solo exhibition", title: "Love, Light, Gravity: Chaeri Kim", year: "2023", dates: "12.19.2023 – 01.19.2024", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fd5c248e-ca0a-4db3-8bea-a7afdccb70e7/7.+Love%2C+Light%2C+Gravity.jpg", description: "",
    link: "https://project-gallery.com/chaeri-kim", show: "",
    artists: []
  },
  "grace-nkem": {
    kind: "solo exhibition", title: "Grace Nkem: CLOWN WORLD", year: "2023", dates: "11.18.2023 – 12.18.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/dc195051-bd02-4e48-9564-84e04a4e8610/_Disambiguation_%2C+2023%2C+24+x+36in%2C+Oil+on+masonite.jpg", description: "",
    link: "https://project-gallery.com/grace-nkem", show: "",
    artists: []
  },
  "nutsa-gogaladze": {
    kind: "solo exhibition", title: "I walked a lot to arrive in this garden: Nutsa Gogaladze", year: "2023", dates: "10.17.2023 – 11.17.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d2a189b3-d9d6-45ef-bbe4-4e68852b4b9f/Another+story.JPG", description: "",
    link: "https://project-gallery.com/nutsa-gogaladze", show: "",
    artists: []
  },
  "artist-curator": {
    kind: "group exhibition", title: "Artist/Curator", year: "2023", dates: "09.08.2023 – 10.16.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/a1aa4e45-a22f-4480-9132-c580a6058684/learn+lightness.jpg", description: "",
    link: "https://project-gallery.com/artist-curator", show: "",
    artists: ["Karen Fitzgerald", "Cary Hulbert", "Casey Jex Smith", "Adam Liam Rose", "Cara Lynch", "Farah Mohammad", "Kellyann Monaghan", "Trinity Lester", "Libbi Ponce"]
  },
  "ara-hao": {
    kind: "solo exhibition", title: "Nourish Life Anonymously: Ara Hao", year: "2023", dates: "08.07.2023 – 09.07.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/c704e314-2c81-4b08-bb2a-9effaab79991/red+leaves+scan+sm+sm+.jpg", description: "",
    link: "https://project-gallery.com/ara-hao", show: "",
    artists: []
  },
  "inimitable": {
    kind: "group exhibition", title: "Inimitable", year: "2023", dates: "06.30.2023 – 07.30.2023", note: "juried by Casey Jex Smith",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d32dcbb5-f890-48fa-b5b6-8fe02e56ffea/11.jpg", description: "",
    link: "https://project-gallery.com/inimitable", show: "",
    artists: ["Hanimal-Mario Alvarez", "Amelie Barnathan", "Jeffrey Beebe", "Darien Bird", "Caroline Blum", "Shea Chang", "Katya Labowe-Stoll", "Jiacun Li", "Emily Loughlin", "Anwar Mahdi", "carrie R", "Jenna Ransom", "Teh-Hsuan (Momo) Chen", "Jen Dwyer", "Jared Freschman", "Tim Furey", "Austin Joseph Gregory", "Marilyn Holsing", "Henry Rosenberg", "Alfred Rosenbluth", "Todd Stong", "Brian Uhl", "Mo Vleeshouwers", "Claire Downes Whitehurst", "DW Zinsser"]
  },
  "filip-lav": {
    kind: "solo exhibition", title: "Gentle Doom: Filip Lav", year: "2023", dates: "06.01.2023 – 06.29.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/dd0b1b00-f2a0-4bf4-917d-0bec74a17076/AnAmericanPrayer_FilipLav_2+copy.jpg", description: "",
    link: "https://project-gallery.com/filip-lav", show: "",
    artists: []
  },
  "hearts-of-palm": {
    kind: "group exhibition", title: "Hearts of Palm", year: "2023", dates: "05.15.2023 – 06.15.2023", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/017ed8b2-c665-479c-a3b3-bb1bb5670c67/TomSmith_Peepers.jpg", description: "",
    link: "https://project-gallery.com/hearts-of-palm", show: "",
    artists: ["Ben Browne", "Keira Curwen", "Gabriella Grill", "Erik Hougen", "Cary Hulbert", "TianTian Lou", "Jeremy Ruiz", "Saloni Shah", "Tom Smith", "Sarika Sugla", "Orli Swergold"]
  },
  "neurosis": {
    kind: "group exhibition", title: "Neurosis", year: "2023", dates: "01.15.2023 – 03.15.2023", note: "curated by Bethelihem Gebresilasie",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/cc22412e-ab33-4e0f-874a-44545b861c1b/IMG_0120.JPG", description: "",
    link: "https://project-gallery.com/neurosis", show: "",
    artists: ["Yerrie Choo", "Cecelia Condit", "Seth Cosford", "Erica Eyres", "Starkey Fossgreen", "Simon Floris", "Joana Azevedo Rodrigues", "Liev Sibilla", "Léa Tissot-Laura", "Anna Sougy", "Amber Tutwiler", "Klara Vertes"]
  },
  "first-note": {
    kind: "group exhibition", title: "First Note", year: "2023", dates: "01.15.2023 – 03.15.2023", note: "juried by Faust Luo",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/64f983c7-0d21-4a33-840f-c8c45df4ba13/bigbird1a.jpg", description: "",
    link: "https://project-gallery.com/first-note", show: "",
    artists: ["Hyoju Cheon", "Matt Coombs", "Misha Davydov", "Maria Haag", "Andy N Li", "Crystal Marshall", "Steven Pennett", "Sarah Sipling"]
  },
  "betwixt-and-between": {
    kind: "group exhibition", title: "betwixt and between", year: "2022", dates: "11.01.2022 – 12.15.2022", note: "juried by Trinity Lester and Cary Hulbert",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/e3dd1082-b574-4c5b-8bf6-350ee73ff2c0/Assunta+Saulle_tempio_di_iside_1.png", description: "",
    link: "https://project-gallery.com/betwixt-and-between", show: "",
    artists: ["Jordin Alanis", "Santina Amato", "Katina Bitsicas", "Shelby Corso", "Vanezza Cruz", "Marilla Cubberley", "Julia Curran", "Daisy Diamond", "Jan Dickey", "John Brendan Guinan", "Zach Hill", "Peishan Huang", "Doi Kim", "Cydney M Lewis", "Michael Saunders", "Ayshia Taskin", "Andy Van Dinh", "Til Will", "Hayley Youngs", "Daniela Lucato", "Farrell Mason-Brown", "Casey Neumann", "Michelle Paterok", "Ophélie Paris", "Katrina Slavik", "Assunta Saulle"]
  },
  "unfolding-pattern": {
    kind: "two-person exhibition", title: "Unfolding Pattern: Saloni Shah and Tiantian Lou", year: "2022", dates: "10.01.2022 – 11.30.2022", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/d12bfe94-3039-434a-8257-3ee2e23a81c0/SoftVessel%23017_Lou_2022.jpg", description: "",
    link: "https://project-gallery.com/unfolding-pattern", show: "",
    artists: []
  },
  "new-light": {
    kind: "group exhibition", title: "New Light", year: "2022", dates: "07.07.2022 – 08.31.2022", note: "curated by Mills Brown",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/c22e9b43-76d7-4c1c-8004-f6489c14dacb/Norman%2C+Sarah+_To+you%2C+2000+years+from+now_+2019_oil%2C+graphite%2C+pastel+and+color+pencil+on+paper_22.5x30in_1.jpg", description: "",
    link: "https://project-gallery.com/new-light", show: "",
    artists: ["Andrea Bagdon", "MK Bailey", "Sarah Baldwin", "Asha Elana Casey", "Mandy Cooper", "Khadija Jahmila", "Katrina Jurjans", "Isabel Manalo", "Sarah Norman", "Jessica Rubin", "Julie-Ann Simpson", "Salomé Wu"]
  },
  "wet-dream": {
    kind: "group exhibition", title: "wet dream", year: "2022", dates: "06.15.2022 – 07.15.2022", note: "curated by Libbi Ponce",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/6966da22-d463-4b08-b3ca-c2a2ff53b4bf/the_seer.jpg", description: "",
    link: "https://project-gallery.com/wet-dream", show: "",
    artists: ["Rebecca Arp", "Basak Kilicbeyli", "Haley Darya Parsa", "Srishti Dass", "Yuquan Duan", "JB Fry", "Eriko Hattori", "Tiffany Heng Hui Lee", "Chris Horner", "Chris LaGow", "Marianne L Walker", "Moss YLOC"]
  },
  "syncretic": {
    kind: "group exhibition", title: "Syncretic: Religion and Ritual in Diaspora", year: "2022", dates: "05.02.2022 – 06.30.2022", note: "curated by Dante Migone-Ojeda",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/dcd4cf79-af3f-4efe-af87-91c2f943e033/Dante_Migone-Ojeda_Mano+de+Obra_2022_Cast+Stone%2C+Copper+Nails%2C+Found+Branch%2C+Jute+Twine_6_x4_x2__%245900.jpg", description: "",
    link: "https://project-gallery.com/syncretic", show: "",
    artists: ["Priscilla Aleman", "Ruhee Maknojia", "Dante Migone-Ojeda", "Shani Strand", "A young Yu"]
  },
  "splinters": {
    kind: "group exhibition", title: "Splinters in the ongoing normal", year: "2022", dates: "03.15.2022 – 04.15.2022", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/6126c9a5-1e08-48a7-b587-dbafdfa5f5ea/serhii_hulievych_anthill_etching_2019_24.5x28.5.jpg", description: "",
    link: "https://project-gallery.com/splinters-in-the-ongoing-normal", show: "",
    artists: ["Aurora Abzug", "Louisa Armbrust", "Julia Baroni", "Emily Bartolone", "Katina Bitsicas", "Sunny Moxin Chen", "Annie Chen Ziyao", "Kelly Chuning", "Larkin Cook", "Ana Maria Farina", "Robyn A. Frank", "Pauline Galiana", "Kristi Gallup", "Sara Hess", "Megan Adams Irving", "Bonam Kim", "Christine Lee", "Em Miller", "Di Miranda", "Judith Mullen", "Aaron Nemec", "Megan Nugroho", "Ami Park", "Lily Prince", "PlantBotGenetics", "Abby Robinson", "Hulievych Serhii", "Malu Tan", "Siyuan Tan", "Theo Trotter", "Curtis Widem", "William Glaser Wilson", "Lizzie Zelter"]
  },
  "erika-shiba": {
    kind: "solo exhibition", title: "Mentalscapes: Erika Shiba", year: "2022", dates: "03.03.2022 – 04.29.2022", note: "",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/06afe04a-af8b-48f0-b15f-0eb1a9e86008/%5B2022_2001%5D.jpg", description: "",
    link: "https://project-gallery.com/erika-shiba", show: "",
    artists: []
  },
  "we-are-still-in-eden": {
    kind: "group exhibition", title: "We Are Still in Eden", year: "2022", dates: "01.07.2022 – 02.28.2022", note: "curated by KellyAnn Monaghan",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/fe3aeb53-ea8c-4f1b-91e0-ede374846fe2/AC_ALMOST_AWAKE.jpg", description: "",
    link: "https://project-gallery.com/we-are-still-in-eden", show: "",
    artists: ["Morgan Adler", "Anne Canfield", "Laura Colomb", "Yun-Fei Ji", "Nicola López", "Laini Nemett", "Sarah Roche", "Hiro Sakaguchi", "Laura Von Rosk", "Virginia Wagner"]
  },
  "if-fluid-was-a-song": {
    kind: "group exhibition", title: "If fluid was a song…", year: "2022", dates: "12.15.2021 – 01.15.2022", note: "curated by Adama Delphine Fawundu",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/bc41a9f2-9306-4ed3-a11e-a816ee267fc1/saskia_kahn_2021_beatingchest_tonedcyanotype_13x19_375.jpg", description: "",
    link: "https://project-gallery.com/if-fluid-was-a-song", show: "",
    artists: ["Nouran Husain Alhazmi", "Leslie Anne", "Paul Ayihawu", "Frank Boyce", "Kyle Choy", "Lisa A Fanning", "Jessica Parker Foley", "Katerina Ganchak", "Vinay Hira", "Ruth Jeyaveeran", "Fei Ji", "Saskia Kahn", "Lena Krashevka", "C. Pazia Mannella", "Ashley Mclean", "Aliyah Mickens", "James Morton", "Chantal Powell", "Phoenix Robles", "Cyle Warner"]
  },
  "time-wont-tell": {
    kind: "group exhibition", title: "Time Won’t Tell", year: "2021", dates: "11.01.2021 – 12.30.2021", note: "curated by Farah Mohammad",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/f52e71ab-dda6-412f-a426-5cdee5b95a85/Untitled+Composition+I.jpg", description: "",
    link: "https://project-gallery.com/time-wont-tell", show: "",
    artists: ["Jovita Alvares", "Ivana Carman", "Kevin Claiborne", "Noga Cohen", "Takuji Hamanaka", "Melissa Joseph", "Lucy Kim", "Ruhee Maknojia", "Cheryl Mukherji", "Luján Perez", "Hafsa Riaz", "Keli Safia Maksud", "Shahzia Sikander (LNCPS)"]
  },
  "spliced-energy": {
    kind: "group exhibition", title: "Spliced Energy", year: "2021", dates: "09.01.2021 – 10.30.2021", note: "curated by Karen Fitzgerald",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1628972095581-80MOS1006S1KXLKAFZD2/2_NancyCohen_Liquid+Sound8_30x22Monotype_1900.jpg", description: "",
    link: "https://project-gallery.com/spliced-energy", show: "",
    artists: ["Deborah Barlow", "Daniel Berlin (Van Deb Editions)", "Ken Buhler (Van Deb Editions)", "Michael Dal Cerro", "Nancy Cohen (Van Deb Editions)", "Patricia Dahlman", "Caroline Golden", "Rachel Goldsmith", "Larry Rushing", "Kandi Spindler", "Priscilla Stadler", "Kathleen Velo", "Natalie Woodson", "Dudley Zopp", "Orestes Gonzalez", "Hannah Kerin", "Susan Knight", "Mahnoor Nasir Khan", "Saroj Kumar", "Mary Pinto", "Eleanor Rahim", "Winn Rea"]
  },
  "transcendental-states": {
    kind: "group exhibition", title: "Transcendental States", year: "2021", dates: "09.15.2021 – 10.15.2021", note: "juried by Adam Liam Rose",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1631588817675-U2X023M20YN3J3VW6HM0/Sidney+Mullis_2019_Altar+to+resurrect+my+seven-year-old+self_handmade+pulp%2C+gravestone+dust%2C+wax%2C+sand%2C+pasta%2C+pleather%2C+teddies%2C+streamers%2C+olive+pits%2C+paint%2C+wire%2C+shells+_+coins+from+my+childhood+collections_NFS+-+Sidney+Mullis.jpg", description: "",
    link: "https://project-gallery.com/transcendental-states", show: "",
    artists: ["Elliot Avis", "Loren Eiferman", "Jeong Hur", "Kieren Jeane", "Sidney Mullis", "Nola Parker", "Kelsey Skordal", "Chelsea Wrightson"]
  },
  "illuminated": {
    kind: "group exhibition", title: "Illuminated", year: "2021", dates: "07.09.2021 – 08.30.2021", note: "curated by Trinity Lester and Cary Hulbert",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1625326947019-ESC6BTAUAEOCA5S4QEGO/sarahsze_2021_whiteflash.jpg", description: "",
    link: "https://project-gallery.com/illuminated", show: "",
    artists: ["Alina Birkner", "Isabel Cavenecia", "Jeffrey Dell", "Megan Foster", "Gyun Hur", "Seo Kim", "Lucy Lord Campana", "Jasmine Murrell", "Robert Rauschenberg (ULAE)", "Elizabeth Shull", "Sarah Sze (LNCPS)", "Catalina Viejo Lopez de Roda", "Paula Wilson"]
  },
  "people-places-things": {
    kind: "group exhibition", title: "People Places Things", year: "2021", dates: "06.15.2021 – 07.15.2021", note: "juried by Samantha Rippner",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1623246735672-30BO9744M0RYNGJPWKF4/01_R_Lawrence_Rio_Small+-+Raaayden.jpg", description: "",
    link: "https://project-gallery.com/people-places-things", show: "",
    artists: ["Adina Andrus", "Aharon B. Cohen", "Alex Hutton", "Alexandra Chiou", "Alexis Hill", "Anna Sorokina", "Ashley Houghton", "Bridey McGlynn", "Dalila Sanabria", "Danqi Cai", "Dante Migone-Ojeda", "David Murgio", "Deborah Druick", "Diane Pribojan", "Elizabeth Riley", "Ellen Weider", "Fábián Emőke", "Gary Cruz", "Morgan Rose Free", "Naho Taruishi", "Omar Reyna", "Rayden Lawrence", "Roberto Jackson Harrington", "Vy Trịnh", "William Glaser Wilson", "Hannah Duggan", "Heather Drayzen", "Heeseung Nam", "Hui Tian", "J Myszka Lewis", "Jennifer Joanou", "Julia Forrest", "Lee Miller", "Mike Dowley"]
  },
  "the-alternative-states": {
    kind: "group exhibition", title: "The Alternative States", year: "2021", dates: "05.03.2021 – 06.30.2021", note: "curated by Arina Novak",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1617807188683-2UHEYSK68MR55YLPHF23/Yuan_Traffic+Jam+in+New+Jersey.jpg", description: "",
    link: "https://project-gallery.com/the-alternative-states", show: "",
    artists: ["Amy Bravo", "Cecily Brown (LNCPS)", "Kirill Burygin", "Daria Denisova", "Alisa Gvozdeva", "Luis Gutierrez", "Eric Kogan", "Erica Mao", "Brittany Miller", "Lucía Rodríguez", "Alina Vinogradova", "Alexey Yakovlev", "Sofia Yalalova", "Marsel Yalalov", "Yuri Yuan"]
  },
  "multitudes": {
    kind: "group exhibition", title: "Multitudes", year: "2021", dates: "03.01.2021 – 04.30.2021", note: "curated by Jade Hoyer",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1614886162217-B3TP0Z08FAH14ZU56PYJ/Buffalohead_Tone+Deaf.jpg", description: "",
    link: "https://project-gallery.com/multitudes", show: "",
    artists: ["Paloma Barhaugh-Bordas", "Julie Buffalohead (Highpoint Editions)", "Andrea Carlson (Highpoint Editions)", "Aaron Coleman", "Zachary Carlisle Davidson", "Ellen Gallagher (Two Palms)", "Toba Khedoori (Gemini G.E.L.)", "Alison Saar (Tandem Press)", "Haley Takahashi"]
  },
  "eternal-flame": {
    kind: "group exhibition", title: "Eternal Flame", year: "2021", dates: "01.01.2021 – 02.28.2021", note: "curated by Cara Lynch",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1607958867310-3ZTYKGPF9ZLT09HA1NOQ/wingatestudio_halvorson_fire_2019-1.jpg", description: "",
    link: "https://project-gallery.com/eternal-flame", show: "",
    artists: ["Lauren Skelly Bailey", "Rachel M Barron", "Valeria Divinorum & Flavia Bertorello", "William Cordova (LNCPS)", "Joanna Cortez", "Rosemarie Fiore", "Carson Fox", "Josephine Halvorson", "Juan Hinojosa", "Sandy Williams IV", "Susanna Koetter", "Dante Migone-Ojeda", "Kellyann Monaghan", "Steve Reinke", "Rachel Stern"]
  },
  "in-the-cool-of-the-evening": {
    kind: "group exhibition", title: "In the Cool of the Evening", year: "2020", dates: "10.30.2020 – 12.30.2020", note: "curated by Cary Hulbert and Trinity Lester",
    image: "https://images.squarespace-cdn.com/content/v1/5f6628bb10482f4a96fae8ae/1603141880052-9WRBJ8BBCE0DRC15B6IT/Untitled-turtle+1.jpg", description: "",
    link: "https://project-gallery.com/in-the-cool-of-the-evening", show: "",
    artists: ["Nathan Catlin", "Trenton Doyle Hancock", "Cara Lynch", "Erica Mao", "Lina Puerta", "Jennifer Schmidt", "Kiki Smith", "Craig Zammiello"]
  }
};

// THE TICKER: pictures sliding slowly across the exhibitions page.
// card: which show card it opens (from SHOW_CARDS). Leave "" until the show has a card.
const TICKER = [
  { image: "images/archive/archive-01.jpg", card: "" },
  { image: "images/td-reade/heavy-misfortunes.jpg", card: "tdreade" },
  { image: "images/archive/archive-02.jpg", card: "" },
  { image: "images/archive/archive-03.jpg", card: "" },
  { image: "images/td-reade/new-management.jpg", card: "tdreade" },
  { image: "images/archive/archive-04.jpg", card: "" },
  { image: "images/archive/archive-05.jpg", card: "" },
  { image: "images/archive/archive-06.jpg", card: "" },
  { image: "images/td-reade/material-test.jpg", card: "tdreade" },
  { image: "images/archive/archive-07.jpg", card: "" },
  { image: "images/archive/archive-08.jpg", card: "" },
  { image: "images/archive/archive-09.jpg", card: "" },
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

// THE GRANT PAGE
// tallyFormId: the letters at the end of your Tally share link
//   (tally.so/r/wA8bQz  ->  "wA8bQz"). Leave "" to show "under construction".
const GRANT = {
  title: "artist grant",
  intro: "",
  tallyFormId: "5XbBrv"
};
