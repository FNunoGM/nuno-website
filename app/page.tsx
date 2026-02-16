// app/page.tsx
import Navigation from "@/components/home/Navigation";
import Hero from "@/components/home/Hero";
import Header from "@/components/home/Header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Navigation />
    </main>
  );
}
