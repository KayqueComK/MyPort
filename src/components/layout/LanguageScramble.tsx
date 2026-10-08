"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const DURATION = 0.8; // segundos (mesmo padrão do TextScramble)
const SPEED = 0.03; // segundos por frame
const STAGGER = 0.04; // atraso entre blocos de texto (apenas /work)
const MAX_DELAY = 0.6; // atraso máximo do último bloco
const ITEM_DURATION = 0.35; // duração de cada bloco (apenas /work)

/**
 * Ao trocar o idioma (PT <-> EN), embaralha todas as letras visíveis da página
 * usando o mesmo algoritmo do componente TextScramble (ui/text-scramble.tsx),
 * aplicado diretamente nos nós de texto para cobrir toda a página sem
 * precisar envolver cada string traduzida.
 */
export default function LanguageScramble() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const previous = useRef(language);
  const cleanup = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    if (previous.current === language) return;
    previous.current = language;

    cleanup.current?.();

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || !node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
        if (parent.closest("script, style, noscript, textarea, [data-no-scramble]")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const items: { node: Text; text: string; last: string }[] = [];
    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      items.push({ node, text: node.nodeValue ?? "", last: node.nodeValue ?? "" });
    }
    if (!items.length) return;

    // Na página /work a troca é gradativa: cada bloco de texto começa a se
    // resolver um pouco depois do anterior (ordem do documento, de cima p/ baixo).
    const gradual = pathname.startsWith("/work");
    const delays = items.map((_, i) =>
      gradual ? Math.min(i * STAGGER, MAX_DELAY) : 0
    );
    const itemDuration = gradual ? ITEM_DURATION : DURATION;
    const total = Math.max(...delays) + itemDuration;

    let step = 0;

    const finish = () => {
      clearInterval(interval);
      for (const it of items) {
        if (it.node.nodeValue === it.last) it.node.nodeValue = it.text;
      }
      cleanup.current = null;
    };

    const tick = () => {
      const elapsed = step * SPEED;
      items.forEach((it, idx) => {
        // React re-renderizou este nó durante a animação: não mexer mais nele.
        if (it.node.nodeValue !== it.last) return;
        const progress = Math.min(Math.max((elapsed - delays[idx]) / itemDuration, 0), 1);
        let out = "";
        for (let i = 0; i < it.text.length; i++) {
          const ch = it.text[i];
          if (/\s/.test(ch) || progress * it.text.length > i) out += ch;
          else out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        it.node.nodeValue = out;
        it.last = out;
      });
      step++;
      if (elapsed > total) finish();
    };

    const interval = setInterval(tick, SPEED * 1000);
    cleanup.current = finish;
    tick(); // evita piscar o texto final antes do primeiro frame
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => () => cleanup.current?.(), []);

  return null;
}
