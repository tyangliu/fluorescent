import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name:
    env.mode === 'staging'
      ? '[DEV] fluorescent'
      : 'fluorescent',
  version: "0.0.1",
  icons: {
    "16": "src/assets/icon-16.png",
    "32": "src/assets/icon-32.png",
    "48": "src/assets/icon-48.png",
    "128": "src/assets/icon-128.png",
  },
  action: {},
  background: {
    service_worker: "src/chrome-extension/background/index.ts",
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/chrome-extension/content/index.tsx"],
    },
  ],
  options_ui: {
    page: "src/chrome-extension/options/index.html",
    open_in_tab: true,
  },
  options_page: "src/chrome-extension/options/index.html",
}));
