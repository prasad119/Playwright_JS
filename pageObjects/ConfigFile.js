var hrmsURL = "";
class ConfigFile{
    constructor(){
    hrmsURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    }
    async getHRMSURL(){
        return hrmsURL;
    }
}

module.exports = {ConfigFile};