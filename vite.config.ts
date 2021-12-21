import { defineConfig } from "vite";

export default defineConfig({
  test: {
    exclude: ["**/ignored/**", "**/node_modules/**"],
    watch: false,
    root: "./src",
    // include: ["./src/**"],
  },
});
