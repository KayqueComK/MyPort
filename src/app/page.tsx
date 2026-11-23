"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";

// Lazy-load the Balatro WebGL background — won't block initial page render
const Balatro = dynamic(
  () => import("@/components/canvas/Balatro"),
  { ssr: false }
);

const SPLASH_KEY = "kiq-splash-shown";

export default function Home() {
  const { t } = useLanguage();
  // Check if splash already played this session → skip the delay
  const [splashDelay, setSplashDelay] = useState(2.8);

  useEffect(() => {
    if (sessionStorage.getItem(SPLASH_KEY)) {
      setSplashDelay(0); // No splash → animate immediately
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: splashDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Balatro
          isRotate
          mouseInteraction={false}
          spinSpeed={1.5}
          spinRotation={-0.5}
          pixelFilter={1200}
          color1="#0057FF"
          color2="#0057FF"
          color3="#1d1d1cff"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center pt-20 md:pt-24 pb-6 md:pb-8 px-4 sm:px-6 md:px-12 lg:px-20 pointer-events-none relative z-10 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl w-full text-center flex flex-col items-center"
        >
          <div className="flex flex-col gap-1.5 md:gap-2.5 mb-4 md:mb-6 pointer-events-auto items-center">
            <motion.h1 variants={itemVariants} className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight text-white font-lulo">
              {t("home.greeting")}
            </motion.h1>
            <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold tracking-tight text-white font-lulo leading-tight">
              <span>Kayque Alberto</span>
            </motion.h1>
            <motion.h1 variants={itemVariants} className="flex flex-wrap justify-center items-baseline gap-x-2.5 gap-y-1.5 text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight mt-1 md:mt-2 text-white font-lulo leading-snug">
              <span>{t("home.welcome")}</span>
              <Link
                href="/work"
                className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white underline decoration-[3px] md:decoration-4 underline-offset-4 md:underline-offset-8 decoration-[#2787F5] hover:text-white/80 transition-opacity inline-block"
              >
                {t("home.portfolio")}
              </Link>
            </motion.h1>
          </div>

          <div className="flex flex-col gap-1 mb-5 md:mb-6 pointer-events-auto text-sm sm:text-base md:text-lg font-bold text-white/95 items-center px-2">
            <motion.p variants={itemVariants}>
              {t("home.role")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-base font-normal text-white/80 max-w-xl leading-snug">
              {t("home.subtitle")}
            </motion.p>
          </div>

          <div className="flex flex-col gap-2 md:gap-2.5 pointer-events-auto items-center">
            <motion.div variants={itemVariants}>
              <Link href="/work" className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white hover:opacity-80 transition-opacity">
                <span className="group-hover:translate-x-2 transition-transform">→</span> {t("home.viewProjects")}
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/about" className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white hover:opacity-80 transition-opacity">
                <span className="group-hover:translate-x-2 transition-transform">→</span> {t("home.aboutMe")}
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-1.5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-[#0057FF] text-sm sm:text-base font-semibold shadow-xl shadow-black/20 hover:shadow-2xl hover:bg-white/95 hover:scale-105 active:scale-95 transition-all duration-300 drop-shadow-none"
              >
                <span>{t("home.contactMe")}</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
