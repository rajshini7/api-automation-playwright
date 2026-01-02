import { test, expect } from "@playwright/test";

test("User API › Profile should return user data", async ({ request }) => {
  const login = await request.post("/auth/login", {
    data: {
      username: "user1",
      password: "password123"
    }
  });

  const { token } = await login.json();

  const response = await request.get("/user/profile", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.username).toBe("user1");
});
