import { test, expect } from "@playwright/test";
import { Api } from "../../utils/api";

test("POST /auth/login returns token", async ({ request }) => {
  const api = new Api(request);

  const res = await api.post("http://localhost:3000/auth/login", {
    username: "user1",
    password: "password123",
  });

  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.token).toBeTruthy();
});
