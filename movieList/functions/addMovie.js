const {By} = require('selenium-webdriver');

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu') //targeting input field and tpying in detective pikachu

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed(); 

    expect(displayed).toBeTruthy()
}

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//span')).click()

   
}

const uncrossMovie = async (driver) => {
    await driver.findElement(By.xpath('//span')).click()

}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('(//button)[2]')).click()
}
module.exports = {
    addMovie,
    crossOffMovie,
    uncrossMovie,
    deleteMovie
}

