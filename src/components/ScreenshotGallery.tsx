import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CheckCircle2, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { appScreenshots } from "@/data/screenshots";

export function ScreenshotGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  /** Index of the card the user tapped — lifts it, lights it up and opens its details. */
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  const toggleCard = (index: number) =>
    setActiveIndex((current) => (current === index ? null : index));

  return (
    <section id="screenshots" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            See <span className="text-primary">SO Player</span> in action
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            Explore the app's clean and modern interface. Tap a screen to lift
            it up and see what's inside.
          </p>
        </div>

        <div className="relative mt-10">
          {/* Arrows */}
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous screenshots"
            className={cn(
              "absolute -left-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border bg-background text-foreground shadow-md transition hover:bg-muted md:-left-5 md:size-11",
              !canPrev && "pointer-events-none opacity-0",
            )}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next screenshots"
            className={cn(
              "absolute -right-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border bg-background text-foreground shadow-md transition hover:bg-muted md:-right-5 md:size-11",
              !canNext && "pointer-events-none opacity-0",
            )}
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="overflow-hidden py-2" ref={emblaRef}>
            <div className="-ml-5 flex touch-pan-y">
              {appScreenshots.map((shot, i) => {
                const active = activeIndex === i;
                return (
                  <figure
                    key={shot.title}
                    className="min-w-0 shrink-0 grow-0 basis-[78%] pl-5 sm:basis-[48%] md:basis-[34%] lg:basis-[26%] xl:basis-[19.2%]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCard(i)}
                      aria-expanded={active}
                      aria-label={`${shot.title} screen — ${active ? "hide" : "show"} details`}
                      className="glow-lift block w-full cursor-pointer rounded-2xl border bg-card p-3 text-left shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        width={1080}
                        height={2400}
                        loading="lazy"
                        className="pointer-events-none block w-full rounded-xl bg-muted object-cover"
                      />
                      <figcaption className="flex items-center justify-between px-1 pb-1 pt-3">
                        <div className="min-w-0">
                          <div className="font-display text-base font-bold">
                            {shot.title}
                          </div>
                          <div className="mt-0.5 text-sm text-muted-foreground">
                            {shot.description}
                          </div>
                        </div>
                        <ChevronDown
                          className={cn(
                            "size-4 shrink-0 text-primary transition-transform duration-300",
                            active && "rotate-180",
                          )}
                        />
                      </figcaption>

                      {/* Details that appear below the box when tapped */}
                      <div
                        className={cn(
                          "grid transition-all duration-300 ease-out",
                          active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <ul className="space-y-1.5 px-1 pb-2 pt-3">
                            {shot.highlights.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2 text-xs font-medium text-muted-foreground"
                              >
                                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </button>
                  </figure>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Screenshot pages">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === selectedIndex}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === selectedIndex ? "w-5 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
