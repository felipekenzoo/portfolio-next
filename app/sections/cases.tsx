import Case from "../components/case";

export default function Cases() {
  return (
    <section
      className="max-w-full flex flex-col py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-neutral-50"
      id="cases"
    >
      <div className="mb-12 md:mb-20 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-neutral-950 font-medium">
          Vamos construir um projeto incrível juntos.
        </h2>
        <p className="text-neutral-700 text-base md:text-lg">
          Cada case abaixo foi um desafio de negócio que resolvi unindo design
          estratégico e código de alta performance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        <Case
          title="GreenTech"
          description="Desenvolvimento de um marketplace para conectar consumidores e fornecedores de energia solar."
          imageUrl="/casegreen.jpg"
          imageAlt="Imagem do case 1"
          link="https://www.linkedin.com/feed/update/urn:li:activity:7404505175794597888/"
          githubUrl="https://github.com/DaviMarqs/green-tech-II"
          behanceUrl="https://www.behance.net/gallery/229846519/GreenTech-Marketplace-de-Energia-Solar"
          tags={["React", "TailwindCSS", "UX/UI", "Figma", "TypeScript"]}
        />
        <Case
          title="Portfolio - Next.js"
          description="Projeto desenvolvido para melhorar componentização e boas práticas com Next.js e TypeScript."
          imageUrl="/caseportfolio.jpg"
          imageAlt="Imagem do case 2"
          link="https://portfolio-kenzo-six.vercel.app/"
          githubUrl="https://github.com/felipekenzoo/portfolio-kenzo"
          tags={["Next.js", "TypeScript", "TailwindCSS", "UX/UI"]}
        />
        <Case
          title="Redesign - Kopu Brindes"
          description="Redesign da Kopu Brindes, com foco na experiência do usuário e na identidade visual da marca."
          imageUrl="/casekopu.jpg"
          imageAlt="Imagem do case 3"
          link="https://kopu.com.br/"
          behanceUrl="https://www.behance.net/gallery/224331451/Kopu-Brindes-Ecommerce-UI-Redesign"
          tags={["UX/UI", "E-commerce", "Figma"]}
        />
      </div>
    </section>
  );
}
