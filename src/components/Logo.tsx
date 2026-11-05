import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Square icon size in px. */
  iconSize?: number | undefined;
}

/** SO PLAYER brand: red rounded square with a bold white S. */
export function LogoIcon({ className, iconSize = 42 }: LogoProps) {
  return (
    <div
      className={cn(
        "grid shrink-0 place-items-center rounded-[28%] bg-primary shadow-sm",
        className,
      )}
      style={{ width: iconSize, height: iconSize }}
      aria-hidden="true"
    >
      <span
        className="font-display font-extrabold text-primary-foreground"
        style={{ fontSize: iconSize * 0.58, lineHeight: 1 }}
      >
        S
      </span>
    </div>
  );
}

interface FullLogoProps extends LogoProps {
  /** Brand name text size class. */
  textClassName?: string;
}

export function FullLogo({ className, iconSize, textClassName }: FullLogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoIcon iconSize={iconSize} />
      <span
        className={cn(
          "font-display font-extrabold tracking-tight text-foreground",
          textClassName ?? "text-xl",
        )}
      >
        SO PLAYER
      </span>
    </span>
  );
}
