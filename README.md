# Playwright_JS
Points to remember:
1. Playwright is a NODE JS library.
2. Playwright has autowait capability, it waits and checks if element is visible, stable etc before performing any action.
3. Traces: It is a feature in playwright which can take automatic screenshots, test video recording, flaky test retry and logging mechanism.
4. Codegen: It generates the code based on the user clicks.
5. Inspector tool: It helps to monitor and debug every step of execution.
6. Inbuilt API testing: It fires the network calls on fly with in web application.
7. Browser Context: It helps to save and transfer the browser state to any other new browser.
-------------------------------
1. Install playwright: npm init playwright
2. Run a playwright spec: npx playwright test 'spec file name' --headed


-------------------------------
Fixtures: there are 4 fixtures in playwright
1. browser: It opens a new browser instance with fixed context. we can give our own context as per requirement.
2. page:



-------------------------------
1. If you want to run only one test/some tests among multiple tests in a spec file, you can mention test.only('test name', async ({browser})=>{"your code here"});. It will run those sepcific tests
