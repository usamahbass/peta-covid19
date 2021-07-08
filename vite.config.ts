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
        srcDir: "src",
        filename: "sw.ts",
        base: "/",
        strategies: "injectManifest",
        includeAssets: ["/favicon.svg"],
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
      }),
    ],
    server: {
      proxy: {
        "/api": {
          target:
            process.env.NODE_ENV === "production"
              ? process.env.VITE_APP_CORONA
              : process.env.VITE_APP_CORONA,
          changeOrigin: true,
        },
        "/covid19": {
          target:
            process.env.NODE_ENV === "production"
              ? process.env.VITE_APP_DEKONTAMINASI
              : process.env.VITE_APP_DEKONTAMINASI,
          changeOrigin: true,
        },
      },
    },
  });
};
