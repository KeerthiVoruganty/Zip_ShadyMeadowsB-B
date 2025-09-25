import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";

const { When, Then } = createBdd(test);

When("user fills booking form", async function ({ roomsPage }) {
  console.log("Filling booking form");
  await roomsPage.fillBookingForm();
});

When("user fills booking form for error", async function ({ roomsPage }) {
  console.log("Filling booking form to test error");
  await roomsPage.fillBookingFormTest();
});

When("user clicks on reserve now", async function ({ roomsPage }) {
  console.log("Reserving the room");
  await roomsPage.clickReserveNow();
});

Then(
  "user verifies success message for {string}",
  async function ({ roomsPage }, roomName: string) {
    await roomsPage.verifySuccessMessage(roomName);
  },
);

Then("user verifies error message", async function ({ roomsPage }) {
  await roomsPage.verifyErrorMessage();
});
