import { ReactNode } from "react";

export interface ProcessCardProps {
    index: string;
    title: string;
    description: string;
    icon: ReactNode;
}

export default function ProcessCard({ title, description, icon, index }: ProcessCardProps) {
    return (
        <div className="flex flex-col gap-2.5 py-6 px-5 rounded-3xl border bg-neutral-950/90 backdrop-blur-sm border-neutral-900/80">
            <p className="text-neutral-500 text-sm">{index}</p>
            <div className="flex items-center gap-3 mb-12 mt-3">
                <span className="text-lg text-blue-500">
                    {icon}
                </span>
                <h3 className="text-neutral-300 text-xl font-medium">{title}</h3>
            </div>
            <p className="text-neutral-300 font-light text-base py-1">{description}</p>

        </div>
    )
}