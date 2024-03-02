const {test} = require ('@playwright/test');
const {ConfigFile} = require ('./ConfigFile');
var pageObj="",userName="",password="",submitButton="",logOutDownButton="",logOutButton="",logOutName="";
class LoginPage{
    constructor(page){
        pageObj = page;
        userName = pageObj.locator("//input[@name='username']");
        password = pageObj.locator("//input[@name='password']");
        submitButton = pageObj.locator("//button[@type='submit']");
        logOutDownButton = pageObj.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']");
        logOutButton = pageObj.locator("//a[text()='Logout']");
        logOutName = pageObj.locator("//p[@class='oxd-userdropdown-name']");
    }

    async loginToHRMS(){
        await userName.fill('admin');
        await password.fill('admin123');
        await submitButton.click();
    }

    async launchHRMS(){
        const configFileObj = new ConfigFile();
        await pageObj.goto(await configFileObj.getHRMSURL());
    }

    async logout(){
        await logOutDownButton.click();
        await logOutButton.click();
    }

    async getAdminName(){
        // console.log(await logOutName.textContent());
        return await logOutName.textContent();
    }
}
module.exports = {LoginPage};