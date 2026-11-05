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
  /** Shown when the card is tapped. */
  highlights: string[];
}

export const appScreenshots: AppScreenshot[] = [
  {
    src: screenHome,
    title: "Home",
    description: "Movies, shows and more.",
    alt: "SO Player home screen with featured movies and shows",
    highlights: [
      "Featured movies & shows up front",
      "Smart category rows",
      "Personalised recommendations",
    ],
  },
  {
    src: screenShorts,
    title: "Shorts",
    description: "Short videos, endless fun.",
    alt: "SO Player shorts feed playing a vertical video",
    highlights: [
      "Vertical video feed",
      "Like, comment & share",
      "Subscribe to channels",
    ],
  },
  {
    src: screenMusic,
    title: "Music",
    description: "Top songs and charts.",
    alt: "SO Player music screen with top songs, charts and artists",
    highlights: [
      "Ranked top songs",
      "Trending charts",
      "Artist collections",
    ],
  },
  {
    src: screenSubscriptions,
    title: "Subscriptions",
    description: "Follow your favourite channels.",
    alt: "SO Player subscriptions screen with quick access",
    highlights: [
      "Quick channel access",
      "Fresh uploads first",
      "Built-in Shorts feed",
    ],
  },
  {
    src: screenLibrary,
    title: "Library",
    description: "History, downloads and more.",
    alt: "SO Player library screen with watch history and downloads",
    highlights: [
      "Watch history",
      "Offline downloads",
      "Settings & data control",
    ],
  },
  {
    src: screenVideoPlayer,
    title: "Watch & Play",
    description: "Crisp player, likes and comments.",
    alt: "SO Player video player screen with comments and recommendations",
    highlights: [
      "Smooth HD playback",
      "Comments & reactions",
      "Related video suggestions",
    ],
  },
  {
    src: screenSettings,
    title: "Settings",
    description: "Guest sign-in and So Engine.",
    alt: "SO Player settings screen with So Engine toggles",
    highlights: [
      "Guest or sign-in account",
      "So Engine toggles",
      "Full account options",
    ],
  },
];
