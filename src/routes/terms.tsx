import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/LegalDocument";
import { termsSections } from "@/data/legal";
import { siteConfig } from "@/data/site";

const title = `Terms of Use — ${siteConfig.searchName}`;
const description = "Read SK SO PLAYER website terms for APK downloads, content permissions, third-party platforms and support.";

export const Route = createFileRoute("/terms")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: `${siteConfig.url}/terms` }],
  }),
  component: () => <LegalDocument title="Terms of Use" intro="Clear expectations for using the website, downloading the app and respecting the people who create the content you enjoy." sections={termsSections} />,
});