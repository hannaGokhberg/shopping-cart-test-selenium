const webdriver = require("selenium-webdriver");

async function testRandomProduct(driver) {
    // open in browser
    await driver.get("http://localhost:4200");

    // pick random product and click the button 'buy'
    let arrProductIds = ["buy_5d25e54a58f3681434e20071", "buy_5d25e48a58f3681434e20057", "buy_5d2706f758f3681434e21094", "buy_5d27072c58f3681434e210a8", "buy_5d27076658f3681434e210c0"];
    let randomProduct = arrProductIds[Math.floor(Math.random() * Math.floor(arrProductIds.length))];
    console.log(randomProduct);
    await driver.findElement(webdriver.By.id(randomProduct)).click();

    // navigate to cart
    await driver.findElement(webdriver.By.className("button fancy-button")).click();

    // check cart items
    let c = driver.findElement(webdriver.By.className("cart-item"));

    console.log("what is the thing: ", 	await c.getText());

    //c.getText() == randomProduct; and console.log("test succeeded / failed")
    return;
}

async function main() {
    const driver = new webdriver.Builder().forBrowser("firefox").build();
    await testRandomProduct(driver);
    //driver.quit();
}

main();