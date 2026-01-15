"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface QuestionProps {
  question: string;
  answer: string;
}

export default function Question({ question, answer }: QuestionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-neutral-50 rounded-3xl border border-neutral-200/60 p-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between cursor-pointer text-left focus:outline-none"
      >
        <h3 className="text-xl font-medium text-neutral-950 pr-4">
          {question}
        </h3>

        <ChevronDown
          className={`text-neutral-950 min-w-6 w-6 h-6 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-neutral-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
