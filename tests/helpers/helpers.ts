class Helper {
  async getCurrentDateFormatted(): Promise<string> {
    const today = new Date();
    let day = today.getDate().toString();
    let month = (today.getMonth() + 1).toString();
    const year = today.getFullYear();

    if (today.getDate() < 10) {
      day = "0" + day;
    }
    if (today.getMonth() < 9) {
      month = "0" + month;
    }

    return `${day}/${month}/${year}`;
  }

  async getNextDaysDateFormatted(days: number): Promise<string> {
    const today = new Date();
    let day = (today.getDate() + days).toString();
    let month = (today.getMonth() + 1).toString();
    let year = today.getFullYear();
    if (today.getDate() < 10) {
      day = "0" + day;
    }
    if (today.getMonth() < 9) {
      month = "0" + month;
    }
    if (parseInt(month) > 12) {
      month = "0" + (parseInt(month) - 12).toString();
      year = today.getFullYear() + 1;
    }

    return `${day}/${month}/${year}`;
  }

  async getRandomString(length: number) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  async getRandomMobile(): Promise<string> {
    const randomEight = Math.floor(10000000 + Math.random() * 90000000);
    return `+6104${randomEight}`;
  }
}
export const helper = new Helper();
