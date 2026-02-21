import { APIRequestContext } from '@playwright/test';
import { BaseAPI } from './base/BaseAPI';

export class ProductAPI extends BaseAPI {
  constructor(apiContext: APIRequestContext) {
    super(apiContext);
  }

  // Add product API specific methods here
}
