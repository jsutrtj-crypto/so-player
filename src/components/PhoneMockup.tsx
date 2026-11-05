import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  /** Pixel width of the phone body. */
  width?: number;
}

/** Realistic Android-style phone frame wrapping an app screenshot. */
export function PhoneMockup({ src, alt, className, width = 240 }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative rounded-[13%] bg-foreground p-[3.2%] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]",
        className,
      )}
      style={{ width }}
      aria-hidden="false"
    >
      {/* side button */}
      <div className="absolute -right-[2px] top-[22%] h-[10%] w-[3px] rounded-full bg-foreground/80" />
      <div className="overflow-hidden rounded-[10.5%] bg-background">
        <img
          src={src}
          alt={alt}
          width={832}
          height={1792}
          loading="lazy"
          className="block h-auto w-full object-cover"
        />
        {/* speaker notch */}
        <div className="pointer-events-none absolute left-1/2 top-[1.6%] h-[1.1%] w-[26%] -translate-x-1/2 rounded-full bg-foreground" />
      </div>
    </div>
  );
}
