import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { Features } from "@/components/Features";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SO PLAYER — Your Entertainment, One Player" },
      {
        name: "description",
        content:
          "SO PLAYER is a powerful and lightweight Android media app for movies, shows, music, shorts and more. Download the latest APK, explore screenshots, features and version history.",
      },
      { property: "og:title", content: "SO PLAYER — Your Entertainment, One Player" },
      {
        property: "og:description",
        content:
          "A powerful and lightweight Android media app for movies, shows, music, shorts and more — all in one place.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: siteConfig.name },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header homePage />
      <main>
        <Hero />
        <ScreenshotGallery />
        <Features />
        <DownloadSection />
      </main>
      <Footer homePage />
    </div>
  );
}
