import Case from "../components/case";

export default function Cases() {
    return (
        <section className="max-w-full flex flex-col py-20 px-28 bg-zinc-50">
            <div className="mb-20">
                <h2 className="text-5xl mb-4 text-zinc-950">Vamos construir isso juntos.</h2>
                <p className="text-zinc-950">Cada projeto abaixo foi um desafio de negócio que resolvi unindo design estratégico e código de alta performance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                <Case
                    title="Plataforma de cursos online"
                    description="Desenvolvimento de uma plataforma de cursos online com foco em UX/UI e performance."
                    imageUrl="/case1.jpg"
                    imageAlt="Imagem do case 1"
                    link="#"
                    tags={["React", "Next.js", "Tailwind CSS"]}
                />
                <Case
                    title="Plataforma de cursos online"
                    description="Desenvolvimento de uma plataforma de cursos online com foco em UX/UI e performance."
                    imageUrl="/case1.jpg"
                    imageAlt="Imagem do case 1"
                    link="#"
                    tags={["React", "Next.js", "Tailwind CSS"]}
                />
                <Case
                    title="Plataforma de cursos online"
                    description="Desenvolvimento de uma plataforma de cursos online com foco em UX/UI e performance."
                    imageUrl="/case1.jpg"
                    imageAlt="Imagem do case 1"
                    link="#"
                    tags={["React", "Next.js", "Tailwind CSS"]}
                />
                <Case
                    title="Plataforma de cursos online"
                    description="Desenvolvimento de uma plataforma de cursos online com foco em UX/UI e performance."
                    imageUrl="/case1.jpg"
                    imageAlt="Imagem do case 1"
                    link="#"
                    tags={["React", "Next.js", "Tailwind CSS"]}
                />

            </div>
        </section>
    )
}