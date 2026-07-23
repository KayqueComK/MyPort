"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SPLASH_KEY = "kiq-splash-shown";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only show splash once per session
    if (!sessionStorage.getItem(SPLASH_KEY)) {
      setIsVisible(true);
      sessionStorage.setItem(SPLASH_KEY, "1");
      const timer = setTimeout(() => setIsVisible(false), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent hydration mismatch between SSR and client
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)]"
        >
          <div className="flex flex-col items-center gap-8">
            <svg viewBox="0 0 72 72" width="120" height="120" className="stroke-current fill-none" strokeWidth="2">
              <motion.circle 
                cx="31.019" cy="18.93" r="3.555"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="fill-current"
              />
              <motion.path 
                d="M61.028,23.378a3.555,3.555,0,0,0-6.682-2.432,4.39,4.39,0,0,1-8.25-3,3.555,3.555,0,1,0-6.682-2.432,11.5,11.5,0,0,0,21.614,7.867Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.path 
                d="M24.221,27.153a4.387,4.387,0,0,1-5.607-1.76A11.436,11.436,0,0,0,13.56,20.8a3.555,3.555,0,1,0-3.005,6.444,4.358,4.358,0,0,1,1.925,1.748,11.5,11.5,0,0,0,14.7,4.627,4.389,4.389,0,0,1,5.608,1.759,11.43,11.43,0,0,0,5.053,4.595,3.556,3.556,0,0,0,3.006-6.445,4.353,4.353,0,0,1-1.926-1.747,11.5,11.5,0,0,0-14.7-4.627Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path 
                d="M13.411,43.392a3.555,3.555,0,0,0,5.825,4.078,4.39,4.39,0,1,1,7.191,5.036,3.555,3.555,0,0,0,5.825,4.078A11.5,11.5,0,1,0,13.411,43.392Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.path 
                d="M61.5,47.329A11.5,11.5,0,0,0,50,35.829a3.556,3.556,0,1,0,0,7.111,4.389,4.389,0,1,1-4.39,4.389,3.556,3.556,0,0,0-7.111,0,11.5,11.5,0,0,0,23,0Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </svg>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm font-medium tracking-widest text-[var(--primary)] uppercase"
            >
              Materializando formas...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
