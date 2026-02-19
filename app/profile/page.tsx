import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import PageTransition from "@/components/common/PageTransition";

export default function Profile() {
  const skills = [
    "JAVASCRIPT",
    "TYPESCRIPT",
    "HTML/CSS",
    "REACT",
    "NEXT.JS",
    "TAILWIND CSS",
    "SASS",
    "STYLED COMPONENTS",
    "GIT",
    "FIGMA",
  ];

  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen px-8 lg:px-16 py-16 lg:py-24 content-center">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            {/* LEFT - Title */}
            <div className="w-full lg:w-1/2 lg:justify-items-start content-center">
              <h1 className="font-serif text-s md:text-lg tracking-[0.20em] lg:tracking-[0.30em] uppercase">
                Skills & Stack
              </h1>
            </div>

            {/* RIGHT - Skills */}
            <div className="w-full lg:w-1/2 lg:justify-items-start">
              <ul className="space-y-3 lg:space-y-4">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="font-sans text-xs md:text-xs tracking-[0.20em] uppercase"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </PageTransition>
      <Navigation />
    </>
  );
}
