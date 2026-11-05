import { createFileRoute } from "@tanstack/react-router";
import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

/**
 * DEV-ONLY helper: copies the user's uploaded real app screenshots from the
 * sandbox upload mount into src/assets. Runs only where /mnt/user-uploads
 * exists (this sandbox). Neutralized right after its single use.
 */
const MAP: Array<[prefix: string, dest: string]> = [
  ["Screenshot_2026-11-05-10-25-56-28", "screen-home.jpg"],
  ["Screenshot_2026-11-05-10-26-35-99", "screen-shorts.jpg"],
  ["Screenshot_2026-11-05-10-26-52-63", "screen-music.jpg"],
  ["Screenshot_2026-11-05-10-26-59-48", "screen-subscriptions.jpg"],
  ["Screenshot_2026-11-05-10-27-10-77", "screen-library.jpg"],
  ["Screenshot_2026-11-05-10-27-32-62", "screen-video-player.jpg"],
  ["Screenshot_2026-11-05-10-28-29-60", "screen-settings.jpg"],
];

export const Route = createFileRoute("/api/public/dev-copy-uploads")({
  server: {
    handlers: {
      GET: async () => {
        const uploadsDir = "/mnt/user-uploads";
        const outDir = path.join(process.cwd(), "src", "assets");
        const results: Record<string, string> = {};
        try {
          const files = await readdir(uploadsDir);
          await mkdir(outDir, { recursive: true });
          for (const [prefix, dest] of MAP) {
            const match = files.find((f) => f.startsWith(prefix));
            if (!match) {
              results[dest] = "missing";
              continue;
            }
            await copyFile(path.join(uploadsDir, match), path.join(outDir, dest));
            results[dest] = "copied";
          }
          return Response.json({ ok: true, results, cwd: process.cwd() });
        } catch (err) {
          return Response.json(
            { ok: false, error: String(err), cwd: process.cwd() },
            { status: 500 },
          );
        }
      },
    },
  },
});
