// app/not-found.tsx
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import PageTransition from "@/components/common/PageTransition";

export default function NotFound() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen px-8 lg:px-16 content-center">
          <h1 className="font-serif text-2xl md:text-3xl text-center">
            Page not found.
          </h1>
        </main>
      </PageTransition>
      <Navigation markCurrent={false} />
    </>
  );
}
