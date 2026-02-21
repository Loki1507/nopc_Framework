import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Add login page specific methods here
}
