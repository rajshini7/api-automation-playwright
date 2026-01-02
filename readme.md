PLAYWRIGHT API AUTOMATION FRAMEWORK
=================================

This project is a **clean and deterministic API automation framework** built using **Playwright** and a **local Express server**.  
It is designed to run reliably both **locally** and inside a **CI pipeline**, without relying on unstable public APIs.

The primary goal of this project is to demonstrate how **real-world backend API automation** should be structured:
controlled data, predictable behavior, and CI-safe execution.

────────────────────────────────────────
WHY THIS PROJECT
────────────────────────────────────────
Most API automation examples depend on public or third-party APIs, which leads to flaky tests and unreliable CI runs.  
This project avoids that entirely by using a **local Express backend**, giving full control over authentication, data, and responses.

Key ideas behind this framework:
- Deterministic API behavior
- No external API dependencies
- Clean and repeatable CI execution
- Real authentication flow (token-based)
- Clear and readable test output

────────────────────────────────────────
CORE CONCEPTS
────────────────────────────────────────
- Authentication is handled via a login endpoint that returns a token
- Protected APIs require an `Authorization: Bearer <token>` header
- API tests cover the full lifecycle:
  - POST (login)
  - GET (fetch data)
  - PUT (replace data)
  - PATCH (update partial data)
- Success logs are printed **only when tests pass**, making CI logs easy to read and trust

────────────────────────────────────────
TECH STACK
────────────────────────────────────────
- Node.js — runtime environment
- Express — local API server
- Playwright — API automation framework
- TypeScript — strongly typed test code
- GitHub Actions — CI pipeline

────────────────────────────────────────
LOCAL SETUP
────────────────────────────────────────
Install dependencies:
npm install

Create a `.env` file:
BASE_URL=http://localhost:3000
USERNAME=user1
PASSWORD=password123

Start the API server:
npm run server

Run API tests:
npm run test:api

────────────────────────────────────────
EXPECTED OUTPUT
────────────────────────────────────────
Run npm run test:api

> api-automation@1.0.0 test:api  
> playwright test tests/api  

Running 2 tests using 1 worker

✓ 1 tests/api/auth.spec.ts › POST /auth/login returns token  
✓ 2 tests/api/user.spec.ts › User API › Profile should return user data  

────────────────────────────────────────
CI PIPELINE
────────────────────────────────────────
- CI runs **only on the development branch**
- The Express server is started inside the CI runner
- Environment variables are injected using **GitHub Secrets**
- Playwright API tests run headlessly and deterministically

Required GitHub Secrets:
BASE_URL  
USERNAME  
PASSWORD  

────────────────────────────────────────
BRANCHING STRATEGY
────────────────────────────────────────
development → active development + CI  
staging     → manual promotion (no CI)  
main        → stable snapshot  

────────────────────────────────────────
DEPENDENCIES
────────────────────────────────────────
node.js >= 20  
express 5.2.1  
@playwright/test 1.57.0  
typescript 5.4.0  
@types/node 25.0.3  
dotenv  

────────────────────────────────────────
CREATED BY
────────────────────────────────────────
Rajeev S  
API Automation • Playwright • CI/CD
