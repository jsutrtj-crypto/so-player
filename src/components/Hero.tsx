import { WaveText } from "@/components/WaveText";
import { useState } from "react";
import { Play, ShieldCheck, Zap, MonitorSmartphone, House, Music2, Clapperboard, SquarePlay } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import screenHome from "@/assets/screen-home.jpg";
import screenShorts from "@/assets/screen-shorts.jpg";
import screenMusic from "@/assets/screen-music.jpg";
import screenVideo from "@/assets/screen-video-player.jpg";
import { siteConfig } from "@/data/site";
import { ApkDownloadButton } from "@/components/ApkDownloadButton";
import { EntertainmentIcon } from "@/components/EntertainmentIcon";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "Home", icon: House, tone: "brand" as const, src: screenHome, alt: "SO Player home screen" },
  { label: "Music", icon: Music2, tone: "music" as const, src: screenMusic, alt: "SO Player music screen" },
  { label: "Videos", icon: Clapperboard, tone: "video" as const, src: screenVideo, alt: "SO Player video player screen" },
  { label: "Shorts", icon: SquarePlay, tone: "shorts" as const, src: screenShorts, alt: "SO Player shorts screen" },
] as const;

const benefits = [
  { icon: ShieldCheck, label: "Original file\nAndroid APK" },
  { icon: Zap, label: "Direct download\nNo account needed" },
  { icon: MonitorSmartphone, label: "All-in-One\nEntertainment" },
];

export function Hero() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const category = categories[categoryIndex] ?? categories[0];
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pb-16 lg:pt-20">
        {/* Left — copy */}
        <div className="max-w-xl">
          <p className="flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground sm:text-sm">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Music · Videos · Shorts · All in One
          </p>

          <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            <WaveText text="SO " /><WaveText text="PLAYER" className="text-primary" />
          </h1>
          <p className="mt-3 text-xl font-semibold sm:text-2xl">{siteConfig.tagline}</p>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.description}
          </p>

          <div role="group" aria-label="App screen preview" className="mt-6 grid max-w-md grid-cols-4 gap-2">
            {categories.map((item, index) => (
              <Button key={item.label} variant="ghost" aria-pressed={categoryIndex === index}
                onClick={() => setCategoryIndex(index)}
                className="category-control h-auto min-w-0 flex-col gap-2 whitespace-normal rounded-lg px-1 py-3 text-xs font-semibold sm:text-sm">
                <EntertainmentIcon icon={item.icon} tone={item.tone} />
                {item.label}
              </Button>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ApkDownloadButton className="px-7 py-3.5 text-base" />
            <Button asChild variant="outline" className="h-auto rounded-xl border-2 border-primary px-7 py-3.5 text-base font-bold text-primary">
            <a
              href="#features"
            >
              <Play className="size-4 fill-current" />
              Explore Features
            </a>
            </Button>
          </div>

          <ul className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {benefits.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary">
                  <Icon className="size-4.5 text-primary" strokeWidth={2.2} />
                </span>
                <span className="text-xs font-semibold leading-tight text-foreground whitespace-pre-line sm:text-[13px]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — phone showcase */}
        <div className="relative mx-auto h-[430px] w-full max-w-[520px] sm:h-[520px] lg:h-[560px]">
          <div className="hero-glow absolute -inset-8 rounded-full" aria-hidden="true" />
          {/* decorative strokes */}
          <div className="absolute right-4 top-24 hidden h-1.5 w-10 rotate-[-35deg] rounded-full bg-primary sm:block" aria-hidden="true" />
          <div className="absolute right-10 top-36 hidden h-1.5 w-6 rotate-[-35deg] rounded-full bg-primary sm:block" aria-hidden="true" />
          <div className="absolute left-2 top-40 hidden h-1.5 w-8 rotate-[35deg] rounded-full bg-primary sm:block" aria-hidden="true" />

          <PhoneMockup
            src={screenMusic}
            alt="SO Player music screen"
            className="absolute left-0 top-32 z-0 w-[168px] -rotate-6 sm:w-[195px] lg:w-[210px]"
          />
          <PhoneMockup
            src={screenShorts}
            alt="SO Player shorts screen"
            className="absolute right-0 top-16 z-20 w-[186px] rotate-6 sm:w-[215px] lg:w-[230px]"
          />
          <PhoneMockup
            src={category.src}
            alt={category.alt}
            className="absolute left-1/2 top-6 z-30 w-[215px] -translate-x-1/2 sm:w-[245px] lg:w-[262px]"
          />
        </div>
      </div>
    </section>
  );
}
