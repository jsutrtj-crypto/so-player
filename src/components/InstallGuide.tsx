import { useState } from "react";
import { ShieldCheck, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { guideCopy, previousSteps, scanSteps, type GuideLanguage } from "@/data/install-guide";

const steps = [...scanSteps, ...previousSteps];

export function InstallGuide() {
  const [language, setLanguage] = useState<GuideLanguage>("bn");
  const [active, setActive] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const step = active === null ? null : steps[active];
  const copy = guideCopy[language];
  return (
    <section id="install-guide" lang={language} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            {copy.heading} <span className="text-primary">{copy.highlight}</span>
          </h2>
          <div role="group" aria-label="Installation guide language" className="flex gap-1 rounded-lg border bg-muted p-1">
            <Button variant={language === "bn" ? "default" : "ghost"} aria-pressed={language === "bn"} onClick={() => setLanguage("bn")}>বাংলা</Button>
            <Button variant={language === "en" ? "default" : "ghost"} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>English</Button>
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-muted-foreground sm:text-lg">{copy.intro}</p>
        <div className="mt-6 flex items-start gap-3 border-l-2 border-primary bg-secondary/50 p-4 text-sm leading-relaxed">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p>{copy.caution}</p>
        </div>
        {[scanSteps, previousSteps].map((group, groupIndex) => (
          <div key={groupIndex} className="mt-10">
            <h3 className="font-display text-xl font-bold">{groupIndex === 0 ? copy.primary : copy.archive}</h3>
            {groupIndex === 1 && <p className="mt-2 text-sm text-muted-foreground">{copy.archiveIntro}</p>}
            <div className="mt-5 grid gap-6 lg:grid-cols-3">
          {group.map((s, i) => (
            <article key={s.id} className="premium-panel grid min-w-0 grid-cols-1 items-start gap-5 rounded-lg p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-1">
            <Button
              variant="ghost"
              type="button"
              aria-label={`${copy.step} ${i + 1}: ${s.title[language]}`}
              onClick={() => { setActive(groupIndex * 3 + i); setZoom(1); }}
              className="group relative block h-auto min-w-0 overflow-hidden rounded-lg bg-muted p-0 focus-visible:outline-2 focus-visible:outline-ring"
            >
                <img src={s.src} alt={s.title[language]} loading="lazy" className="aspect-[4/5] w-full object-contain transition duration-300 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full border bg-background text-primary"><ZoomIn aria-hidden="true" /></span>
            </Button>
            <div>
              <span className="text-xs font-bold uppercase text-primary">{copy.step} {String(i + 1).padStart(2, "0")}</span>
              <h4 className="mt-2 font-display text-lg font-bold">{s.title[language]}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text[language]}</p>
            </div>
            </article>
          ))}
            </div>
          </div>
        ))}
      </div>
      <Dialog open={step !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[92vh] max-w-3xl overflow-hidden p-3">
          <DialogTitle className="px-2 pr-10">{step?.title[language]}</DialogTitle>
          <div className="max-h-[75vh] overflow-auto rounded-xl bg-muted">
            {step ? (
              <img
                src={step.src}
                alt={step.title[language]}
                onClick={() => setZoom((z) => (z >= 2.5 ? 1 : z + 0.75))}
                style={{ width: `${zoom * 100}%` }}
                className={cn("mx-auto max-w-none transition-[width]", zoom > 1 ? "cursor-zoom-out" : "cursor-zoom-in")}
              />
            ) : null}
          </div>
          <div className="flex justify-center gap-3">
            <Button variant="outline" size="icon" type="button" aria-label={copy.zoomOut} onClick={() => setZoom((z) => Math.max(1, z - 0.5))}><ZoomOut className="size-5" /></Button>
            <Button variant="outline" size="icon" type="button" aria-label={copy.zoomIn} onClick={() => setZoom((z) => Math.min(3, z + 0.5))}><ZoomIn className="size-5" /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
