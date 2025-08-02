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
├── docs/                      # Documentation
│   └── use-cases.md           # Test use cases descriptions
├── pages/                     # Page Object Models (POMs)
│   └── login-page.ts          # Login page methods & selectors
├── tests/                     # Test specs
│   └── login/                 # Login test scenarios organized by use case
│       ├── uc-1-empty-credentials.spec.ts
│       ├── uc-2-missing-password.spec.ts
│       └── uc-3-valid-login.spec.ts
├── utils/                     # Shared helpers
│   ├── config.ts              # Environment variables & test config
│   └── logger.ts              # Logger utility
├── .env.example               # Example environment variables (public test credentials)
├── .gitattributes             # Git attributes for consistent line endings
├── .gitignore                 # Files and folders to ignore in Git
├── .prettierignore            # Files/folders excluded from Prettier
├── .prettierrc                # Prettier configuration
├── eslint.config.mjs          # ESLint configuration
├── package.json               # Project dependencies & npm scripts
├── package-lock.json          # Exact versions of npm dependencies
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

2. Create a `.env` file by copying the provided example:
```bash
cp .env.example .env
```

3. Install dependencies:
```bash
npm install
```

4. Install Playwright browsers:
```bash
npx playwright install
```

5. Run tests locally in Chromium (Chrome):
```bash
npx playwright test --project=chromium
```

6. Run tests locally in Edge:
```bash
npx playwright test --project=edge
```

---

## 📜 Scripts

The following `npm` scripts are available for development and testing:

## 📜 Scripts

The following `npm` scripts are available for development and testing:

| Command                 | Description                                         |
|-------------------------|-----------------------------------------------------|
| `npm run test`          | Run all tests in the default browsers.              |
| `npm run test:headed`   | Run all tests in headed (visible) mode.             |
| `npm run test:debug`    | Run tests in debug mode with Playwright inspector.  |
| `npm run test:chromium` | Run tests only in **Chromium** browser.             |
| `npm run test:edge`     | Run tests only in **Microsoft Edge** browser.       |
| `npm run lint`          | Run **Prettier** to check code formatting.          |
| `npm run format`        | Run **Prettier** to automatically format code.      |
| `npm run show-report`   | Open the Playwright HTML test report.               |

### ▶️ Example Usage

```bash
npm run test          # Run all tests in default browsers
npm run test:headed   # Run tests in headed (visible) mode
npm run test:debug    # Run tests with Playwright inspector
npm run lint          # Check code formatting
npm run format        # Format code with Prettier
```

### 🚀 Continuous Integration
CI setup coming soon — stay tuned!