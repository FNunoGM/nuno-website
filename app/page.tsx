// app/page.tsx
import Navigation from "@/components/common/Navigation";
import Hero from "@/components/common/Hero";
import Header from "@/components/common/Header";
import PageTransition from "@/components/common/PageTransition";

export default function Home() {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          <Hero />
        </main>
      </PageTransition>
      <Navigation />
    </>
  );
}
