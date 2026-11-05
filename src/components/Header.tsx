import { useEffect, useState } from "react";
import { Menu, Download, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { FullLogo } from "@/components/Logo";
import { navItems } from "@/data/site";

const SECTION_IDS = navItems.map((item) => item.href.slice(1));

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#home" aria-label="SO PLAYER home">
          <FullLogo iconSize={40} textClassName="text-lg sm:text-xl" className="sm:hidden" />
          <FullLogo iconSize={42} textClassName="text-xl" className="hidden sm:flex" />
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors hover:bg-muted hover:text-primary",
                active === item.href.slice(1) ? "text-primary" : "text-foreground",
              )}
              aria-current={active === item.href.slice(1) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="hidden items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            <Download className="size-4" strokeWidth={2.5} />
            Download APK
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-foreground transition hover:bg-muted lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="space-y-1 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors hover:bg-muted hover:text-primary",
                active === item.href.slice(1) ? "text-primary" : "text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
          >
            <Download className="size-4" strokeWidth={2.5} />
            Download APK
          </a>
        </nav>
      </div>
    </header>
  );
}
