"use client";

import About from "./sections/about";
import Cases from "./sections/cases";
import FAQ from "./sections/faq";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Process from "./sections/process";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 w-full">
        <Header />
        <Hero />
        <Cases />
        <About />
        <Process />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
