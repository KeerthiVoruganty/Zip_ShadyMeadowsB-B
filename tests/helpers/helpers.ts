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
    const now = new Date();
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + days);
  
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
  
    return `${dd}/${mm}/${yyyy}`;
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
