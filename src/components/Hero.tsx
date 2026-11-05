import { Download, Play, ShieldCheck, Zap, MonitorSmartphone } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import screenHome from "@/assets/screen-home.png";
import screenShorts from "@/assets/screen-shorts.png";
import screenMusic from "@/assets/screen-music.png";
import { siteConfig } from "@/data/site";

const benefits = [
  { icon: ShieldCheck, label: "100% Safe\nAndroid APK" },
  { icon: Zap, label: "Lightweight\n& Fast" },
  { icon: MonitorSmartphone, label: "All-in-One\nEntertainment" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pb-16 lg:pt-20">
        {/* Left — copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground sm:text-sm">
            Music <span aria-hidden="true">•</span> Videos <span aria-hidden="true">•</span> Shorts{" "}
            <span aria-hidden="true">•</span> All in One
          </span>

          <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Your Entertainment,
            <br />
            <span className="text-primary">One Player.</span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-base font-bold text-primary-foreground transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Download className="size-5" strokeWidth={2.5} />
              Download APK
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-background px-7 py-3.5 text-base font-bold text-primary transition hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Play className="size-4 fill-current" />
              Explore Features
            </a>
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
            src={screenHome}
            alt="SO Player home screen"
            className="absolute left-1/2 top-6 z-10 w-[215px] -translate-x-1/2 sm:w-[245px] lg:w-[262px]"
          />
        </div>
      </div>
    </section>
  );
}
