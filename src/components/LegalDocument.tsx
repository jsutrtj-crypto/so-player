import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { privacyPolicy } from "@/data/privacy";
import { siteConfig } from "@/data/site";
import type { LegalSection } from "@/data/legal";

export function LegalDocument({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <Button asChild variant="ghost" className="mb-8"><Link to="/"><ArrowLeft className="size-4" />Home</Link></Button>
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-bold text-primary"><ShieldCheck className="size-4" />{siteConfig.searchName}</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <p className="mt-4 text-sm text-muted-foreground">Updated {privacyPolicy.lastUpdated}</p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="On this page" className="h-fit lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-bold uppercase text-muted-foreground">On this page</p>
            <ol className="space-y-3 border-l pl-4 text-sm">
              {sections.map((s, i) => <li key={s.title}><a href={`#section-${i + 1}`} className="text-muted-foreground transition-colors hover:text-primary">{s.title}</a></li>)}
            </ol>
          </nav>
          <div>
            {sections.map((s, i) => (
              <section key={s.title} id={`section-${i + 1}`} className="legal-section scroll-mt-28 py-7 first:pt-5">
                <p className="text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </section>
            ))}
            <div className="mt-6 border-t pt-6">
              <h2 className="font-display text-xl font-bold">Questions or concerns?</h2>
              <Button asChild variant="outline" className="mt-4 max-w-full whitespace-normal break-all"><a href={`mailto:${privacyPolicy.contactEmail}`}><Mail className="size-4 shrink-0" />{privacyPolicy.contactEmail}</a></Button>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button asChild variant="ghost"><Link to="/privacy-policy">Privacy Policy<ArrowUpRight className="size-4" /></Link></Button>
                <Button asChild variant="ghost"><Link to="/terms">Terms of Use<ArrowUpRight className="size-4" /></Link></Button>
                <Button asChild variant="ghost"><Link to="/download-safety">Download Safety<ArrowUpRight className="size-4" /></Link></Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}