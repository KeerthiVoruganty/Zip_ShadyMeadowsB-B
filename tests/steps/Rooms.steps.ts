import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";

const { Given, When, Then } = createBdd(test);

Given("user launches the B&B page", async function ({ roomsPage }) {
  console.log("Opening B&B Page");
  await roomsPage.launchHomePage();
});

When("user navigates to Our Rooms", async function ({ roomsPage }) {
  console.log("Navigating to Our Rooms");
  await roomsPage.navigateToRooms();
});

Then(
  "user verifies TV Icon for room {string}",
  async function ({ roomsPage }, roomName: string) {
    console.log("Verifying TV Icon for" + roomName);
    await roomsPage.verifyTVIcon(roomName);
  },
);

When("user clicks Book Now", async function ({ roomsPage }) {
  console.log("Clicking on Book Now");
  await roomsPage.clickBookNow();
});

When(
  "user enters check in and check out date for {string} and {string}",
  async function ({ roomsPage }, noOfDays: string, roomName: string) {
    console.log("Entering Dates for Booking");
    await roomsPage.enterDates(parseInt(noOfDays), roomName);
  },
);

Then("user checks Availability", async function ({ roomsPage }) {
  console.log("Checking Availability");
  await roomsPage.checkAvailability();
});

When(
  "user books {string} room",
  async function ({ roomsPage }, roomName: string) {
    console.log("Booking room");
    await roomsPage.bookRooms(roomName);
  },
);
