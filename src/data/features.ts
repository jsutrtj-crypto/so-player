import { Bookmark, Clapperboard, Music2, SquarePlay, UsersRound } from "lucide-react";

export const features = [
  {
    icon: Clapperboard,
    tone: "video" as const,
    title: "Movies & Shows",
    description: "Watch the latest movies, web series and more.",
  },
  {
    icon: Music2,
    tone: "music" as const,
    title: "Music",
    description: "Discover and enjoy trending music and charts.",
  },
  {
    icon: SquarePlay,
    tone: "shorts" as const,
    title: "Shorts",
    description: "Short videos, big entertainment.",
  },
  {
    icon: UsersRound,
    tone: "brand" as const,
    title: "Subscriptions",
    description: "Follow your favourite channels and creators.",
  },
  {
    icon: Bookmark,
    tone: "library" as const,
    title: "Personal Library",
    description: "Manage your history, downloads and playlists.",
  },
];