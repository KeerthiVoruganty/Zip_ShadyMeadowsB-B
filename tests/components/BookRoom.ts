import { expect, type Locator, type Page } from "@playwright/test";
import { helper } from "../helpers/helpers";
import { testContext } from "../helpers/testContext";

export class BookRoom {
  private reserveNowButton: Locator;
  private firstNameTextBox: Locator;
  private lastNameTextBox: Locator;
  private emailTextBox: Locator;
  private phoneTextBox: Locator;
  private bookingConfirmationText: Locator;
  private errorMessage: Locator;

  constructor(public readonly page: Page) {
    this.reserveNowButton = this.page.getByRole("button", {
      name: "Reserve Now",
    });
    this.firstNameTextBox = this.page.getByRole("textbox", {
      name: "Firstname",
    });
    this.lastNameTextBox = this.page.getByRole("textbox", { name: "Lastname" });
    this.emailTextBox = this.page.getByRole("textbox", { name: "Email" });
    this.phoneTextBox = this.page.getByRole("textbox", { name: "Phone" });
    this.bookingConfirmationText = this.page.getByText(
      "Booking ConfirmedYour booking",
    );
    this.errorMessage = this.page
      .getByRole("alert")
      .filter({ hasText: "size must be between 3 and" });
  }

  public async clickReserveNow() {
    await this.reserveNowButton.click();
  }

  public async fillBookingForm() {
    const firstName = await helper.getRandomString(5);
    const lastName = await helper.getRandomString(6);
    const email = firstName + lastName + "@test.com";
    await this.firstNameTextBox.fill(firstName);
    await this.lastNameTextBox.fill(lastName);
    await this.emailTextBox.fill(email);
    await this.phoneTextBox.fill(await helper.getRandomMobile());
  }

  public async fillBookingFormTest() {
    const firstName = await helper.getRandomString(1);
    const lastName = await helper.getRandomString(6);
    const email = firstName + lastName + "@test.com";
    await this.firstNameTextBox.fill(firstName);
    await this.lastNameTextBox.fill(lastName);
    await this.emailTextBox.fill(email);
    await this.phoneTextBox.fill(await helper.getRandomMobile());
  }

  public async verifySuccessMessage(roomName: string) {
    const bookingMessage = await this.bookingConfirmationText.textContent();
    const bookingDates =
      (await testContext.getCheckInDate(roomName)) +
      " - " +
      (await testContext.getCheckOutDate(roomName));
    expect(bookingMessage).toContain(bookingDates);
  }

  public async verifyNameError() {
    await this.page.waitForTimeout(1000);
    await expect(this.errorMessage).toBeVisible();
  }
}
