import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { FullLogo } from "@/components/Logo";
import { navItems, siteConfig, socialLinks } from "@/data/site";

const socialIcons = {
  youtube: Youtube,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-muted-foreground transition hover:text-primary"
                  >
                    {item.label}
                  </a>
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
                        className="grid size-10 place-items-center rounded-full border text-muted-foreground transition hover:border-primary hover:text-primary"
                      >
                        <Icon className="size-4.5" />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          {siteConfig.copyright}
        </div>
      </div>
    </footer>
  );
}
