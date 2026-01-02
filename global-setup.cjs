const { request } = require("@playwright/test");

module.exports = async () => {
  const context = await request.newContext({
    baseURL: "http://localhost:3000",
  });

  const res = await context.post("/auth/login", {
    data: {
      username: "user1",
      password: "password123",
    },
  });

  if (res.status() !== 200) {
    const text = await res.text();
    console.error("Login response:", text);
    throw new Error("Global login failed");
  }

  const body = await res.json();
  process.env.API_TOKEN = body.token;
};
