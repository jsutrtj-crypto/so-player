import { BadgeCheck, CalendarDays, HardDrive, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { latestVersion } from "@/data/versions";

const items = [
  { icon: Sparkles, label: "Latest version", value: `v${latestVersion.version}` },
  { icon: CalendarDays, label: "Updated", value: latestVersion.releaseDate },
  { icon: HardDrive, label: "APK size", value: latestVersion.fileSize },
  { icon: Smartphone, label: "Platform", value: "Android" },
  { icon: BadgeCheck, label: "Price", value: "Free" },
  { icon: ShieldCheck, label: "Scan", value: "Play Protect" },
];

export function TrustStrip() {
  return (
    <section aria-label="App facts" className="border-y bg-card py-8">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
        {items.map(({ icon: Icon, label, value }) => (
          <li key={label} className="premium-panel flex items-center gap-3 rounded-xl p-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><Icon className="size-5" aria-hidden="true" /></span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">{label}</span>
              <span className="block truncate text-sm font-extrabold">{value}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
