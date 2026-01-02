PLAYWRIGHT API AUTOMATION FRAMEWORK

This project is a clean and deterministic API automation framework built using Playwright and a local Express server. It is designed to run reliably both on a local machine and inside a CI pipeline without relying on unstable public APIs.

The primary goal of this project is to demonstrate how real-world backend API automation should be structured: controlled data, predictable behavior, and CI-safe execution.

────────────────────────────────────────
WHY THIS PROJECT
────────────────────────────────────────
Most API automation examples use public or third-party APIs, which often leads to flaky tests and unreliable CI runs. This project avoids that by using a local Express backend, giving full control over authentication, data, and responses.

Key ideas:
- Deterministic API behavior
- No external dependencies
- Clean CI execution
- Real authentication flow
- Clear and readable test output

────────────────────────────────────────
CORE CONCEPTS
────────────────────────────────────────
- Authentication is handled via a login endpoint that returns a token
- Protected APIs require an Authorization header with a Bearer token
- API tests cover POST, GET, PUT, and PATCH operations
- Success logs are printed only when tests pass, making CI output easy to read

────────────────────────────────────────
TECH STACK
────────────────────────────────────────
- Node.js (runtime)
- Express (local API server)
- Playwright (API automation)
- TypeScript (test implementation)
- GitHub Actions (CI)

────────────────────────────────────────
LOCAL SETUP
────────────────────────────────────────
Install dependencies:
npm install

Create a .env file:
BASE_URL=http://localhost:3000
USERNAME=user1
PASSWORD=password123

Start the API server:
npm run server

Run API tests:
npm run test:api

Expected output:
API running on http://localhost:3000
✓ POST /auth/login
✓ GET /user/profile
✓ PUT /user/profile
✓ PATCH /user/profile

────────────────────────────────────────
CI PIPELINE
────────────────────────────────────────
- CI runs only on the development branch
- The Express server is started inside the CI runner
- Environment variables are injected using GitHub Secrets
- Playwright API tests run headlessly

Required GitHub Secrets:
BASE_URL
USERNAME
PASSWORD

────────────────────────────────────────
BRANCHING STRATEGY
────────────────────────────────────────
development → active development and CI
staging     → manual promotion
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