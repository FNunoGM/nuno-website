// app/work/page.tsx
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import PageTransition from "@/components/common/PageTransition";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  url?: string;
  image?: string;
  year: string;
  role: string;
  description: string;
  technologies: string[];
};

export default function Work() {
  const projects: Project[] = [
    {
      title: "Portfolio Website for Luisa Hentsch",
      url: "https://luisahentsch.com/",
      image: "/work/luisa-hentsch.jpg",
      year: "2025",
      role: "Development",
      description:
        "A minimal editorial portfolio for artist Luisa Hentsch, with Sanity-powered content editing.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Sanity",
      ],
    },
    {
      title: "E-commerce Website for Alan Louis",
      year: "2026",
      role: "Design & Development",
      description:
        "A bilingual headless storefront for the Paris design boutique Alan Louis — editorial, image-led, built on Shopify and Sanity.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Shopify",
        "Sanity",
        "Tailwind CSS",
      ],
    },
    {
      title: "Website for Slow Sunday Rituals",
      year: "2026",
      role: "Design & Development",
      description:
        "An editorial website for German nutritionist Amélie's wellness practice, Slow Sunday Rituals.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen px-8 lg:px-16 pt-40 pb-36 lg:py-16 content-center">
          <div>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {projects.map((project, index) => (
                <article key={index} className="space-y-5">
                  {project.image && project.url ? (
                    <div className="overflow-hidden rounded-sm shadow-xl aspect-[16/10]">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={900}
                          height={600}
                          className="w-full h-full object-contain transition-opacity duration-500 hover:opacity-70"
                        />
                      </Link>
                    </div>
                  ) : (
                    <div className="aspect-[16/10] w-full rounded-sm bg-japandi-mid/15 flex items-center justify-center">
                      <span className="font-serif text-xs tracking-[0.30em] uppercase opacity-60">
                        Coming soon
                      </span>
                    </div>
                  )}

                  {/* Meta */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline gap-3">
                      {project.url ? (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-xs tracking-[0.20em] leading-snug hover:opacity-70 transition-opacity"
                        >
                          {project.title}
                        </Link>
                      ) : (
                        <h2 className="font-sans text-xs tracking-[0.20em] leading-snug">
                          {project.title}
                        </h2>
                      )}
                      <span className="font-sans text-xs tracking-[0.20em] opacity-60 shrink-0">
                        {project.year}
                      </span>
                    </div>
                    <p className="font-sans text-xs tracking-[0.10em] opacity-70">
                      {project.role}
                    </p>
                    <ul className="flex gap-3 flex-wrap pt-1">
                      {project.technologies.map((tech, i) => (
                        <li
                          key={i}
                          className="font-sans text-xs tracking-[0.20em] uppercase opacity-50"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
      </PageTransition>
      <Navigation />
    </>
  );
}
