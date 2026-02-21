import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Add checkout page specific methods here
}
