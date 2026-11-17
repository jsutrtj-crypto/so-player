import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { VideoDownloadGuide } from "@/components/VideoDownloadGuide";
import { Features } from "@/components/Features";
import { DownloadSection } from "@/components/DownloadSection";
import { InstallGuide } from "@/components/InstallGuide";
import { Footer } from "@/components/Footer";
import { TrustStrip } from "@/components/TrustStrip";
import { siteConfig } from "@/data/site";
import { PlatformDownloads } from "@/components/PlatformDownloads";
import { AboutApp, aboutFaq } from "@/components/AboutApp";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: siteConfig.searchTitle },
      {
        name: "description",
        content:
          siteConfig.searchDescription,
      },
      { property: "og:title", content: siteConfig.searchTitle },
      {
        property: "og:description",
        content:
          siteConfig.searchDescription,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteConfig.url },
      { property: "og:site_name", content: siteConfig.searchName },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: siteConfig.url }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, name: siteConfig.searchName, alternateName: siteConfig.name, url: siteConfig.url, description: siteConfig.searchDescription },
          { "@type": "SoftwareApplication", name: siteConfig.searchName, alternateName: siteConfig.name, operatingSystem: "Android", applicationCategory: "MultimediaApplication", url: siteConfig.url, description: siteConfig.searchDescription, featureList: ["Watch YouTube videos", "Music player", "Shorts", "Facebook video download", "Instagram video download", "TikTok video download", "MP3 and HD video formats"], offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
          { "@type": "FAQPage", mainEntity: aboutFaq.map((f) => ({ "@type": "Question", name: f.q.en, acceptedAnswer: { "@type": "Answer", text: f.a.en } })) },
        ],
      }),
    }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header homePage />
      <main>
        <Hero />
        <TrustStrip />
        <ScreenshotGallery />
        <VideoDownloadGuide />
        <Features />
        <DownloadSection />
        <InstallGuide />
        <PlatformDownloads />
        <AboutApp />
      </main>
      <Footer />
    </div>
  );
}
