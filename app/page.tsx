// app/page.tsx
import Navigation from "@/components/home/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top announcement bar */}

      {/* Header - socials LEFT, menu RIGHT */}
      <header className="px-8 lg:px-40 py-6"></header>

      {/* Hero section - lowered */}
      <section className="px-8 lg:px-16 pb-16 pt-8 lg:pt-12">
        <div className="grid lg:grid-cols-[3fr,2fr] gap-10 items-end">
          {/* Left: image + big text */}
          <div className="relative">
            <p className="absolute -top-8 lg:-top-12 left-0 font-serif md:text-4xl tracking-[0.18em] uppercase">
              Nuno Mendes
            </p>
            <div className="justify-items-end mt-100 text-xs md:text-lg tracking-[0.25em] text-japandi-dark/70">
              <p>
                Front-End Developer based in Portugal and working worldwide
                remotely.
              </p>
              <p>
                Focusing on crafting digital experiences with a modern and
                unique approach.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Navigation />
    </main>
  );
}
