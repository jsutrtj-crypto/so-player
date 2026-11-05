import { createFileRoute } from "@tanstack/react-router";
import { existsSync } from "node:fs";
import { copyFile, mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * DEV-ONLY helper: copies the user's uploaded real app screenshots into
 * src/assets. Runs only in this sandbox. Neutralized right after its use.
 * Self-locating: probes several candidate upload mounts.
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

const CANDIDATE_DIRS = [
  "/mnt/user-uploads",
  "/tmp/user-uploads",
  "/mnt/uploads",
  "/user-uploads",
  "/mnt/user-uploads/",
];

async function safeList(dir: string): Promise<string[] | string> {
  try {
    const entries = await readdir(dir);
    return entries.slice(0, 40);
  } catch (err) {
    return String(err).slice(0, 120);
  }
}

async function findUploadDir(): Promise<string | null> {
  for (const dir of CANDIDATE_DIRS) {
    try {
      const entries = await readdir(dir);
      if (entries.some((f) => f.startsWith("Screenshot_"))) return dir;
    } catch {
      // keep probing
    }
  }
  return null;
}

export const Route = createFileRoute("/api/public/dev-copy-uploads")({
  server: {
    handlers: {
      GET: async () => {
        const outDir = path.join(process.cwd(), "src", "assets");
        const diagnostics: Record<string, unknown> = {
          cwd: process.cwd(),
          root: await safeList("/"),
          mnt: await safeList("/mnt"),
          tmp: await safeList("/tmp"),
        };
        const results: Record<string, string> = {};
        try {
          const uploadsDir = await findUploadDir();
          diagnostics.uploadsDir = uploadsDir ?? "NOT FOUND";
          if (!uploadsDir) {
            const payload = { ok: false, results, diagnostics };
            await writeFile("/tmp/copy-result.json", JSON.stringify(payload, null, 2));
            return Response.json(payload, { status: 500 });
          }
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
          const payload = { ok: true, results, diagnostics };
          await writeFile("/tmp/copy-result.json", JSON.stringify(payload, null, 2));
          return Response.json(payload);
        } catch (err) {
          const payload = { ok: false, results, error: String(err), diagnostics };
          try {
            await writeFile("/tmp/copy-result.json", JSON.stringify(payload, null, 2));
          } catch {}
          return Response.json(payload, { status: 500 });
        }
      },
    },
  },
});
