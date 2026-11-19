import { createFileRoute } from "@tanstack/react-router";
import { Download, Film, Globe2, Music2, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ApkDownloadButton } from "@/components/ApkDownloadButton";
import { WaveText } from "@/components/WaveText";
import { siteConfig } from "@/data/site";
import { appVersions, latestVersion } from "@/data/versions";

const title = `About ${siteConfig.searchName} — The Story Behind the All-in-One Video Platform`;
const desc = `${siteConfig.searchName} is a powerful Android video & music platform: watch every kind of video, download YouTube, Facebook, Instagram and TikTok videos in HD or MP3. Meet the project, its mission and release journey.`;

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "website" }, { property: "og:url", content: `${siteConfig.url}/about` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/about` }],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Film, t: "Every video, one place", d: "Movies, shows, shorts and clips from the platforms you love — in one clean player." },
  { icon: Download, t: "Download in one tap", d: "Save YouTube, Facebook, Instagram and TikTok videos in HD, or music as MP3." },
  { icon: Zap, t: "Built for speed", d: "Lightweight, smooth and fast — even on everyday Android phones." },
  { icon: ShieldCheck, t: "Official & honest", d: "Only real, verified APK files are offered — never empty or fake downloads." },
  { icon: Globe2, t: "Bangla & English", d: "Guides and help in both languages, so everyone can get started." },
  { icon: Music2, t: "Music that follows you", d: "A full music experience with your own library and playlists." },
];

function AboutPage() {
  const releases = appVersions.filter((v) => /^\d/.test(v.version));
  const stats = [
    { v: `v${latestVersion.version}`, l: "Latest release" },
    { v: `${releases.length}+`, l: "Releases shipped" },
    { v: "4+", l: "Platforms supported" },
    { v: "100%", l: "Free to use" },
  ];
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <section className="section-glow py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <p className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" /> Our story
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
              <WaveText text="More than a player." /><br /><span className="text-primary"><WaveText text="A video platform." /></span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{siteConfig.searchDescription}</p>
            <div className="mx-auto mt-8 max-w-xs"><ApkDownloadButton className="w-full" /></div>
          </div>
          <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:px-6">
            {stats.map((s) => (
              <div key={s.l} className="premium-panel glow-lift rounded-2xl p-5 text-center">
                <dd className="font-display text-3xl font-extrabold text-primary">{s.v}</dd>
                <dt className="mt-1 text-xs font-semibold text-muted-foreground">{s.l}</dt>
              </div>
            ))}
          </dl>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">What drives us</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map(({ icon: Icon, t, d }) => (
                <article key={t} className="premium-panel glow-lift rounded-2xl p-6">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground"><Icon className="size-6" /></span>
                  <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">Release journey</h2>
            <ol className="relative mt-10 space-y-5 border-l-2 border-primary/30 pl-6">
              {releases.map((v) => (
                <li key={v.version} className="relative">
                  <span className="absolute -left-[33px] top-4 grid size-4 place-items-center rounded-full bg-primary ring-4 ring-background" />
                  <div className="premium-panel rounded-xl p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display font-bold">Version {v.version}</span>
                      {v.isLatest ? <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">LATEST</span> : null}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{v.releaseDate} • {v.fileSize}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pb-20">
          <div className="premium-panel mx-auto max-w-4xl rounded-3xl px-6 py-12 text-center">
            <Rocket className="mx-auto size-10 text-primary" />
            <h2 className="mt-4 font-display text-3xl font-extrabold">Join the {siteConfig.searchName} community</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Questions, ideas or partnerships? Write to us at <a className="font-semibold text-primary underline" href="mailto:sksiam827@gmail.com">sksiam827@gmail.com</a>.</p>
            <div className="mx-auto mt-6 max-w-xs"><ApkDownloadButton className="w-full" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
