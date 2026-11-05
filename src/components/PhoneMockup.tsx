import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

/** Realistic Android-style phone frame wrapping an app screenshot. */
export function PhoneMockup({ src, alt, className }: PhoneMockupProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative rounded-[2.4rem] bg-foreground p-1.5 shadow-xl sm:rounded-[2.8rem] sm:p-2",
        className,
      )}
    >
      <img
        src={src}
        alt=""
        width={832}
        height={1792}
        loading="lazy"
        className="block w-full rounded-[1.9rem] bg-background object-cover sm:rounded-[2.2rem]"
      />
      {/* speaker */}
      <div className="pointer-events-none absolute left-1/2 top-[2.2%] h-1 w-[22%] -translate-x-1/2 rounded-full bg-background/80" />
    </div>
  );
}
