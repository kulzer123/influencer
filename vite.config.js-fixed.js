import react from "@vitejs/plugin-react?json";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(XMLHttpRequestUpload)],
});
