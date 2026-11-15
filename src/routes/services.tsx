import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { features } from "@/data/features";
import { siteConfig } from "@/data/site";
import { EntertainmentIcon } from "@/components/EntertainmentIcon";

export const Route = createFileRoute("/services")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "SK SHOW PLAYER Services — Video, Music & Shorts" },
      {
        name: "description",
        content: "Explore SK SHOW PLAYER (SO PLAYER), the Android video and music platform for movies, shows, shorts, subscriptions and your personal library.",
      },
      { property: "og:title", content: "SK SHOW PLAYER Services — Video, Music & Shorts" },
      {
        property: "og:description",
        content: "Explore SK SHOW PLAYER video and music entertainment services on Android.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/services` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="services" />
      <main>
        <section className="section-glow py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase text-primary">{siteConfig.name}</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">
              Entertainment, <span className="text-primary">all in one place.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Explore the things you can enjoy with SO PLAYER on Android.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description, tone }) => (
                <article key={title} className="feature-tile rounded-lg border bg-card p-6">
                  <EntertainmentIcon icon={Icon} tone={tone} />
                  <h2 className="title-glow mt-5 font-display text-xl font-bold">{title}</h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}