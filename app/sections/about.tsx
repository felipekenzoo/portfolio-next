import Image from "next/image";
import SocialLink from "../components/social";

export default function About() {
  return (
    <section
      className="py-16 md:py-20 px-6 md:px-12 lg:px-28 bg-neutral-100 justify-center flex flex-col items-center"
      id="about"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center max-w-7xl">
        <div className="w-full lg:w-auto flex justify-center lg:justify-start shrink-0">
          <div>
            <Image
              src={"/about-me.jpg"}
              alt="Foto de Felipe Sunakozawa"
              width={500}
              height={500}
              className="rounded-4xl mb-8 border border-neutral-200 w-full max-w-md lg:max-w-lg"
              priority
              quality={100}
            />
          </div>
        </div>
        <div className="w-full lg:max-w-xl">
          <p className="text-neutral-700 text-base md:text-lg">Muito prazer 👋🏻</p>
          <div className="my-2.5">
            <h2 className="text-4xl md:text-5xl mb-4 text-neutral-950 font-semibold">
              Felipe Sunakozawa
            </h2>
            <h3 className="text-neutral-800 text-lg md:text-xl mb-6">
              Desenvolvedor Front-End e UI/UX Designer
            </h3>
          </div>
          <p className="text-neutral-700 text-base md:text-lg">
            Sou desenvolvedor Front-end e estudante de Sistemas de Informação, atuando há mais de dois anos na criação de interfaces e produtos digitais. Acredito em experiências bem pensadas, fáceis de usar e que fazem sentido para quem está do outro lado da tela. Trabalho unindo UI, UX e código desde o início do processo, porque visual e lógica não deveriam andar separados.
          </p>
          <div className="mt-6 flex gap-6 md:gap-8 justify-center lg:justify-start">
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
        </div>
      </div>
    </section>
  );
}
