"use client";

import Link from "next/link";
import { ExportSquare, Code, DirectRight, Key } from "iconsax-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  /** Versão menor, usada na lista expansível do mobile. */
  compact?: boolean;
}

export function ProblemBox({ project, compact }: Props) {
  const { t } = useLanguage();
  return (
    <div
      className={
        compact
          ? "p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs leading-relaxed flex items-start gap-2"
          : "rounded-xl p-3.5 bg-blue-50/60 border border-blue-200/60 flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[var(--foreground)] shadow-xs"
      }
    >
      <DirectRight
        size={compact ? "16" : "18"}
        variant="Bold"
        className="text-[var(--primary)] shrink-0 mt-0.5"
      />
      <div>
        <strong className="text-[var(--primary)] font-bold mr-1.5">
          {t("work.problemLabel")}
        </strong>
        <span className="opacity-90">{project.problem}</span>
      </div>
    </div>
  );
}

export function TagList({ project, compact }: Props) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${compact ? "" : "pt-1"}`} aria-label="Tecnologias">
      {project.tags.map((tag) => (
        <li
          key={tag}
          className={
            compact
              ? "px-2 py-0.5 text-[10px] font-semibold bg-white border border-neutral-200 rounded-md text-[var(--foreground)] shadow-2xs"
              : "px-2.5 py-1 text-[11px] font-semibold bg-white/90 border border-neutral-200/90 rounded-lg text-neutral-800 shadow-2xs hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
          }
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function DemoCredentials({ project, compact }: Props) {
  const { t } = useLanguage();
  if (!project.demoCredentials) return null;
  return (
    <div
      className={
        compact
          ? "text-xs bg-amber-50/80 border border-amber-200 text-amber-950 p-2.5 rounded-xl flex items-start gap-2"
          : "rounded-xl p-3 bg-amber-50/70 border border-amber-200/80 text-amber-950 flex items-start gap-2.5 text-xs shadow-2xs"
      }
    >
      <Key
        size={compact ? "16" : "18"}
        variant="Bold"
        className="text-amber-600 shrink-0 mt-0.5"
      />
      <div className="flex flex-col gap-1 w-full">
        <span className="font-bold text-amber-900">{t("work.demoLabel")}</span>
        <code className="font-mono text-[11px] font-bold bg-white/90 px-2.5 py-1 rounded-md border border-amber-200 text-amber-950 select-all w-fit">
          {project.demoCredentials}
        </code>
      </div>
    </div>
  );
}

export function ActionButtons({ project, compact }: Props) {
  const { t } = useLanguage();
  return (
    <div className={`flex items-center gap-3 ${compact ? "pt-1" : "pt-2"}`}>
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={
          compact
            ? "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--primary)] text-white text-xs font-bold shadow-sm"
            : "group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary)] text-white text-xs font-bold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
        }
      >
        <span>{t("work.liveProjectBtn")}</span>
        <ExportSquare size={compact ? "14" : "15"} variant="Bold" aria-hidden />
      </Link>
      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={
            compact
              ? "inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-300 bg-white text-[var(--foreground)] text-xs font-bold"
              : "group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 bg-white/80 backdrop-blur text-[var(--foreground)] text-xs font-bold hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-white transition-all shadow-xs"
          }
        >
          <span>{compact ? t("work.codeShortBtn") : t("work.viewCodeBtn")}</span>
          <Code size={compact ? "14" : "16"} variant="Bold" aria-hidden />
        </Link>
      )}
    </div>
  );
}
