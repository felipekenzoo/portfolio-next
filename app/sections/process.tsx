import ProcessCard from "../components/processCard";
import { Search, Code, Crop, Rocket } from "lucide-react";

export default function Process() {
  return (
    <section
      className="flex flex-col py-16 md:py-20 px-6 md:px-12 lg:px-28 bg-neutral-950"
      id="process"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-neutral-50/90 text-3xl md:text-4xl lg:text-5xl font-medium">
          Como posso te ajudar?
        </h2>
        <p className="text-neutral-400 py-4 text-base md:text-lg">
          Conheça meu processo criativo e descubra como eu posso te ajudar a
          fortalecer a sua presença digital.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-10 max-w-7xl mx-auto w-full">
        <ProcessCard
          index="01"
          icon={<Search />}
          title="Pesquisa"
          description="Analiso negócio e concorrentes para identificar necessidades reais e alinhar o design aos objetivos."
        />
        <ProcessCard
          index="02"
          icon={<Crop />}
          title="Design"
          description="Crio fluxos, wireframes e interfaces visuais focadas em clareza, usabilidade e consistência."
        />
        <ProcessCard
          index="03"
          icon={<Code />}
          title="Desenvolvimento"
          description="Transformo o design em interfaces reais, garantindo fidelidade visual e eficiência no desenvolvimento."
        />
        <ProcessCard
          index="04"
          icon={<Rocket />}
          title="Entrega"
          description="Entrego o projeto finalizado com toda a documentação necessária, garantindo clareza e prontidão."
        />
      </div>
      <div className="flex justify-between max-w-7xl mx-auto w-full pt-10 mt-10 border-t border-neutral-800/80 pb-6 md:pb-0 flex-col md:flex-row gap-4 md:gap-0">
        <h6 className="text-md text-neutral-100">
          Pensando no usuário em cada etapa do processo
          <span className="text-md font-light text-neutral-400">
            {" "}
            • User Centered Design
          </span>
        </h6>
        <div>
          <h6 className="text-md w-fit pt-10 text-neutral-200/80 md:w-xl md:pt-0">
            O design não é apenas o que o usuário vê, é como ele se sente.
            Integro visão de negócio, conteúdo e design para eliminar atritos e
            garantir que cada interação conte a favor da sua métrica principal.
          </h6>
        </div>
      </div>
    </section>
  );
}
