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
    <div className="flex-1 flex flex-col pt-24 md:pt-32 px-4 sm:px-6 md:px-20 lg:px-40 pb-12 md:pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full mx-auto transform-gpu"
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-16 tracking-tighter">
          Sobre.
        </motion.h1>

        <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-3xl leading-relaxed font-light mb-8 md:mb-12">
          Olá, meu nome é Kayque Alberto tenho 21 anos e atualmente estou estudando para ser um desenvolvedor front-end.
        </motion.div>

        <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-3xl leading-relaxed font-light mb-10 md:mb-16 opacity-80">
          Também sou apaixonado por música crio retratos e universos ao redor do que ouço. Estou sempre curioso para aprender mais quando se trata de novas tecnologias e programação criativa. Atualmente trabalho como Suporte Técnico Mas meu objetivo principal e ser um Grande Desenvolvedor Front-end e criar sites incríveis para ajudar as pesosas em seu dia a dia.
        </motion.div>

        <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-3xl leading-relaxed font-light mb-10 md:mb-16 opacity-80">
          Atualmente faço parte da <a href="https://www.instagram.com/comagape/" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4 decoration-[var(--primary)] hover:opacity-80 transition-opacity">Comunidade Missionária Católica Ágape</a> sendo um Jovem participante do Grupo Lolek. Trabalhamos com a evangelização dos jovens e procuramos viver como cristo, e anuciantes da boa nova.
        </motion.div>

        <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-3xl leading-relaxed font-light mb-10 md:mb-16 opacity-80">
          Nas horas vagas sou musico e Toco alguns instrumentos (Violão, guitarra, cajon, Cavaquinho...) gosto de sentir a musica e ultiliza-la como forma de expressar os meus sentimentos e pensamentos.
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h3 className="text-sm font-bold tracking-widest uppercase text-[var(--text)] opacity-60 mb-4">Habilidades</h3>
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
