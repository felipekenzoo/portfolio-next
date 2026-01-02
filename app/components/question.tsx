"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Question() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-full max-w-2xl text-left focus:outline-none group"
        >
            
            <div className="flex flex-col bg-zinc-50 rounded-4xl p-8 w-full transition-colors hover:bg-zinc-100">
                
                <div className="flex items-start justify-between w-full">
                    <h3 className="text-xl font-bold text-zinc-950 pr-4">
                        Você atua com design ou desenvolvimento?
                    </h3>
                    
                    <ChevronDown 
                        className={`text-zinc-950 min-w-6 w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                </div>

                {isOpen && (
                    <div className="mt-4 text-base text-zinc-600 leading-relaxed font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                        Atuo tanto com design de interfaces (UI/UX) quanto com desenvolvimento front-end. 
                        Posso entregar apenas o design ou o site completo, dependendo da sua necessidade.
                    </div>
                )}
            </div>
        </button>
    )
}