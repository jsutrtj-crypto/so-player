import { useState } from "react";
import { Calendar, ChevronDown, Download, HardDrive, Info } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/Logo";
import { latestVersion, olderVersions, type AppVersion } from "@/data/versions";

/** Honesty rule: no fake APK links — an empty URL shows a notice, never a download. */
function handleDownload(version: AppVersion) {
  if (version.downloadUrl) {
    window.location.href = version.downloadUrl;
    return;
  }
  toast.info(`SO PLAYER v${version.version}`, {
    description:
      "The APK download link will be added here as soon as the file is provided.",
  });
}

function DownloadButton({
  version,
  size = "lg",
  className,
}: {
  version: AppVersion;
  size?: "lg" | "sm";
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => handleDownload(version)}
      className={cn(
        "btn-glow inline-flex items-center justify-center gap-2 rounded-2xl font-bold text-primary-foreground transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        size === "lg" ? "w-full px-6 py-3.5 text-base" : "px-3.5 py-2 text-xs sm:text-sm",
        className,
      )}
    >
      <Download className={size === "lg" ? "size-5" : "size-4"} strokeWidth={2.5} />
      Download APK
    </button>
  );
}

export function DownloadSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="download" className="section-glow py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Downloads &amp; <span className="text-primary">Version History</span>
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            Get the latest version of SO PLAYER or check older releases.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Latest version card */}
          <div className="glass-card glow-always h-fit rounded-3xl p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <LogoIcon iconSize={56} />
              <div className="min-w-0">
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                  Latest Version
                </span>
                <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
                  <span className="font-display text-3xl font-extrabold">
                    Version {latestVersion.version}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">
                    • Android APK
                  </span>
                </div>
              </div>
            </div>

            {latestVersion.releaseNotes ? (
              <p className="mt-5 flex gap-2.5 rounded-xl bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0 text-primary" />
                {latestVersion.releaseNotes}
              </p>
            ) : null}

            <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-primary" />
                <dt className="text-muted-foreground">Released:</dt>
                <dd className="font-semibold">{latestVersion.releaseDate}</dd>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="size-4 text-primary" />
                <dt className="text-muted-foreground">File size:</dt>
                <dd className="font-semibold">{latestVersion.fileSize}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <DownloadButton version={latestVersion} />
            </div>
          </div>

          {/* Older versions */}
          <div id="versions" className="scroll-mt-24">
            {/* Desktop table */}
            <div className="hidden md:block">
              <h3 className="font-display text-xl font-bold">Older Versions</h3>
              <div className="mt-4 overflow-hidden rounded-2xl border bg-card shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="px-5 py-3 font-semibold">Version</th>
                      <th className="px-5 py-3 font-semibold">Release Date</th>
                      <th className="px-5 py-3 font-semibold">File Size</th>
                      <th className="px-5 py-3 text-right font-semibold">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {olderVersions.map((v) => (
                      <tr key={v.version} className="border-b last:border-b-0 transition hover:bg-muted/40">
                        <td className="px-5 py-3.5 font-bold">Version {v.version}</td>
                        <td className="px-5 py-3.5 text-muted-foreground">{v.releaseDate}</td>
                        <td className="px-5 py-3.5 text-muted-foreground">{v.fileSize}</td>
                        <td className="px-5 py-3.5 text-right">
                          <DownloadButton version={v} size="sm" className="w-auto" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile accordion */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="flex w-full items-center justify-between rounded-2xl border bg-card px-5 py-4 shadow-sm"
              >
                <span className="font-display text-lg font-bold">Older Versions</span>
                <ChevronDown
                  className={cn("size-5 text-primary transition-transform", open && "rotate-180")}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="space-y-3">
                    {olderVersions.map((v) => (
                      <div
                        key={v.version}
                        className="flex items-center justify-between gap-3 rounded-xl border bg-card px-4 py-3"
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-bold">Version {v.version}</div>
                          <div className="text-xs text-muted-foreground">
                            {v.releaseDate} • {v.fileSize}
                          </div>
                        </div>
                        <DownloadButton version={v} size="sm" className="shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
