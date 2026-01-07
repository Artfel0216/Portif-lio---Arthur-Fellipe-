export default function BdSection() {
  return (
    <section
      className="w-full flex justify-center px-4 mt-16"
      aria-labelledby="database-title"
    >
      <article
        className="
          w-full max-w-6xl
          bg-[#0b0b0b]
          rounded-3xl
          border border-white/10
          p-6 sm:p-8 md:p-10
          flex flex-col lg:flex-row
          justify-between
          gap-10
        "
      >
        {/* Conteúdo textual */}
        <header className="max-w-xl">
          <span className="flex items-center gap-2 text-blue-500 text-sm font-semibold uppercase tracking-wide">
            Domínio de Dados
          </span>

          <h2
            id="database-title"
            className="text-white text-3xl sm:text-4xl font-bold mt-4"
          >
            Modelagem de Dados
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed text-base sm:text-lg">
            Experiência com bancos relacionais para integridade e NoSQL para
            flexibilidade e escala.
          </p>
        </header>

        {/* Cards de bancos */}
        <ul
          className="flex flex-wrap gap-6 justify-start lg:justify-end"
          aria-label="Bancos de dados utilizados"
        >
          {/* MySQL */}
          <li>
            <article
              className="
                w-44 sm:w-48 h-52 sm:h-56
                bg-[#0f0f0f]
                rounded-2xl
                border border-white/10
                flex flex-col items-center justify-center
                text-center
              "
            >
              <svg
                role="img"
                aria-label="MySQL"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                className="w-12 h-12 sm:w-14 sm:h-14 mb-4"
              >
                <title>MySQL</title>
                <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53z" />
              </svg>

              <h3 className="text-white font-semibold text-base sm:text-lg">
                MySQL
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Relational & Widely used
              </p>
            </article>
          </li>

          {/* SQLite */}
          <li>
            <article
              className="
                w-44 sm:w-48 h-52 sm:h-56
                bg-[#0f0f0f]
                rounded-2xl
                border border-white/10
                flex flex-col items-center justify-center
                text-center
              "
            >
              <svg
                role="img"
                aria-label="SQLite"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                className="w-12 h-12 sm:w-14 sm:h-14 mb-4"
              >
                <title>SQLite</title>
                <path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544..." />
              </svg>

              <h3 className="text-white font-semibold text-base sm:text-lg">
                SQLite
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Embeddable & Lightweight
              </p>
            </article>
          </li>
        </ul>
      </article>
    </section>
  );
}
