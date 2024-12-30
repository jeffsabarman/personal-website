import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";

// import icon from "astro-icon";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), robotsTxt(), tailwind()
  // icon({
  //   include: {
  //     mdi: ["*"],
  //     mdi: ["account"],
  //     ion: ["*"],
  //     ion: ["contrast"],
  //   },
  // }),
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  })
});