const express = require("express");

const app = express();
app.use(express.json());

const USERS = {
  user1: {
    password: "password123",
    token: "token-abc-123",
    profile: {
      username: "user1",
      role: "admin",
      email: "user1@test.com",
    },
  },
};

/* ---------- AUTH ---------- */
app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  if (!USERS[username] || USERS[username].password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ token: USERS[username].token });
});

/* ---------- AUTH MIDDLEWARE ---------- */
function auth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const user = Object.values(USERS).find((u) => u.token === token);

  if (!user) return res.status(401).json({ message: "Unauthorized" });

  req.user = user;
  next();
}

/* ---------- GET ---------- */
app.get("/user/profile", auth, (req, res) => {
  res.json(req.user.profile);
});

/* ---------- PUT ---------- */
app.put("/user/profile", auth, (req, res) => {
  req.user.profile = req.body;
  res.json(req.user.profile);
});

/* ---------- PATCH ---------- */
app.patch("/user/profile", auth, (req, res) => {
  Object.assign(req.user.profile, req.body);
  res.json(req.user.profile);
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
