import { describe, expect, it } from "vitest";
import { appVersions, latestVersion, olderVersions } from "@/data/versions";
import { privacyPolicy } from "@/data/privacy";
import { navItems, siteConfig, socialLinks } from "@/data/site";

describe("SO PLAYER version data", () => {
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

  it("uses the newly supplied APK as the main download", () => {
    expect(latestVersion.downloadUrl).toBe(
      "https://drive.google.com/uc?id=1V2kJh1umAwuvD1YmhhwzZl9o0sM8nh9W&export=download",
    );
    expect(latestVersion.fileSizeBytes).toBe(82179058);
    expect(latestVersion.fileSize).toBe("78.4 MB");
  });

  it("keeps only the previous real APK in older versions and removes demo releases", () => {
    expect(appVersions).toHaveLength(2);
    expect(olderVersions).toHaveLength(1);
    expect(olderVersions[0]?.downloadUrl).toBe(
      "https://drive.google.com/uc?id=1ZGQJ3ptgKu_JjO1BRAEbv8IHEEwNWfK0&export=download",
    );
    expect(olderVersions[0]?.fileSizeBytes).toBe(82125802);
    expect(olderVersions[0]?.fileSize).toBe("78.3 MB");
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
  it("matches the owner's statement that no personal information is collected", () => {
    expect(privacyPolicy.websiteCollectsPersonalInformation).toBe(false);
  });
});
