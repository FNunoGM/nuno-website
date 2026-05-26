import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import PageTransition from "@/components/common/PageTransition";

export default function Profile() {
  const skillGroups = [
    {
      category: "Stack",
      items: ["Next.js", "TypeScript", "React", "Tailwind"],
    },
    {
      category: "Commerce & CMS",
      items: ["Shopify", "Sanity"],
    },
    {
      category: "Tools",
      items: ["Vercel", "Figma"],
    },
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
              <ul className="space-y-8 lg:space-y-10">
                {skillGroups.map((group) => (
                  <li key={group.category}>
                    <h2 className="font-sans text-xs tracking-[0.30em] uppercase opacity-60 mb-2 lg:mb-3">
                      {group.category}
                    </h2>
                    <p className="font-sans text-xs md:text-xs tracking-[0.20em] uppercase">
                      {group.items.join(" · ")}
                    </p>
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
