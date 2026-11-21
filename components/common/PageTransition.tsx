// components/common/PageTransition.tsx
// CSS-only fade-in. Runs as soon as the stylesheet loads, so content never
// waits on JavaScript (slow phones, in-app browsers). See .page-fade in globals.css.

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-fade">{children}</div>;
}
