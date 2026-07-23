"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const isHoveringRef = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500, mass: 0.15 };
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 1000 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 1000 });
  const outlineX = useSpring(cursorX, springConfig);
  const outlineY = useSpring(cursorY, springConfig);

  const applyHoverState = useCallback((hovering: boolean) => {
    if (isHoveringRef.current === hovering) return;
    isHoveringRef.current = hovering;

    if (dotRef.current) {
      dotRef.current.style.transform = hovering
        ? "translate(-50%, -50%) scale(0)"
        : "translate(-50%, -50%) scale(1)";
    }
    if (outlineRef.current) {
      outlineRef.current.style.transform = hovering
        ? "translate(-50%, -50%) scale(1.5)"
        : "translate(-50%, -50%) scale(1)";
      outlineRef.current.style.backgroundColor = hovering
        ? "var(--primary)"
        : "transparent";
      outlineRef.current.style.opacity = hovering ? "0.2" : "1";
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null);
      applyHoverState(!!isInteractive);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, applyHoverState]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
          transition: "transform 0.15s",
        }}
      />
      <motion.div
        ref={outlineRef}
        className="cursor-outline hidden md:block"
        style={{
          x: outlineX,
          y: outlineY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform, background-color, opacity",
          transition: "transform 0.15s, background-color 0.15s, opacity 0.15s",
        }}
      />
    </>
  );
}
