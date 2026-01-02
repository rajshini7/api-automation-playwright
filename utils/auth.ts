export function getToken(): string {
  const token = process.env.API_TOKEN;
  if (!token) {
    throw new Error("API token not initialized. Did globalSetup run?");
  }
  return token;
}
