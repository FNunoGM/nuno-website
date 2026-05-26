// app/work/page.tsx
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import PageTransition from "@/components/common/PageTransition";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const projects = [
    {
      title: "Portfolio Website for Luisa Hentsch",
      url: "https://luisahentsch.com/",
      image: "/work/luisa-hentsch.jpg",
      year: "2025",
      role: "Design & Development",
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
  ];

  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen px-8 lg:px-16 py-16 content-center">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            {/* LEFT - Title */}
            <div className="w-full lg:w-1/4 content-center">
              <h1 className="font-serif text-s md:text-lg tracking-[0.20em] lg:tracking-[0.30em] uppercase">
                Work
              </h1>
            </div>

            {/* RIGHT - Projects */}
            <div className="w-full lg:w-1/2 space-y-16">
              {projects.map((project, index) => (
                <div key={index} className="space-y-6">
                  <div className="overflow-hidden rounded-sm shadow-xl">
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
                        className="w-full object-cover transition-opacity duration-500 hover:opacity-70"
                      />
                    </Link>
                  </div>

                  {/* Meta */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline gap-4">
                      <h2 className="font-sans text-sm tracking-[0.20em]">
                        {project.title}
                      </h2>
                      <span className="font-sans text-xs tracking-[0.20em] opacity-60 shrink-0">
                        {project.year}
                      </span>
                    </div>
                    <p className="font-sans text-xs tracking-[0.10em] opacity-70 leading-relaxed">
                      {project.role} — {project.description}
                    </p>
                    <ul className="flex gap-4 flex-wrap pt-2">
                      {project.technologies.map((tech, i) => (
                        <li
                          key={i}
                          className="font-sans text-xs tracking-[0.20em] uppercase opacity-60"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs tracking-[0.20em] uppercase inline-block pt-4 hover:opacity-70 transition-opacity"
                    >
                      Visit site ↗
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </PageTransition>
      <Navigation />
    </>
  );
}
