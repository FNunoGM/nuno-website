// components/common/Navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
];

// markCurrent={false} on pages that aren't a nav destination (e.g. the 404),
// so an unknown URL like /work/foo doesn't underline Work.
export default function Navigation({
  markCurrent = true,
}: {
  markCurrent?: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 px-8 lg:px-16 py-3 z-50">
      <div className="flex gap-6 lg:gap-10 justify-center lg:justify-start">
        {links.map(({ href, label }) => {
          const current =
            markCurrent &&
            (pathname === href || pathname.startsWith(`${href}/`));
          return (
            <Link
              key={href}
              href={href}
              aria-current={current ? "page" : undefined}
              className={`relative py-3 font-serif text-sm md:text-lg tracking-[0.20em] lg:tracking-[0.30em] uppercase opacity-100 hover:opacity-70 transition-opacity duration-500 ${
                current
                  ? "after:absolute after:left-0 after:right-[0.20em] lg:after:right-[0.30em] after:bottom-2 after:h-px after:bg-current"
                  : ""
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
