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
  "mike-nudelman": {
    title: "Mike Nudelman: Moving",
    artist: "Mike Nudelman",
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
    //   image:  the picture file inside the images folder
    works: [
      { title: "See Through", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "center",
        image: "images/mike-nudelman/see-through.jpg", ratio: "1200/927" },
      { title: "Lonesome and Empty", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "right",
        image: "images/mike-nudelman/lonesome-and-empty.jpg", ratio: "1200/927" },
      { title: "Apparent", year: "year", medium: "Ballpoint pen on paper", size: "5.5 x 4.5 in (13.8 × 11.4 cm)", layout: "left",
        image: "images/mike-nudelman/apparent.jpg", ratio: "1200/982" },
      { title: "Zipped", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "center",
        image: "images/mike-nudelman/zipped.jpg", ratio: "1200/927" },
      { title: "Recess", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "pair",
        image: "images/mike-nudelman/recess.jpg", ratio: "1200/927" },
      { title: "Goes the Other Way", year: "year", medium: "Ballpoint pen on paper", size: "7 x 5 in (17.8 × 12.7 cm)", layout: "pair",
        image: "images/mike-nudelman/goes-the-other-way.jpg", ratio: "1200/857" },
      { title: "Make Me a Moon 23", year: "year", medium: "Ballpoint pen on paper", size: "3 x 2 in (7.6 × 5 cm)", layout: "right",
        image: "images/mike-nudelman/make-me-a-moon-23.jpg", ratio: "1200/800" },
      { title: "Understanding the Laws that the Line of their Mysterious Orbits Obeyed 2", year: "year", medium: "Ballpoint pen on paper", size: "11 x 8.5 in (27.9 × 21.6 cm)", layout: "center",
        image: "images/mike-nudelman/understanding-the-laws-that-the-line-of-their-mysterious-orbits-obeyed-2.jpg", ratio: "1200/927" },
      { title: "Dusky Dolphin", year: "year", medium: "Ballpoint pen on paper", size: "5 x 4.25 in (12.7 × 10.8 cm)", layout: "left",
        image: "images/mike-nudelman/dusky-dolphin.jpg", ratio: "1200/1020" },
      { title: "Untitled 7", year: "year", medium: "Ballpoint pen on paper", size: "5.5 x 4 in (13.9 × 10.2 cm)", layout: "right",
        image: "images/mike-nudelman/untitled-7.jpg", ratio: "1200/871" },
      { title: "Anything But a Giraffe", year: "year", medium: "Ballpoint pen on paper", size: "4.1 x 3.9 in (10.5 × 9.9 cm)", layout: "center",
        image: "images/mike-nudelman/anything-but-a-giraffe.jpg", ratio: "1200/1124" },
      { title: "Spit", year: "year", medium: "Ballpoint pen on paper", size: "5.5 x 5.5 in (13.9 × 13.9 cm)", layout: "left",
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


// THE GRANT PAGE
// tallyFormId: the letters at the end of your Tally share link
//   (tally.so/r/wA8bQz  ->  "wA8bQz"). Leave "" to show "under construction".
const GRANT = {
  title: "artist grant",
  intro: "",
  tallyFormId: "5XbBrv"
};
