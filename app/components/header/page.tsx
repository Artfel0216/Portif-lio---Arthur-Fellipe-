"use client";

import { LazyMotion, domAnimation, motion } from "framer-motion";
import { atkinsonMono } from "../../lib/fonts";

export default function Header() {
  return (
    <header className="mt-10 text-white">
      <LazyMotion features={domAnimation}>
        <section
          aria-label="Apresentação"
          className="flex flex-col items-center text-center"
        >
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              bg-gray-800/70 backdrop-blur-md
              w-80 h-10
              rounded-full
              flex items-center justify-center gap-2
              mb-6
              text-sm font-semibold
              text-green-400
              border border-green-500/30
              shadow-lg shadow-green-500/10
            "
          >
            <motion.span
              aria-hidden={true}
              className="w-2.5 h-2.5 rounded-full bg-green-500"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <span>Aberto a novas oportunidades</span>
          </motion.div>

          {/* Headline */}
          <h1
            className={`
              ${atkinsonMono.className}
              text-6xl md:text-7xl
              font-bold
              bg-linear-to-r
              from-green-500 via-yellow-400 to-blue-500
              bg-clip-text text-transparent
              drop-shadow-lg
            `}
          >
            Do design ao deploy.
          </h1>

          {/* Descrição */}
          <p className="mt-6 max-w-3xl text-xl md:text-2xl font-medium leading-relaxed">
            Desenvolvedor Full Stack Júnior apaixonado por tecnologia, focado em{" "}
            <span className="text-yellow-400">Next.js</span>,{" "}
            <span className="text-blue-500">React.js</span> e{" "}
            <span className="text-green-400">Node.js</span>.
            <br />
            Atuação em APIs robustas, arquitetura escalável e código limpo.
          </p>

          {/* CTAs */}
          <nav
            aria-label="Ações principais"
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://github.com/Artfel0216"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-60
                bg-linear-to-r from-green-500 to-blue-500
                text-white
                px-8 py-4
                rounded-full
                text-lg font-semibold
                shadow-lg hover:shadow-xl
                transition-all duration-300
              "
            >
              Ver projetos →
            </a>

            <a
              href="https://www.linkedin.com/in/arthur-fellipe-0618aa222/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-60
                bg-linear-to-r from-yellow-500 to-red-500
                text-white
                px-8 py-4
                rounded-full
                text-lg font-semibold
                shadow-lg hover:shadow-xl
                transition-all duration-300
              "
            >
              Contato
            </a>
          </nav>
        </section>
      </LazyMotion>
    </header>
  );
}
