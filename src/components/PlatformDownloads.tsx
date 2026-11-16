import { ArrowUpRight, CheckCircle2, Facebook, Globe, Instagram, Music2, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntertainmentIcon } from "@/components/EntertainmentIcon";
import { downloaderSites, platformDownloads } from "@/data/download-links";
import { siteConfig } from "@/data/site";

const icons = { shorts: Music2, instagram: Instagram, facebook: Facebook, youtube: Youtube };

const platformInfo: Record<string, string> = {
  TikTok: "Save TikTok videos in HD quality or as MP3 music.",
  Instagram: "Download Instagram Reels, videos and stories easily.",
  Facebook: "Save Facebook videos in HD, SD or audio format.",
  YouTube: "Download YouTube videos, Shorts and music quickly.",
};

const highlights = ["Free & fast downloads", "HD video & MP3 music", "No sign-up needed", "Works on mobile & desktop"];

export function PlatformDownloads() {
  return (
    <section id="video-music-downloads" className="border-t bg-card py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase text-primary">{siteConfig.searchName} · VidNexo</p>
        <h2 className="mt-3 text-center font-display text-3xl font-extrabold sm:text-4xl">Video & music downloads</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted-foreground">
          VidNexo is a free online video and music downloader. Paste a link from TikTok, Instagram, Facebook or
          YouTube and save it in HD video or MP3 — right from your phone or computer.
        </p>
        <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold">
              <CheckCircle2 className="size-3.5 text-primary" aria-hidden="true" />{h}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {downloaderSites.map((site, i) => (
            <a key={site.url} href={site.url} target="_blank" rel="noopener noreferrer"
              className="feature-tile group flex items-center gap-4 rounded-lg border bg-card p-5 transition-colors">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><Globe aria-hidden="true" /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase text-primary">{i === 0 ? "Official website" : "Downloader app"}</span>
                <span className="block font-bold">{site.label}</span>
                <span className="block text-sm text-muted-foreground">{site.description}</span>
                <span className="block break-all text-xs text-muted-foreground">{site.url.replace(/^https:\/\//, "").replace(/\/$/, "")}</span>
              </span>
              <ArrowUpRight className="shrink-0 text-muted-foreground transition group-hover:text-primary" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platformDownloads.map((platform) => (
            <article key={platform.name} className="feature-tile flex min-w-0 flex-col items-center rounded-lg border bg-card p-6 text-center transition-colors">
              <EntertainmentIcon icon={icons[platform.icon]} tone={platform.tone} />
              <h3 className="mt-4 text-xl font-bold">{platform.name} Downloader</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{platformInfo[platform.name]}</p>
              <Button asChild className="mt-6 w-full">
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  {platform.name} download <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </article>
          ))}
        </div>

        <ol className="mt-10 grid gap-4 border-y py-6 sm:grid-cols-3">
          {["Copy the video link from the app", "Open the VidNexo download page", "Paste the link and tap Download"].map((step, i) => (
            <li key={step} className="flex items-center gap-3 text-sm font-semibold">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">{i + 1}</span>{step}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">External VidNexo websites. Availability and formats depend on the source. Download only content you own or have permission to save.</p>
      </div>
    </section>
  );
}
