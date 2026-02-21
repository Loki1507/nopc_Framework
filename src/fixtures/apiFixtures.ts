import { test as base, APIRequestContext } from '@playwright/test';

type APIFixtures = {
  apiContext: APIRequestContext;
};

export const test = base.extend<APIFixtures>({
  // Add API fixtures here
});

export { expect } from '@playwright/test';
