var LoginPage = function() {

	// GETTER elements  
	this.getUsernameInputField = function() {
		return element(by.xpath('.//*[@id="username"]'));
	};

	this.getPasswordInputField = function() {
		return element(by.id('password'));
	};

	this.getSubmitButton = function() {
		return element(by.xpath('.//*[@type="submit"]'));
	};

	// GET page
	this.openPage = function() {
		return browser.get('https://my.wefox.de/login');
	};

	// ACTIONS: Login
	this.fillLoginForm = function(userName, password) {
		this.getUsernameInputField().clear().sendKeys(userName);
		this.getPasswordInputField().clear().sendKeys(password);
		this.getSubmitButton().click();
	};
};

module.exports = new LoginPage();