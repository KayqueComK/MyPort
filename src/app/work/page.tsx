"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import "./work.css";
import { useLanguage } from "@/context/LanguageContext";
import { Flash, ArrowRight2, ArrowUp2, ArrowDown2 } from "iconsax-react";
import { projects, localizeProject } from "@/data/projects";
import {
  ProblemBox,
  TagList,
  DemoCredentials,
  ActionButtons,
} from "@/components/work/ProjectParts";

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

export default function Work() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = t("work.pageTitle");
  }, [t]);

  const activeProject = localizeProject(projects[selectedIndex] || projects[0], t);

  const toggleMobileExpand = (index: number) => {
    setExpandedMobileIndex((prev) => (prev === index ? null : index));
    setSelectedIndex(index);
  };

  return (
    <div className="work-page">
      {/* ── Left Panel: Description (Desktop) ── */}
      <div className="work-left-panel" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
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
                  <Flash size="12" variant="Bold" className="text-white" aria-hidden />
                  <span>{t("work.featuredBadge")}</span>
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--foreground)]">
              {activeProject.title}
            </h3>

            <ProblemBox project={activeProject} />

            <p className="text-xs sm:text-sm leading-relaxed opacity-80 text-[var(--foreground)]">
              {activeProject.description}
            </p>

            <TagList project={activeProject} />
            <DemoCredentials project={activeProject} />
            <ActionButtons project={activeProject} />
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
        <motion.div variants={itemVariants} className="work-header">
          <h1 className="work-title">{t("work.title")}</h1>
          <span className="work-count">{projects.length}</span>
        </motion.div>

        <ul className="work-list">
          {projects.map((rawProject, i) => {
            const project = localizeProject(rawProject, t);
            const isSelected = selectedIndex === i;
            const isMobileExpanded = expandedMobileIndex === i;
            const panelId = `project-panel-${project.id}`;

            return (
              <motion.li
                key={project.id}
                variants={itemVariants}
                className="border-b border-[rgba(27,27,27,0.12)]"
              >
                <h2 className="m-0">
                  <button
                    type="button"
                    className={`work-list-item ${isSelected ? "is-active" : ""}`}
                    aria-expanded={isMobileExpanded}
                    aria-controls={panelId}
                    onMouseEnter={() => setSelectedIndex(i)}
                    onFocus={() => setSelectedIndex(i)}
                    onClick={() => toggleMobileExpand(i)}
                  >
                    <span className="work-list-item-left">
                      <span className="work-list-arrow text-[var(--primary)]" aria-hidden>
                        <ArrowRight2 size="18" variant="Bold" />
                      </span>
                      <span className="work-list-name flex items-center gap-2">
                        {project.title}
                        {project.featured && (
                          <span className="md:hidden inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-[var(--primary)] text-white font-bold uppercase tracking-wider">
                            <Flash size="10" variant="Bold" className="text-white" aria-hidden />
                            <span>{t("work.featuredBadge")}</span>
                          </span>
                        )}
                      </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="work-list-category">{project.category}</span>
                      <span
                        className="md:hidden flex items-center justify-center w-6 h-6 rounded-full bg-neutral-200/50 text-[var(--foreground)] ml-1"
                        aria-hidden
                      >
                        {isMobileExpanded ? (
                          <ArrowUp2 size="13" variant="Bold" />
                        ) : (
                          <ArrowDown2 size="13" variant="Bold" />
                        )}
                      </span>
                    </span>
                  </button>
                </h2>

                {/* Mobile Expandable Details */}
                <AnimatePresence>
                  {isMobileExpanded && (
                    <motion.div
                      id={panelId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="md:hidden pb-5 pt-2 px-3.5 space-y-3.5 overflow-hidden text-sm rounded-2xl bg-white/70 border border-[rgba(0,87,255,0.12)] my-2"
                    >
                      <ProblemBox project={project} compact />
                      <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                        {project.description}
                      </p>
                      <TagList project={project} compact />
                      <DemoCredentials project={project} compact />
                      <ActionButtons project={project} compact />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>

        {/* Contact CTA & Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-[rgba(27,27,27,0.1)] flex flex-col items-center gap-4"
        >
          <p className="text-sm font-medium opacity-70 text-center">{t("work.ctaQuestion")}</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[var(--primary)] text-white text-base md:text-lg font-semibold shadow-lg shadow-[#0057FF]/25 hover:shadow-xl hover:shadow-[#0057FF]/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>{t("work.contactBtn")}</span>
            <span
              className="group-hover:translate-x-1.5 transition-transform duration-300"
              aria-hidden
            >
              →
            </span>
          </Link>
          <p className="work-footer mt-4">
            {t("work.footerCredits")} © {new Date().getFullYear()}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
