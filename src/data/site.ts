export const siteConfig = {
  name: "SO PLAYER",
  searchName: "SK SO PLAYER",
  searchTitle: "SK SO PLAYER — Official Android Video & Music Platform",
  searchDescription:
    "SK SO PLAYER is not just a player app — it is an all-in-one Android video platform. Watch every kind of video, download YouTube videos and music, and watch and download videos from Facebook, Instagram, TikTok and more in HD or MP3. Official SO PLAYER APK download.",
  url: "https://so-player.lovable.app",
  tagline: "Your Entertainment, One Player.",
  description:
    "SO PLAYER is a powerful and lightweight Android media app for movies, shows, music, shorts and more. A smooth, modern and personalized entertainment experience — all in one place.",
  copyright: "© 2026 SO PLAYER. All rights reserved.",
};

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Download", href: "#download" },
  { label: "Version History", href: "#versions" },
];

export const legalLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;

/**
 * Social media links. Leave a URL empty until the real profile exists —
 * empty entries are not rendered as links anywhere on the site.
 */
export const socialLinks = [
  { label: "YouTube", icon: "youtube" as const, url: "" },
  { label: "Facebook", icon: "facebook" as const, url: "" },
  { label: "Instagram", icon: "instagram" as const, url: "" },
  { label: "X (Twitter)", icon: "twitter" as const, url: "" },
];
