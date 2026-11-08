import { createFileRoute } from "@tanstack/react-router";

// Neutralized: this was a one-time dev helper that copied the user's uploaded
// screenshots into src/assets. It has served its purpose.
export const Route = createFileRoute("/api/public/dev-copy-uploads")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => new Response("Gone", { status: 410 }),
    },
  },
});
