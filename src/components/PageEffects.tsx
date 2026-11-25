import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Scroll progress bar, smooth section reveal, and a back-to-top button. */
export function PageEffects() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(:first-child)"));
    let io: IntersectionObserver | undefined;
    if (!reduce && "IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-revealed"); io?.unobserve(e.target); }
      }), { threshold: 0.08 });
      sections.forEach((s) => { if (s.getBoundingClientRect().top > window.innerHeight) { s.classList.add("reveal-on-scroll"); io?.observe(s); } });
    }
    return () => { window.removeEventListener("scroll", onScroll); io?.disconnect(); };
  }, []);
  return (
    <>
      <div aria-hidden="true" className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      {progress > 0.08 && (
        <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-glow fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full text-primary-foreground">
          <ArrowUp className="size-5" aria-hidden="true" />
        </button>
      )}
    </>
  );
}
