"use client";

import { motion } from "framer-motion";

export default function TechStackSection() {
  return (
    <section className="mt-40 flex flex-col items-center justify-center">
      
      {/* Badge / Label da seção */}
      <header>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            flex items-center gap-2
            px-6 py-2
            rounded-full
            bg-black/60
            border border-white/10
            text-white
            text-xs md:text-sm
            font-semibold
            tracking-widest
            shadow-[0_0_30px_rgba(255,255,255,0.12)]
            backdrop-blur-md
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-300"
            aria-hidden="true"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M2 17l10 5 10-5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <span className="text-gray-200">STACK TECNOLÓGICA</span>
        </motion.div>
      </header>

      {/* Título principal */}
      <h2 className="text-white text-7xl mt-5 text-center font-bold leading-tight">
        Arquitetura tipada para <br />
        <span className="bg-linear-to-r from-green-400 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
          soluções escaláveis.
        </span>
      </h2>

      {/* Descrição */}
      <p className="text-white text-2xl mt-10 text-center font-bold leadting-tight">
        Minha Escolha de tecnologia é algo centrado em Foco, Estabilidade e um Ecossistema Concreto <br />
        para entregar um Software de nível Coorporativo.
      </p>
    </section>
  );
}
