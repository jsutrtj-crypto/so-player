export const siteConfig = {
  name: "SO PLAYER",
  searchName: "SK SO PLAYER",
  searchTitle: "SK SO PLAYER — Official Android Video & Music Platform",
  searchDescription:
    "SK SO PLAYER is not just a player app — it is an all-in-one Android video platform. Watch every kind of video, download YouTube videos and music, and watch and download videos from Facebook, Instagram, TikTok and more in HD or MP3. Official SO PLAYER APK download.",
  url: "https://so-player.lovable.app",
  tagline: "Your Entertainment, One Player.",
  description:
    "Watch videos, explore shorts and enjoy music with SO PLAYER. Save supported YouTube, Facebook, Instagram and TikTok videos, choose the available video quality or audio format, and keep your history, downloads and playlists together on Android.",
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
  { label: "App Details", href: "/app-details" },
  { label: "Services", href: "/services" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Download Safety", href: "/download-safety" },
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
