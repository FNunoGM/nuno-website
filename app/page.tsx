// app/page.tsx
import Image from "next/image";

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
            {/* <div className="justify-self-center overflow-hidden rounded-3xl bg-japandi-card/40 aspect-[3/4] max-h-[400px] lg:max-h-[500px]">
              <Image
                src="/nuno1.jpg"
                alt="Nuno"
                width={900}
                height={600}
                className="w-full h-full object-cover"
              />
            </div> */}

            <p className="absolute -top-8 lg:-top-12 left-0 font-serif text-3xl md:text-4xl tracking-[0.18em] uppercase">
              Nuno Mendes
            </p>
            {/* <p className="justify-self-end mt-6 font-serif text-4xl md:text-8xl tracking-[0.18em] uppercase">
              Nuno Mendes
            </p> */}

            <div className="justify-items-end mt-100 text-s tracking-[0.25em] text-japandi-dark/70">
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

          {/* Right column: intro block */}
          {/* <div className="space-y-8">
            <article className="bg-japandi-light/70 rounded-3xl p-8 lg:p-10 shadow-[0_0_40px_rgba(0,0,0,0.03)]">
              <h2 className="font-serif text-2xl mb-4 leading-snug">
                I was once just like <span className="italic">you.</span>
              </h2>
              <p className="font-sans text-sm leading-relaxed text-japandi-dark/80">
                Begin to tell your story in a way that feels grounded, calm, and
                deeply human. Share the moment everything changed, and the
                beliefs you left behind to build something new.
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-japandi-dark/80">
                Use this space to connect the dots between your journey and your
                reader&apos;s. Invite them into a softer, slower approach to
                wealth that honours their values and their nervous system.
              </p>
            </article>

            <div className="overflow-hidden rounded-3xl bg-japandi-card/40">
              <Image
                src="/secondary.jpg" // replace with your image
                alt="Olivia in a calm workspace"
                width={900}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
      </section>

      <section className="px-8 lg:px-16 py-6 absolute left-0 right-0 bottom-0">
        {/* Navigation menu aligned to the left */}
        <div className="mt-3 flex flex-nowrap items-center justify-start gap-10">
          <button className="font-serif text-s tracking-[0.35em] uppercase leading-none">
            Work
          </button>
          <button className="font-serif text-s tracking-[0.35em] uppercase leading-none">
            Profile
          </button>
          <button className="font-serif text-s tracking-[0.35em] uppercase leading-none">
            Contact
          </button>
        </div>
      </section>

      {/* Simple bottom bar */}
      <footer className="self-end mt-auto px-8 lg:px-16 py-6 flex justify-between items-center text-[11px] tracking-[0.25em] uppercase text-japandi-dark/60">
        {/* <p>© {new Date().getFullYear()} Nuno Mendes</p> */}
        <div className="flex items-center justify-between">
          {/* Social Icons */}
          <nav className="flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-japandi-dark/70">
            {/* Instagram icon */}
            {/* <a
              href="https://www.instagram.com/fnuno91/"
              className="hover:text-japandi-dark"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a> */}
            {/* LinkedIn icon */}
            {/* <a
              href="https://www.linkedin.com/in/fnunogm/"
              className="hover:text-japandi-dark"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a> */}
            {/* GitHub icon */}
            {/* <a
              href="https://github.com/FNunoGM"
              className="hover:text-japandi-dark"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.643.105-3.372 0 0 1.05-.336 3.44 1.28 1-.28 2.07-.41 3.13-.415 1.06.006 2.13.135 3.13.415 2.39-1.616 3.445-1.28 3.445-1.28.645 1.729.24 3.069.12 3.372.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a> */}
          </nav>
        </div>
      </footer>
    </main>
  );
}
