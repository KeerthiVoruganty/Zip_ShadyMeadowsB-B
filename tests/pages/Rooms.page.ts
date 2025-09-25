import { Page } from "@playwright/test";
import { Rooms } from "../components/Rooms";
import { BookRoom } from "../components/BookRoom";

export class RoomsPage {
  private readonly rooms: Rooms;
  private readonly bookRoom: BookRoom;

  constructor(public readonly page: Page) {
    this.rooms = new Rooms(page);
    this.bookRoom = new BookRoom(page);
  }
  public async launchHomePage() {
    await this.rooms.launchHomePage();
  }

  public async navigateToRooms() {
    await this.rooms.navigateToRooms();
  }

  public async verifyTVIcon(roomName: string) {
    await this.rooms.verifyTVIcon(roomName);
  }

  public async clickBookNow() {
    await this.rooms.clickBookNow();
  }

  public async enterDates(noOfDays: number, roomName: string) {
    await this.rooms.enterDates(noOfDays, roomName);
  }

  public async checkAvailability() {
    await this.rooms.checkAvailability();
  }

  public async bookRooms(roomName: string) {
    await this.rooms.bookRoom(roomName);
  }

  public async fillBookingForm() {
    await this.bookRoom.fillBookingForm();
  }

  public async fillBookingFormTest() {
    await this.bookRoom.fillBookingFormTest();
  }

  public async clickReserveNow() {
    await this.bookRoom.clickReserveNow();
  }

  public async verifySuccessMessage(roomName: string) {
    await this.bookRoom.verifySuccessMessage(roomName);
  }

  public async verifyErrorMessage() {
    await this.bookRoom.verifyNameError();
  }
}
