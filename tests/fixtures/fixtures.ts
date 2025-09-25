import { test as base } from "playwright-bdd";
import { RoomsPage } from "../pages/Rooms.page";

// Declare the types of your fixtures.
type Fixtures = {
  roomsPage: RoomsPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
const test = base.extend<Fixtures>({
  roomsPage: async ({ page }, use) => {
    await use(new RoomsPage(page));
  },
});
export { expect } from "@playwright/test";
export { test };
