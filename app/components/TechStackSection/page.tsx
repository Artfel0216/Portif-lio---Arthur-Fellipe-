"use client";

import { motion } from "framer-motion";

export default function TechStackSection() {
  return (
    <section
      className="mt-32 px-6 flex flex-col items-center text-center"
      aria-labelledby="tech-stack-title"
    >
      {/* Badge */}
      <header className="mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            flex items-center gap-2
            px-5 py-2
            rounded-full
            bg-black/60
            border border-white/10
            text-white
            text-xs sm:text-sm
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
            <path d="M12 2L2 7l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          <span className="text-gray-200">STACK TECNOLÓGICA</span>
        </motion.div>
      </header>

      {/* Título */}
      <h2
        id="tech-stack-title"
        className="
          font-bold text-white
          text-3xl sm:text-4xl md:text-5xl xl:text-6xl
          leading-tight max-w-5xl
        "
      >
        Arquitetura tipada para{" "}
        <span className="block bg-linear-to-r from-green-400 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
          soluções escaláveis.
        </span>
      </h2>

      {/* Descrição */}
      <p
        className="
          mt-8
          max-w-4xl
          text-zinc-300
          text-base sm:text-lg md:text-xl
          leading-relaxed
          font-medium
        "
      >
        Minha escolha de tecnologia é centrada em{" "}
        <strong className="text-white">foco</strong>,{" "}
        <strong className="text-white">estabilidade</strong> e em um{" "}
        <strong className="text-white">ecossistema sólido</strong>, garantindo a
        entrega de software com padrão{" "}
        <strong className="text-white">corporativo</strong>.
      </p>
    </section>
  );
}
