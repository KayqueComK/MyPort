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
    <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-20 lg:px-40 pt-32 md:pt-40 pb-20 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full mx-auto flex flex-col items-center transform-gpu"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
          Vamos conversar.
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl md:text-2xl font-light mb-16 opacity-80 max-w-2xl">
          Interessado em trabalhar junto ou só quer mandar um oi? Me manda uma mensagem!
        </motion.div>

        <motion.a 
          variants={itemVariants}
          href="mailto:hello@example.com"
          className="text-3xl md:text-5xl font-bold border-b-4 border-[var(--primary)] pb-2 hover:text-[var(--primary)] hover:border-transparent transition-all mb-20"
        >
          hello@example.com
        </motion.a>

        <motion.div variants={itemVariants} className="flex gap-12 text-sm font-bold tracking-widest uppercase">
          <a href="#" className="hover:text-[var(--primary)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--primary)] transition-colors">Behance</a>
          <a href="#" className="hover:text-[var(--primary)] transition-colors">LinkedIn</a>
        </motion.div>
      </motion.div>
    </div>
  );
}
