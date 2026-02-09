// app/layout.tsx (Next.js 13+ app router example)
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
      <body>{children}</body>
    </html>
  );
}
