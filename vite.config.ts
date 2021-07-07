import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [reactRefresh(), tsconfigPaths()],
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_APP_CORONA,
          changeOrigin: true,
        },
        "/dekontaminasi": {
          target: process.env.VITE_APP_DEKONTAMINASI,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dekontaminasi/, '')
        },
      },
    },
  });
};
