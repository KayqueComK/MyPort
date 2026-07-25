"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy-load the Balatro WebGL background — won't block initial page render
const Balatro = dynamic(
  () => import("@/components/canvas/Balatro"),
  { ssr: false }
);

const SPLASH_KEY = "kiq-splash-shown";

export default function Home() {
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
          color3="#F8F7F4"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center pt-24 md:pt-36 lg:pt-40 pb-10 md:pb-12 px-4 sm:px-6 md:px-20 lg:px-40 pointer-events-none relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl text-center flex flex-col items-center"
        >
          <div className="flex flex-col gap-2 md:gap-4 mb-6 md:mb-12 pointer-events-auto items-center">
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight">
              Olá sou o <span className="font-bold italic pr-2">Kayque</span>
            </motion.h1>
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight">
              <span className="font-bold italic pr-2">Alberto</span>
            </motion.h1>
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight mt-2 md:mt-8 text-[var(--text)] opacity-80">
              Seja bem vindo ao meu <span className="font-bold italic underline decoration-4 underline-offset-8 decoration-[var(--primary)]">portfolio</span>
            </motion.h1>
          </div>

          <div className="flex flex-col gap-1 mb-8 md:mb-12 pointer-events-auto text-base sm:text-lg md:text-xl lg:text-2xl font-bold opacity-90 items-center px-2">
            <motion.p variants={itemVariants}>Sou estudante de Sistemas e apaixonado por desenvolvimento web</motion.p>
            <motion.p variants={itemVariants}>
              Católico e Jovem missionario{" "}
              <a
                href="https://www.instagram.com/comagape/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-4 decoration-[var(--primary)] hover:opacity-80 transition-opacity"
              >
                Ágape
              </a>
            </motion.p>
          </div>

          <div className="flex flex-col gap-4 pointer-events-auto items-center">
            <motion.div variants={itemVariants}>
              <Link href="/work" className="group inline-flex items-center gap-2 text-lg sm:text-xl font-medium hover:opacity-70 transition-opacity">
                <span className="text-[var(--primary)] group-hover:translate-x-2 transition-transform">→</span> Ver meus projetos
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/about" className="group inline-flex items-center gap-2 text-lg sm:text-xl font-medium hover:opacity-70 transition-opacity">
                <span className="text-[var(--primary)] group-hover:translate-x-2 transition-transform">→</span> Mais sobre mim
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[var(--primary)] text-white text-lg sm:text-xl font-semibold shadow-lg shadow-[#0057FF]/25 hover:shadow-xl hover:shadow-[#0057FF]/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Me contatar</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
