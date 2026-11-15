import { ArrowUpRight, Facebook, Globe, Instagram, Music2, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntertainmentIcon } from "@/components/EntertainmentIcon";
import { downloaderSites, platformDownloads } from "@/data/download-links";
import { siteConfig } from "@/data/site";

const icons = { shorts: Music2, instagram: Instagram, facebook: Facebook, youtube: Youtube };

export function PlatformDownloads() {
  return (
    <section id="video-music-downloads" className="border-t bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-primary">{siteConfig.searchName} · VidNexo</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Video & music downloads</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Explore VidNexo download pages for TikTok, Instagram, Facebook and YouTube.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platformDownloads.map((platform) => (
            <article key={platform.name} className="premium-panel flex min-w-0 flex-col items-start rounded-lg p-5">
              <EntertainmentIcon icon={icons[platform.icon]} tone={platform.tone} />
              <h3 className="mt-4 text-xl font-bold">{platform.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Video download · VidNexo</p>
              <Button asChild variant="outline" className="mt-5 w-full">
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  {platform.name} download <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-3 border-y py-6 sm:grid-cols-2">
          {downloaderSites.map((site) => (
            <Button key={site.url} asChild variant="ghost" className="h-auto justify-start gap-3 whitespace-normal px-3 py-3 text-left">
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                <Globe className="text-primary" aria-hidden="true" />
                <span className="min-w-0 flex-1"><span className="block font-bold">{site.label}</span><span className="block text-xs font-normal text-muted-foreground">{site.description}</span></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">External VidNexo websites. Availability and formats depend on the source. Download only content you own or have permission to save.</p>
      </div>
    </section>
  );
}