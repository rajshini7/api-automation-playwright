import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  retries: process.env.CI ? 1 : 0,
  workers: 1,

  globalSetup: "./global-setup.cjs",

  webServer: {
    command: "npm run server",
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },

  reporter: [
    ["list"],
    ["html", { open: "never" }]
  ],

  use: {
    baseURL: "http://localhost:3000",
  },
});
