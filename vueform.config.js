// vueform.config.(js|ts)

import en from "@vueform/vueform/locales/en";
import tailwind from "@vueform/vueform/dist/tailwind";
import { defineConfig } from "@vueform/vueform";
import simple from "@vueform/builder/presets/simple";
import builder from "@vueform/builder/plugin";

export default defineConfig({
  preset: simple,
  theme: tailwind,
  locales: { en },
  locale: "en",
  apiKey: "qqym-sqca-dt5i-u4no-v4dz",
  plugins: [builder],
});
