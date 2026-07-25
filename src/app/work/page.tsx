"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import "./work.css";

/* ─────────────────────────────────────────────────────────────
   ✏️  PROJECTS — Edit this array to add / change your projects.
   Each project has:
     • title       — project name shown in the list
     • category    — tag shown on the right (e.g. "UX/UI Design")
     • description — short text shown in the left panel on hover
     • link        — URL the project links to (external or internal)
   ───────────────────────────────────────────────────────────── */
const projects = [
  {
    title: "Kanban Dashboard",
    category: "Desenvolvimento Web",
    description:
      "Um quadro kanban focado em produtividade com drag-and-drop, modo escuro e acompanhamento de tarefas em tempo real. Construído com vanilla JS e CSS moderno.",
    link: "https://projeto-kanban-com-pomodoro.vercel.app/",
  },
  {
    title: "Financely - Gestão Financeira",
    category: "Finaceiro",
    description:
      "Um sistema de controle financeiro robusto e intuitivo, projetado para transformar a maneira como você gerencia seu dinheiro. Com recursos avançados de orçamento, relatórios detalhados e uma interface de usuário fluida e moderna, o Financely oferece visibilidade total sobre suas finanças, ajudando você a tomar decisões mais inteligentes e a alcançar seus objetivos financeiros com confiança e precisão.",
    link: "https://financely-gules.vercel.app/login",
  },
  {
    title: "Skyloft",
    category: "UX/UI Design",
    description:
      "Landing page de página de Airbnb para locação de lofts e chalés com um design moderno e responsivo.",
    link: "https://skylofts.vercel.app/",
  },
  {
    title: "Site Portfólio",
    category: "Desenvolvimento Front-End",
    description:
      "Portfólio pessoal construído com Next.js, Framer Motion e Three.js. Conta com background 3D, transições suaves e cursor personalizado.",
    link: "https://meuportifolio-flax-three.vercel.app/",
  },
  // ✏️ Add more projects below by copying the object above:
  // {
  //   title: "Novo Projeto",
  //   category: "Categoria",
  //   description: "Uma breve descrição sobre o que é o projeto.",
  //   link: "https://example.com/novo-projeto",
  // },
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeProject =
    hoveredIndex !== null ? projects[hoveredIndex] : null;

  /* ── Framer Motion variants ── */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] },
    },
    exit: {
      opacity: 0,
      y: -6,
      transition: { duration: 0.15 },
    },
  };

  return (
    <div className="work-page">
      {/* ── Left Panel: Description ── */}
      <div className="work-left-panel">
        <AnimatePresence mode="wait">
          {activeProject ? (
            <motion.div
              key={activeProject.title}
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="work-description-card"
            >
              <span className="work-description-category">
                {activeProject.category}
              </span>
              <h3 className="work-description-title">
                {activeProject.title}
              </h3>
              <p className="work-description-text">
                {activeProject.description}
              </p>
              <span className="work-description-cta">
                Ver projeto →
              </span>
            </motion.div>
          ) : (
            <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="work-left-placeholder"
            >
              Passe o mouse em um projeto para ver detalhes
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── Right Panel: Project List ── */}
      <motion.div
        className="work-right-panel"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="work-header">
          <h1 className="work-title">Trabalhos</h1>
          <span className="work-count">{projects.length}</span>
        </motion.div>

        {/* List */}
        <ul className="work-list">
          {projects.map((project, i) => (
            <motion.li key={i} variants={itemVariants}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`work-list-item ${hoveredIndex === i ? "is-active" : ""
                  } ${hoveredIndex !== null && hoveredIndex !== i
                    ? "is-dimmed"
                    : ""
                  }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="work-list-item-left">
                  <span className="work-list-arrow">→</span>
                  <h2 className="work-list-name">{project.title}</h2>
                </div>
                <p className="work-list-category">{project.category}</p>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Contact CTA & Footer */}
        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-[rgba(27,27,27,0.1)] flex flex-col items-center gap-4">
          <p className="text-sm font-medium opacity-70 text-center">Gostou dos projetos ou tem uma ideia em mente?</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[var(--primary)] text-white text-base md:text-lg font-semibold shadow-lg shadow-[#0057FF]/25 hover:shadow-xl hover:shadow-[#0057FF]/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Me contatar</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
          <p className="work-footer mt-4">
            Projetado &amp; codado por KIQ © {new Date().getFullYear()}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
