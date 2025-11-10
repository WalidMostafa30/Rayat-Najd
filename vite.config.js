import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
	      manifest: false,
	      includeAssets: ["manifest.webmanifest", "logo-fav.png", "192.png", "512.png"],
	      devOptions: {
	        enabled: false,
	      },
      workbox: {
	        navigateFallback: "/index.html", 
        runtimeCaching: [
	          // Google Fonts stylesheets
	          {
	            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
	            handler: "StaleWhileRevalidate",
	            options: {
	              cacheName: "google-fonts-stylesheets",
	            },
	          },
	          // Google Fonts webfont files
	          {
	            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
	            handler: "CacheFirst",
	            options: {
	              cacheName: "google-fonts-webfonts",
	              cacheableResponse: { statuses: [0, 200] },
	              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
	            },
	          },
          {
	            urlPattern: /^https:\/\/.*\/api\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: { maxEntries: 20, maxAgeSeconds: 3600 },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
	              cacheName: "image-cache",
	              cacheableResponse: { statuses: [0, 200] },
	              expiration: { maxEntries: 50, maxAgeSeconds: 86400 },
            },
          },
        ],
      },
    }),
  ],
});
