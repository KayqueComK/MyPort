"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Contato | Kayque Alberto";
  }, []);

  const email = "Kayquealberto@hotmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-20 lg:px-40 pt-28 md:pt-40 pb-16 md:pb-24 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl w-full mx-auto flex flex-col items-center transform-gpu"
      >
        {/* Status de Disponibilidade */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Disponível para novas oportunidades &amp; freelance</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter text-[var(--foreground)]"
        >
          Vamos conversar.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl md:text-2xl font-light mb-10 md:mb-14 opacity-80 max-w-2xl px-2 leading-relaxed"
        >
          Interessado em trabalhar juntos, tem uma oportunidade em mente ou quer falar sobre desenvolvimento? Sinta-se à vontade para me enviar um e-mail ou baixar meu currículo.
        </motion.p>

        {/* E-mail de Destaque com Ação de Copiar */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col items-center gap-3 mb-10 md:mb-14"
        >
          <a
            href={`mailto:${email}`}
            className="text-xl sm:text-3xl md:text-5xl font-bold border-b-2 md:border-b-4 border-[var(--primary)] pb-1 md:pb-2 hover:text-[var(--primary)] hover:border-transparent transition-all break-all max-w-full px-2"
          >
            {email}
          </a>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(27,27,27,0.15)] text-xs font-semibold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all cursor-pointer bg-white/60 shadow-sm"
          >
            <span>{copied ? "✓ E-mail Copiado!" : "Copiar E-mail"}</span>
          </button>
        </motion.div>

        {/* Botão de Download do Currículo */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <a
            href="/curriculo-kayque-alberto.pdf"
            download="Curriculo-Kayque-Alberto.pdf"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[var(--primary)] text-white text-base md:text-lg font-semibold shadow-lg shadow-[#0057FF]/25 hover:shadow-xl hover:shadow-[#0057FF]/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>↓ Baixar Currículo (PDF)</span>
          </a>
        </motion.div>

        {/* Redes Profissionais Limpas */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs sm:text-sm font-bold tracking-widest uppercase border-t border-[rgba(27,27,27,0.12)] pt-8 w-full max-w-md"
        >
          <a
            href="https://www.linkedin.com/in/kayque-alberto-937a08230/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/KayqueComK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/k.ayqueal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary)] transition-colors"
          >
            Instagram
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
