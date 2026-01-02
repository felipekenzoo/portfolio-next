import Case from "../components/case";

export default function Cases() {
    return (
        <section className="max-w-full flex flex-col py-20 px-28 bg-zinc-50" id="cases">
            <div className="mb-20">
                <h2 className="text-5xl mb-4 text-zinc-950 font-medium">Vamos construir isso juntos.</h2>
                <p className="text-zinc-700 text-lg">Cada projeto abaixo foi um desafio de negócio que resolvi unindo design estratégico e código de alta performance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20">
                <Case
                    title="GreenTech"
                    description="Desenvolvimento de um marketplace para conectar consumidores e fornecedores de energia solar."
                    imageUrl="/case1.jpg"
                    imageAlt="Imagem do case 1"
                    link="https://www.linkedin.com/feed/update/urn:li:activity:7404505175794597888/"
                    githubUrl="https://github.com/DaviMarqs/green-tech-II"
                    behanceUrl="https://www.behance.net/gallery/229846519/GreenTech-Marketplace-de-Energia-Solar"
                    tags={["React", "TailwindCSS", "UX/UI", "Figma", "TypeScript"]}
                />
                <Case
                    title="Portfolio - Next.js"
                    description="Projeto desenvolvido para melhorar componentização e boas práticas com Next.js e TypeScript."
                    imageUrl="/caseport.jpg"
                    imageAlt="Imagem do case 2"
                    link="https://portfolio-kenzo-six.vercel.app/"
                    githubUrl="https://github.com/felipekenzoo/portfolio-kenzo"
                    tags={["Next.js", "TypeScript", "TailwindCSS", "UX/UI"]}
                />
                <Case
                    title="Redesign - Kopu Brindes"
                    description="Redesign da Kopu Brindes, com foco na experiência do usuário e na identidade visual da marca."
                    imageUrl="/case3.jpg"
                    imageAlt="Imagem do case 3"
                    link="https://kopu.com.br/"
                    behanceUrl="https://www.behance.net/gallery/224331451/Kopu-Brindes-Ecommerce-UI-Redesign"
                    tags={["UX/UI", "E-commerce", "Figma"]}
                />

            </div>
        </section>
    )
}