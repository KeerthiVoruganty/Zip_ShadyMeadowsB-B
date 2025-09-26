import { expect, type Locator, type Page } from "@playwright/test";
import { helper } from "../helpers/helpers";
import { testContext } from "../helpers/testContext";

export class Rooms {
  private bookNowButton: Locator;
  private checkInDateTextBox: Locator;
  private checkOutDateTextBox: Locator;
  private checkAvailabilityButton: Locator;
  private bookSingleRoomButton: Locator;
  private bookDoubleRoomButton: Locator;
  private bookSuiteRoomButton: Locator;

  constructor(public readonly page: Page) {
    this.bookNowButton = this.page.getByRole("link", {
      name: "Book Now",
      exact: true,
    });
    this.checkInDateTextBox = this.page
      .locator("div")
      .filter({ hasText: /^Check In$/ })
      .getByRole("textbox");
    this.checkOutDateTextBox = this.page
      .locator("div")
      .filter({ hasText: /^Check Out$/ })
      .getByRole("textbox");
    this.checkAvailabilityButton = this.page.getByRole("button", {
      name: "Check Availability",
    });
    this.bookSingleRoomButton = this.page
      .locator("div")
      .filter({ hasText: /^£100 per nightBook now$/ })
      .getByRole("link");
    this.bookDoubleRoomButton = this.page
      .locator("div")
      .filter({ hasText: /^£150 per nightBook now$/ })
      .getByRole("link");
    this.bookSuiteRoomButton = this.page
      .locator("div")
      .filter({ hasText: /^£225 per nightBook now$/ })
      .getByRole("link");
  }

  public async launchHomePage() {
    await this.page.goto("https://automationintesting.online");
  }

  public async navigateToRooms() {
    await this.page.goto("https://automationintesting.online/#rooms");
  }

  public async getRoom(roomName: string) {
    return this.page.locator("#rooms div").filter({ hasText: roomName }).nth(2);
  }

  public async clickBookNow() {
    await this.bookNowButton.click();
  }

  public async enterDates(noOfDays: number, roomName: string) {
    const checkInDate = await helper.getCurrentDateFormatted();
    const checkOutDate = await helper.getNextDaysDateFormatted(noOfDays);
    await this.checkInDateTextBox.fill(checkInDate);
    await this.checkOutDateTextBox.fill(checkOutDate);
    await this.page.keyboard.press("Tab");
    testContext.setCheckInDate(roomName, checkInDate);
    testContext.setCheckOutDate(roomName, checkOutDate);
  }

  public async checkAvailability() {
    await this.checkAvailabilityButton.click();
  }

  public async verifyTVIcon(roomName: string) {
    switch (roomName) {
      case "Single": {
        await expect(
          (await this.getRoom(roomName)).getByText("TV").first(),
        ).toBeVisible();
        break;
      }
      case "Double": {
        await expect(
          (await this.getRoom(roomName)).getByText("TV").first(),
        ).toBeVisible();
        break;
      }
      case "Suite": {
        await expect(
          (await this.getRoom(roomName)).getByText("TV").first(),
        ).toBeHidden();
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
  }

  public async bookRoom(roomName: string) {
    switch (roomName) {
      case "Single": {
        console.log("Clicking Book Now");
        await this.bookSingleRoomButton.click();
        break;
      }
      case "Double": {
        console.log("Clicking Book Now");
        await this.bookDoubleRoomButton.click();
        break;
      }
      case "Suite": {
        console.log("Clicking Book Now");
        await this.bookSuiteRoomButton.click();
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
  }
}
