import shareOption from "@/assets/dl-share-option.png.asset.json";
import shareMore from "@/assets/dl-share-more.png.asset.json";
import shareSoPlayer from "@/assets/dl-share-so-player.png.asset.json";
import pickQuality from "@/assets/dl-pick-quality.png.asset.json";
import browserShare from "@/assets/dl-browser-share.png.asset.json";
import formatDownload from "@/assets/dl-format-download.png.asset.json";

import type { GuideLanguage } from "@/data/install-guide";

export const downloadGuideCopy = {
  bn: {
    heading: "কীভাবে", highlight: "ভিডিও ডাউনলোড করবেন",
    intro: "যেকোনো ভিডিও SO PLAYER দিয়ে সরাসরি ডাউনলোড করুন। নিচের ধাপগুলো অনুসরণ করুন।",
    step: "ধাপ", zoomIn: "বড় করুন", zoomOut: "ছোট করুন",
  },
  en: {
    heading: "How to", highlight: "Download Videos",
    intro: "Download any video directly with SO PLAYER. Follow the steps below.",
    step: "Step", zoomIn: "Zoom in", zoomOut: "Zoom out",
  },
} satisfies Record<GuideLanguage, Record<string, string>>;

export const downloadSteps = [
  { id: "share-option", src: shareOption.url, title: { bn: "শেয়ার অপশনে ট্যাপ করুন", en: "Tap the share option" }, text: { bn: "যে ভিডিওটি ডাউনলোড করতে চান, সেখানে শেয়ার বোতামে ট্যাপ করুন।", en: "On the video you want to save, tap the share button." } },
  { id: "share-more", src: shareMore.url, title: { bn: "More-এ ট্যাপ করুন", en: "Tap More" }, text: { bn: "শেয়ার তালিকার নিচে “More” অপশনে ট্যাপ করুন।", en: "At the bottom of the share list, tap “More”." } },
  { id: "share-so-player", src: shareSoPlayer.url, title: { bn: "Download with So_Player বেছে নিন", en: "Choose Download with So_Player" }, text: { bn: "তালিকা থেকে “Download with So_Player” বা “So_Player” বেছে নিন।", en: "From the list, choose “Download with So_Player” or “So_Player”." } },
  { id: "pick-quality", src: pickQuality.url, title: { bn: "মান বেছে Download-এ ট্যাপ করুন", en: "Pick a quality and tap Download" }, text: { bn: "মিউজিক বা ভিডিও ফরম্যাট বেছে নিন—যেমন Fast (480p), High quality (720p) বা Full HD (1080p)—তারপর “Download”-এ ট্যাপ করুন।", en: "Choose a music or video format—such as Fast (480p), High quality (720p) or Full HD (1080p)—then tap “Download”." } },
  { id: "browser-share", src: browserShare.url, title: { bn: "ব্রাউজার থেকেও ডাউনলোড করতে পারবেন", en: "You can also download from the browser" }, text: { bn: "SO PLAYER-এর ভেতরের ব্রাউজারে ভিডিও খুললে “So_Player” অপশনে ট্যাপ করুন।", en: "Open the video in SO PLAYER's built-in browser and tap the “So_Player” option." } },
  { id: "format-download", src: formatDownload.url, title: { bn: "ফরম্যাট বেছে DOWNLOAD চাপুন", en: "Choose a format and press DOWNLOAD" }, text: { bn: "ভিডিও (1080p/480p), Audio বা MP3—যেকোনো ফরম্যাট বেছে লাল “DOWNLOAD” বোতামে ট্যাপ করুন।", en: "Pick any format—Video (1080p/480p), Audio or MP3—and tap the red “DOWNLOAD” button." } },
];
