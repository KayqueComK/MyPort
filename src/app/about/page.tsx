"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About() {
  useEffect(() => {
    document.title = "Sobre mim | Kayque Alberto";
  }, []);
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
            Sobre mim.
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
                alt="Moldura retrô de pintura estilo MS Paint"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-light mb-8 md:mb-10 text-[var(--foreground)]">
          Olá, meu nome é <strong className="font-semibold text-[var(--primary)]">Kayque Alberto</strong>. Sou desenvolvedor front-end focado em criar interfaces modernas, interativas e com forte apelo visual e funcional.
        </motion.div>

        <motion.div variants={itemVariants} className="text-base sm:text-lg md:text-xl leading-relaxed font-light mb-8 md:mb-12 opacity-85 space-y-4">
          <p>
            Uno a lógica do desenvolvimento à sensibilidade do design UI/UX. Meu objetivo é transformar ideias em produtos digitais rápidos, acessíveis e memoráveis, utilizando ferramentas modernas do ecossistema React e Next.js.
          </p>
          <p>
            Atualmente atuo como <strong className="font-medium text-[var(--foreground)]">Suporte Técnico</strong>, lidando diretamente com diagnóstico de sistemas, atendimento ágil e resolução de problemas reais de usuários, enquanto curso graduação na área de <strong className="font-medium text-[var(--foreground)]">Sistemas</strong>.
          </p>
          <p className="opacity-90 pt-2 border-t border-[rgba(27,27,27,0.1)]">
            Fora das telas, sou músico (toco violão, guitarra, cajón e cavaquinho) e participo ativamente da{" "}
            <a
              href="https://www.instagram.com/comagape/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 underline-offset-4 decoration-[var(--primary)] hover:opacity-80 transition-opacity font-medium"
            >
              Comunidade Missionária Católica Ágape
            </a>{" "}
            no Grupo Lolek. Enxergo a música e o código como formas complementares de expressar criatividade, harmonia e propósito.
          </p>
        </motion.div>

        {/* ── Trajetória & Experiência ── */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--text)] opacity-60 mb-6">
            Trajetória &amp; Experiência
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-[rgba(27,27,27,0.1)] bg-white/40 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">Atuação Atual</span>
                <h3 className="text-lg font-bold mt-1 text-[var(--foreground)]">Suporte a Sistemas ERP</h3>
                <p className="text-xs font-semibold opacity-60 mt-0.5">Softek Automação • Governador Valadares, MG</p>
                <p className="text-xs sm:text-sm opacity-75 mt-2 leading-relaxed">
                  Diagnóstico e resolução de incidentes em ERP, sustentação de bancos Microsoft SQL Server e ponte direta com a equipe de desenvolvimento em análises de bugs.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-[rgba(27,27,27,0.1)] bg-white/40 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">Formação Acadêmica</span>
                <h3 className="text-lg font-bold mt-1 text-[var(--foreground)]">Sistemas de Informação</h3>
                <p className="text-xs font-semibold opacity-60 mt-0.5">UNIVALE (Universidade Vale do Rio Doce)</p>
                <p className="text-xs sm:text-sm opacity-75 mt-2 leading-relaxed">
                  Graduação em andamento com foco em estruturas de dados, orientação a objetos, banco de dados, engenharia de software e processos (BPM).
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-[rgba(27,27,27,0.1)] bg-white/40 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">Foco &amp; Prática</span>
                <h3 className="text-lg font-bold mt-1 text-[var(--foreground)]">Desenvolvimento Web</h3>
                <p className="text-xs font-semibold opacity-60 mt-0.5">Front-End, Back-End &amp; UI/UX</p>
                <p className="text-xs sm:text-sm opacity-75 mt-2 leading-relaxed">
                  Criação de APIs RESTful e aplicações completas com Node.js, TypeScript, Next.js e Tailwind CSS, aplicando boas práticas e código limpo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Habilidades Agrupadas ── */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6 mb-12 md:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--text)] opacity-60">
            Habilidades &amp; Tecnologias
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-3">
                Front-End &amp; Animação
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Three.js"].map((skill) => (
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
                UI/UX &amp; Design Visual
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["Figma", "UI/UX Design", "Design Systems", "Prototipagem", "Identidade Visual"].map((skill) => (
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
                Ferramentas &amp; Back-End
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["Git & GitHub", "Docker", "Prisma ORM", "PostgreSQL", "REST APIs"].map((skill) => (
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
            Quer ver o resultado prático dessas habilidades?
          </p>
          <div className="flex items-center gap-3">
            <a
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--primary)] text-white text-sm font-semibold shadow-md hover:bg-[#0047d4] transition-colors"
            >
              <span>Ver projetos</span>
              <span>→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[rgba(27,27,27,0.2)] text-[var(--foreground)] text-sm font-semibold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
            >
              <span>Contato</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
