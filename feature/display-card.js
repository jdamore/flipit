var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var config = require('config');
 
var driver;
const mochaTimeOut = 10000;

test.before(function() {
  this.timeout(mochaTimeOut);
  driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
  url= config.url;
});
 
test.describe('Display Card', function() {

  this.timeout(mochaTimeOut);

  test.it('shows the card', function () {
    driver.get(config.url);
    driver.isElementPresent(webdriver.By.name('card')).then(function(present) {
      assert.equal(present, true, "Card not displayed");
    });
  });

  test.it('shows the expected word', function () {
    driver.get(config.url);
    driver.findElement(webdriver.By.name('written')).getText().then(function(text) {
      assert.equal(text, 'Flipit', "Card showing '" + text + "'' instead of the expected 'Flipit'");
    });
  });

  test.it('shows the player', function () {
    driver.get(config.url);
    driver.findElement(webdriver.By.name('player')).getText().then(function(text) {
      assert.equal(text, 'Play', "Player nt present");
    });
  });

  // test.it('shows no JS error', function () {
  //   driver.manage().timeouts().setScriptTimeout(5000, 1) 
  //   promise = driver.executeAsyncScript("return window.jsErrors");
  //   promise.then(function(returnValue) {
  //     assert.equal(0, returnValue.length, "Found JS errors " + errors);
  //   });
  // });

});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
  driver.quit();
});
