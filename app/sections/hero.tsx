import { Geist } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export default function Hero() {
  return (
    <section
      id="hero"
      className={`relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-[#070b14] text-white ${geist.className}`}
    >
      <style jsx global>{`
        @keyframes heroGridShift {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-48px, -48px, 0);
          }
        }

        @keyframes heroFloatA {
          0%,
          100% {
            transform: translate3d(-50%, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-50%, -22px, 0) scale(1.06);
          }
        }

        @keyframes heroFloatB {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(18px, -18px, 0) scale(1.04);
          }
        }

        @keyframes heroPulse {
          0%,
          100% {
            opacity: 0.55;
          }
          50% {
            opacity: 0.95;
          }
        }

        @keyframes heroSweep {
          0% {
            transform: translateX(-12%) scaleX(1);
          }
          50% {
            transform: translateX(12%) scaleX(1.08);
          }
          100% {
            transform: translateX(-12%) scaleX(1);
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-[#070b14]" />

      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 92%, rgba(96,165,250,0.42) 0%, rgba(59,130,246,0.18) 18%, rgba(7,11,20,0) 54%), radial-gradient(circle at 50% 38%, rgba(29,78,216,0.17) 0%, rgba(7,11,20,0) 48%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          animation: "heroGridShift 22s linear infinite",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 h-[24rem] w-[68rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(191,219,254,0.92) 0%, rgba(96,165,250,0.5) 30%, rgba(37,99,235,0.18) 55%, rgba(7,11,20,0) 78%)",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 pt-4 sm:px-6 md:px-10 md:pt-6">
        <Link href="/" className="text-xl font-semibold tracking-[-0.04em] text-white/95">
          Felipe
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/72 md:flex">
          <Link href="#hero" className="transition-colors hover:text-white">
            Início
          </Link>
          <Link href="#about" className="transition-colors hover:text-white">
            Sobre
          </Link>
          <Link href="#cases" className="transition-colors hover:text-white">
            Projetos
          </Link>
          <Link href="#process" className="transition-colors hover:text-white">
            Processo
          </Link>
          <Link href="#faq" className="transition-colors hover:text-white">
            Perguntas Frequentes
          </Link>
          <Link href="#contact" className="transition-colors hover:text-white">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <Link href="#about" className="hidden text-white/82 transition-colors hover:text-white md:block">
            Sobre mim
          </Link>
          <Link
            href="#cases"
            className="py-2 px-4 rounded-2xl bg-blue-600 text-neutral-50 w-fit hover:px-6 hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            Ver projetos
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-start gap-8 px-4 pb-18 pt-10 sm:px-6 sm:pt-14 md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-10 md:px-10 md:pb-24 md:pt-10">
        <div className="flex flex-col gap-5 md:gap-8">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <span className="rounded-full bg-blue-800 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_0_14px_rgba(88,28,135,0.5)]">
              Disponível para projetos
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs text-white/72">
              Front-end e UI/UX Designer
              <ArrowUpRight size={13} className="text-blue-300" />
            </span>
          </div>

          <h1 className="max-w-[11ch] text-[2.7rem] font-semibold leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl md:max-w-xl md:text-[4.8rem] lg:text-[5.8rem]">
            Design que
            <br />
            gera impacto.
          </h1>

          <div className="max-w-xs border-l border-white/10 pl-4 text-sm text-white/58 sm:pl-5 md:pl-6 md:text-base">
            Crio interfaces modernas, rápidas e pensadas para converter, unindo estética, clareza e experiência do usuário.
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 md:pt-10 md:pl-10">
          <p className="max-w-md text-sm leading-6 text-white/70 md:text-base md:leading-7">
            Transformo ideias em produtos digitais com foco em front-end, UI/UX e detalhes que elevam a percepção da marca. O objetivo é simples: criar interfaces bonitas, usáveis e com resultado real.
          </p>

          <div className="grid max-w-lg grid-cols-2 gap-4 text-left sm:gap-6 md:gap-10">
            <div>
              <div className="text-4xl font-medium tracking-[-0.05em] text-white md:text-5xl">2+</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">Anos de experiência</div>
            </div>
            <div>
              <div className="text-4xl font-medium tracking-[-0.05em] text-white md:text-5xl">40+</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">Projetos e entregas</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[30vh] sm:h-[34vh] md:h-[42vh]">
        <div
          className="absolute inset-x-0 bottom-0 h-[18vh] bg-[radial-gradient(ellipse_at_center_bottom,rgba(191,219,254,0.68)_0%,rgba(96,165,250,0.26)_36%,rgba(7,11,20,0)_72%)] sm:h-[20vh] md:h-[26vh]"
        />

        <svg
          className="absolute inset-x-0 bottom-0 h-full w-full"
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="hero-arc-glow" x="-20%" y="-120%" width="140%" height="420%">
              <feGaussianBlur stdDeviation="5" result="blur1" />
              <feGaussianBlur stdDeviation="12" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="hero-arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0" />
              <stop offset="28%" stopColor="#60a5fa" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#dbeafe" stopOpacity="1" />
              <stop offset="72%" stopColor="#60a5fa" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0" />
              <stop offset="22%" stopColor="#60a5fa" stopOpacity="0.24" />
              <stop offset="78%" stopColor="#60a5fa" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-core-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="46%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.92" />
              <stop offset="54%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          <line x1="0" y1="148" x2="1440" y2="148" stroke="url(#hero-line-gradient)" strokeWidth="0.7" />
          <path
            d="M -100 360 Q 720 0 1540 360"
            fill="none"
            stroke="url(#hero-arc-gradient)"
            strokeWidth="3"
            filter="url(#hero-arc-glow)"
            style={{ animation: "heroSweep 10s ease-in-out infinite" }}
          />
          <path
            d="M -100 360 Q 720 0 1540 360"
            fill="none"
            stroke="url(#hero-core-gradient)"
            strokeWidth="1.2"
            style={{ animation: "heroSweep 10s ease-in-out infinite" }}
          />
        </svg>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-4 text-[9px] uppercase tracking-[0.22em] text-white/38 sm:px-6 sm:pb-5 sm:text-[10px] sm:tracking-[0.28em] md:px-10">
          <span>Front-end</span>
          <span className="hidden text-center sm:block">UI/UX Designer</span>
          <span>Product design</span>
        </div>
      </div>
    </section>
  );
}