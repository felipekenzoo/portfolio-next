import { Code, Earth } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-between px-28 py-8 bg-zinc-900 flex-col md:flex-row gap-4 md:gap-0 items-center">
      <h6 className="text-sm">
        Felipe Sunakozawa
        <span className="text-sm font-extralight text-zinc-400">
          {" "}
          • © 2024 - 2026
        </span>
      </h6>
      <div className="flex items-center">
        <Earth className="inline-block w-4 h-4 mr-2 mb-0.5 text-zinc-400" />
        <h6 className="text-sm">Com carinho, do interior de São Paulo</h6>
      </div>
      <div className="flex items-center">
        <Code className="inline-block w-4 h-4 mr-2 mb-0.5 text-zinc-400" />
        <h6 className="text-sm">Feito com Next.js, TailwindCSS e muito café</h6>
      </div>
    </footer>
  );
}
