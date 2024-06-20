import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    robotsTxt(),
    tailwind(),
    icon({
      include: {
        mdi: ["*"],
        mdi: ["account"],
        ion: ["*"],
        ion: ["contrast"],
      },
    }),
  ],
});
