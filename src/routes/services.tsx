import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { features } from "@/data/features";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SO PLAYER Services — Movies, Music & Shorts" },
      {
        name: "description",
        content: "Explore SO PLAYER entertainment services for movies, shows, music, shorts, subscriptions and your personal library.",
      },
      { property: "og:title", content: "SO PLAYER Services — Movies, Music & Shorts" },
      {
        property: "og:description",
        content: "One Android player for movies, shows, music, shorts, subscriptions and your personal library.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
              {features.map(({ icon: Icon, title, description }) => (
                <article key={title} className="glow-lift glass-card rounded-2xl p-6 shadow-sm">
                  <span className="grid size-12 place-items-center rounded-xl bg-secondary">
                    <Icon className="size-6 text-primary" strokeWidth={2.2} />
                  </span>
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