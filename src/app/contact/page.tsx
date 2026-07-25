"use client";

import { motion, Variants } from "framer-motion";

export default function Contact() {
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
    <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-20 lg:px-40 pt-24 md:pt-40 pb-12 md:pb-20 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full mx-auto flex flex-col items-center transform-gpu"
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter">
          Vamos conversar.
        </motion.h1>

        <motion.div variants={itemVariants} className="text-base sm:text-xl md:text-2xl font-light mb-8 md:mb-16 opacity-80 max-w-2xl px-2">
          Interessado em trabalhar junto ou só quer mandar um oi? Me manda uma mensagem!
        </motion.div>

        <motion.a
          variants={itemVariants}
          href="mailto:Kayquealberto@hotmail.com"
          className="text-lg sm:text-3xl md:text-5xl font-bold border-b-2 md:border-b-4 border-[var(--primary)] pb-1 md:pb-2 hover:text-[var(--primary)] hover:border-transparent transition-all mb-12 md:mb-20 break-all max-w-full px-2"
        >
          Kayquealberto@hotmail.com
        </motion.a>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs sm:text-sm font-bold tracking-widest uppercase">
          <a href="https://www.instagram.com/k.ayqueal?igsh=dzUyYjZhemNyMGQy&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">Instagram</a>
          <a href="https://github.com/KayqueComK" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/kayque-alberto-937a08230?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">LinkedIn</a>
        </motion.div>
      </motion.div>
    </div>
  );
}
