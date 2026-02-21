import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Add cart page specific methods here
}
