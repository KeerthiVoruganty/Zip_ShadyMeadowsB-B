import { defineConfig } from "@playwright/test";
import { defineBddProject } from "playwright-bdd";
import * as path from "path";

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

export default defineConfig({
  fullyParallel: true,
  workers: 1,
  reporter: [
    ["html", { outputFolder: path.join("playwright-report", timestamp) }],
  ],
  timeout: 70 * 1000,
  expect: { timeout: 1 * 70 * 1000 },
  use: {
    baseURL: "https://automationintesting.online",
    trace: "on-first-retry",
    headless: true,
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      ...defineBddProject({
        name: "BDD Tests",
        features: "**/tests/features/*.feature",
        steps: "**/tests/steps/*.ts",
        importTestFrom: "tests/fixtures/fixtures",
        disableWarnings: { importTestFrom: true },
      }),
    },
  ],
});
