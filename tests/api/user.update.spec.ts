import { test, expect } from "@playwright/test";
import { Api } from "../../utils/api";
import { getToken } from "../../utils/auth";

test("PUT /user/profile replaces profile", async ({ request }) => {
  const api = new Api(request);
  const token = getToken();

  const res = await api.put(
    "http://localhost:3000/user/profile",
    {
      username: "user1",
      role: "user",
      email: "new@test.com",
    },
    {
      Authorization: `Bearer ${token}`,
    }
  );

  expect(res.status()).toBe(200);
});

test("PATCH /user/profile updates partial data", async ({ request }) => {
  const api = new Api(request);
  const token = getToken();

  const res = await api.patch(
    "http://localhost:3000/user/profile",
    { role: "admin" },
    {
      Authorization: `Bearer ${token}`,
    }
  );

  expect(res.status()).toBe(200);
});
