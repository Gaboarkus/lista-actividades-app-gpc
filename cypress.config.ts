import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: true,
    //defaultCommandTimeout: 10000,
    baseUrl: "http://localhost:4200",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
