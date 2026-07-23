"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy-load the heavy Three.js canvas — won't block initial page render
const CanvasBackground = dynamic(
  () => import("@/components/canvas/CanvasBackground"),
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
      <CanvasBackground />
      <div className="flex-1 flex flex-col justify-center items-center pt-28 md:pt-36 lg:pt-40 pb-12 px-6 md:px-20 lg:px-40 pointer-events-none relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl text-center flex flex-col items-center"
        >
          <div className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-12 pointer-events-auto items-center">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight">
               Ei, eu sou o <span className="font-bold italic pr-2">Kayque</span>
            </motion.h1>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight">
              <span className="font-bold italic pr-2">Alberto</span>
            </motion.h1>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight mt-4 md:mt-8 text-[var(--primary)] opacity-80">
               Mas pode me chamar de <span className="font-bold italic underline decoration-4 underline-offset-8">KIQ</span>
            </motion.h1>
          </div>

          <div className="flex flex-col gap-1 mb-12 pointer-events-auto text-lg md:text-xl lg:text-2xl font-light opacity-80 items-center">
            <motion.p variants={itemVariants}>Sou designer gráfico, designer UX/UI</motion.p>
            <motion.p variants={itemVariants}>&amp; desenvolvedor front-end</motion.p>
          </div>

          <div className="flex flex-col gap-4 pointer-events-auto items-center">
            <motion.div variants={itemVariants}>
              <Link href="/work" className="group inline-flex items-center gap-2 text-xl font-medium hover:opacity-70 transition-opacity">
                <span className="text-[var(--primary)] group-hover:translate-x-2 transition-transform">→</span> Ver meus projetos
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/about" className="group inline-flex items-center gap-2 text-xl font-medium hover:opacity-70 transition-opacity">
                <span className="text-[var(--primary)] group-hover:translate-x-2 transition-transform">→</span> Mais sobre mim
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
