describe('Ecosia.org Demo', function() {

    before(browser => browser.url('http://localhost:5000/'));
  
    test('Testing VideoSync', function (browser) {
      browser
        .waitForElementVisible('body')
        .waitForElementVisible('div[class=App]')
        .assert.visible('input[id="videoURL-textfield"]')
        .setValue('input[id="videoURL-textfield"]', 'https://vimeo.com/384501556')
        .assert.visible('button[id="videoURL-button"]')
        .click('button[id="videoURL-button"]')
        .assert.containsText('.MuiButtonBase-root', 'UPLOAD')
    });
  
    after(browser => browser.end());
  });
  