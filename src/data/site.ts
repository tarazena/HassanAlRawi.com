// Central site data. Edit content here; components read from these exports.

export const site = {
  name: "Hassan Al Rawi",
  org: "IFF Productions",
  role: "Software Engineer & Founder",
  email: "hassan@iffproductions.com",
  url: "https://www.hassanalrawi.com",
  twitter: "@hassanalrawi",
  description:
    "Hassan Al Rawi — software engineer, designer, photographer & musician. Founder of IFF Productions. I build products end to end.",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

// Use root-absolute hrefs so the nav works from any page (e.g. /blog),
// not just the homepage.
export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Writing", href: "/blog" },
];

export interface Social {
  /** Two-letter mono badge shown in the design. */
  label: string;
  name: string;
  url: string;
}

export const socials: Social[] = [
  { label: "GH", name: "GitHub", url: "https://github.com/tarazena" },
  { label: "IN", name: "LinkedIn", url: "https://www.linkedin.com/in/hassan-al-rawi-19112a87/" },
  { label: "TW", name: "Twitter", url: "https://twitter.com/hassanalrawi" },
  { label: "SC", name: "SoundCloud", url: "https://soundcloud.com/hassan-ali-al-rawi" },
  { label: "VI", name: "Vimeo", url: "https://vimeo.com/user18375922" },
  { label: "FL", name: "Flickr", url: "https://www.flickr.com/photos/tarazena" },
];

// Tech stack (subset, ordered to match the design's chip row).
export const stack: string[] = [
  "TypeScript", "Go", "React", "Next.js", "Node", "PostgreSQL",
  "GraphQL", "AWS", "Docker", "Python",
  "React Native", "Flutter", ".NET", "C#", "Kotlin", "Terraform",
  "SQL", "Snowflake", "Twilio", "Sentry", "AI", "And so much more…",
];

export interface Discipline {
  num: string;
  title: string;
  text: string;
}

export const disciplines: Discipline[] = [
  { num: "01", title: "Development", text: "Full-stack web & product engineering — from architecture to shipped, performant interfaces." },
  { num: "02", title: "Design", text: "Product, brand & graphic design with an engineer's eye for systems and detail." },
  { num: "03", title: "Consulting", text: "Technical strategy & problem solving for teams that need to move fast and ship right." },
];

export interface Project {
  title: string;
  blurb: string;
  tags: string[];
  href: string;
  /** Path under /public; null renders the neumorphic placeholder. */
  image: string | null;
}

// Add an image to /public and set `image` to its path to swap out the
// neumorphic placeholder thumbnail.
export const projects: Project[] = [
  {
    title: "Topp Layer Printing",
    blurb:
      "A print shop in Lakewood, Ohio — digital printing, screen-printed tees, and signs & banners. I built the site end to end: marketing pages, portfolio, and the backend.",
    tags: ["Web", "Full-stack"],
    href: "https://topplayerprinting.com/",
    image: '/topplayer.png',
  },
  {
    title: "Pipper",
    blurb:
      "A real-time gender-reveal party app — guests answer quiz questions on their phones that sync live to a TV for the final reveal. Shipped across web, mobile, and tvOS.",
    tags: ["Web", "Mobile", "tvOS"],
    href: "https://pip-per.com/",
    image: '/pipper.png',
  },
  {
    title: "Project Haulin",
    blurb:
      "A chill 3D trucking sim built in Unity — take a contract, back your rig onto the trailer, and haul cargo across sun-baked cities. In development for iOS & Android.",
    tags: ["Unity", "Game", "Mobile"],
    href: "#",
    image: '/haulin.png',
  },
];
