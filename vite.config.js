import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginChecker from "vite-plugin-checker";
export default defineConfig({
  plugins: [react()],
  plugins: [pluginChecker({ typescript: true })],
});

import pluginChecker from "vite-plugin-checker";
