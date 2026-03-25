export const client = {
  // Business Details
  name: "A Cut Above Gardening Services",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Torquay.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01803 459652",
  email: "",
  website: "",

  // Location
  address: "Torquay",
  city: "Torquay",
  county: "",
  postcode: "",
  basedIn: "Torquay",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "4",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Trevor Twinley", rating: 5, text: "Lee and  Dan came to cut and trim our hedges . They did a fantastic job we are very pleased with the results. We would recommend Lee to anyone looking for a reliable gardener. They worked very hard and did everything we asked of them. Totally satisfi", date: "6 years ago" },
    { name: "Fugitive", rating: 5, text: "We had lee to do our hedges today and clear our drive of weeds I could not fault any of hes work he is very professional and had the right certificates which we had checked first I highly recommend lee and hes prices are very competitive ", date: "6 years ago" },
    { name: "Denise", rating: 5, text: "Lee came round and did the garden and the fencing the price was very competitive and the service was excellent. Happy to recommend him.  ", date: "6 years ago" },
    { name: "Margaret Dronfield", rating: 5, text: "I'm still waiting for them to ring me. Maybe they are away  Have now had Lee and would recommend him always. Very tidy ", date: "Edited 3 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "A Cut Above Gardening Services | Landscaper in Torquay",
    description: "Professional landscaper in Torquay. 5.0-star rated on Google. Call for a free quote.",
  },
};
