import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/util/colors";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    display: {
      mobileBreakpoint: "md",
    },
    theme: {
      defaultTheme: "kairos",
      themes: {
        kairos: {
          dark: false,
          colors: {
            background: colors.shades.transparent,
            backgroundSecondary: "#F9F9F9",
            primary: "#065C5D",
            secondary: "#8475A0",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
