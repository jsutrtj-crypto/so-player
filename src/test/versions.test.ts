import { describe, expect, it } from "vitest";
import { appVersions, latestVersion, olderVersions } from "@/data/versions";
import { navItems, siteConfig, socialLinks } from "@/data/site";

describe("SO PLAYER version data", () => {
  it("marks exactly one version as latest and puts it first", () => {
    expect(appVersions[0]?.isLatest).toBe(true);
    expect(appVersions.filter((v) => v.isLatest)).toHaveLength(1);
    expect(latestVersion.version).toBe("1.0.0");
  });

  it("every version has a number, release date and file size", () => {
    for (const v of appVersions) {
      expect(v.version).toMatch(/^\d+\.\d+\.\d+$/);
      expect(v.releaseDate.length).toBeGreaterThan(3);
      expect(v.fileSize).toMatch(/\d+ MB$/);
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
