export default function Curiosity() {
    return (
        <section className="relative w-full bg-zinc-950 text-zinc-100">
            <div className="absolute top-0 left-0 w-full h-32 -translate-y-full bg-linear-to-t from-zinc-950 to-transparent" />

            <div className="flex flex-col items-center justify-center py-16 px-4">
                <div>
                    <h2 className="max-w-3xl text-3xl text-zinc-500 md:text-5xl font-light leading-relaxed">
                        Você sabia que <strong className="text-zinc-100 font-bold">46% dos consumidores</strong> citam o design visual como o principal fator para julgar a <strong className="text-zinc-100 font-bold">credibilidade de um site?</strong>
                    </h2>
                    <p className="text-sm md:text-base mt-4 font-light text-zinc-500">Fonte: Stanford Web Credibility Project // B.J. Fogg no Stanford Persuasive Technology Lab.</p>
                </div>
            </div>
        </section>
    )
}