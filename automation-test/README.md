# API Test Automation

This project contains automated tests for validating the Fake Store API data using Node.js and Jest.

## Setup

1. Install Node.js 16 or higher
2. Install dependencies:
```bash
npm install
```

## Running Tests

To run tests with console output:
```bash
npm test
```

To run tests with HTML report:
```bash
npm test
```
The HTML report will be generated at `test-report.html`

## Test Cases

The automation suite validates:
- Server response status code (200)
- Product data validation:
  - Title presence and non-empty value
  - Price validation (non-negative)
  - Rating validation (not exceeding 5)
- Generates a list of products with defects 