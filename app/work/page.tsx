// app/work/page.tsx
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import PageTransition from "@/components/common/PageTransition";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const projects = [
    {
      title: "Luisa Hentsch",
      url: "https://luisahentsch.com/",
      image: "/work/luisa-hentsch.jpg",
      technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS"],
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
              <h1 className="font-serif text-s md:text-lg tracking-[0.25em] lg:tracking-[0.35em] uppercase">
                Currently working on
              </h1>
            </div>

            {/* RIGHT - Projects */}
            <div className="w-full lg:w-1/2 space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="space-y-4">
                  {/* Clickable Image */}
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="overflow-hidden rounded-sm group w-3/4 justify-self-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={600}
                        className="w-full object-cover transition-opacity duration-500 group-hover:opacity-70"
                      />
                    </div>
                  </Link>

                  {/* Technologies */}
                  <ul className="flex gap-4 flex-wrap justify-center mt-5">
                    {project.technologies.map((tech, i) => (
                      <li
                        key={i}
                        className="font-sans text-xs md:text-base tracking-[0.15em] uppercase text-japandi-dark/60"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
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
