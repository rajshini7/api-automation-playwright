import { Api } from "./api";

const BASE_URL = process.env.BASE_URL!;
const USERNAME = process.env.USERNAME!;
const PASSWORD = process.env.PASSWORD!;

export async function getToken(api: Api): Promise<string> {
  const res = await api.post(`${BASE_URL}/auth/login`, {
    username: USERNAME,
    password: PASSWORD,
  });

  if (res.status() !== 200) {
    throw new Error("Login failed");
  }

  const body = await res.json();
  return body.token;
}
