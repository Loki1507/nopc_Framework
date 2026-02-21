import { Page } from '@playwright/test';

export class BasePage {
  constructor(readonly page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async waitForSelector(selector: string, timeout: number = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async fill(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async getText(selector: string): Promise<string> {
    return await this.page.textContent(selector) || '';
  }
}
