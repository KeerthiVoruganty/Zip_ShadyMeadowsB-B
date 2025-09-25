import * as fs from "fs";
import * as fsPromises from "fs/promises";
import * as path from "path";
import lockfile from "proper-lockfile";

const CONTEXT_FILE = path.resolve(__dirname, "../testContext.json");

class TestContext {
  /** Load whatever’s on disk right now, or `{}` if missing/corrupt */
  private async loadData(): Promise<Record<string, any>> {
    try {
      if (fs.existsSync(CONTEXT_FILE)) {
        const content = await fsPromises.readFile(CONTEXT_FILE, "utf-8");
        return JSON.parse(content);
      }
    } catch {
      // ignore parse errors
    }
    return {};
  }

  /** Atomically write out the full merged context */
  private async saveData(data: Record<string, any>) {
    await fsPromises.writeFile(
      CONTEXT_FILE,
      JSON.stringify(data, null, 2),
      "utf-8",
    );
  }

  async setCheckInDate(roomName: string, checkInDate: string) {
    let release: (() => Promise<void>) | undefined;
    try {
      release = await lockfile.lock(CONTEXT_FILE, { retries: 5, stale: 5000 });
      const normalized = toYmd(checkInDate);
      const data = await this.loadData();
      data[`${roomName}::checkIn`] = normalized;
      await this.saveData(data);
    } finally {
      if (release) await release();
    }
  }

  async setCheckOutDate(roomName: string, checkOutDate: string) {
    let release: (() => Promise<void>) | undefined;
    try {
      release = await lockfile.lock(CONTEXT_FILE, { retries: 5, stale: 5000 });
      const normalized = toYmd(checkOutDate);
      const data = await this.loadData();
      data[`${roomName}::checkOut`] = normalized;
      await this.saveData(data);
    } finally {
      if (release) await release();
    }
  }

  async getCheckInDate(roomName: string): Promise<string | undefined> {
    const data = await this.loadData();
    return data[`${roomName}::checkIn`];
  }

  async getCheckOutDate(roomName: string): Promise<string | undefined> {
    const data = await this.loadData();
    return data[`${roomName}::checkOut`];
  }
}

function toYmd(input: string): string {
  const s = input.trim();

  // already ISO (yyyy-mm-dd)
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;

  // dd/mm/yyyy or dd-mm-yyyy → yyyy-mm-dd
  const m = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/.exec(s);
  if (!m)
    throw new Error(`Invalid date format: "${input}" (expected dd/mm/yyyy)`);
  const [, dd, mm, yyyy] = m;

  return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
}

export const testContext = new TestContext();
