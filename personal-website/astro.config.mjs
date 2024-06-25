import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    robotsTxt(),
    tailwind(),
    icon({
      include: {
        mdi: ["*"],
        mdi: ["account", "copyright"],
        ion: ["*"],
        ion: ["contrast"],
        weui: ["arrow-outlined", "arrow-filled"],
      },
    }),
    react(),
  ],
});
