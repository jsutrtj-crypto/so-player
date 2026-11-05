import screenHome from "@/assets/screen-home.jpg";
import screenShorts from "@/assets/screen-shorts.jpg";
import screenMusic from "@/assets/screen-music.jpg";
import screenSubscriptions from "@/assets/screen-subscriptions.jpg";
import screenLibrary from "@/assets/screen-library.jpg";
import screenVideoPlayer from "@/assets/screen-video-player.jpg";
import screenSettings from "@/assets/screen-settings.jpg";

export interface AppScreenshot {
  src: string;
  title: string;
  description: string;
  alt: string;
}

export const appScreenshots: AppScreenshot[] = [
  {
    src: screenHome,
    title: "Home",
    description: "Movies, shows and more.",
    alt: "SO Player home screen with featured movies and shows",
  },
  {
    src: screenShorts,
    title: "Shorts",
    description: "Short videos, endless fun.",
    alt: "SO Player shorts feed playing a vertical video",
  },
  {
    src: screenMusic,
    title: "Music",
    description: "Top songs and charts.",
    alt: "SO Player music screen with top songs, charts and artists",
  },
  {
    src: screenSubscriptions,
    title: "Subscriptions",
    description: "Follow your favourite channels.",
    alt: "SO Player subscriptions screen with quick access",
  },
  {
    src: screenLibrary,
    title: "Library",
    description: "History, downloads and more.",
    alt: "SO Player library screen with watch history and downloads",
  },
  {
    src: screenVideoPlayer,
    title: "Watch & Play",
    description: "Crisp player, likes and comments.",
    alt: "SO Player video player screen with comments and recommendations",
  },
  {
    src: screenSettings,
    title: "Settings",
    description: "Guest sign-in and So Engine.",
    alt: "SO Player settings screen with So Engine toggles",
  },
];
