"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t("about.pageTitle");
  }, [t]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
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
    <div className="flex-1 flex flex-col pt-24 md:pt-32 px-4 sm:px-6 md:px-20 lg:px-40 pb-12 md:pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full mx-auto transform-gpu"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-row items-center justify-between gap-3 sm:gap-8 mb-12 md:mb-20"
        >
          <h1 className="text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter">
            {t("about.title")}
          </h1>
          {/* Moldura do MS Paint com a foto dentro da tela */}
          <div className="relative w-32 sm:w-56 md:w-72 aspect-[415/601] flex-shrink-0 filter drop-shadow-2xl">
            {/* Foto de Perfil (camada inferior - z-10) */}
            <div
              className="absolute overflow-hidden z-10 bg-neutral-900"
              style={{
                left: "29.2%",
                top: "14.5%",
                width: "59.5%",
                height: "56.8%",
              }}
            >
              <Image
                src="/profile.png"
                alt="Kayque Alberto"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
                unoptimized
              />
            </div>

            {/* Moldura do MS Paint (camada superior - z-30) sobreposta */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              <Image
                src="/moldura-paint.png"
                alt="Moldura de janela clássica do programa MS Paint vintage contornando a foto de perfil"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-2xl leading-relaxed font-light mb-6 md:mb-8 text-[var(--foreground)]">
          {t("about.greeting")} <strong className="font-semibold text-[var(--primary)]">{t("about.nameHighlight")}</strong>{t("about.introRest")}
        </motion.div>

        <motion.div variants={itemVariants} className="text-base sm:text-lg md:text-xl leading-relaxed font-light mb-8 md:mb-12 opacity-85 space-y-4">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p className="opacity-90 pt-3 border-t border-[rgba(27,27,27,0.1)]">
            {t("about.p4")}
          </p>
        </motion.div>


        {/* ── Habilidades Agrupadas ── */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6 mb-12 md:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--text)] opacity-60">
            {t("about.skillsTitle")}
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-3">
                {t("about.skillsCat1")}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["Node.js", language === "pt" ? "APIs REST" : "REST APIs", "SQL Server", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-[rgba(27,27,27,0.15)] bg-white/60 rounded-full text-xs sm:text-sm font-medium tracking-wide hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-3">
                {t("about.skillsCat2")}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "WebGL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-[rgba(27,27,27,0.15)] bg-white/60 rounded-full text-xs sm:text-sm font-medium tracking-wide hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-3">
                {t("about.skillsCat3")}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["Git", "GitHub", "Figma"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-[rgba(27,27,27,0.15)] bg-white/60 rounded-full text-xs sm:text-sm font-medium tracking-wide hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── CTA Final ── */}
        <motion.div variants={itemVariants} className="pt-8 border-t border-[rgba(27,27,27,0.1)] flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-medium opacity-70">
            {t("about.ctaQuestion")}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--primary)] text-white text-sm font-semibold shadow-md hover:bg-[#0047d4] transition-colors"
            >
              <span>{t("about.ctaProjects")}</span>
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[rgba(27,27,27,0.2)] text-[var(--foreground)] text-sm font-semibold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
            >
              <span>{t("about.ctaContact")}</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
