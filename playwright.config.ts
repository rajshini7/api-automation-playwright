import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  // CI-safe defaults
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,

  reporter: [
    ["list"],
    ["html", { open: "never" }]
  ],

  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000"
  }
});
