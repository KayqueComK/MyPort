"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HambergerMenu, CloseSquare } from "iconsax-react";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Trabalhos", href: "/work" },
  { name: "Sobre", href: "/about" },
  { name: "Contato", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center text-[var(--foreground)] pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link href="/" className="group flex items-center gap-4">
            <Image
              src="/kiq-logo.png"
              alt="KIQ Logo"
              width={186}
              height={108}
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
            <div className="hidden md:flex flex-col text-xs font-medium tracking-widest uppercase leading-tight border-l border-[var(--primary)] border-opacity-30 pl-4 py-0.5">
              <span className="font-bold">Kayque</span>
              <span className="opacity-60">Alberto</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-6 pointer-events-auto">
          <button className="text-xs font-bold tracking-widest hover:opacity-50 transition-opacity">
            PT
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="hover:scale-110 transition-transform"
            aria-label="Open menu"
          >
            <HambergerMenu size="32" variant="Bulk" className="text-[var(--foreground)]" />
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
              className="mt-20 flex gap-8 text-sm md:text-base uppercase tracking-widest font-medium"
            >
              <a href="#" className="hover:underline underline-offset-4 decoration-[var(--primary)]">Instagram</a>
              <a href="#" className="hover:underline underline-offset-4 decoration-[var(--primary)]">Behance</a>
              <a href="#" className="hover:underline underline-offset-4 decoration-[var(--primary)]">LinkedIn</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
