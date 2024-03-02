const { test } = require('@playwright/test');
const { LoginPage, } = require('../pageObjects/LoginPage');
const {DashBoardPage}  = require('../pageObjects/DashBoardPage');
const {AdminPage} = require ('../pageObjects/AdminPage');

test('Edit employee name', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPageObject = new LoginPage(page);
    const dashBoardPageObj = new DashBoardPage(page);
    const AdminPageObj = new AdminPage(page);
    await loginPageObject.launchHRMS();
    await loginPageObject.loginToHRMS();
    await dashBoardPageObj.clickOnSideMenu("Admin");
    // console.log(await loginPageObject.getAdminName());
    // page.waitForTimeout(20);
    // var adminName = loginPageObject.getAdminName();
    await dashBoardPageObj.clickEditOnAdmin("Admin Collings");
    // page.pause();
    await AdminPageObj.editEmpDetails("Odis  Adalwin");
    await AdminPageObj.saveOrCancelEmpDetails("save");    
    await loginPageObject.logout();
    
});