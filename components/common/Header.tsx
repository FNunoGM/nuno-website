// components/home/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 px-8 lg:px-16 pt-8 lg:pt-12 z-50">
      <Link
        href="/"
        className="font-serif text-3xl md:text-4xl tracking-[0.20em] lg:tracking-[0.30em] uppercase opacity-100 hover:opacity-70 transition-opacity duration-500"
      >
        Nuno Mendes
      </Link>
    </header>
  );
}
