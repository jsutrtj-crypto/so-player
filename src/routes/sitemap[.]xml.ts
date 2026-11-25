import { getRouterInstance } from "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { appScreenshots } from "@/data/screenshots";
import { sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";

const guideImages = Object.entries(import.meta.glob<{ url: string }>("../assets/{dl,install-scan}-*.asset.json", { eager: true, import: "default" }))
  .map(([file, a]) => ({ loc: a.url, title: `SK SO PLAYER guide — ${file.split("/").pop()!.replace(/\.png\.asset\.json$/, "").replace(/-/g, " ")}` }));
const stepImages = Object.values(import.meta.glob<string>("../assets/install-step-*.png", { eager: true, import: "default" }))
  .map((loc, i) => ({ loc, title: `SK SO PLAYER install step ${i + 1}` }));
const allImages = [...appScreenshots.map((s) => ({ loc: s.src, title: `SK SO PLAYER — ${s.title}: ${s.description}` })), ...guideImages, ...stepImages];
const pageImages: Record<string, typeof allImages> = { "/": allImages, "/app-details": allImages };

const BASE_URL = "https://so-player.lovable.app/";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => (pageImages[path] ? { path, images: pageImages[path] } : { path }));
        if (entries.length === 0) {
          return new Response("No pages are included in this sitemap.", {
            status: 404,
            headers: { "Cache-Control": "no-store" },
          });
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});