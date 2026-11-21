// content/projects.ts
// Project data for the Work page and the case-study pages at /work/[slug].

// Unwritten text starts with this marker. Case-study pages outline it so
// it's easy to spot what is still missing.
export const PLACEHOLDER = "[Placeholder]";

export type CaseStudy = {
  // Drafts show in `pnpm dev` and on Vercel preview deploys, never on
  // nunofm.com. While a draft, the Work card links to the live site instead.
  // Set to false once every placeholder is written.
  draft: boolean;
  // Every field below is optional on the live site: anything empty or still
  // a placeholder is left out on nunofm.com, heading and all.
  // One line on who the client is.
  about?: string;
  // The goal, in the client's terms.
  goal?: string;
  // What I did: 3 to 5 points about decisions, not technology.
  decisions: string[];
  // The result.
  result?: string;
  // A short client quote, written without quotation marks.
  quote?: { text: string; author?: string };
};

export type Project = {
  slug: string;
  // Client name, used as the case-study heading.
  name: string;
  // Card title on the Work page, also the image alt text.
  title: string;
  url?: string;
  image?: string;
  year: string;
  // What I did on the project.
  role: string;
  // Credit for a designer other than me, shown on the case study.
  designer?: { name: string; url?: string };
  description: string;
  // Shown as the stack tags.
  technologies: string[];
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "luisa-hentsch",
    name: "Luisa Hentsch",
    title: "Portfolio Website for Luisa Hentsch",
    url: "https://luisahentsch.com/",
    image: "/work/luisa-hentsch.jpg",
    year: "2025",
    role: "Development",
    designer: { name: "Luisa Hentsch" },
    description:
      "A minimal editorial portfolio for artist Luisa Hentsch, with Sanity-powered content editing.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity"],
  },
  {
    slug: "alan-louis",
    name: "Alan Louis",
    title: "E-commerce Website for Alan Louis",
    url: "https://alanlouisparis.com/",
    image: "/work/alan-louis.jpg",
    year: "2026",
    role: "Design & Development",
    description:
      "A bilingual headless storefront for the Paris design boutique Alan Louis: editorial, image-led, built on Shopify and Sanity.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Shopify",
      "Sanity",
      "Tailwind CSS",
    ],
    // Drafted 2026-11-21 from the client file (freelance-ops), the client's
    // own bio, the repo, and the old Wix site on the Internet Archive.
    // Before setting draft: false, get the client's OK to publish a case
    // study (still open in growth.md).
    caseStudy: {
      draft: true,
      // Source: the client's bio (BIO_EV_Alan Louis_vdef.pdf).
      about:
        "Alan Louis is a self-taught ceramist from Brittany who makes furniture, lighting and objects by hand in his workshops in Portugal.",
      // From Nuno, 2026-11-21.
      goal: "A website that truly represents him and where he can actually sell his art.",
      decisions: [
        // Repo: enquiry form on every product; price hidden from €4,000.
        "Every piece has its own enquiry form that goes straight to the studio. On the highest-priced pieces the price is on request, so a serious buyer starts a conversation rather than a checkout.",
        // Repo: "minimal and image-led".
        "A quiet layout where the photographs of each piece carry the page and the text stays out of the way.",
        // Repo: Sanity Studio with the editors' guide built in.
        "The studio can update its projects, press and pages itself, with a guide built into the editor.",
      ],
      // The result should answer "sell his art": count the price requests
      // since launch ("Price request" emails in Brevo or the alp@ inbox),
      // then: "Since launch, [N] price requests have come through the site."
      // Once the shop opens for pieces under €1,000, add online orders.
      // Not a result: the launch post pinned first on his Instagram (an
      // endorsement); use it when asking for the quote instead.
      result: `${PLACEHOLDER} The result.`,
      // No quote on file yet: the launch post's thank-you is a credit, not a
      // quote. Ask right after a monthly summary, with the case-study OK.
      quote: {
        text: `${PLACEHOLDER} A short client quote.`,
        author: `${PLACEHOLDER} Name, role`,
      },
    },
  },
  {
    slug: "slow-sunday-rituals",
    name: "Slow Sunday Rituals",
    title: "Website for Slow Sunday Rituals",
    year: "2026",
    role: "Design & Development",
    description:
      "An editorial website for German nutritionist Amélie's wellness practice, Slow Sunday Rituals.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

// Fail closed: drafts only appear when we know this isn't the live site.
const showDrafts =
  process.env.NODE_ENV === "development" ||
  process.env.VERCEL_ENV === "preview";

// The case study to show for a project, or undefined if it has none yet
// (or it's a draft and this is the live site).
export function visibleCaseStudy(project: Project): CaseStudy | undefined {
  const caseStudy = project.caseStudy;
  return caseStudy && (!caseStudy.draft || showDrafts) ? caseStudy : undefined;
}

export function isPlaceholder(text: string) {
  return text.startsWith(PLACEHOLDER);
}

// Whether a piece of case-study text renders. Written text always does and
// empty text never does. Placeholders only show where drafts show, so on
// nunofm.com an unwritten section is left out instead.
export function shows(text?: string): text is string {
  if (!text?.trim()) return false;
  return !isPlaceholder(text) || showDrafts;
}
