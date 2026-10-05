"use client";

import { useState, useEffect } from "react";
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
    id: "financely",
    title: "Financely - Gestão Financeira",
    category: "Full Stack / Finanças",
    featured: true,
    problem:
      "Resolve a falta de controle orçamentário centralizando fluxo de caixa, orçamentos mensais e relatórios inteligentes em tempo real.",
    description:
      "Plataforma completa de gestão financeira desenvolvida com arquitetura robusta. Conta com autenticação de usuários, modelagem relacional via Prisma, gráficos analíticos interativos e containerização com Docker.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Docker"],
    link: "https://financely-gules.vercel.app/login",
    github: "https://github.com/KayqueComK/financely",
    demoCredentials: "demo@financely.com / demo123",
  },
  {
    id: "kanban",
    title: "Kanban Dashboard com Pomodoro",
    category: "Produtividade & Web",
    featured: false,
    problem:
      "Combina a agilidade do método Kanban com blocos de hiperfoco (Pomodoro) para evitar a sobrecarga diária.",
    description:
      "Quadro kanban com suporte a drag-and-drop nativo no navegador, timer Pomodoro sonoro customizável, modo escuro e persistência de dados local sem dependências externas.",
    tags: ["JavaScript (ES6+)", "HTML5", "CSS Moderno", "Drag & Drop", "LocalStorage"],
    link: "https://projeto-kanban-com-pomodoro.vercel.app/",
    github: "https://github.com/KayqueComK",
  },
  {
    id: "skyloft",
    title: "Skyloft - Locação de Chalés",
    category: "UI/UX & Landing Page",
    featured: false,
    problem:
      "Proporciona uma experiência visual de alto padrão para reservas de hospedagens exclusivas em meio à natureza.",
    description:
      "Landing page editorial com visual limpo inspirada no modelo Airbnb de chalés e lofts. Foco em tipografia refinada, arquitetura de informação clara e microinterações desenhadas no Figma.",
    tags: ["React", "Tailwind CSS", "UI/UX Design", "Figma", "Design Responsivo"],
    link: "https://skylofts.vercel.app/",
    github: "https://github.com/KayqueComK",
  },
  {
    id: "portfolio",
    title: "Portfólio Pessoal (MyPort)",
    category: "Creative Coding & 3D",
    featured: false,
    problem:
      "Une design expressivo e engenharia criativa com renderização WebGL em tempo real sem prejudicar performance.",
    description:
      "Portfólio pessoal construído com Next.js (Turbopack) e animações 3D interativas com Three.js/WebGL. Transições fluidas com Framer Motion, cursor customizado e identidade visual autoral.",
    tags: ["Next.js", "Three.js", "WebGL", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "https://meuportifolio-flax-three.vercel.app/",
    github: "https://github.com/KayqueComK/MyPort",
  },
];

export default function Work() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Trabalhos | Kayque Alberto";
  }, []);

  const activeProject = projects[selectedIndex] || projects[0];

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

  const toggleMobileExpand = (index: number) => {
    setExpandedMobileIndex((prev) => (prev === index ? null : index));
    setSelectedIndex(index);
  };

  return (
    <div className="work-page">
      {/* ── Left Panel: Description (Desktop) ── */}
      <div className="work-left-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.title}
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="work-description-card"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="work-description-category">
                {activeProject.category}
              </span>
              {activeProject.featured && (
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[var(--primary)] text-white rounded-full">
                  Destaque
                </span>
              )}
            </div>

            <h3 className="work-description-title">
              {activeProject.title}
            </h3>

            <div className="text-xs font-semibold text-[var(--foreground)] opacity-90 bg-neutral-200/50 p-2.5 rounded-lg border border-[rgba(0,87,255,0.15)] leading-relaxed">
              <span className="text-[var(--primary)] font-bold">🎯 Problema que resolve:</span>{" "}
              {activeProject.problem}
            </div>

            <p className="work-description-text">
              {activeProject.description}
            </p>

            {/* Tags de tecnologias */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-[11px] font-semibold bg-white/80 border border-[rgba(27,27,27,0.1)] rounded-md text-[var(--foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Credenciais demo se houver */}
            {activeProject.demoCredentials && (
              <div className="text-xs bg-blue-50 border border-blue-200 text-blue-900 p-2.5 rounded-lg flex flex-col gap-0.5">
                <span className="font-bold text-[var(--primary)]">💡 Acesso para teste (Demo):</span>
                <code className="font-mono text-[11px] font-semibold">{activeProject.demoCredentials}</code>
              </div>
            )}

            {/* Links de ação */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-white text-xs font-bold shadow-sm hover:bg-[#0047d4] transition-colors"
              >
                <span>Acessar Projeto</span>
                <span>↗</span>
              </Link>
              {activeProject.github && (
                <Link
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(27,27,27,0.2)] text-[var(--foreground)] text-xs font-bold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  <span>Ver Código</span>
                  <span>↗</span>
                </Link>
              )}
            </div>
          </motion.div>
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
          {projects.map((project, i) => {
            const isSelected = selectedIndex === i;
            const isMobileExpanded = expandedMobileIndex === i;

            return (
              <motion.li key={project.id} variants={itemVariants} className="border-b border-[rgba(27,27,27,0.12)]">
                {/* Desktop item click / hover */}
                <div
                  className={`work-list-item ${isSelected ? "is-active" : ""}`}
                  onMouseEnter={() => setSelectedIndex(i)}
                  onClick={() => toggleMobileExpand(i)}
                >
                  <div className="work-list-item-left">
                    <span className="work-list-arrow">→</span>
                    <div>
                      <h2 className="work-list-name flex items-center gap-2">
                        {project.title}
                        {project.featured && (
                          <span className="md:hidden text-[9px] px-2 py-0.5 rounded-full bg-[var(--primary)] text-white font-bold uppercase tracking-wider">
                            Destaque
                          </span>
                        )}
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="work-list-category">{project.category}</p>
                    <span className="md:hidden text-xs opacity-50 font-bold ml-1">
                      {isMobileExpanded ? "▲" : "▼"}
                    </span>
                  </div>
                </div>

                {/* Mobile Expandable Details (Inline on tap) */}
                <AnimatePresence>
                  {isMobileExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="md:hidden pb-5 px-1 space-y-3 overflow-hidden text-sm"
                    >
                      <div className="p-2.5 rounded-lg bg-neutral-200/60 border border-[rgba(0,87,255,0.15)] text-xs leading-relaxed">
                        <span className="text-[var(--primary)] font-bold">🎯 Problema que resolve:</span>{" "}
                        {project.problem}
                      </div>

                      <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-semibold bg-white border border-[rgba(27,27,27,0.1)] rounded-md text-[var(--foreground)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.demoCredentials && (
                        <div className="text-xs bg-blue-50 border border-blue-200 text-blue-900 p-2.5 rounded-lg flex flex-col gap-0.5">
                          <span className="font-bold text-[var(--primary)]">💡 Acesso demo:</span>
                          <code className="font-mono text-[11px] font-semibold">{project.demoCredentials}</code>
                        </div>
                      )}

                      <div className="flex items-center gap-3 pt-1">
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--primary)] text-white text-xs font-bold shadow-sm"
                        >
                          <span>Acessar Projeto</span>
                          <span>↗</span>
                        </Link>
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[rgba(27,27,27,0.2)] text-[var(--foreground)] text-xs font-bold"
                          >
                            <span>Código</span>
                            <span>↗</span>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
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
