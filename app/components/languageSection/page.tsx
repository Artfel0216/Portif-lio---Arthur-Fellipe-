import { ReactNode } from "react";

export default function LanguageSection() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-10 px-6">
      <div className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-black/80 px-8 py-6 backdrop-blur">
        
        {/* Lado esquerdo */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
            <span className="text-2xl font-bold">{`</>`}</span>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Linguagens
            </h3>
            <p className="text-base text-zinc-300">
              Fluência em linguagens.
            </p>
          </div>
        </div>

        {/* Lado direito */}
        <div className="flex flex-wrap gap-6">
          <LanguageBadge label="TypeScript" icon={<img src="/typescript.svg" alt="TypeScript" className="h-8 w-8 object-contain" />} />
          <LanguageBadge label="JavaScript" icon={<img src="/javascript.svg" alt="JavaScript" className="h-8 w-8 object-contain" />} />
        </div>

      </div>
    </section>
  )
}

function LanguageBadge({ label, icon }: { label: string; icon?: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900 px-5 py-3 text-base text-white shadow-sm transition transform hover:scale-105 hover:border-white/20 hover:bg-zinc-800">
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="font-medium">{label}</span>
    </div>
  )
}
