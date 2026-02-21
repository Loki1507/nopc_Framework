import { APIRequestContext } from '@playwright/test';
import { BaseAPI } from './base/BaseAPI';

export class OrderAPI extends BaseAPI {
  constructor(apiContext: APIRequestContext) {
    super(apiContext);
  }

  // Add order API specific methods here
}
