const{expect} = require('@playwright/test');
var personalDetails="",pageObj="",adminEdit="";
class DashBoardPage{
    constructor(page){
        pageObj = page;
        personalDetails = pageObj.locator("//a[text()='Personal Details' and contains(@class,'active')]");
    }

    async clickOnSideMenu(option){
        try{
       await  pageObj.locator("//span[text()='"+option+"']").click();
    //    await expect(personalDetails).toBeVisible();
        }
        catch(e){
            console.log('Exception on clickonsidemenu');
        }

    }

    async clickEditOnAdmin(adminName){
        try{    
            adminEdit = await pageObj.locator("//div[text()='"+ await adminName.toString()+"']/parent::div/following-sibling::div//i[contains(@class,'pencil')]");
            await adminEdit.click();
        }
        catch(e){
            console.log(e);
        }
    }

}
module.exports = {DashBoardPage};