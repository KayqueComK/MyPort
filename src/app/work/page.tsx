"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import "./work.css";
import { useLanguage } from "@/context/LanguageContext";
import {
  ExportSquare,
  Code,
  DirectRight,
  Key,
  Flash,
  ArrowRight2,
  ArrowUp2,
  ArrowDown2,
} from "iconsax-react";

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
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = t("work.pageTitle");
  }, [t]);

  const rawActiveProject = projects[selectedIndex] || projects[0];
  const activeProject = {
    ...rawActiveProject,
    title: t(`work.projects.${rawActiveProject.id}.title`) || rawActiveProject.title,
    category: t(`work.projects.${rawActiveProject.id}.category`) || rawActiveProject.category,
    problem: t(`work.projects.${rawActiveProject.id}.problem`) || rawActiveProject.problem,
    description: t(`work.projects.${rawActiveProject.id}.description`) || rawActiveProject.description,
  };

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
            {/* Header: Category & Badge */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--primary)] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/50">
                {activeProject.category}
              </span>
              {activeProject.featured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-[#0057FF] text-white rounded-full shadow-sm shadow-blue-500/30">
                  <Flash size="12" variant="Bold" className="text-white" />
                  <span>{t("work.featuredBadge")}</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--foreground)]">
              {activeProject.title}
            </h3>

            {/* Problem Box */}
            <div className="rounded-xl p-3.5 bg-blue-50/60 border border-blue-200/60 flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[var(--foreground)] shadow-xs">
              <DirectRight size="18" variant="Bold" className="text-[var(--primary)] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[var(--primary)] font-bold mr-1.5">
                  {t("work.problemLabel")}
                </strong>
                <span className="opacity-90">{activeProject.problem}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm leading-relaxed opacity-80 text-[var(--foreground)]">
              {activeProject.description}
            </p>

            {/* Technology tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[11px] font-semibold bg-white/90 border border-neutral-200/90 rounded-lg text-neutral-800 shadow-2xs hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Demo Credentials (if any) */}
            {activeProject.demoCredentials && (
              <div className="rounded-xl p-3 bg-amber-50/70 border border-amber-200/80 text-amber-950 flex items-start gap-2.5 text-xs shadow-2xs">
                <Key size="18" variant="Bold" className="text-amber-600 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 w-full">
                  <span className="font-bold text-amber-900">{t("work.demoLabel")}</span>
                  <code className="font-mono text-[11px] font-bold bg-white/90 px-2.5 py-1 rounded-md border border-amber-200 text-amber-950 select-all w-fit">
                    {activeProject.demoCredentials}
                  </code>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary)] text-white text-xs font-bold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{t("work.liveProjectBtn")}</span>
                <ExportSquare size="15" variant="Bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              {activeProject.github && (
                <Link
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 bg-white/80 backdrop-blur text-[var(--foreground)] text-xs font-bold hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-white transition-all shadow-xs"
                >
                  <span>{t("work.viewCodeBtn")}</span>
                  <Code size="16" variant="Bold" className="group-hover:scale-110 transition-transform" />
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
          <h1 className="work-title">{t("work.title")}</h1>
          <span className="work-count">{projects.length}</span>
        </motion.div>

        {/* List */}
        <ul className="work-list">
          {projects.map((rawProject, i) => {
            const project = {
              ...rawProject,
              title: t(`work.projects.${rawProject.id}.title`) || rawProject.title,
              category: t(`work.projects.${rawProject.id}.category`) || rawProject.category,
              problem: t(`work.projects.${rawProject.id}.problem`) || rawProject.problem,
              description: t(`work.projects.${rawProject.id}.description`) || rawProject.description,
            };
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
                    <span className="work-list-arrow text-[var(--primary)]">
                      <ArrowRight2 size="18" variant="Bold" />
                    </span>
                    <div>
                      <h2 className="work-list-name flex items-center gap-2">
                        {project.title}
                        {project.featured && (
                          <span className="md:hidden inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-[var(--primary)] text-white font-bold uppercase tracking-wider">
                            <Flash size="10" variant="Bold" className="text-white" />
                            <span>{t("work.featuredBadge")}</span>
                          </span>
                        )}
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="work-list-category">{project.category}</p>
                    <span className="md:hidden flex items-center justify-center w-6 h-6 rounded-full bg-neutral-200/50 text-[var(--foreground)] ml-1">
                      {isMobileExpanded ? (
                        <ArrowUp2 size="13" variant="Bold" />
                      ) : (
                        <ArrowDown2 size="13" variant="Bold" />
                      )}
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
                      className="md:hidden pb-5 pt-2 px-3.5 space-y-3.5 overflow-hidden text-sm rounded-2xl bg-white/70 border border-[rgba(0,87,255,0.12)] my-2"
                    >
                      <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs leading-relaxed flex items-start gap-2">
                        <DirectRight size="16" variant="Bold" className="text-[var(--primary)] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[var(--primary)] font-bold mr-1">
                            {t("work.problemLabel")}
                          </strong>
                          <span className="opacity-90">{project.problem}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-semibold bg-white border border-neutral-200 rounded-md text-[var(--foreground)] shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.demoCredentials && (
                        <div className="text-xs bg-amber-50/80 border border-amber-200 text-amber-950 p-2.5 rounded-xl flex items-start gap-2">
                          <Key size="16" variant="Bold" className="text-amber-600 shrink-0 mt-0.5" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-bold text-amber-900">{t("work.demoLabel")}</span>
                            <code className="font-mono text-[11px] font-bold bg-white/90 px-2 py-0.5 rounded border border-amber-200/60 select-all">
                              {project.demoCredentials}
                            </code>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-3 pt-1">
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--primary)] text-white text-xs font-bold shadow-sm"
                        >
                          <span>{t("work.liveProjectBtn")}</span>
                          <ExportSquare size="14" variant="Bold" />
                        </Link>
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-300 bg-white text-[var(--foreground)] text-xs font-bold"
                          >
                            <span>{t("work.codeShortBtn")}</span>
                            <Code size="14" variant="Bold" />
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
          <p className="text-sm font-medium opacity-70 text-center">{t("work.ctaQuestion")}</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[var(--primary)] text-white text-base md:text-lg font-semibold shadow-lg shadow-[#0057FF]/25 hover:shadow-xl hover:shadow-[#0057FF]/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>{t("work.contactBtn")}</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
          <p className="work-footer mt-4">
            {t("work.footerCredits")} © {new Date().getFullYear()}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
