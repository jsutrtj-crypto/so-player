import { describe, expect, it } from "vitest";
import { downloaderSites, platformDownloads } from "@/data/download-links";

describe("owner-supplied downloader destinations", () => {
  it("keeps both website links exactly as supplied", () => {
    expect(downloaderSites.map((site) => site.url)).toEqual([
      "https://vidnexo-downloader.shop", "https://dl.vidnexo-downloader.shop/",
    ]);
  });
  it.each([
    ["TikTok", "https://dl.vidnexo-downloader.shop/platform/tiktok"],
    ["Instagram", "https://dl.vidnexo-downloader.shop/platform/instagram"],
    ["Facebook", "https://dl.vidnexo-downloader.shop/platform/facebook"],
    ["YouTube", "https://dl.vidnexo-downloader.shop/platform/youtube"],
  ])("preserves the exact %s destination", (name, url) => {
    expect(platformDownloads.find((platform) => platform.name === name)?.url).toBe(url);
  });
});