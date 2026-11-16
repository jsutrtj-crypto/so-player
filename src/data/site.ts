export const siteConfig = {
  name: "SO PLAYER",
  searchName: "SK SO PLAYER",
  searchTitle: "SK SO PLAYER — Official Android Video & Music Platform",
  searchDescription:
    "SK SO PLAYER is an Android video and music player app. Watch YouTube videos, play music and shorts, and download videos from Facebook, Instagram, TikTok and YouTube in HD or MP3. Official APK download and install guide.",
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
