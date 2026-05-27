// app/layout.tsx (Next.js 13+ app router example)
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Nuno Mendes – Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
