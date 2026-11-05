import screenHome from "@/assets/screen-home.png";
import screenShorts from "@/assets/screen-shorts.png";
import screenMusic from "@/assets/screen-music.png";
import screenSubscriptions from "@/assets/screen-subscriptions.png";
import screenLibrary from "@/assets/screen-library.png";

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
    alt: "SO Player home screen with movies and shows",
  },
  {
    src: screenShorts,
    title: "Shorts",
    description: "Short videos, endless fun.",
    alt: "SO Player shorts feed",
  },
  {
    src: screenMusic,
    title: "Music",
    description: "Top songs and charts.",
    alt: "SO Player music screen with top songs and playlists",
  },
  {
    src: screenSubscriptions,
    title: "Subscriptions",
    description: "Follow your favourite channels.",
    alt: "SO Player subscriptions screen",
  },
  {
    src: screenLibrary,
    title: "Library",
    description: "History, downloads and more.",
    alt: "SO Player library screen with history and downloads",
  },
];
