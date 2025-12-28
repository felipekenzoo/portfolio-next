import Header from "./pages/header";
import Hero from "./pages/hero";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 w-full">
        <Header />
        <Hero />
      </main>
    </div>
  )
}
