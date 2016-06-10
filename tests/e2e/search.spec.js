describe('Search suite', function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;


    it('User should be able to search', function() {

        browser.get(browser.params.testServerUrl);

        expect(element(by.tagName('h2')).getText()).toEqual('Search page');
        element(by.model('query')).sendKeys('Snickers');
        element(by.css('.submit-button')).click();

        expect(element(by.tagName('h2')).getText()).toEqual('Images');
    });

     


});