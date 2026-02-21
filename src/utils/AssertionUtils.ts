import { Page, expect } from '@playwright/test';

export class AssertionUtils {
  static async assertPageTitle(page: Page, expectedTitle: string) {
    await expect(page).toHaveTitle(expectedTitle);
  }

  static async assertUrlContains(page: Page, expectedUrl: string) {
    await expect(page).toHaveURL(new RegExp(expectedUrl));
  }

  static async assertElementVisible(page: Page, selector: string) {
    await expect(page.locator(selector)).toBeVisible();
  }

  static async assertElementText(page: Page, selector: string, expectedText: string) {
    await expect(page.locator(selector)).toContainText(expectedText);
  }

  static async assertElementCount(page: Page, selector: string, expectedCount: number) {
    await expect(page.locator(selector)).toHaveCount(expectedCount);
  }
}
