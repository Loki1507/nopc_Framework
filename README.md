# NOPC App - Playwright Test Framework

A comprehensive end-to-end testing framework using Playwright for the NOPC application.

## Project Structure

```
src/
├── tests/
│   ├── ui/              # UI test suites
│   │   ├── smoke/       # Smoke tests
│   │   ├── regression/  # Regression tests
│   │   └── checkout/    # Checkout flow tests
│   ├── api/             # API test suites
│   │   ├── smoke/       # API smoke tests
│   │   └── regression/  # API regression tests
│   └── integration/     # Integration tests
│
├── pages/               # Page Object Models
│   ├── base/
│   │   └── BasePage.ts  # Base page class
│   ├── components/      # Reusable components
│   └── [Page].ts        # Individual page objects
│
├── api/                 # API client classes
│   └── base/
│       └── BaseAPI.ts   # Base API class
│
├── fixtures/            # Custom test fixtures
├── utils/               # Utility functions
├── test-data/           # Test data (JSON files)
├── constants/           # Constants and selectors
└── types/               # TypeScript type definitions
```

## Installation

```bash
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run specific test file
npx playwright test src/tests/ui/smoke/example.spec.js

# Run tests with debug mode
npx playwright test --debug
```

## Configuration

- **playwright.config.ts** - Main Playwright configuration
- **tsconfig.json** - TypeScript configuration

## Test Data

Test data is stored in `src/test-data/` directory:
- `users.json` - User credentials
- `products.json` - Product information
- `checkout.json` - Checkout test data
- `env.json` - Environment configurations

## Utilities

- **Logger.ts** - Logging utility
- **Helper.ts** - General helper methods
- **WaitUtils.ts** - Wait utilities
- **AssertionUtils.ts** - Common assertions
- **RandomDataGenerator.ts** - Generate random test data

## Author

NOPC Team
