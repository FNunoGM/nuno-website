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

export const viewport: Viewport = {
  themeColor: "#22110a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>
        {children}
        {/* Mobile-only fade masks so scrolling content dissolves into the background
            near the fixed Header (top) and Navigation (bottom) instead of passing under them.
            Multi-stop gradient approximates an ease-out curve for a softer falloff. */}
        <div
          aria-hidden
          className="fixed top-0 left-0 right-0 h-40 z-40 pointer-events-none md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, color-mix(in srgb, var(--background) 95%, transparent) 15%, color-mix(in srgb, var(--background) 85%, transparent) 25%, color-mix(in srgb, var(--background) 73%, transparent) 35%, color-mix(in srgb, var(--background) 59%, transparent) 45%, color-mix(in srgb, var(--background) 45%, transparent) 55%, color-mix(in srgb, var(--background) 31%, transparent) 65%, color-mix(in srgb, var(--background) 19%, transparent) 75%, color-mix(in srgb, var(--background) 9%, transparent) 85%, color-mix(in srgb, var(--background) 3%, transparent) 92%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="fixed bottom-0 left-0 right-0 h-36 z-40 pointer-events-none md:hidden"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, color-mix(in srgb, var(--background) 95%, transparent) 15%, color-mix(in srgb, var(--background) 85%, transparent) 25%, color-mix(in srgb, var(--background) 73%, transparent) 35%, color-mix(in srgb, var(--background) 59%, transparent) 45%, color-mix(in srgb, var(--background) 45%, transparent) 55%, color-mix(in srgb, var(--background) 31%, transparent) 65%, color-mix(in srgb, var(--background) 19%, transparent) 75%, color-mix(in srgb, var(--background) 9%, transparent) 85%, color-mix(in srgb, var(--background) 3%, transparent) 92%, transparent 100%)",
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
