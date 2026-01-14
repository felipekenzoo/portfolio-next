"use client";

import Question from "../components/question";

export default function FAQ() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 xl:px-96 bg-zinc-50/98 py-16 md:py-20"
      id="faq"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between">
        <div
          id="left"
          className="flex flex-col gap-8 w-full lg:w-80 lg:shrink-0 justify-between h-fit"
        >
          <div id="top">
            <h2 className="text-zinc-950 text-3xl md:text-4xl font-semibold">
              Perguntas Frequentes
            </h2>
            <p className="text-zinc-700 text-md pt-2">
              Separei aqui as principais dúvidas que clientes costumam ter sobre
              meu trabalho, prazos e forma de atuação. Assim você já entende
              como trabalho antes mesmo de entrarmos em contato.
            </p>
          </div>
          
          <div id="bottom">
            <div className="p-6 bg-zinc-50/75 rounded-3xl border border-zinc-200/60">
              <h3 className="text-zinc-900 text-xl md:text-2xl font-semibold">
                Ainda com dúvidas?
              </h3>
              <p className="text-zinc-600 pt-2">
                Não encontrou a resposta para sua pergunta? Você pode entrar em
                contato comigo pelo meu e-mail, vamos discutir sobre seu
                projeto!
              </p>
              <span className="text-blue-600 pt-2 block font-semibold wrap-break-word">
                felipe.sunakozawa@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div id="right" className="flex flex-col gap-6 w-full lg:max-w-xl">
          <Question
            question="Você atua com design ou desenvolvimento?"
            answer="Atuo tanto com design de interfaces quanto com desenvolvimento front-end. Posso entregar apenas o design ou o site completo, depende da sua necessidade."
          />

          <Question
            question="Qual é o prazo médio para a entrega de um projeto?"
            answer="O prazo varia conforme a complexidade. Projetos simples podem levar cerca de 2 semanas, enquanto projetos mais complexos podem levar de 4 a 8 semanas."
          />

          <Question
            question="Quais tecnologias você utiliza no desenvolvimento front-end?"
            answer="Hoje trabalho com React, Next.js e Tailwind CSS. Também tenho experiência com HTML, CSS e JavaScript puro."
          />

          <Question
            question="Você oferece suporte após a entrega do projeto?"
            answer="Sim, ofereço suporte por 30 dias após a entrega para ajustes e dúvidas. Também posso fornecer manutenção contínua mediante acordo prévio."
          />
        </div>
      </div>
    </section>
  );
}
