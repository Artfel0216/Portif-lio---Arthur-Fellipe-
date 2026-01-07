import { ReactNode } from "react";

export default function LanguageSection() {
  return (
    <section
      className="w-full max-w-7xl mx-auto mt-16 px-6"
      aria-labelledby="languages-title"
    >
      <article
        className="
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between
          gap-8
          rounded-2xl
          border border-white/10
          bg-black/80
          px-6 sm:px-8
          py-6
          backdrop-blur
        "
      >
        {/* Lado esquerdo */}
        <header className="flex items-center gap-4">
          <div
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-full
              bg-yellow-500/10
              text-yellow-400
              shrink-0
            "
            aria-hidden="true"
          >
            <span className="text-2xl font-bold">{`</>`}</span>
          </div>

          <div>
            <h3
              id="languages-title"
              className="text-lg sm:text-xl md:text-2xl font-semibold text-white"
            >
              Linguagens
            </h3>
            <p className="text-sm sm:text-base text-zinc-300">
              Fluência em linguagens.
            </p>
          </div>
        </header>

        {/* Lado direito */}
        <ul
          className="flex flex-wrap gap-4 sm:gap-6"
          aria-label="Linguagens dominadas"
        >
          <li>
            <LanguageBadge
              label="TypeScript"
              icon={
                <img
                  src="/typescript.svg"
                  alt="TypeScript"
                  className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                />
              }
            />
          </li>

          <li>
            <LanguageBadge
              label="JavaScript"
              icon={
                <img
                  src="/javascript.svg"
                  alt="JavaScript"
                  className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                />
              }
            />
          </li>
        </ul>
      </article>
    </section>
  );
}

function LanguageBadge({
  label,
  icon,
}: {
  label: string;
  icon?: ReactNode;
}) {
  return (
    <div
      className="
        flex items-center gap-3
        rounded-2xl
        border border-white/10
        bg-zinc-900
        px-4 sm:px-5
        py-3
        text-sm sm:text-base
        text-white
        shadow-sm
        transition
        transform
        hover:scale-105
        hover:border-white/20
        hover:bg-zinc-800
      "
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="font-medium whitespace-nowrap">{label}</span>
    </div>
  );
}
