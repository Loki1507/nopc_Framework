import { APIRequestContext } from '@playwright/test';

export class BaseAPI {
  constructor(readonly apiContext: APIRequestContext) {}

  async get(endpoint: string) {
    return await this.apiContext.get(endpoint);
  }

  async post(endpoint: string, data: any) {
    return await this.apiContext.post(endpoint, { data });
  }

  async put(endpoint: string, data: any) {
    return await this.apiContext.put(endpoint, { data });
  }

  async delete(endpoint: string) {
    return await this.apiContext.delete(endpoint);
  }
}
