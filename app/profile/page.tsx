import Header from "@/components/home/Header";
import Navigation from "@/components/home/Navigation";

export default function Profile() {
  const skills = ["JAVASCRIPT", "TYPESCRIPT", "HTML/CSS", "REACT", "NEXT.JS"];

  return (
    <>
      <Header />
      <main className="min-h-screen px-8 lg:px-16 py-16 content-center">
        <div className="flex">
          {/* LEFT - Title */}
          <div className="w-1/2 justify-items-end">
            <h1 className="font-serif text-3xl tracking-[0.15em] uppercase">
              Skills & Stack
            </h1>
          </div>

          {/* RIGHT - Skills */}
          <div className="w-1/2 justify-items-end">
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="font-sans text-base tracking-[0.08em] uppercase "
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
