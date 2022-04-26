const {Builder, Capabilities} = require('selenium-webdriver');
require('chromedriver');

const {addMovie, crossOffMovie, uncrossMovie, deleteMovie} = require('../functions/addMovie.js')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})
afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(3000)
})

test('Crossing off movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(3000)
})

test('uncross movie', async () => {
    await uncrossMovie(driver)
    await driver.sleep(3000)
})

test('delete movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(3000)
})
