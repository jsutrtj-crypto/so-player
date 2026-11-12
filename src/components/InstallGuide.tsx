import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import step1 from "@/assets/install-step-1.png";
import step2 from "@/assets/install-step-2.png";
import step3 from "@/assets/install-step-3.png";

const steps = [
  { src: step1, title: "ধাপ ১: More details", text: "ইনস্টলের সময় Play Protect দেখালে “More details”-এ ট্যাপ করুন।" },
  { src: step2, title: "ধাপ ২: Install without scanning", text: "“Install without scanning” চেপে মোবাইলের পাসওয়ার্ড দিন।" },
  { src: step3, title: "ধাপ ৩: ইনস্টল সম্পন্ন", text: "পাসওয়ার্ড বা ফিঙ্গারপ্রিন্ট দিলেই অ্যাপ ইনস্টল হয়ে যাবে।" },
];

export function InstallGuide() {
  const [active, setActive] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const step = active === null ? null : steps[active];
  return (
    <section id="install-guide" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          কীভাবে <span className="text-primary">ইনস্টল করবেন</span>
        </h2>
        <p className="mt-3 text-muted-foreground sm:text-lg">ছবিতে ট্যাপ করলে বড় করে দেখা যাবে।</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => { setActive(i); setZoom(1); }}
              className="glass-card group rounded-3xl p-4 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl focus-visible:-translate-y-2 active:-translate-y-2 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <div className="overflow-hidden rounded-2xl bg-muted">
                <img src={s.src} alt={s.title} loading="lazy" className="aspect-[4/5] w-full object-contain transition duration-300 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </button>
          ))}
        </div>
      </div>
      <Dialog open={step !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[92vh] max-w-3xl overflow-hidden p-3">
          <DialogTitle className="px-2 pr-10">{step?.title}</DialogTitle>
          <div className="max-h-[75vh] overflow-auto rounded-xl bg-muted">
            {step ? (
              <img
                src={step.src}
                alt={step.title}
                onClick={() => setZoom((z) => (z >= 2.5 ? 1 : z + 0.75))}
                style={{ width: `${zoom * 100}%` }}
                className={cn("mx-auto max-w-none transition-[width]", zoom > 1 ? "cursor-zoom-out" : "cursor-zoom-in")}
              />
            ) : null}
          </div>
          <div className="flex justify-center gap-3">
            <button type="button" aria-label="ছোট করুন" onClick={() => setZoom((z) => Math.max(1, z - 0.5))} className="rounded-full border p-2"><ZoomOut className="size-5" /></button>
            <button type="button" aria-label="বড় করুন" onClick={() => setZoom((z) => Math.min(3, z + 0.5))} className="rounded-full border p-2"><ZoomIn className="size-5" /></button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
