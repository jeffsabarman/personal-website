import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "node:url";
// import icon from "astro-icon";
import react from "@astrojs/react";
// import vercel from "@astrojs/vercel/serverless";

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
  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
    },
  },
  // output: "server",
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true,
  //   },
  //   maxDuration: 8,
  // })
});