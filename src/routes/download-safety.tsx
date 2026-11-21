import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/LegalDocument";
import { safetySections } from "@/data/legal";
import { siteConfig } from "@/data/site";

const title = `APK Download & Installation Safety — ${siteConfig.searchName}`;
const description = "Check your SO PLAYER APK download, keep Play Protect enabled, review Android permissions and find installation help.";

export const Route = createFileRoute("/download-safety")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: `${siteConfig.url}/download-safety` }],
  }),
  component: () => <LegalDocument title="Download & installation safety" intro="The original APK, a completed download and an informed installation decision. Keep your phone's protection enabled throughout." sections={safetySections} />,
});