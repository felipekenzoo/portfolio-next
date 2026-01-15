import { ReactNode } from "react";

type HatProps = {
  icon: ReactNode;
  title: string;
};

export default function Hat({ icon, title }: HatProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border mb-4 border-neutral-400 px-4 py-2 text-neutral-400 bg-neutral-800/40 backdrop-blur-sm">
      <span className="text-lg text-neutral-400">{icon}</span>

      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}
