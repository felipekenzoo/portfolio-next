import Hat from "../components/hat";
import { MousePointer } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col w-full items-center justify-start bg-[url('/bg-hero2.jpg')] bg-cover bg-center bg-no-repeat py-160 md:pt-32 text-center overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 md:h-56 bg-linear-to-t from-black/50 to-transparent" />

      <div className="relative flex flex-col items-center w-full px-4 gap-6">
        <Hat
          icon={<MousePointer size={20} />}
          title="Desenvolvedor Front-end e UI/UX Designer"
        />

        <h1 className="text-4xl md:text-7xl font-semibold text-white max-w-5xl tracking-tight leading-tight drop-shadow-lg">
          Construindo experiências digitais, do design ao código.
        </h1>

        <p className="text-lg md:text-xl text-zinc-200 font-light max-w-2xl leading-relaxed drop-shadow-md">
          Meu trabalho é transformar ideias e layouts em código limpo e
          responsivo.
          <br className="hidden md:block" />
          Pensando na experiência do usuário em cada etapa do desenvolvimento.
        </p>
      </div>
    </section>
  );
}
