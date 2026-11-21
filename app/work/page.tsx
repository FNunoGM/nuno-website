// app/work/page.tsx
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import PageTransition from "@/components/common/PageTransition";
import Image from "next/image";
import Link from "next/link";
import { projects, visibleCaseStudy } from "@/content/projects";

export default function Work() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen px-8 lg:px-16 pt-28 pb-28 md:pt-40 md:pb-36 lg:py-16 content-center">
          <h1 className="sr-only">Work</h1>
          <div>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {projects.map((project, index) => {
                // A project with a case study opens it; the rest go to the live site.
                const href = visibleCaseStudy(project)
                  ? `/work/${project.slug}`
                  : project.url;
                const external =
                  href === project.url
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {};
                return (
                  <article
                    key={project.slug}
                    className="group relative space-y-5"
                  >
                    {project.image ? (
                      <div className="overflow-hidden rounded-sm shadow-xl aspect-[16/10]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={900}
                          height={600}
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          preload={index === 0}
                          className="w-full h-full object-contain motion-safe:transition-transform motion-safe:duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] w-full rounded-sm bg-japandi-mid/15 flex items-center justify-center">
                        <span className="font-serif text-xs tracking-[0.30em] uppercase opacity-70">
                          Coming soon
                        </span>
                      </div>
                    )}

                    {/* Meta */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-baseline gap-3">
                        <h2 className="font-sans text-xs tracking-[0.20em] leading-snug">
                          {href ? (
                            // One link per card: its ::after covers the whole
                            // card, so the image and text are clickable too.
                            <Link
                              href={href}
                              {...external}
                              className="decoration-1 decoration-japandi-mid underline-offset-[0.4em] group-hover:underline focus-visible:outline-none after:absolute after:inset-0 focus-visible:after:outline-1 focus-visible:after:outline-offset-4 focus-visible:after:outline-current"
                            >
                              {project.title}
                              {external.target && (
                                <span className="sr-only">
                                  {" "}
                                  (opens in a new tab)
                                </span>
                              )}
                            </Link>
                          ) : (
                            project.title
                          )}
                        </h2>
                        <span className="font-sans text-xs tracking-[0.20em] opacity-70 shrink-0">
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
                            className="font-sans text-xs tracking-[0.20em] uppercase opacity-70"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </main>
      </PageTransition>
      <Navigation />
    </>
  );
}
