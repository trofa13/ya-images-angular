
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './tests/e2e/search.spec.js'
    ],
    params: {
        testServerUrl: 'http://localhost:8080'
    },
    multiCapabilities: [
    {
        'browserName': 'chrome',
        'chromeOptions': {'args': ['--disable-extensions --disable-web-security --user-data-dir --disk-cache-size=1 --media-cache-size=1']}
    },
    {
        'browserName': 'firefox'
    }
    ]
};