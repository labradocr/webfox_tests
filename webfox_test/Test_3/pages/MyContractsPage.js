var MyContractsPage = function() {
	// GETTER elements
    this.getLabel = function() {
    	return element(by.xpath('.//*[@class="contracts-list"]/descendant::p'));
    } 
    
    // ACTIONS
	this.isLabelDisplayed = function(){  
	    var flag = this.getLabel().isDisplayed();
	    return flag;   
	};
};
module.exports = new MyContractsPage();