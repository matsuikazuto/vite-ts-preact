import { defineConfig } from "vite";
import preactRefresh from "@prefresh/vite";

export default defineConfig({
  root: "./",
  plugins: [preactRefresh()],
  esbuild: {
    jsxFactory: "h",
  },
});
