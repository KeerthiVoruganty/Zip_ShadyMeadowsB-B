# Shady Meadows Automation Tests

This project contains an example implementation of the **Page Object + component model** to automate a small end‑to‑end booking flow on the [`automationintesting.online`](https://automationintesting.online) demo site.  The goal of this work sample is to illustrate how to structure test automation using modern tooling and good coding practices rather than to achieve 100 % test coverage.

## Project structure

```
shady_meadows_automation/
├── package.json           # Project metadata and dependencies
├── playwright.config.js   # Configuration for the Playwright test runner
├── README.md              # This document
├── pages/                 # Page object classes encapsulating page‑specific behaviour
│   ├── RoomsPage.js
│   └── RoomDetailsPage.js
├── tests/                 # Test specifications exercising the pages/components
│   └── booking.spec.js
└── .github/workflows/     # Example GitHub Actions workflow to run the test suite
    └── tests.yml
```

### Pages vs. components

* **Pages** are high‑level abstractions that represent entire screens of the application (e.g. the rooms listing or the room details page).  Each page object knows how to navigate to itself, exposes locators for the elements it cares about and implements helper methods (such as _clickBookNowButton_ or _assertRoomHasNoTV_) to perform common actions.
* **Components** encapsulate smaller widgets that may appear on many pages (e.g. a header or an amenity icon).  In this sample, the amenity list is simple enough to be expressed as a method inside the page object, but if it were reused across multiple pages it would be extracted into its own component class.

## Getting started

1. **Install dependencies**

   ```sh
   npm install
   # optional: install browser binaries used by Playwright
   npx playwright install --with-deps
   ```

   The first command installs the JavaScript dependencies defined in `package.json`.  The second downloads a copy of Chromium (as well as Firefox/WebKit if desired) so the tests can run in a deterministic environment without relying on whatever browser happens to be installed locally.

2. **Run the tests**

   ```sh
   npm test
   ```

   This will execute the Playwright test suite located under the `tests/` directory.  The default configuration runs all tests headlessly against the Chromium browser.  You can override the browser or enable headed mode by passing flags directly to Playwright, for example:

   ```sh
   npx playwright test --browser=firefox --headed
   ```

3. **Lint the code (optional)**

   ESLint can help catch common mistakes and enforce consistent style.  Run:

   ```sh
   npm run lint
   ```

## GitHub Actions CI

An example GitHub Actions workflow is included under `.github/workflows/tests.yml`.  It installs dependencies, downloads the necessary Playwright browsers and runs the tests on every push and pull request.  Feel free to modify the workflow matrix (for example, to test against multiple browsers or Node versions) to suit your own CI needs.

## What this sample demonstrates

* How to use the **Page Object + component model** to isolate locators and business logic from the test definitions.  Should the application under test change, only the page object needs to be updated.
* How to write concise, readable assertions using the [`@playwright/test`](https://playwright.dev/docs/test-intro) API.
* How to validate form input by deliberately entering invalid data and checking for server‑side or client‑side validation messages.
* How to parametrise your tests with dynamic dates.  The included test computes “today” and two days hence in the local timezone so that it remains valid no matter when it is executed.

## Known limitations

The demo application occasionally suffers from client‑side errors that cause the page to crash when submitting a reservation.  The test suite assumes the application behaves as expected and asserts on a “Booking Confirmed” message.  If the application fails, the test will report a failure.  In a real‑world scenario you would implement retry logic or network interception to make your tests resilient to such flakiness.

---

Feel free to extend these tests, extract additional components or integrate your favourite assertion/utility libraries.  This project should serve as a solid foundation for tackling the work sample using modern JavaScript tooling.