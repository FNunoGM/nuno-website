// app/layout.tsx (Next.js 13+ app router example)
import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Self-hosted at build time. Variable weight plus optical size, so the
// tracked caps in the header/nav and the large hero line each get the right cut.
const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal"],
  display: "swap",
  variable: "--font-newsreader",
});

const title = "Nuno Mendes – Websites for independent brands and studios";
const description =
  "Websites and online shops for independent brands, studios and artists. Based in Lisbon, working worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nunofm.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Nuno Mendes",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// Matches the background in app/globals.css, which follows the visitor's light/dark setting.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d1c0ab" },
    { media: "(prefers-color-scheme: dark)", color: "#22110a" },
  ],
  colorScheme: "light dark",
};

// Solid behind the header/nav text so it stays legible over bright images,
// then an ease-out falloff (multi-stop approximation) to transparent.
const fadeStops: [number, number][] = [
  [100, 45],
  [95, 52],
  [85, 58],
  [73, 64],
  [59, 70],
  [45, 76],
  [31, 82],
  [19, 88],
  [9, 93],
  [3, 97],
  [0, 100],
];
const fade = (direction: "top" | "bottom") =>
  `linear-gradient(to ${direction}, var(--background) 0%, ${fadeStops
    .map(
      ([opacity, at]) =>
        `color-mix(in srgb, var(--background) ${opacity}%, transparent) ${at}%`,
    )
    .join(", ")})`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>
        {children}
        {/* Fade masks so scrolling content dissolves into the background
            near the fixed Header (top) and Navigation (bottom) instead of passing under them. */}
        <div
          aria-hidden
          className="fixed top-0 left-0 right-0 h-28 md:h-40 z-40 pointer-events-none"
          style={{ background: fade("bottom") }}
        />
        <div
          aria-hidden
          className="fixed bottom-0 left-0 right-0 h-28 md:h-32 z-40 pointer-events-none"
          style={{ background: fade("top") }}
        />
        <Analytics />
      </body>
    </html>
  );
}
