import Image from "next/image";
import SocialLink from "../components/social";

export default function About() {
    return (
        <section className="py-20 px-28 bg-zinc-50 justify-center flex flex-col items-center" id="about">
            <div className="flex gap-12 items-center">
                <div>
                    <div>
                        <Image
                            src={"/about-me.jpg"}
                            alt="Foto de Felipe Sunakozawa"
                            width={500}
                            height={400}
                            className="rounded-4xl mb-8 border border-zinc-200"
                            priority
                            quality={100}
                        />
                    </div>
                </div>
                <div className="max-w-xl">
                    <p className="text-zinc-700 text-lg">Muito prazer 👋🏻</p>
                    <div className="my-2.5">
                        <h2 className="text-5xl mb-4 text-zinc-950 font-semibold">Felipe Sunakozawa</h2>
                        <h3 className="text-zinc-800 text-xl mb-6">Desenvolvedor Front-End | UI/UX Designer</h3>
                    </div>
                    <p className="text-zinc-700 text-lg">Estudo Sistemas de Informação e atuo há 1 ano com Front-end e UI/UX Design. Minha experiência me permite unir código e design para transformar ideias em interfaces digitais eficientes, claras e responsivas. Tenho como foco evoluir continuamente meus processos e conhecimentos em tecnologias como React e Next.js, sempre com o objetivo de criar soluções que fortalecem a presença digital de marcas e negócios.</p>
                    <div className="mt-6 flex gap-8">
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
    )
}