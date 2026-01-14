import { ReactNode } from "react";

type HatProps = {
  icon: ReactNode;
  title: string;
};

export default function Hat({ icon, title }: HatProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border mb-4 border-zinc-500 px-4 py-2 text-zinc-500 bg-zinc-900/40 backdrop-blur-sm">
      <span className="text-lg text-zinc-600">{icon}</span>

      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}
