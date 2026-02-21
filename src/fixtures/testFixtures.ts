import { test as base, Page } from '@playwright/test';

type TestFixtures = {
  page: Page;
};

export const test = base.extend<TestFixtures>({
  // Add custom fixtures here
});

export { expect } from '@playwright/test';
