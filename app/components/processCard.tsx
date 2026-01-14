import { ReactNode } from "react";

export interface ProcessCardProps {
    index: string;
    title: string;
    description: string;
    icon: ReactNode;
}

export default function ProcessCard({ title, description, icon, index }: ProcessCardProps) {
    return (
        <div className="flex flex-col gap-2.5 py-6 px-5 rounded-3xl border bg-zinc-950/80 backdrop-blur-sm border-zinc-800/80">
            <p className="text-zinc-500 text-sm">{index}</p>
            <div className="flex items-center gap-3 mb-12 mt-3">
                <span className="text-lg text-violet-500">
                    {icon}
                </span>
                <h3 className="text-zinc-300 text-xl font-medium">{title}</h3>
            </div>
            <p className="text-zinc-300 font-light text-base py-1">{description}</p>

        </div>
    )
}