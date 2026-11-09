import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { appVersions, getDriveFileId } from "@/data/versions";

export const Route = createFileRoute("/api/public/apk")({
  staticData: { sitemap: false },
  server: { handlers: {
    GET: async ({ request }) => {
      const input = z.string().regex(/^[A-Za-z0-9_-]{10,100}$/).safeParse(new URL(request.url).searchParams.get("file"));
      if (!input.success) return new Response("Invalid APK selection", { status: 400 });
      const version = appVersions.find((v) => getDriveFileId(v) === input.data);
      if (!version) return new Response("APK not found", { status: 404 });
      const key = process.env['LOVABLE_API_KEY'];
      const driveKey = process.env['GOOGLE_DRIVE_API_KEY'];
      if (!key || !driveKey) return new Response("APK downloads are temporarily unavailable. Please try again later.", { status: 503 });
      try {
        const upstream = await fetch(`https://connector-gateway.lovable.dev/google_drive/drive/v3/files/${input.data}?alt=media`, {
          headers: { Authorization: `Bearer ${key}`, "X-Connection-Api-Key": driveKey }, signal: request.signal,
        });
        if (!upstream.ok) {
          const body = await upstream.text();
          console.error(`APK provider failed [${upstream.status}]: ${body}`);
          return Response.json({ error: "APK download failed", providerStatus: upstream.status, details: body }, { status: 502 });
        }
        if (!upstream.body || upstream.headers.get("content-type")?.includes("text/html")) {
          return new Response("APK provider returned an invalid file. Please try again later.", { status: 502 });
        }
        const filename = version.isLatest ? `SO-PLAYER-${version.version}.apk` : "SO-PLAYER-previous.apk";
        const headers = new Headers({ "Content-Type": "application/vnd.android.package-archive", "Content-Disposition": `attachment; filename="${filename}"`, "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
        const length = upstream.headers.get("content-length");
        if (length) headers.set("Content-Length", length);
        return new Response(upstream.body, { headers });
      } catch {
        return new Response("APK download could not start. Please try again later.", { status: 502 });
      }
    },
  } },
});