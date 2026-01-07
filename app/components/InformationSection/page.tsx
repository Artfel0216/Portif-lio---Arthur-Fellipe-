"use client"; // <--- ADICIONE ESTA LINHA NO TOPO

import { motion } from "framer-motion";
import Image from "next/image"; // Importe o componente Image
import foto from "../../../public/foto-portifólio .jpeg";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  GraduationCap,
  MapPin,
  Terminal
} from "lucide-react";

const iconAnimation = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.15,
    y: -4,
    transition: { type: "spring" as const, stiffness: 300 }
  }
};

export default function InformationSection() {
  return (
    <section
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
      aria-labelledby="about-title"
    >
      <main className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <article className="space-y-6">
          <header className="space-y-4">
            <span className="inline-flex items-center gap-2 text-sm text-blue-400 border border-blue-500/30 px-4 py-1 rounded-full w-fit">
              <Terminal size={16} />
              whoami
            </span>

            <h1 id="about-title" className="text-4xl md:text-5xl font-bold leading-tight">
              Desenvolvedor Full Stack Júnior,
              <span className="block text-zinc-400 font-semibold">
                construindo soluções do front ao back-end.
              </span>
            </h1>
          </header>

          <p className="text-zinc-400 max-w-xl leading-relaxed">
            Sou estudante do <strong className="text-white">5º semestre de Sistemas de Informação</strong> e
            desenvolvedor <strong className="text-white">Full Stack Júnior</strong>, com foco em criar aplicações
            modernas, funcionais e escaláveis.
          </p>

          <p className="text-zinc-400 max-w-xl leading-relaxed">
            Possuo experiência com <strong className="text-white">React, Node.js</strong>, bancos de dados
            utilizando <strong className="text-white">Prisma e Drizzle</strong>, autenticação de usuários e
            desenvolvimento de <strong className="text-white">e-commerces</strong>, sempre priorizando
            performance e usabilidade.
          </p>

          {/* INFO CARDS */}
          <section className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-xl">
              <GraduationCap className="text-purple-400" size={22} />
              <div>
                <p className="text-xs text-zinc-400">GRADUAÇÃO</p>
                <p className="font-medium">Sistemas de Informação</p>
              </div>
            </div>

            <address className="not-italic">
              <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-xl">
                <MapPin className="text-green-400" size={22} />
                <div>
                  <p className="text-xs text-zinc-400">LOCALIZAÇÃO</p>
                  <p className="font-medium">Recife - PE, Brasil</p>
                </div>
              </div>
            </address>
          </section>
        </article>

        {/* RIGHT PROFILE CARD */}
        <aside className="flex justify-center">
          <article className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 w-full max-w-sm text-center space-y-6 shadow-xl">

            {/* Glow Background */}
            <div
              className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl -z-10"
              aria-hidden="true"
            />

            {/* IMAGE */}
            <figure className="rounded-2xl overflow-hidden relative h-80">
              <Image
                src={foto}
                alt="Foto de Arthur Fellipe"
                fill
                className="object-cover"
                priority
              />
              <figcaption className="sr-only">
                Arthur Fellipe — Desenvolvedor Full Stack Júnior
              </figcaption>
            </figure>

            {/* NAME */}
            <header>
              <h2 className="text-xl font-semibold">Arthur Fellipe</h2>
              <span className="inline-block mt-2 text-sm text-blue-400 bg-blue-500/10 px-4 py-1 rounded-full">
                Full Stack Developer • Júnior
              </span>
            </header>

            {/* SOCIAL ICONS */}
            <nav
              className="flex justify-center gap-4"
              aria-label="Redes sociais e contato"
            >
              <motion.a
                variants={iconAnimation}
                initial="initial"
                whileHover="hover"
                className="icon-glow"
                href="https://github.com/Artfel0216"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                variants={iconAnimation}
                initial="initial"
                whileHover="hover"
                className="icon-glow"
                href="https://www.linkedin.com/in/arthur-fellipe-0618aa222/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                variants={iconAnimation}
                initial="initial"
                whileHover="hover"
                className="icon-glow"
                href="mailto:arthur.fellipe.brandao@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>

              <motion.a
                variants={iconAnimation}
                initial="initial"
                whileHover="hover"
                className="icon-glow"
                href="https://wa.me/5581989352251?text=Ol%C3%A1%20Arthur!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20com%20voc%C3%AA."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </motion.a>
            </nav>
          </article>
        </aside>
      </main>

      {/* GLOW STYLE */}
      <style jsx>{`
        .icon-glow {
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          background: #27272a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
        }

        .icon-glow::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(135deg, #3b82f6, #9333ea, #06b6d4);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          filter: blur(8px);
        }

        .icon-glow:hover::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}