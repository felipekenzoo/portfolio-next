"use client";

import { ChevronDown } from "lucide-react";

export interface QuestionProps {
  question: string;
  answer: string;
}

export default function Question({ question, answer }: QuestionProps) {
  return (
    <details className="group w-full bg-neutral-50/75 rounded-3xl border border-neutral-200/60 p-6 open:animate-in open:fade-in open:slide-in-from-top-2 duration-300">
      <summary className="flex items-start justify-between cursor-pointer list-none focus:outline-none">
        <h3 className="text-xl font-medium text-neutral-950 pr-4">{question}</h3>
        <ChevronDown className="text-neutral-950 min-w-6 w-6 h-6 transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <div className="mt-4 text-neutral-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
        {answer}
      </div>
    </details>
  );
}
