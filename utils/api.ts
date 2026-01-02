import { APIRequestContext } from "@playwright/test";

export class Api {
  constructor(private request: APIRequestContext) {}

  get(url: string, headers = {}) {
    return this.request.get(url, { headers });
  }

  post(url: string, data: any, headers = {}) {
    return this.request.post(url, { data, headers });
  }

  put(url: string, data: any, headers = {}) {
    return this.request.put(url, { data, headers });
  }

  patch(url: string, data: any, headers = {}) {
    return this.request.patch(url, { data, headers });
  }
}
