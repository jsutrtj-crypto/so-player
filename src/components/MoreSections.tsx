import { WaveText } from "@/components/WaveText";
import { Download, Gauge, Headphones, Languages, Lock, MonitorPlay, Moon, PackageCheck, PlayCircle, Smartphone, Zap } from "lucide-react";
import { ApkDownloadButton } from "@/components/ApkDownloadButton";
import { latestVersion } from "@/data/versions";
import { siteConfig } from "@/data/site";

const steps = [
  { icon: Download, title: "Download the APK", text: "Tap Download APK to get the latest official file." },
  { icon: PackageCheck, title: "Install on Android", text: "Open the file and follow the install guide above." },
  { icon: PlayCircle, title: "Start watching", text: "Enjoy videos, music and shorts in one player." },
];

const reasons = [
  { icon: Zap, title: "Fast & lightweight", text: "Smooth playback without slowing your phone." },
  { icon: MonitorPlay, title: "HD video", text: "Watch and save videos in clear HD quality." },
  { icon: Headphones, title: "Music & MP3", text: "Play music and save audio as MP3." },
  { icon: Gauge, title: "Quick downloads", text: "Pick a format and download in a few taps." },
  { icon: Moon, title: "Clean design", text: "Simple, modern screens that are easy to use." },
  { icon: Languages, title: "Bangla & English", text: "Guides on this site in both languages." },
  { icon: Lock, title: "Official file", text: "Download only from this official website." },
  { icon: Smartphone, title: "Made for Android", text: "Built for Android phones of all sizes." },
];

export function MoreSections() {
  return (
    <>
      <section id="how-it-works" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase text-primary">How it works</p>
          <h2 className="mt-3 text-center font-display text-3xl font-extrabold sm:text-4xl">Get started in 3 easy steps</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="premium-panel rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary"><Icon aria-hidden="true" /></span>
                  <span className="font-display text-4xl font-extrabold text-primary/20">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="why" className="section-glow py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase text-primary">Why {siteConfig.searchName}</p>
          <h2 className="mt-3 text-center font-display text-3xl font-extrabold sm:text-4xl">Everything you need in one app</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article key={title} className="premium-panel rounded-xl p-5">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="premium-panel rounded-3xl p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl"><WaveText text={`Ready to try ${siteConfig.searchName}?`} /></h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{siteConfig.tagline} Version {latestVersion.version} · {latestVersion.fileSize} · Free for Android.</p>
            <ApkDownloadButton className="mt-7 w-full sm:w-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
