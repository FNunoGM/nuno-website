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
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
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
                Currently working on
              </h1>
            </div>

            {/* RIGHT - Projects */}
            <div className="w-full lg:w-1/2 space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex flex-col items-center">
                    <div className="overflow-hidden rounded-sm group w-2/3 shadow-xl rounded-sm">
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
                  </div>

                  {/* Title */}
                  <div className="flex justify-center mt-6">
                    <h2 className="font-sans text-sm tracking-[0.20em]">
                      {project.title}
                    </h2>
                  </div>
                  {/* Technologies */}
                  <ul className="flex gap-4 flex-wrap justify-center mt-6">
                    {project.technologies.map((tech, i) => (
                      <li
                        key={i}
                        className="font-sans text-xs tracking-[0.20em] uppercase"
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
