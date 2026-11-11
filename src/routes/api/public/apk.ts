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
        const total = version.fileSizeBytes;
        if (!total || total <= 0) return new Response("APK size has not been verified.", { status: 503 });
        // Bounded ranges avoid holding an entire large APK in gateway memory.
        const chunkSize = 4 * 1024 * 1024;
        const abort = new AbortController();
        request.signal.addEventListener("abort", () => abort.abort(), { once: true });
        const readChunk = async (start: number) => {
          const end = Math.min(start + chunkSize - 1, total - 1);
          const upstream = await fetch(`https://connector-gateway.lovable.dev/google_drive/drive/v3/files/${input.data}?alt=media`, {
            headers: { Authorization: `Bearer ${key}`, "X-Connection-Api-Key": driveKey ?? "", Range: `bytes=${start}-${end}` },
            signal: abort.signal,
          });
          if (!upstream.ok) {
            const body = await upstream.text();
            console.error(`APK provider failed [${upstream.status}]: ${body}`);
            throw new Error(`APK provider failed [${upstream.status}]: ${body}`);
          }
          if (upstream.status !== 206 || upstream.headers.get("content-range") !== `bytes ${start}-${end}/${total}`) {
            await upstream.body?.cancel();
            throw new Error("APK provider returned an unexpected file range.");
          }
          const bytes = new Uint8Array(await upstream.arrayBuffer());
          if (bytes.byteLength !== end - start + 1) throw new Error("APK file range was incomplete.");
          return bytes;
        };
        const first = await readChunk(0);
        if (first[0] !== 80 || first[1] !== 75 || first[2] !== 3 || first[3] !== 4) throw new Error("APK provider returned an invalid APK archive.");
        let offset = first.byteLength;
        const stream = new ReadableStream<Uint8Array>({
          start(controller) { controller.enqueue(first); },
          async pull(controller) {
            if (offset >= total) { controller.close(); return; }
            try {
              const chunk = await readChunk(offset);
              offset += chunk.byteLength;
              controller.enqueue(chunk);
            } catch (error) { controller.error(error); abort.abort(); }
          },
          cancel() { abort.abort(); },
        });
        const filename = version.isLatest ? `SO-PLAYER-${version.version}.apk` : "SO-PLAYER-previous.apk";
        const headers = new Headers({ "Content-Type": "application/vnd.android.package-archive", "Content-Disposition": `attachment; filename="${filename}"`, "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
        headers.set("Content-Length", String(total));
        return new Response(stream, { headers });
      } catch (error) {
        const details = error instanceof Error ? error.message : "APK download could not start.";
        return Response.json({ error: "APK download could not start. Please try again later.", details }, { status: 502 });
      }
    },
  } },
});