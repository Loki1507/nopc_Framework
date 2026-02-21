import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Add product page specific methods here
}
