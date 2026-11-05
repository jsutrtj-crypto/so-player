import { createFileRoute } from "@tanstack/react-router";

// Neutralized: was a one-time dev helper. See the public/ variant.
export const Route = createFileRoute("/api/dev-copy-uploads")({
  server: {
    handlers: {
      GET: async () => new Response("Gone", { status: 410 }),
    },
  },
});
