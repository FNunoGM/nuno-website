// app/page.tsx
import Navigation from "@/components/common/Navigation";
import Hero from "@/components/common/Hero";
import Header from "@/components/common/Header";
import PageTransition from "@/components/common/PageTransition";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <PageTransition>
        <Hero />
      </PageTransition>
      <Navigation />
    </main>
  );
}
