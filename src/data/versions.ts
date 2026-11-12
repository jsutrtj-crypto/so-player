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
  fileSizeBytes?: number;
  downloadUrl: string | null;
  releaseNotes?: string;
  isLatest?: boolean;
}

export const appVersions: AppVersion[] = [
  {
    version: "3.0.7",
    releaseDate: "12 November 2026",
    fileSize: "72.9 MB",
    fileSizeBytes: 72930972,
    downloadUrl: "https://drive.google.com/uc?id=1b-OLYXVnYcRWFfqMnPLZLOqiCpSBHl_s&export=download",
    isLatest: true,
  },
  {
    version: "3.0.1",
    releaseDate: "2 November 2026",
    fileSize: "78.4 MB",
    fileSizeBytes: 82179058,
    downloadUrl: "https://drive.google.com/uc?id=1V2kJh1umAwuvD1YmhhwzZl9o0sM8nh9W&export=download",
    isLatest: false,
  },
  {
    version: "Not supplied",
    releaseDate: "Not supplied",
    fileSize: "78.3 MB",
    fileSizeBytes: 82125802,
    downloadUrl: "https://drive.google.com/uc?id=1ZGQJ3ptgKu_JjO1BRAEbv8IHEEwNWfK0&export=download",
    isLatest: false,
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

/** Extract only the owner-supplied Drive source, keeping release data here. */
export function getDriveFileId(version: AppVersion): string | null {
  if (!version.downloadUrl) return null;
  try {
    const url = new URL(version.downloadUrl);
    return url.hostname === "drive.google.com" ? url.searchParams.get("id") : null;
  } catch { return null; }
}

export function getApkDownloadUrl(version: AppVersion): string | null {
  const id = getDriveFileId(version);
  return id ? `/api/public/apk?file=${encodeURIComponent(id)}` : null;
}
