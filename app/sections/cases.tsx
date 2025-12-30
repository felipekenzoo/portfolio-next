import Case from "../components/case";

export default function Cases() {
    return (
        <section className="max-w-full flex flex-col py-20 px-28 bg-zinc-50">
            <div className="mb-20">
                <h2 className="text-5xl mb-4 text-zinc-950 font-medium">Vamos construir isso juntos.</h2>
                <p className="text-zinc-700 text-lg">Cada projeto abaixo foi um desafio de negócio que resolvi unindo design estratégico e código de alta performance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
                <Case
                    title="GreenTech - Marketplace de Energia Solar"
                    description="Desenvolvimento de um marketplace para conectar consumidores e fornecedores de energia solar."
                    imageUrl="/case1.svg"
                    imageAlt="Imagem do case 1"
                    link="https://kopu.com.br/"
                    tags={["React", "TailwindCSS", "UX/UI"]}
                />
                <Case
                    title="Portfolio - Next.js"
                    description="Projeto desenvolvido para melhorar em componentização e boas práticas com Next.js e TypeScript."
                    imageUrl="/case4.svg"
                    imageAlt="Imagem do case 4"
                    link="https://portfolio-kenzo-six.vercel.app/"
                    githubUrl="https://github.com/felipekenzoo/portfolio-kenzo"
                    tags={["Next.js", "TypeScript", "UX/UI"]}
                />
                <Case
                    title="Portfolio Pessoal"
                    description="Portfolio pessoal desenvolvido para apresentar meus projetos"
                    imageUrl="/case2.svg"
                    imageAlt="Imagem do case 2"
                    link="https://portfolio-kenzo-six.vercel.app/"
                    githubUrl="https://github.com/felipekenzoo/portfolio-kenzo"
                    tags={["React", "HTML / CSS", "JavaScript"]}
                />
                <Case
                    title="Redesign - Kopu Brindes"
                    description="Redesign da Kopu Brindes, com foco na experiência do usuário e na identidade visual da marca."
                    imageUrl="/case3.svg"
                    imageAlt="Imagem do case 3"
                    link="https://kopu.com.br/"
                    tags={["UX/UI", "E-commerce", "Figma"]}
                />

            </div>
        </section>
    )
}