import Image from "next/image"
import Hat from "../components/hat"
import { MousePointer } from "lucide-react"

export default function Hero() {
    return (
        <section id="hero" className="relative flex flex-col w-full min-h-dvh items-center justify-start pt-15 md:pt-32 text-center overflow-hidden bg-zinc-900">
            
            <Image
                src="/bg-hero1.jpg" 
                alt="Background Hero"
                className="object-cover z-0 pointer-events-none" 
                priority 
                quality={100}
                fill
            />

            <div className="relative z-10 flex flex-col items-center w-full px-4 gap-6">
                
                <Hat
                    icon={<MousePointer size={20} />}
                    title="Desenvolvedor Front-end e UI/UX Designer"
                />
                
                <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl tracking-tight leading-tight drop-shadow-lg">
                    Construindo experiências digitais, do design ao código.
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-200 font-light max-w-2xl leading-relaxed drop-shadow-md">
                    Meu trabalho é transformar ideias e layouts em código limpo e responsivo.
                    <br className="hidden md:block" /> 
                    Pensando na experiência do usuário em cada etapa do desenvolvimento.
                </p>

            </div>
        </section>
    )
}