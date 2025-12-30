import ProcessCard from "../components/processCard";
import { Search, Code, Crop, Rocket  } from "lucide-react";
export default function Process() {
    return (
        <section className="flex flex-col py-20 px-28 bg-zinc-100">
            <div>
                <h2 className="text-zinc-950 text-5xl font-medium">Como posso te ajudar?</h2>
                <p className="text-zinc-700 py-4 text-lg">Conheça meu processo criativo e descubra como eu posso te ajudar a fortalecer a sua presença digital.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-between mt-10">
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
        </section>
    )
}