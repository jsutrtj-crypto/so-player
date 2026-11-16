import { useState } from "react";
import { Download, Facebook, Instagram, Music2, PlayCircle, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntertainmentIcon } from "@/components/EntertainmentIcon";

type Lang = "en" | "bn";
type T = Record<Lang, string>;

const copy = {
  en: { eyebrow: "About SK SO PLAYER", title: "One app to watch, play and download", intro: "SK SO PLAYER is a free Android video and music player. Watch YouTube videos, enjoy music and shorts, and save videos from your favourite platforms.", faq: "Frequently asked questions" },
  bn: { eyebrow: "SK SO PLAYER সম্পর্কে", title: "দেখা, শোনা আর ডাউনলোড—এক অ্যাপে", intro: "SK SO PLAYER একটি ফ্রি Android ভিডিও ও মিউজিক প্লেয়ার। YouTube ভিডিও দেখুন, গান ও শর্টস উপভোগ করুন, আর প্রিয় প্ল্যাটফর্ম থেকে ভিডিও সেভ করুন।", faq: "সাধারণ প্রশ্ন" },
};

const items: { icon: typeof Youtube; tone: "brand" | "music" | "video" | "shorts"; title: T; text: T }[] = [
  { icon: Youtube, tone: "brand", title: { en: "Watch YouTube videos", bn: "YouTube ভিডিও দেখুন" }, text: { en: "Smooth playback of videos and shorts in one clean player.", bn: "এক প্লেয়ারে মসৃণভাবে ভিডিও ও শর্টস দেখুন।" } },
  { icon: Facebook, tone: "video", title: { en: "Facebook video download", bn: "Facebook ভিডিও ডাউনলোড" }, text: { en: "Share any Facebook video to SO PLAYER and save it.", bn: "Facebook ভিডিও SO PLAYER-এ শেয়ার করে সেভ করুন।" } },
  { icon: Instagram, tone: "shorts", title: { en: "Instagram & TikTok", bn: "Instagram ও TikTok" }, text: { en: "Download reels and short videos quickly.", bn: "রিলস ও ছোট ভিডিও দ্রুত ডাউনলোড করুন।" } },
  { icon: Music2, tone: "music", title: { en: "Music & MP3", bn: "মিউজিক ও MP3" }, text: { en: "Play music or save audio as M4A or MP3.", bn: "গান শুনুন বা M4A/MP3 হিসেবে সেভ করুন।" } },
  { icon: Download, tone: "brand", title: { en: "HD quality choice", bn: "HD মান বেছে নিন" }, text: { en: "Choose 480p, 720p or 1080p Full HD.", bn: "480p, 720p বা 1080p Full HD বেছে নিন।" } },
  { icon: PlayCircle, tone: "video", title: { en: "Free official APK", bn: "ফ্রি অফিসিয়াল APK" }, text: { en: "Download the real APK directly from this website.", bn: "এই ওয়েবসাইট থেকে সরাসরি আসল APK নিন।" } },
];

export const aboutFaq: { q: T; a: T }[] = [
  { q: { en: "What is SK SO PLAYER?", bn: "SK SO PLAYER কী?" }, a: { en: "SK SO PLAYER is a free Android video and music player app for watching YouTube videos, music and shorts, with built-in video download.", bn: "SK SO PLAYER একটি ফ্রি Android ভিডিও ও মিউজিক প্লেয়ার, যাতে YouTube ভিডিও, গান ও শর্টস দেখা এবং ভিডিও ডাউনলোড করা যায়।" } },
  { q: { en: "Can I download Facebook and Instagram videos?", bn: "Facebook ও Instagram ভিডিও কি ডাউনলোড করা যায়?" }, a: { en: "Yes. Share a Facebook, Instagram or TikTok video to SO PLAYER, pick a quality and tap Download.", bn: "হ্যাঁ। ভিডিও SO PLAYER-এ শেয়ার করুন, মান বেছে Download চাপুন।" } },
  { q: { en: "Is SK SO PLAYER free?", bn: "SK SO PLAYER কি ফ্রি?" }, a: { en: "Yes, the APK is free to download from the official website.", bn: "হ্যাঁ, অফিসিয়াল ওয়েবসাইট থেকে APK ফ্রি ডাউনলোড করা যায়।" } },
  { q: { en: "Why does Google Play Protect show a warning?", bn: "Google Play Protect সতর্কতা দেখায় কেন?" }, a: { en: "Apps installed outside Play Store are checked. Tap Scan app, then Install when it shows the app looks safe.", bn: "Play Store-এর বাইরের অ্যাপ পরীক্ষা করা হয়। Scan app চাপুন, নিরাপদ দেখালে Install চাপুন।" } },
];

export function AboutApp() {
  const [lang, setLang] = useState<Lang>("en");
  const c = copy[lang];
  return (
    <section id="about" lang={lang} className="border-t py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div role="group" aria-label="About language" className="flex gap-1 rounded-lg border bg-muted p-1">
            <Button variant={lang === "en" ? "default" : "ghost"} aria-pressed={lang === "en"} onClick={() => setLang("en")}>English</Button>
            <Button variant={lang === "bn" ? "default" : "ghost"} aria-pressed={lang === "bn"} onClick={() => setLang("bn")}>বাংলা</Button>
          </div>
          <p className="text-sm font-bold uppercase text-primary">{c.eyebrow}</p>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{c.title}</h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">{c.intro}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.title.en} className="premium-panel flex gap-4 rounded-lg border p-5">
              <EntertainmentIcon icon={it.icon} tone={it.tone} />
              <div className="min-w-0"><h3 className="font-bold">{it.title[lang]}</h3><p className="mt-1 text-sm text-muted-foreground">{it.text[lang]}</p></div>
            </article>
          ))}
        </div>
        <h3 className="mt-12 text-center font-display text-2xl font-extrabold">{c.faq}</h3>
        <div className="mx-auto mt-6 grid max-w-3xl gap-3">
          {aboutFaq.map((f) => (
            <details key={f.q.en} className="premium-panel rounded-lg border p-4">
              <summary className="cursor-pointer font-bold">{f.q[lang]}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a[lang]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
