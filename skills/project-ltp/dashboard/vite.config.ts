import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base so the build can be hosted under any path (e.g. /dashboard/
  // on the published site) as well as at the root via serve_dashboard.py.
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    // Emit a single self-contained JS bundle (no lazy chunks). The published
    // host (Flowershow) 302-redirects assets to a cross-origin R2 bucket, and
    // Vite's dynamic-import preload (crossorigin modulepreload) fails there,
    // blanking any lazy-loaded view. One bundle loads via the entry <script>,
    // which follows the redirect fine.
    rollupOptions: {
      output: { inlineDynamicImports: true },
    },
  },
});
