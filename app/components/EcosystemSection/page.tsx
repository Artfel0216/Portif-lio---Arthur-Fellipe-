"use client";

import Image from "next/image";

export default function EcosystemSection() {
  return (
    <section className="mt-40 w-full px-6 flex justify-center">
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8 max-w-350 w-full">
        
        {/* ===== BACKEND ===== */}
        <article className="rounded-3xl bg-black/60 border border-white/10 p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.08)]">
          
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-white">
              Ecossistema Backend
            </h2>
            <p className="text-gray-400 mt-1">
              Desenvolvimento de APIs Modernas
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Node.js */}
            <div className="rounded-2xl bg-black/50 border border-white/10 p-6 hover:border-green-500/40 transition">
              <div className="flex items-center gap-3">
                <Image src="/node.svg" alt="Node.js" width={28} height={28} className="w-7 h-7" />
                <h3 className="text-white font-semibold text-lg">Node.js</h3>
                <span className="ml-auto text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                  CORE
                </span>
              </div>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Runtime JavaScript de alta performance para APIs escaláveis.
              </p>
            </div>

            {/* Prisma */}
            <div className="rounded-2xl bg-black/50 border border-white/10 p-6 hover:border-indigo-500/40 transition">
              <div className="flex items-center gap-3">
                <Image src="/prisma.svg" alt="Prisma" width={28} height={28} className="w-7 h-7" />
                <h3 className="text-white font-semibold text-lg">Prisma</h3>
                <span className="ml-auto text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  ORM
                </span>
              </div>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                ORM moderno com tipagem forte e foco em produtividade.
              </p>
            </div>

            {/* Drizzle */}
            <div className="rounded-2xl bg-black/50 border border-white/10 p-6 hover:border-yellow-500/40 transition">
              <div className="flex items-center gap-3">
                <Image src="/drizzle.svg" alt="Drizzle ORM" width={28} height={28} className="w-7 h-7" />
                <h3 className="text-white font-semibold text-lg">Drizzle ORM</h3>
              </div>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                ORM leve, SQL-first e totalmente tipado em TypeScript.
              </p>
            </div>

            {/* Strapi */}
            <div className="rounded-2xl bg-black/50 border border-white/10 p-6 hover:border-purple-500/40 transition">
              <div className="flex items-center gap-3">
                <Image src="/strapi.svg" alt="Strapi" width={28} height={28} className="w-7 h-7" />
                <h3 className="text-white font-semibold text-lg">Strapi</h3>
              </div>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Headless CMS para APIs flexíveis e gestão de conteúdo.
              </p>
            </div>

          </div>
        </article>

        {/* ===== DEVOPS ===== */}
        <aside className="rounded-3xl bg-black/60 border border-white/10 p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.08)]">
          
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-white">
              DevOps
            </h2>
            <p className="text-gray-400 mt-1">
              Infraestrutura & Ambiente
            </p>
          </header>

          <div className="space-y-5">
            
            <div className="rounded-2xl bg-black/50 border border-white/10 p-5 hover:border-blue-500/40 transition">
              <div className="flex items-center gap-3">
                <Image src="/docker.svg" alt="Docker" width={28} height={28} className="w-6 h-6" />
                <h3 className="text-white font-semibold">Docker</h3>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                Containerização
              </p>
            </div>

            <div className="rounded-2xl bg-black/50 border border-white/10 p-5 hover:border-green-500/40 transition">
              <h3 className="text-white font-semibold">Nginx</h3>
              <p className="text-gray-400 text-sm mt-1">
                Proxy Reverso & Servidor
              </p>
            </div>

            <div className="rounded-2xl bg-black/50 border border-white/10 p-5 hover:border-blue-400/40 transition">
              <h3 className="text-white font-semibold">Windows</h3>
              <p className="text-gray-400 text-sm mt-1">
                Sistema Operacional
              </p>
            </div>

          </div>
        </aside>

      </div>
    </section>
  );
}
