import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function EntertainmentIcon({ icon: Icon, tone = "brand", className }: {
  icon: LucideIcon;
  tone?: "brand" | "music" | "video" | "shorts" | "library";
  className?: string;
}) {
  return (
    <span aria-hidden="true" data-tone={tone} className={cn("entertainment-icon", className)}>
      <Icon strokeWidth={1.8} />
    </span>
  );
}