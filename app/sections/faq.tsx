import Question from "../components/question"

export default function FAQ() {
    return (
        <section className="px-28 bg-zinc-100 py-20 flex" id="faq">
            <div id="left">
                <h2 className="text-zinc-950 text-2xl">Perguntas Frequentes</h2>
                <p className="text-zinc-700">Confira as perguntas mais frequentes sobre meu processo de trabalho e entrega</p>
            </div>
            <div id="right">
                <Question />
            </div>

        </section>
    )
}