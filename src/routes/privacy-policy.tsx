import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { privacyPolicy } from "@/data/privacy";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Privacy Policy — SO PLAYER" },
      {
        name: "description",
        content: "Read how the SO PLAYER website and APK download handle information and external services.",
      },
      { property: "og:title", content: "Privacy Policy — SO PLAYER" },
      {
        property: "og:description",
        content: "Information about the SO PLAYER website, APK download and external services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="privacy-policy" />
      <main>
        <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-bold uppercase text-primary">{siteConfig.name}</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {privacyPolicy.lastUpdated}
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            This page explains the information practices described by the SO PLAYER owner for this website and the APK download.
          </p>

          <div className="mt-10 divide-y border-y">
            {privacyPolicy.sections.map((section) => (
              <section key={section.title} className="py-6 sm:py-8">
                <h2 className="font-display text-xl font-bold">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-2xl border bg-muted/60 p-5 sm:p-6">
            <h2 className="font-display text-lg font-bold">Contact</h2>
            {privacyPolicy.contactEmail ? (
              <p className="mt-2 text-muted-foreground">
                Privacy questions: <a className="font-semibold text-primary underline" href={`mailto:${privacyPolicy.contactEmail}`}>{privacyPolicy.contactEmail}</a>
              </p>
            ) : (
              <p className="mt-2 text-muted-foreground">
                A privacy contact email has not been provided for publication yet.
              </p>
            )}
          </section>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            To learn about SO PLAYER features, visit the <Link to="/services" className="font-semibold text-primary underline">Services page</Link>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}