//Navigation.tsx

export default function Navigation() {
  return (
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
  );
}
