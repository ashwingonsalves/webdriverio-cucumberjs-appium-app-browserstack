const { Given, When, Then } = require('cucumber');
var assert = require('assert');

Given('I try to find Text Button in Sample App', function () {
	var textButton = `~Text Button`;
    browser.waitForVisible(textButton, 30000);
    browser
      .element(textButton)
      .click();
})

When('I type in "hello@browserstack.com" in the Text Input field', function () {
	var textInput = `~Text Input`;
    browser.waitForVisible(textInput, 30000);
    browser
      .element(textInput)
      .click()
      .keys("hello@browserstack.com"+"\n");
})

Then('I should get the entered text in the Text Output field', function () {
	var textOutput = `~Text Output`;
    browser.waitForVisible(textOutput, 30000);
    var value = browser.getText(textOutput)

    if (value === "hello@browserstack.com")
      assert(true)
    else
      assert(false)
})