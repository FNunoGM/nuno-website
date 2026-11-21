// app/profile/page.tsx
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import PageTransition from "@/components/common/PageTransition";

const promises = [
  "A site made for your brand, not a template.",
  "One fixed price, agreed in writing before work starts.",
  "Everything in your name: your shop, your content, your domain.",
  "Pages you can update yourself.",
  "Care after launch: hosting, updates, fixes and small changes every month.",
];

const tools = ["Shopify", "Sanity", "Next.js", "Vercel"];

const label = "font-sans text-xs tracking-[0.30em] uppercase opacity-70";

export default function Profile() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen px-8 lg:px-16 pt-40 pb-40 md:py-32 content-center">
          <h1 className="sr-only">Profile</h1>
          <div className="mx-auto max-w-[34rem]">
            <p className="font-serif text-xl md:text-2xl leading-snug text-pretty">
              I&rsquo;m Nuno, a web developer in Lisbon. I&nbsp;build websites
              and online shops for independent brands, studios and artists, with
              clients in Portugal, Germany and Dubai.
            </p>

            <h2 className={`mt-10 md:mt-12 ${label}`}>What you get</h2>
            <ul className="mt-4 space-y-3 font-serif text-base md:text-lg leading-relaxed">
              {promises.map((promise) => (
                <li
                  key={promise}
                  className="relative pl-6 text-pretty before:absolute before:left-0 before:top-[0.75em] before:size-1 before:rounded-full before:bg-japandi-mid"
                >
                  {promise}
                </li>
              ))}
            </ul>

            <h2 className={`mt-10 md:mt-12 ${label}`}>Tools</h2>
            <p className="mt-3 font-sans text-xs tracking-[0.20em] uppercase">
              {tools.join(" · ")}
            </p>
          </div>
        </main>
      </PageTransition>
      <Navigation />
    </>
  );
}
