exports.config = {
		// Remote address
	    seleniumAddress: 'http://localhost:4444/wd/hub',
	 
	    // Capabilities to be passed to the webdriver instance.
	    capabilities: {
			browserName: 'chrome',
	    },
	    
		specs: ['test.js'],
		
		getPageTimeout: 30000,
		
	    // Framework to use. Jasmine
		framework: 'jasmine',

	    // Options to be passed to Jasmine.
	    jasmineNodeOpts: {
			showColors: true,   // Use colors in the command line report
			defaultTimeoutInterval: 2500000	// Default time to wait in ms before a test fails.
	    }

}
		