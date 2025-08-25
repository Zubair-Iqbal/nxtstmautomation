
# Playwright UI Test Automation Framework

This repository provides a ready-to-use Playwright setup for UI test automation using JavaScript.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

Follow these steps to set up and run the tests:

### 1. Clone the Repository

```
git clone <your-repo-url>
cd playwright
```

### 2. Install Dependencies

Install all required packages:

```
npm install
```

### 3. Install Playwright Browsers

Download browser binaries needed for Playwright:

```
npx playwright install
```

### 4. Run All Tests

Execute all test cases in the `tests` folder:

```
npx playwright test
```

### 5. Add Your Own Tests

- Place new test files in the `tests/` directory.
- Use the sample structure in `example.spec.js` and `login.spec.js` as a reference.

## Project Structure

- `tests/` - Contains all UI test specs (e.g., `example.spec.js`, `login.spec.js`)
- `playwright.config.js` - Playwright configuration file
- `README.md` - Project documentation

## Example Test Cases

- `example.spec.js`: Checks homepage title
- `login.spec.js`: Tests login functionality with valid credentials

## Documentation & Resources

- [Playwright Official Docs](https://playwright.dev/docs/intro)
- [API Reference](https://playwright.dev/docs/api/class-test)

---
For any issues or questions, feel free to open an issue or contact the maintainer.
