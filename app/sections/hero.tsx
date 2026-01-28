"use client";

import Hat from "../components/hat";
import { MousePointer } from "lucide-react";
import Beams from "@/app/components/Beams";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col w-full items-center py-32 justify-start bg-cover bg-center bg-no-repeat md:pt-56 md:py-56 text-center overflow-hidden pb-10"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#bababa"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 md:h-56 bg-linear-to-t from-black/90 to-transparent z-10" />

      <div className="relative z-20 flex flex-col items-center w-full px-2 gap-6">
        <Hat
          icon={<MousePointer size={20} />}
          title="Desenvolvedor Front-end e UI/UX Designer"
        />

        <h1 className="text-4xl md:text-7xl font-semibold text-white max-w-5xl tracking-tight leading-tight drop-shadow-lg">
          Construindo experiências digitais, do design ao código.
        </h1>

        <p className="text-md md:text-xl text-zinc-200 font-light max-w-2xl leading-relaxed drop-shadow-md">
          Meu trabalho é transformar ideias e layouts em código limpo e
          responsivo. <br className="hidden md:block" />
          <br className="lg:hidden md:block" />
          Pensando na experiência do usuário em cada etapa do desenvolvimento.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/felipesunakozawa/"
            className="py-3 px-7 border font-semibold text-md border-neutral-300 text-neutral-50 rounded-2xl hover:px-10 hover:bg-zinc-50 hover:text-neutral-950 transition-all duration-300 ease-in-out sm:text-md"
          >
            Fale comigo
          </a>
          <a
            href="#cases"
            className="py-3 px-7 bg-neutral-50 font-semibold rounded-2xl text-md sm:text-md hover:px-10 hover:bg-zinc-50 hover:text-neutral-950 transition-all duration-300 ease-in-out"
          >
            Ver meus projetos
          </a>
        </div>
      </div>
    </section>
  );
}
