"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="flex flex-col md:flex-row p-4 w-full justify-around items-center gap-4 md:gap-0">
            <div className="flex w-full md:w-auto justify-between items-center">
                <Image src="/logo-header.svg" width={64} height={64} alt="logo-header" />
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                    </svg>
                </button>
            </div>
            <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                    <li><a href="">Sobre mim</a></li>
                    <li><a href="">Sobre mim</a></li>
                    <li><a href="">Sobre mim</a></li>
                    <li><a href="">Sobre mim</a></li>
                </ul>
            </nav>
            <a className={`${isOpen ? 'flex' : 'hidden'} md:flex pl-4 pr-3 py-2 bg-zinc-50 rounded-2xl gap-1 items-center`} href="#">
                <p className="text-zinc-900">Currículo</p>
                <Image src="/arrow-down.svg" width={20} height={20} alt="arrow-down" />
            </a>
        </header>
    )
}