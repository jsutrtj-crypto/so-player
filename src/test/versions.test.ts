import { describe, expect, it } from "vitest";
import { appVersions, latestVersion, olderVersions, getApkDownloadUrl } from "@/data/versions";
import { privacyPolicy } from "@/data/privacy";
import { navItems, siteConfig, socialLinks } from "@/data/site";

describe("SO PLAYER version data", () => {
  it("delivers supplied APKs through the website without a Drive redirect", () => {
    expect(getApkDownloadUrl(latestVersion)).toBe("/api/public/apk?release=3.0.14");
    expect(olderVersions.map(getApkDownloadUrl)).toEqual(["/api/public/apk?release=3.0.13", "/api/public/apk?release=3.0.12", "/api/public/apk?release=3.0.11", "/api/public/apk?file=1b-OLYXVnYcRWFfqMnPLZLOqiCpSBHl_s", "/api/public/apk?file=1V2kJh1umAwuvD1YmhhwzZl9o0sM8nh9W", "/api/public/apk?file=1ZGQJ3ptgKu_JjO1BRAEbv8IHEEwNWfK0"]);
    expect(getApkDownloadUrl({ version: "9.9.9", releaseDate: "x", fileSize: "1 MB", downloadUrl: null })).toBeNull();
  });
  it("marks exactly one version as latest and puts it first", () => {
    expect(appVersions[0]?.isLatest).toBe(true);
    expect(appVersions.filter((v) => v.isLatest)).toHaveLength(1);
    expect(latestVersion).toBe(appVersions[0]);
  });

  it("every version has a number, release date and file size", () => {
    for (const v of appVersions) {
      expect(v.version === "Not supplied" || /^\d+\.\d+\.\d+$/.test(v.version)).toBe(true);
      expect(v.releaseDate.length).toBeGreaterThan(3);
      expect(v.fileSize).toMatch(/\d+(?:\.\d+)? MB$/);
    }
    expect(olderVersions.length).toBeGreaterThan(0);
  });

  it("never fabricates a download link — a URL, when set, must be a real https link", () => {
    for (const v of appVersions) {
      if (v.downloadUrl !== null) {
        expect(v.downloadUrl.startsWith("https://")).toBe(true);
      }
    }
  });

  it("uses the supplied 3.0.14 APK as the main download", () => {
    expect(latestVersion.version).toBe("3.0.14");
    expect(latestVersion.fileSizeBytes).toBe(220250901);
    expect(latestVersion.storagePath).toBe("SO-PLAYER-3.0.14.apk");
  });

  it("preserves 3.0.13 as an older downloadable APK", () => {
    const previous = olderVersions.find((v) => v.version === "3.0.13");
    expect(previous?.isLatest).toBe(false);
    expect(previous?.fileSizeBytes).toBe(220241993);
    expect(previous && getApkDownloadUrl(previous)).toBe("/api/public/apk?release=3.0.13");
  });

  it("keeps 3.0.1 and the earlier real APK in older versions", () => {
    expect(appVersions).toHaveLength(7);
    expect(olderVersions.map((v) => v.fileSizeBytes)).toEqual([220241993, 220236169, 220130589, 72930972, 82179058, 82125802]);
  });
});

describe("SO PLAYER site data", () => {
  it("has the brand name and tagline", () => {
    expect(siteConfig.name).toBe("SO PLAYER");
    expect(siteConfig.tagline).toBe("Your Entertainment, One Player.");
  });

  it("nav targets every section with an in-page anchor", () => {
    expect(navItems.map((n) => n.label)).toEqual([
      "Home",
      "Features",
      "Screenshots",
      "Download",
      "Version History",
    ]);
    for (const item of navItems) expect(item.href.startsWith("#")).toBe(true);
  });

  it("renders no social link without a real URL", () => {
    for (const s of socialLinks) {
      if (!s.url) continue;
      expect(s.url.startsWith("https://")).toBe(true);
    }
  });
});

describe("SO PLAYER privacy statement", () => {
  it("discloses personal information for optional website Google sign-in", () => {
    expect(privacyPolicy.websiteCollectsPersonalInformation).toBe(true);
  });
});
