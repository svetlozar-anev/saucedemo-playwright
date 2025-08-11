# 🧪 saucedemo-playwright

This project contains automated UI tests for the [https://www.saucedemo.com](https://www.saucedemo.com) web application using Playwright and TypeScript. It is designed to be maintainable, scalable, and easy to run locally or in CI environments.

---

## 📌 Use Cases

The project covers way too many scenarios and validations.
For the full list of use cases and step-by-step breakdowns, check the [Use Cases Documentation](./docs/use-cases.md).

---

## 🧰 Tech Stack

- **Playwright** for browser automation
- **TypeScript** for static typing and better developer experience
- **ESLint** for linting and code quality
- **Prettier** for consistent code formatting
- **dotenv** for environment variable management

---

## ✨ Features

- **Page Object Model (POM):** Clean separation of page interactions from test logic.
- **Cross-Browser Testing:** Supports running tests in Chromium (Chrome) and Microsoft Edge.
- **TypeScript:** Strong typing for improved code quality and editor support.
- **ESLint + Prettier:** Enforces consistent code style and catches potential issues.
- **Config Management:** Centralized test configuration and environment variables.
- **Parallel Test Execution:** Run tests concurrently to speed up test suites.

---

## 🗂️ Project Structure

```text
saucedemo-playwright/
├── data/                      # Test data helpers
│   └── login-users.ts         # Login usernames and passwords for tests
├── docs/                      # Documentation
│   └── use-cases.md           # Test use cases descriptions
├── pages/                     # Page Object Models (POMs)
│   └── login-page.ts          # Login page methods & selectors
├── tests/                     # Test specs
│   ├── login/                 # Login test scenarios organized by use case
│   │   ├── uc-001-empty-credentials.spec.ts
│   │   ├── uc-002-missing-password.spec.ts
│   │   ├── uc-003-valid-login.spec.ts
│   │   ├── uc-004-locked-out-user.spec.ts
│   │   ├── uc-005-wrong-password.spec.ts
│   │   ├── uc-006-missing-username.spec.ts
│   │   ├── uc-007-special-characters.spec.ts
│   │   └── uc-008-whitespace-only.spec.ts
│   └── fixtures.ts            # Shared test fixtures
├── utils/                     # Shared utilities
│   └── logger.ts              # Logger utility
├── .gitattributes             # Git attributes for consistent line endings
├── .gitignore                 # Files and folders to ignore in Git
├── .prettierignore            # Files/folders excluded from Prettier
├── .prettierrc                # Prettier configuration
├── eslint.config.mjs          # ESLint configuration
├── package-lock.json          # Exact versions of npm dependencies
├── package.json               # Project dependencies & npm scripts
├── playwright.config.ts       # Playwright configuration (browsers, retries, timeouts)
├── README.md                  # Project documentation
└── tsconfig.json              # TypeScript compiler configuration
```

---

## ⚙️ Setup & Installation

1. Clone the repository.

```bash
git clone https://github.com/svetlozar-anev/saucedemo-playwright.git
cd saucedemo-playwright
```

2. Install dependencies:

```bash
npm install
```

3. (Optional) Install Playwright browsers if not already installed:

```bash
npx playwright install
```

---

## 📜 Scripts

The following `npm` scripts are available for development and testing:

| Command                       | Description                                                 |
| ----------------------------- | ----------------------------------------------------------- |
| `npm run test`                | Run all tests in the default browsers                       |
| `npm run test:uc -- "UC-00X"` | Run a specific use case test by name pattern using `--grep` |
| `npm run test:headed`         | Run all tests in headed (visible) mode                      |
| `npm run test:debug`          | Run tests in debug mode with Playwright inspector           |
| `npm run test:chromium`       | Run tests only in **Chromium** browser                      |
| `npm run test:edge`           | Run tests only in **Microsoft Edge** browser                |
| `npm run show-report`         | Open the Playwright HTML test report                        |
| `npm run codegen`             | Launch Playwright Codegen UI for Saucedemo                  |
| `npm run format`              | Format code automatically using Prettier                    |
| `npm run lint`                | Check code formatting using Prettier                        |

### ▶️ Example Usage

```bash
npm run test                 # Run all tests
npm run test:uc -- "UC-007"  # Run a specific test by name
npm run test:headed          # Headed (visible) test execution
npm run test:debug           # Debug tests with inspector
npm run test:chromium        # Run tests in Chromium
npm run test:edge            # Run tests in Edge
npm run show-report          # Open latest test report
npm run codegen              # Launch Playwright Codegen UI
npm run format               # Fix formatting
npm run lint                 # Check formatting

```

### 🚀 Continuous Integration

CI setup coming soon — stay tuned!
