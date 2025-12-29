import Cases from "./sections/cases";
import Curiosity from "./sections/curiosity";
import Header from "./sections/header";
import Hero from "./sections/hero";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 w-full">
        <Header />
        <Hero />
        <Curiosity />
        <Cases />
      </main>
    </div>
  )
}
