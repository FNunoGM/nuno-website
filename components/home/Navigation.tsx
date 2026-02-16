// components/common/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 px-8 lg:px-16 py-6 z-50">
      <div className="flex gap-6 lg:gap-10 justify-center lg:justify-start">
        <Link
          href="/work"
          className="font-serif text-s lg:text-xs tracking-[0.25em] lg:tracking-[0.35em] uppercase"
        >
          Work
        </Link>
        <Link
          href="/profile"
          className="font-serif text-s lg:text-xs tracking-[0.25em] lg:tracking-[0.35em] uppercase"
        >
          Profile
        </Link>
        <Link
          href="/contact"
          className="font-serif text-s lg:text-xs tracking-[0.25em] lg:tracking-[0.35em] uppercase"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
