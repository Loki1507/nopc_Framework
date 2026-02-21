import { Page } from '@playwright/test';

export class WaitUtils {
  static async waitForElement(page: Page, selector: string, timeout: number = 5000) {
    await page.waitForSelector(selector, { timeout });
  }

  static async waitForNavigation(page: Page, timeout: number = 5000) {
    await page.waitForNavigation({ timeout });
  }

  static async waitForFunction(page: Page, fn: () => boolean, timeout: number = 5000) {
    await page.waitForFunction(fn, { timeout });
  }

  static async waitForElementToBeVisible(page: Page, selector: string, timeout: number = 5000) {
    await page.locator(selector).waitFor({ state: 'visible', timeout });
  }
}
