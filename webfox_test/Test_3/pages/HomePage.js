var HomePage = function(){
    // GET elements
    this.getMyContractsTab = function () {
    	return element(by.xpath('.//*[@title="My Contracts"]'));
    };
    
    this.getMyPersonalDataTab = function () {
    	return element(by.xpath('.//*[@title="Personal Data"]'));
    };
    
    this.getLogoutButton = function () {
    	return element(by.xpath('.//*[title="Logout"]'));
    };
    
    this.getBrokerImage = function () {
    	return element(by.xpath('//img[@title="TEST MANUAL DE QA"]'));
    };
    
    
    // ACTIONS
    this.navigateToContractsTab = function () {
        this.getMyContractsTab().click();
    };

    this.navigateToPersonalDataTab = function () {
        this.getMyPersonalDataTab().click();
    };

    this.isImageDisplayed = function () {  
        var flag = this.getBrokerImage().isDisplayed();
        return flag;    
    };

    this.logout = function () {
        this.getLogoutButton().click();
    };

};

module.exports = new HomePage();