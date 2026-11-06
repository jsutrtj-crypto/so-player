import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FullLogo } from "@/components/Logo";
import { legalLinks, navItems, siteConfig, socialLinks } from "@/data/site";

const socialIcons = {
  youtube: Youtube,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

export function Footer({ homePage = false }: { homePage?: boolean }) {
  return (
    <footer className="relative border-t bg-background">
      {/* Brand gradient accent along the top edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <FullLogo iconSize={42} textClassName="text-xl" />
            <p className="mt-3 text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:justify-self-center">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:grid md:grid-cols-2 md:gap-x-10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to="/"
                    hash={item.href.slice(1)}
                    className="text-sm font-semibold text-muted-foreground transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="md:justify-self-end">
            <ul className="flex gap-3">
              {socialLinks
                .filter((s) => s.url)
                .map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="grid size-10 place-items-center rounded-full border text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--color-primary)_55%,transparent)]"
                      >
                        <Icon className="size-4.5" />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <span>{siteConfig.copyright}</span>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-semibold transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
