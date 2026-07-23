"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
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
    <div className="flex-1 flex flex-col pt-32 px-6 md:px-20 lg:px-40 pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full mx-auto transform-gpu"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-16 tracking-tighter">
          Sobre.
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl md:text-3xl leading-relaxed font-light mb-12">
          Olá, meu nome é Kayque Alberto e uso KIQ como meu apelido nas redes sociais. Sou designer gráfico, designer UX/UI &amp; desenvolvedor front-end.
        </motion.div>

        <motion.div variants={itemVariants} className="text-xl md:text-3xl leading-relaxed font-light mb-16 opacity-80">
          Também sou apaixonado por música pop e crio retratos e universos ao redor do que ouço. Estou sempre curioso para aprender mais quando se trata de novas tecnologias e programação criativa.
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h3 className="text-sm font-bold tracking-widest uppercase text-[var(--primary)] mb-4">Habilidades</h3>
          <div className="flex flex-wrap gap-4">
            {["UX/UI Design", "Desenvolvimento Web", "React", "Next.js", "Three.js", "Tailwind CSS", "Figma", "Identidade Visual"].map((skill) => (
              <span key={skill} className="px-6 py-3 border border-[var(--primary)] rounded-full text-sm font-medium tracking-wide hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors cursor-pointer">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
