"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./components/header/page";
import NodeServerTerminal from "./components/NodeServerTerminal/page";
import TechStackSection from "./components/TechStackSection/page";
import EcosystemSection from "./components/EcosystemSection/page";
import LanguageSection from "./components/languageSection/page";
import BdSection from "./components/BdSection/page";

export default function Home() {
  // Captura o progresso da rolagem da página
  const { scrollYProgress } = useScroll();

  // Transformações baseadas no scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <motion.main
      style={{ opacity, y }}
      className="flex flex-col items-center justify-center"
    >
      {/* Hero / Header */}
      <header>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Header />
        </motion.div>
      </header>

      {/* Terminal / Showcase */}
      <section aria-labelledby="terminal-section">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <NodeServerTerminal />
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section aria-labelledby="tech-stack-section">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <TechStackSection />
        </motion.div>
      </section>
      {/* Tech Tecnologias */}
      <section aria-labelledby="tech-stack-section">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <EcosystemSection />
        </motion.div>
      </section>

      <section aria-labelledby="tech-stack-section">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <LanguageSection />
        </motion.div>
      </section>

       <section aria-labelledby="tech-stack-section">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <BdSection />
        </motion.div>
      </section>
    </motion.main>
  );
}
