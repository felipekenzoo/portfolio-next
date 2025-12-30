import { ReactNode } from "react";

export interface ProcessCardProps {
    index: string;
    title: string;
    description: string;
    icon: ReactNode;
}

export default function ProcessCard({ title, description, icon, index }: ProcessCardProps) {
    return (
        <div className="flex flex-col gap-2.5 py-6 px-5 bg-zinc-50 rounded-3xl border border-zinc-200">
            <p className="text-zinc-400 text-sm">{index}</p>
            <div className="flex items-center gap-3 mb-12 mt-3">
                <span className="text-lg text-violet-500">
                    {icon}
                </span>
                <h3 className="text-zinc-950 text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-zinc-700 py-1">{description}</p>

        </div>
    )
}