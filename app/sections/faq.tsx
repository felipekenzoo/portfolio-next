"use client";

import { Mail } from "lucide-react";
import Question from "../components/question";

export default function FAQ() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 xl:px-96 bg-neutral-100/95 py-16 md:py-20"
      id="faq"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between">
        <div
          id="left"
          className="flex flex-col gap-20 lg:w-80 lg:shrink-0 justify-between h-fit"
        >
          <div id="top">
            <h2 className="text-neutral-950 text-3xl md:text-4xl font-semibold">
              Perguntas Frequentes
            </h2>
            <p className="text-neutral-700 text-md pt-4">
              Separei aqui as principais dúvidas que clientes costumam ter sobre
              meu trabalho, prazos e forma de atuação. Assim você já entende
              como trabalho antes mesmo de entrarmos em contato.
            </p>
          </div>

          <div id="bottom">
            <div className="p-6 bg-neutral-50/75 rounded-3xl border border-neutral-200/60">
              <h3 className="text-neutral-900 text-xl md:text-2xl font-semibold">
                Prefere falar comigo diretamente?
              </h3>
              <p className="text-neutral-600 pt-4 text-md">
                Sinta-se à vontade para me contatar via e-mail. Estou sempre
                aberto a discutir novos projetos, ideias ou qualquer dúvida que
                você possa ter.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Mail className="text-blue-600 h-5 w-5 font-bold" />
                <span className="text-blue-600 block font-semibold">
                  felipe.sunakozawa@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="right" className="flex flex-col gap-6 w-full lg:max-w-xl">
          <Question
            question="Você entrega o site pronto ou só o layout?"
            answer="Eu entrego o site totalmente funcional, pronto para ser publicado. Isso inclui tanto o design quanto o código front-end. Já trabalhei em projetos apenas com design, mas meu foco principal é entregar soluções completas."
          />

          <Question
            question="Eu preciso chegar com tudo definido?"
            answer="Não necessariamente. Posso ajudar desde a fase inicial de concepção, podemos discutir funcionalidades e ideias juntos. Peço para que os clientes tenham uma visão clara dos objetivos e público-alvo, mas estou aqui para ajudar a moldar o projeto conforme avançamos."
          />

          <Question
            question="Quanto tempo leva para o meu projeto ficar pronto?"
            answer="O prazo de entrega pode variar com a complexidade do projeto e a quantidade de projetos que estou trabalhando no momento. Geralmente, projetos menores podem ser concluídos em uma a duas semanas, tudo será discutido antes do início do trabalho."
          />

          <Question
            question="Tenho um projeto bem grande, você vai dar conta?"
            answer="Caso seja necessário, trabalho com uma rede de parceiros confiáveis para garantir que todos os aspectos do projeto sejam atendidos com qualidade e dentro do prazo. Tudo isso é comunicado desde o início para total transparência."
          />

          <Question
            question="Afinal, quanto custa um projeto com você?"
            answer="O custo do projeto varia conforme a complexidade, funcionalidades desejadas e o prazo de entrega. Após entender suas necessidades específicas, fornecerei um orçamento detalhado e transparente."
          />

          <Question
            question="Você hospeda os sites que desenvolve?"
            answer="Normalmente, não ofereço serviços de hospedagem. No entanto, posso recomendar provedores confiáveis e ajudar na configuração inicial, se necessário."
          />
        </div>
      </div>
    </section>
  );
}
