import Image from "next/image";
import SocialLink from "../components/social";

export default function FinalSection() {
  return (
    <section className="md:px-12 lg:px-80 py-16 md:py-30 bg-neutral-100/20 flex justify-between gap-6 md:gap-8">
      <div id="left">
        <div className="flex items-center gap-1.5">
          <div className="bg-green-500 h-3 w-3 rounded-2xl border border-green-100"></div>
          <p className="font-light text-sm">DISPONÍVEL PARA NOVOS PROJETOS</p>
        </div>
        <div className="flex flex-col mt-10">
          <h2 className="text-6xl max-w-2xl font-semibold">
            Vamos levar sua ideia para o{" "}
            <span className="text-blue-600 font-semibold">próximo nível</span>
          </h2>
          <p className="max-w-xl pt-3 text-lg font-light">
            Tem uma ideia em mente ou quer melhorar o que já existe? <br />
            Vamos conversar e ver como isso pode sair do papel.
          </p>
          <a
            href="mailto:felipe.sunakozawa@gmail.com"
            className="mt-4 py-2 px-4 rounded-2xl bg-blue-600 text-neutral-50 w-fit hover:px-6 hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            Me mande um email!
          </a>
        </div>
      </div>

      <div id="right" className="items-center flex flex-col">
        <Image
          src="/logo-cta.png"
          alt="Final Call to Action Image"
          width={131}
          height={131}
          draggable={false}
        />
        <p className="text-sm mt-4 text-neutral-700">
          Você pode me encontrar nas redes sociais
        </p>
        <div className="flex gap-8 mt-4">
          <SocialLink
            source={"/linkedin.svg"}
            title="Linkedin"
            url="https://www.linkedin.com/in/felipesunakozawa/"
          />
          <SocialLink
            source={"/github.svg"}
            title="Github"
            url="https://github.com/felipekenzoo"
          />
          <SocialLink
            source={"/instagram.svg"}
            title="Instagram"
            url="https://www.instagram.com/felipekenzo.studio/"
          />
        </div>
        <p className="text-md mt-4 text-neutral-700">
          felipe.sunakozawa@gmail.com
        </p>
      </div>
    </section>
  );
}
