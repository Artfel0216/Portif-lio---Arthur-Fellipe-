"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const logs = [
  { text: "initializing node.js server...", color: "text-gray-300" },
  { text: "loading environment variables (.env)", color: "text-blue-400" },
  { text: "connecting to PostgreSQL database... OK", color: "text-green-400" },
  { text: "connecting to AWS S3 bucket... OK", color: "text-green-400" },
  { text: "configuring JWT authentication... OK", color: "text-yellow-400" },
  { text: "server started on port 3000 (0.612s)", color: "text-green-500" },
];

export default function NodeServerTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    if (lineIndex >= logs.length) return;

    const currentLine = logs[lineIndex].text;

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[lineIndex] =
            (updated[lineIndex] || "") + currentLine[charIndex];
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [charIndex, lineIndex]);

  return (
    <section className="mt-10 bg-black flex items-center justify-center px-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          w-full
          max-w-[1600px]
          bg-[#0b0b0b]
          rounded-2xl
          p-3 md:p-10
          font-mono
          text-sm md:text-base
          text-white
          shadow-[0_0_60px_rgba(0,255,150,0.18)]
          border border-green-500/10
        "
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_#eab308]" />
          <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
          <span className="ml-4 text-gray-400 text-sm">
            server_start.js — Node.js Runtime
          </span>
        </div>

        {/* Terminal body */}
        <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-2">
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className={`
                ${logs[index].color}
                drop-shadow-[0_0_6px_rgba(0,255,150,0.35)]
              `}
            >
              <span className="text-gray-500 mr-2">{">"}</span>
              {line}
            </div>
          ))}

          {/* Cursor */}
          {lineIndex < logs.length && (
            <motion.span
              className="inline-block w-2 h-5 bg-green-400 ml-1 shadow-[0_0_12px_rgba(0,255,150,0.9)]"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-wrap gap-8 text-xs md:text-sm text-gray-400">
          <span className="text-green-400 drop-shadow-[0_0_6px_rgba(0,255,150,0.6)]">
            🟢 System Online
          </span>
          <span>🗄 PostgreSQL Connected</span>
          <span>🔐 JWT Auth Enabled</span>
          <span>☁️ AWS S3</span>
          <span>⚡ Node.js</span>
        </div>
      </motion.div>
    </section>
  );
}
