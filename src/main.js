import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "./style.css";
import App from "./App.vue";
import { messages } from "./locales/index.js";
import { watch } from "vue";

// Restore the previously selected language
const savedLocale = localStorage.getItem("medlicense-locale");

const initialLocale = ["ar", "en"].includes(savedLocale) ? savedLocale : "ar";

// Initialize Vue I18n
const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: "en",
  messages,
});

// Initialize Vuetify and register its components
const vuetify = createVuetify({
  components,
  directives,
  rtl: {
    ar: true,
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },

  theme: {
    defaultTheme: "medlicense",

    themes: {
      medlicense: {
        dark: false,

        colors: {
          primary: "#0e4c83",
          secondary: "#159a9c",
          background: "#f7f9fc",
          surface: "#ffffff",
          success: "#18794e",
          error: "#b42318",
        },
      },
    },
  },
});

// After creating `i18n` and `vuetify`:
watch(
  () => i18n.global.locale.value,
  (value) => {
    vuetify.locale.isRtl.value = value === "ar";
  },
  { immediate: true },
);

// Mount the application after registering its plugins
createApp(App).use(i18n).use(vuetify).mount("#app");
