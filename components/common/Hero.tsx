// components/home/Hero.tsx

export default function Hero() {
  return (
    <section className="min-h-screen px-8 lg:px-16 py-40 md:py-32 content-center">
      <div className="md:max-w-[34rem] lg:max-w-[42rem] md:ml-auto md:text-right">
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.25] lg:leading-[1.2] text-balance">
          Building digital homes for independent brands, studios and artists.
        </h1>
        <p className="mt-6 lg:mt-8 font-sans text-sm lg:text-base leading-relaxed tracking-[0.06em] opacity-80 text-balance">
          Websites and online shops, based in Lisbon, working worldwide.
        </p>
      </div>
    </section>
  );
}
