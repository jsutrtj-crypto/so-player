/**
 * SO PLAYER — version & download configuration.
 *
 * To release a new version:
 * 1. Add a new object at the TOP of `appVersions` with the version number,
 *    release date, APK file size, download URL and release notes.
 * 2. Keep exactly one entry with `isLatest: true` (usually the newest one).
 *    The latest card, the "Older Versions" list and the Version History
 *    section all update automatically from this file.
 *
 * Set `downloadUrl` to the public URL of the APK file (e.g. a hosted file
 * or a signed storage link). While it is `null`, the download button shows
 * an honest "link coming soon" notice instead of a fake download.
 */

export interface AppVersion {
  version: string;
  releaseDate: string;
  fileSize: string;
  downloadUrl: string | null;
  releaseNotes?: string;
  isLatest?: boolean;
}

export const appVersions: AppVersion[] = [
  {
    version: "1.0.0",
    releaseDate: "Jun 20, 2025",
    fileSize: "78.3 MB",
    downloadUrl: "https://drive.google.com/uc?id=1ZGQJ3ptgKu_JjO1BRAEbv8IHEEwNWfK0&export=download",
    isLatest: true,
    releaseNotes:
      "First official release. Movies, shows, music, shorts, subscriptions and personal library — all in one player.",
  },
  {
    version: "0.9.8",
    releaseDate: "May 10, 2025",
    fileSize: "22 MB",
    downloadUrl: null,
    releaseNotes: "Performance improvements and bug fixes in the shorts feed.",
  },
  {
    version: "0.9.7",
    releaseDate: "Apr 02, 2025",
    fileSize: "21 MB",
    downloadUrl: null,
    releaseNotes: "Improved music charts and playback stability.",
  },
  {
    version: "0.9.5",
    releaseDate: "Feb 18, 2025",
    fileSize: "20 MB",
    downloadUrl: null,
    releaseNotes: "Added subscriptions feed and channel follow feature.",
  },
  {
    version: "0.9.0",
    releaseDate: "Jan 05, 2025",
    fileSize: "19 MB",
    downloadUrl: null,
    releaseNotes: "New library layout with history and downloads.",
  },
  {
    version: "0.8.5",
    releaseDate: "Dec 12, 2024",
    fileSize: "18 MB",
    downloadUrl: null,
    releaseNotes: "Early preview build with movies, shows and music.",
  },
];

const emptyVersion: AppVersion = {
  version: "0.0.0",
  releaseDate: "—",
  fileSize: "—",
  downloadUrl: null,
};

export const latestVersion: AppVersion =
  appVersions.find((v) => v.isLatest) ?? appVersions[0] ?? emptyVersion;

export const olderVersions: AppVersion[] = appVersions.filter(
  (v) => !v.isLatest,
);

/** Placeholder until real APK links are supplied — never a fake link. */
export const DOWNLOAD_URL_PLACEHOLDER = null;
