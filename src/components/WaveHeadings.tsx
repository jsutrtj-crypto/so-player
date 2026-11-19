import { useEffect } from "react";

/** Turns every big section heading into bouncing, colored letters after the page loads. */
export function WaveHeadings() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll<HTMLHeadingElement>("h2.font-display:not([data-wave])").forEach((h) => {
      h.dataset["wave"] = "1";
      let i = 0;
      const walk = (node: Node) => {
        Array.from(node.childNodes).forEach((c) => {
          if (c.nodeType === 3) {
            const frag = document.createDocumentFragment();
            (c.textContent ?? "").split(/(\s+)/).forEach((word) => {
              if (!word.trim()) { if (word) frag.append(" "); return; }
              const w = document.createElement("span");
              w.style.whiteSpace = "nowrap"; w.style.display = "inline-block";
              for (const ch of word) {
                const s = document.createElement("span");
                s.className = "wave-letter"; s.style.animationDelay = `${(i++) * 0.06}s`; s.textContent = ch;
                w.append(s);
              }
              frag.append(w);
            });
            c.replaceWith(frag);
          } else if (!(c as Element).classList?.contains("wave-letter")) walk(c);
        });
      };
      walk(h);
    });
  }, []);
  return null;
}
