// app/work/[slug]/page.tsx
// Case-study template. Text comes from content/projects.ts.
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import PageTransition from "@/components/common/PageTransition";
import {
  projects,
  visibleCaseStudy,
  isPlaceholder,
  shows,
} from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

// Only slugs with a visible case study exist; everything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => visibleCaseStudy(project))
    .map((project) => ({ slug: project.slug }));
}

function find(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  const caseStudy = project && visibleCaseStudy(project);
  return project && caseStudy ? { project, caseStudy } : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = find((await params).slug);
  if (!found) return {};
  const { project, caseStudy } = found;

  const title = `${project.name} – Nuno Mendes`;
  const description = shows(caseStudy.about) ? caseStudy.about : undefined;
  // Sharing a case study previews the project itself, not the site-wide image.
  const images = project.image ? [project.image] : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: "Nuno Mendes",
      locale: "en",
      type: "article",
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
    robots: caseStudy.draft ? { index: false, follow: false } : undefined,
  };
}

// Dashed outline on any text that still starts with [Placeholder].
const mark = (text: string) =>
  isPlaceholder(text)
    ? "outline-1 outline-dashed outline-offset-4 outline-japandi-mid"
    : "";

const prose = "font-serif text-lg md:text-xl leading-relaxed";
const label = "font-sans text-xs tracking-[0.30em] uppercase opacity-70";
const rule = "border-t border-japandi-light/15 pt-8 md:pt-10";
const columns = "lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-16";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${rule} ${columns} lg:items-baseline space-y-4 lg:space-y-0`}
    >
      <h2 className={label}>{title}</h2>
      <div className="max-w-[40rem]">{children}</div>
    </section>
  );
}

function ExternalArrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className="w-[0.75em] h-[0.75em] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <path d="M3 9 9 3M4 3h5v5" />
    </svg>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const found = find((await params).slug);
  if (!found) notFound();
  const { project, caseStudy } = found;
  const decisions = caseStudy.decisions.filter((d) => shows(d));
  const host = project.url
    ? new URL(project.url).hostname.replace(/^www\./, "")
    : undefined;

  return (
    <>
      <Header />
      <PageTransition>
        <main className="px-8 lg:px-16 pt-28 md:pt-48 lg:pt-56 pb-48">
          <article className="mx-auto max-w-6xl">
            {/* Name, live site, who the client is, credits */}
            <header className={`${columns} space-y-10 lg:space-y-0`}>
              <div className="space-y-6">
                <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
                  {project.name}
                </h1>
                {project.url && host && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3.5 -my-3.5 md:py-3 md:-my-3 font-sans text-xs md:text-sm tracking-[0.20em] uppercase underline decoration-1 decoration-japandi-mid underline-offset-[0.5em] hover:opacity-70 transition-opacity duration-500"
                  >
                    {host}
                    <ExternalArrow />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>

              <div className="space-y-8 max-w-[40rem]">
                {shows(caseStudy.about) && (
                  <p
                    className={`font-serif text-2xl md:text-3xl leading-snug text-balance ${mark(caseStudy.about)}`}
                  >
                    {caseStudy.about}
                  </p>
                )}
                <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 font-sans text-xs tracking-[0.20em]">
                  <dt className={label}>Role</dt>
                  <dd>{project.role}</dd>
                  {project.designer && (
                    <>
                      <dt className={label}>Design</dt>
                      <dd>
                        {project.designer.url ? (
                          <a
                            href={project.designer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-1 decoration-japandi-mid underline-offset-[0.4em] hover:opacity-70 transition-opacity duration-500"
                          >
                            {project.designer.name}
                          </a>
                        ) : (
                          project.designer.name
                        )}
                      </dd>
                    </>
                  )}
                  <dt className={label}>Year</dt>
                  <dd>{project.year}</dd>
                </dl>
              </div>
            </header>

            {project.image && (
              <figure className="mt-16 md:mt-24">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1728}
                  height={1084}
                  sizes="(min-width: 1280px) 1152px, (min-width: 1024px) calc(100vw - 8rem), calc(100vw - 4rem)"
                  preload
                  className="w-full h-auto rounded-sm shadow-xl"
                />
              </figure>
            )}

            <div className="mt-16 md:mt-24 space-y-16 md:space-y-20">
              {shows(caseStudy.goal) && (
                <Section title="Goal">
                  <p className={`${prose} ${mark(caseStudy.goal)}`}>
                    {caseStudy.goal}
                  </p>
                </Section>
              )}

              {decisions.length > 0 && (
                <Section title="What I did">
                  <ul className="space-y-6">
                    {decisions.map((decision, i) => (
                      <li
                        key={i}
                        className={`relative pl-6 before:absolute before:left-0 before:top-[0.75em] before:size-1 before:rounded-full before:bg-japandi-mid ${prose}`}
                      >
                        <span className={mark(decision)}>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {shows(caseStudy.result) && (
                <Section title="Result">
                  <p className={`${prose} ${mark(caseStudy.result)}`}>
                    {caseStudy.result}
                  </p>
                </Section>
              )}

              {caseStudy.quote && shows(caseStudy.quote.text) && (
                <figure className={`${rule} ${columns}`}>
                  <div className="lg:col-start-2 max-w-[40rem]">
                    <blockquote
                      className={`font-serif text-2xl md:text-3xl leading-snug text-balance ${mark(caseStudy.quote.text)}`}
                    >
                      <p>&ldquo;{caseStudy.quote.text}&rdquo;</p>
                    </blockquote>
                    {shows(caseStudy.quote.author) && (
                      <figcaption
                        className={`mt-6 ${label} ${mark(caseStudy.quote.author)}`}
                      >
                        {caseStudy.quote.author}
                      </figcaption>
                    )}
                  </div>
                </figure>
              )}

              <Section title="Stack">
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="font-sans text-xs tracking-[0.20em] uppercase opacity-70"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          </article>
        </main>
      </PageTransition>
      <Navigation />
    </>
  );
}
