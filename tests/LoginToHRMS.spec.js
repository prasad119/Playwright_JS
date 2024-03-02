const { test } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const {DashBoardPage}  = require('../pageObjects/DashBoardPage');

test('login to HRMS', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPageObject = new LoginPage(page);
    const dashBoardPageObj = new DashBoardPage(page);
    await loginPageObject.launchHRMS();
    await loginPageObject.loginToHRMS();
    await dashBoardPageObj.clickOnSideMenu("My Info");
    await loginPageObject.logout();
    
});