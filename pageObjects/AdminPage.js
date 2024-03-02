// const { expect } = require("../playwright.config");
const{expect} = require('@playwright/test');
var pageObj="",editUser="",empName="",saveDetails="",cancelDetails="",listBoxEmpName="";
class AdminPage{
    constructor(page){
        pageObj = page;
        editUser = pageObj.locator("//h6[text()='Edit User']");
        empName = pageObj.locator("//label[text()='Employee Name']/../..//input");
        saveDetails = pageObj.locator("//button[@type='submit']");
        cancelDetails = pageObj.locator("//button[@type='submit']/preceding-sibling::button");
        listBoxEmpName = pageObj.locator("//div[@role='listbox']");
        
    }
    async editEmpDetails(empNameValue){
        try{
            await expect(editUser).toBeVisible();
            await empName.fill(empNameValue);
            await pageObj.waitForTimeout(3000);
            await listBoxEmpName.click();
            await pageObj.waitForTimeout(1000);

        }
        catch(e){
            console.log('Exception occured');

        }
    }

    async saveOrCancelEmpDetails(option){
        try{    
            
            if(option === "save"){        
                console.log(saveDetails);
                await saveDetails.click();
            }
            else{
            await cancelDetails.click();
            }
        }
        catch(e){
            console.log('Exception occured');

        }
    }

}
module.exports = {AdminPage};