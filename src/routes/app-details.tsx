import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Download, Film, Gauge, Globe2, Headphones, Layers, Lock, Music2, Share2, ShieldCheck, Smartphone, Sparkles, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ApkDownloadButton } from "@/components/ApkDownloadButton";
import { siteConfig } from "@/data/site";
import { latestVersion } from "@/data/versions";
import { appScreenshots } from "@/data/screenshots";

const title = "SK SO PLAYER App Details — Video Downloader, Music & HD Player for Android";
const description = "Everything about SK SO PLAYER: watch and download videos from YouTube, Facebook, Instagram and TikTok, save music as MP3, pick HD quality, and enjoy shorts, music and your library in one free Android app.";

const highlights = [
  { icon: Download, t: "Download videos from many platforms", d: "Save supported videos from YouTube, Facebook, Instagram, TikTok and other sites straight to your phone. Share a link to SO PLAYER and it finds the available formats for you." },
  { icon: Music2, t: "Turn videos into music", d: "Choose the MP3 / audio option to keep only the sound — perfect for songs, podcasts, talks and lessons you want to listen to offline." },
  { icon: Gauge, t: "Choose your quality", d: "Pick from the qualities the source offers — from small data-saving sizes up to HD — so you control file size and picture." },
  { icon: Film, t: "Movies, shows & shorts", d: "Browse featured movies, web series, trending videos and a vertical shorts feed, all inside one smooth player." },
  { icon: Headphones, t: "Music charts & artists", d: "Explore top songs, trending charts and artist collections and play them with a clean, simple music screen." },
  { icon: Layers, t: "Personal library", d: "Your watch history, downloads and playlists stay together in one place, so finding something again takes seconds." },
  { icon: Zap, t: "Fast & light", d: "Built to start quickly and play smoothly, with a simple design that works well even on budget Android phones." },
  { icon: Share2, t: "Share-to-download", d: "From any supported app, tap Share → SO PLAYER. No copying links by hand, no complicated steps." },
];

const steps = [
  "Download the official APK from this website and install it (allow “install unknown apps” once if Android asks).",
  "Open a video in YouTube, Facebook, Instagram, TikTok or your browser and tap Share.",
  "Choose SO PLAYER from the share list.",
  "Pick a video quality or MP3, then tap Download. Your file appears in the Library.",
];

const specs: [string, string][] = [
  ["App name", siteConfig.name],
  ["Website name", siteConfig.searchName],
  ["Latest version", `v${latestVersion.version}`],
  ["Updated", latestVersion.releaseDate],
  ["File size", latestVersion.fileSize],
  ["Platform", "Android (APK)"],
  ["Category", "Video player & downloader"],
  ["Price", "Free"],
  ["Language", "English & Bangla"],
];

const faq = [
  { q: "Is SK SO PLAYER just a video player?", a: "No. It is an all-in-one video platform: you can watch videos, shorts and music, and also download supported videos and audio from popular platforms." },
  { q: "Is it free?", a: "Yes. SO PLAYER is free to download from this official website." },
  { q: "Why is it not on Google Play?", a: "SO PLAYER is distributed as an APK from this official website. Always download it here so you get the original, unchanged file." },
  { q: "Is the APK safe?", a: "The file offered here is the original release uploaded by the developer. You can scan it with Google Play Protect before installing — see the Download Safety page." },
  { q: "Can I download any video?", a: "Only download content you own or have permission to save, and respect each platform’s rules and creators’ rights." },
];

export const Route = createFileRoute("/app-details")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${siteConfig.url}/app-details` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/app-details` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "SoftwareApplication", name: siteConfig.searchName, alternateName: siteConfig.name, operatingSystem: "Android", applicationCategory: "MultimediaApplication", softwareVersion: latestVersion.version, fileSize: latestVersion.fileSize, url: `${siteConfig.url}/app-details`, description, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
        { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      ],
    }) }],
  }),
  component: AppDetailsPage,
});

function AppDetailsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="section-glow py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase text-primary"><Sparkles className="size-4" aria-hidden="true" />App details</p>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">{siteConfig.searchName}: watch, play and <span className="text-primary">download</span> videos & music</h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">SK SO PLAYER is not just a player. It is a complete entertainment app for Android: watch every kind of video, enjoy shorts and music, and save supported videos from YouTube, Facebook, Instagram, TikTok and more — in HD or as MP3 — all from one simple, fast app.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row"><ApkDownloadButton className="w-full sm:w-auto" /></div>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                {["Free", "HD & MP3", "Many platforms", "No sign-up needed"].map((b) => <li key={b} className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-primary" aria-hidden="true" />{b}</li>)}
              </ul>
            </div>
            <div className="flex justify-center gap-4">
              {appScreenshots.slice(0, 2).map((s, i) => <img key={s.title} src={s.src} alt={s.alt} loading="lazy" className={`w-40 rounded-3xl border-4 border-card shadow-2xl sm:w-52 ${i ? "mt-12" : ""}`} />)}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">What you can do with SO PLAYER</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">One app replaces your video player, music app and downloader.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map(({ icon: Icon, t, d }) => (
                <article key={t} className="premium-panel rounded-2xl p-6">
                  <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary"><Icon className="size-6" aria-hidden="true" /></span>
                  <h3 className="mt-4 text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Inside the app</h2>
            <div className="no-scrollbar mt-10 flex snap-x gap-5 overflow-x-auto pb-4">
              {appScreenshots.map((s) => (
                <figure key={s.title} className="premium-panel w-56 shrink-0 snap-start rounded-2xl p-3">
                  <img src={s.src} alt={s.alt} loading="lazy" className="aspect-[9/19] w-full rounded-xl object-cover" />
                  <figcaption className="mt-3 px-1"><span className="block font-bold">{s.title}</span><span className="text-sm text-muted-foreground">{s.description}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl">How to download a video</h2>
              <ol className="mt-8 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="premium-panel flex gap-4 rounded-2xl p-5">
                    <span className="btn-glow grid size-9 shrink-0 place-items-center rounded-full font-extrabold text-primary-foreground">{i + 1}</span>
                    <p className="leading-relaxed">{s}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl">App information</h2>
              <dl className="premium-panel mt-8 divide-y rounded-2xl">
                {specs.map(([k, v]) => <div key={k} className="flex justify-between gap-4 px-5 py-3.5"><dt className="text-muted-foreground">{k}</dt><dd className="text-right font-bold">{v}</dd></div>)}
              </dl>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-semibold">
                {[{ i: ShieldCheck, l: "Original APK" }, { i: Lock, l: "No account needed" }, { i: Smartphone, l: "Android app" }].map(({ i: I, l }) => (
                  <div key={l} className="premium-panel rounded-xl p-3"><I className="mx-auto size-5 text-primary" aria-hidden="true" /><span className="mt-1 block">{l}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-section py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Questions & answers</h2>
            <div className="mt-8 space-y-3">
              {faq.map((f) => (
                <details key={f.q} className="premium-panel group rounded-2xl p-5">
                  <summary className="cursor-pointer list-none font-bold">{f.q}</summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-12 rounded-3xl bg-card p-8 text-center shadow-xl">
              <Globe2 className="mx-auto size-8 text-primary" aria-hidden="true" />
              <p className="mt-3 text-xl font-extrabold">Get SK SO PLAYER v{latestVersion.version}</p>
              <div className="mt-5 flex justify-center"><ApkDownloadButton /></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
