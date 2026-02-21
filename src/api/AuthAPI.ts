import { APIRequestContext } from '@playwright/test';
import { BaseAPI } from './base/BaseAPI';

export class AuthAPI extends BaseAPI {
  constructor(apiContext: APIRequestContext) {
    super(apiContext);
  }

  // Add auth API specific methods here
}
