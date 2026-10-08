"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("header.home"), href: "/" },
    { name: t("header.work"), href: "/work" },
    { name: t("header.about"), href: "/about" },
    { name: t("header.contact"), href: "/contact" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link
            href="/"
            className="group flex items-center gap-3 px-3.5 py-2 md:px-4 md:py-2.5 rounded-2xl bg-black/25 backdrop-blur-xl backdrop-saturate-150 border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.2)] hover:bg-black/35 hover:border-white/25 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <Image
              src="/KIQ__1_-removebg-preview.png"
              alt="KIQ Logo"
              width={200}
              height={200}
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform brightness-0 invert drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
              priority
            />
            <div className="flex flex-col text-[11px] md:text-xs font-normal tracking-widest uppercase leading-tight border-l border-white/40 pl-3 md:pl-3.5 py-0.5 text-white font-inter">
              <span className="font-bold text-white text-[#ffffff]">Kayque</span>
              <span className="text-white text-[#ffffff]">Alberto</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6 pointer-events-auto text-white">
          {/* Seletor PT | EN com glassmorphism */}
          <div className="flex items-center text-xs font-bold tracking-widest bg-black/30 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5 gap-2 shadow-sm">
            <button
              onClick={() => setLanguage("pt")}
              className={`transition-colors cursor-pointer ${
                language === "pt"
                  ? "text-white font-extrabold underline underline-offset-4 decoration-[var(--primary)]"
                  : "text-white/40 hover:text-white/80"
              }`}
              aria-label="Alterar para Português"
            >
              PT
            </button>
            <span className="text-white/30 text-[10px]">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={`transition-colors cursor-pointer ${
                language === "en"
                  ? "text-white font-extrabold underline underline-offset-4 decoration-[var(--primary)]"
                  : "text-white/40 hover:text-white/80"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="hover:scale-110 transition-transform"
            aria-label="Open menu"
          >
            <HambergerMenu size="32" variant="Bulk" className="text-white" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[100] bg-[var(--background)] text-[var(--foreground)] flex flex-col justify-center px-10 md:px-32 transform-gpu"
          >
            <div className="absolute top-6 right-6 md:top-10 md:right-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="hover:rotate-90 transition-transform duration-200"
                aria-label="Close menu"
              >
                <CloseSquare size="48" variant="Bulk" className="text-[var(--primary)]" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 md:gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl md:text-8xl font-black tracking-tighter hover:text-opacity-70 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16 md:mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-[rgba(27,27,27,0.12)] pt-6 text-sm md:text-base uppercase tracking-widest font-medium"
            >
              <div className="flex gap-6 md:gap-8">
                <a href="https://www.instagram.com/k.ayqueal/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-[var(--primary)]">Instagram</a>
                <a href="https://github.com/KayqueComK" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-[var(--primary)]">GitHub</a>
                <a href="https://www.linkedin.com/in/kayque-alberto-937a08230/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-[var(--primary)]">LinkedIn</a>
              </div>

              <div className="flex items-center text-xs font-bold tracking-widest bg-neutral-200/60 border border-[rgba(27,27,27,0.1)] rounded-full px-3 py-1.5 gap-2">
                <button
                  onClick={() => setLanguage("pt")}
                  className={`transition-colors cursor-pointer ${
                    language === "pt"
                      ? "text-[var(--primary)] font-extrabold underline underline-offset-4"
                      : "text-[var(--foreground)] opacity-50 hover:opacity-100"
                  }`}
                >
                  PT
                </button>
                <span className="opacity-30 text-[10px]">|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`transition-colors cursor-pointer ${
                    language === "en"
                      ? "text-[var(--primary)] font-extrabold underline underline-offset-4"
                      : "text-[var(--foreground)] opacity-50 hover:opacity-100"
                  }`}
                >
                  EN
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
