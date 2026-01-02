import { APIRequestContext, APIResponse } from "@playwright/test";

export class Api {
  constructor(private request: APIRequestContext) {}

  private async log(method: string, url: string, response: APIResponse) {
    if (response.status() >= 200 && response.status() < 300) {
      console.log(`✓ ${method} ${url}`);
    }
  }

  async get(url: string, headers = {}) {
    const res = await this.request.get(url, { headers });
    await this.log("GET", url, res);
    return res;
  }

  async post(url: string, data: any, headers = {}) {
    const res = await this.request.post(url, { data, headers });
    await this.log("POST", url, res);
    return res;
  }

  async put(url: string, data: any, headers = {}) {
    const res = await this.request.put(url, { data, headers });
    await this.log("PUT", url, res);
    return res;
  }

  async patch(url: string, data: any, headers = {}) {
    const res = await this.request.patch(url, { data, headers });
    await this.log("PATCH", url, res);
    return res;
  }

  async delete(url: string, headers = {}) {
    const res = await this.request.delete(url, { headers });
    await this.log("DELETE", url, res);
    return res;
  }
}
