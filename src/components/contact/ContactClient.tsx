"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ContributionSkyline, {
  type ContributionDay,
  type ContributionSkylineLabels,
} from "@/components/ui/contribution-skyline";

interface ContactClientProps {
  contributions?: ContributionDay[];
  fallbackEndDate: string;
}

const PT_SKYLINE_LABELS: Partial<ContributionSkylineLabels> = {
  inLastYear: "no último ano",
  noActivityPrefix: "Sem ",
  onDatePreposition: " em ",
  yearTotal: "Total em 1 ano",
  busiestDay: "Dia mais ativo",
  longestStreak: "Maior sequência",
  currentStreak: "Sequência atual",
  dayUnit: "dia",
  daysUnit: "dias",
  chartViewGroup: "Visualização do gráfico",
  view2d: "Mapa de calor 2D",
  view3d: "Skyline 3D",
  hint2d: "Passe o mouse em um dia · setas para explorar",
  hint3d: "Arraste para girar · clique duplo para resetar",
  less: "Menos",
  more: "Mais",
  levels: ["Leve", "Moderada", "Alta", "Máxima"],
};

export default function ContactClient({
  contributions,
  fallbackEndDate,
}: ContactClientProps) {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = t("contact.pageTitle");
  }, [t]);

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
    <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-4 md:pb-6 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[780px] w-full mx-auto flex flex-col items-center transform-gpu"
      >
        {/* Status de Disponibilidade */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold mb-2 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t("contact.status")}</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-1.5 tracking-tighter text-[var(--foreground)]"
        >
          {t("contact.title")}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-[15px] font-light mb-3 opacity-80 max-w-xl px-2 leading-snug"
        >
          {t("contact.description")}
        </motion.p>

        {/* E-mail de Destaque + Ações de Copiar e Currículo */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col items-center gap-2 mb-3.5"
        >
          <a
            href={`mailto:${email}`}
            className="text-lg sm:text-2xl md:text-3xl font-bold border-b-2 border-[var(--primary)] pb-0.5 hover:text-[var(--primary)] hover:border-transparent transition-all break-all max-w-full px-2"
          >
            {email}
          </a>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[rgba(27,27,27,0.15)] text-xs font-semibold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all cursor-pointer bg-white/60 shadow-sm"
            >
              <span>{copied ? t("contact.copiedEmailBtn") : t("contact.copyEmailBtn")}</span>
            </button>
            <a
              href="/curriculo-kayque-alberto.pdf"
              download={t("contact.cvFileName")}
              className="group inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[var(--primary)] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#0057FF]/25 hover:shadow-lg hover:shadow-[#0057FF]/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>{t("contact.downloadCvBtn")}</span>
            </a>
          </div>
        </motion.div>

        {/* Redes Profissionais Limpas */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-xs font-bold tracking-widest uppercase border-t border-[rgba(27,27,27,0.12)] pt-3 w-full max-w-md"
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

        {/* Atividade no GitHub (Contribution Skyline) */}
        <motion.div
          variants={itemVariants}
          className="w-full mt-3.5 md:mt-4 text-left"
          style={
            {
              "--color-background": "#ffffff",
              "--color-foreground": "#1b1b1b",
              "--color-border": "rgba(27, 27, 27, 0.12)",
              "--color-muted-foreground": "#6b6b6b",
            } as React.CSSProperties
          }
        >
          <div className="mb-1.5 flex items-center justify-between gap-4 px-1">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--foreground)]/60">
              {t("contact.githubActivity")}
            </span>
            <a
              href="https://github.com/KayqueComK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-[var(--foreground)]/65 hover:text-[var(--primary)] transition-colors"
            >
              @KayqueComK ↗
            </a>
          </div>
          <ContributionSkyline
            data={contributions}
            endDate={contributions ? undefined : fallbackEndDate}
            defaultView="3d"
            palette="github"
            compact
            maxHeight={185}
            locale={language === "pt" ? "pt-BR" : "en-US"}
            unit={language === "pt" ? "contribuição" : "contribution"}
            unitPlural={language === "pt" ? "contribuições" : "contributions"}
            labels={language === "pt" ? PT_SKYLINE_LABELS : undefined}
            className="shadow-sm"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
