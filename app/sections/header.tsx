"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row p-4 w-full justify-around items-center gap-4 md:gap-0">
      <div className="flex w-full md:w-auto justify-between items-center">
        <Image
          src="/logo-header.svg"
          width={64}
          height={64}
          alt="logo-header"
        />
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </button>
      </div>
      <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#cases">Cases</Link>
          </li>
          <li>
            <Link href="#process">Processo</Link>
          </li>
          <li>
            <Link href="#about">Sobre mim</Link>
          </li>
        </ul>
      </nav>
      <a
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex pl-4 pr-3 py-2 border border-zinc-300 rounded-2xl gap-1 items-center transition-all duration-300 hover:bg-zinc-50 group`}
        href="https://docs.google.com/document/d/1p18kNBF6rTeoDD1DmirrMsadEMDP2V_N/edit?usp=sharing&ouid=101619897725424570851&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-zinc-300 group-hover:text-zinc-900 transition-colors duration-300">
          Currículo
        </p>

        <div className="text-zinc-300 invert group-hover:filter-none transition-all duration-300">
          <Image
            src="/arrow-down.svg"
            width={20}
            height={20}
            alt="arrow-down"
          />
        </div>
      </a>
    </header>
  );
}
