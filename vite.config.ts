import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      reactRefresh(),
      tsconfigPaths(),
      VitePWA({
        mode: "development",
        base: "/",
        includeAssets: ["favicon.svg"], // <== don't add slash, for testing
        manifest: {
          name: "Peta Covid19",
          short_name: "petacovid19",
          theme_color: "#09994E",
          background_color: "#09994E",
          display: "standalone",
          orientation: "any",
          scope: "/",
          start_url: "/",
          icons: [
            {
              src: "/src/assets/icons/icon-72x72.png",
              sizes: "72x72",
              type: "image/png",
            },
            {
              src: "/src/assets/icons/icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
            },
            {
              src: "/src/assets/icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png",
            },
            {
              src: "/src/assets/icons/icon-144x144.png",
              sizes: "144x144",
              type: "image/png",
            },
            {
              src: "/src/assets/icons/icon-152x152.png",
              sizes: "152x152",
              type: "image/png",
            },
            {
              src: "/src/assets/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/src/assets/icons/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
            },
            {
              src: "/src/assets/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
        workbox: {
          globDirectory: "/",
          swDest: "sw.ts",
          globPatterns: ["**/*.{html,json,js,css,ts}"],
          runtimeCaching: [
            {
              // Match any request that ends with .png, .jpg, .jpeg or .svg.
              urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

              // Apply a cache-first strategy.
              handler: "CacheFirst",

              options: {
                // Use a custom cache name.
                cacheName: "images",

                // Only cache 10 images.
                expiration: {
                  maxEntries: 10,
                },
              },
            },
          ],
        },
      }),
    ],
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_APP_CORONA,
          changeOrigin: true,
        },
        "/dekontaminasi": {
          target: process.env.VITE_APP_DEKONTAMINASI,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dekontaminasi/, ""),
        },
      },
    },
  });
};
