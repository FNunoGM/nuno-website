import Header from "@/components/home/Header";
import Navigation from "@/components/home/Navigation";

export default function Profile() {
  const skills = ["JAVASCRIPT", "TYPESCRIPT", "HTML/CSS", "REACT", "NEXT.JS"];

  return (
    <>
      <Header />
      <main className="min-h-screen px-8 lg:px-16 py-16 lg:py-24 content-center">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* LEFT - Title */}
          <div className="w-full lg:w-1/2 lg:justify-items-end">
            <h1 className="font-serif text-xl lg:text-3xl tracking-[0.15em] uppercase">
              Skills & Stack
            </h1>
          </div>

          {/* RIGHT - Skills */}
          <div className="w-full lg:w-1/2 lg:justify-items-end">
            <ul className="space-y-3 lg:space-y-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="font-sans text-sm lg:text-base tracking-[0.08em] uppercase"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Navigation />
    </>
  );
}
