var LoginPage = require('../pages/LoginPage.js');
var HomePage = require('../pages/HomePage.js');
var MyContractsPage = require('../pages/MyContractsPage.js');

describe('WebFox test', function() {
	
    it('should allow the user to log in', function() {
        LoginPage.openPage();
        LoginPage.fillLoginForm('aqawefox+techtest@wefoxgroup.co', 'qwertyasdf');
        expect(HomePage.isImageDisplayed()).toBe(true, 'Agent broker image did not load'); 
    });
    
    it('should navigate to MyContracts and check the label', function() {
        HomePage.navigateToContractsTab;
        expect(MyContractsPage.isLabelDisplayed()).toBe(true, 'Text is not expected')            
    });    
    
    it('should allow the user to logout', function() {
        HomePage.logout();  
    });
    
});