const LoginPage = require('../pageobjects/login.page')
const data = require('../fixtures/data.json')
const AccountPage = require('../pageobjects/account.page')
const HomePage = require('../pageobjects/home.page')
const SearchedPage = require('../pageobjects/searched.page')

describe('Ecommerce test.', () => {

    it('Should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(data.email, data.password)
        await AccountPage.validateLogin(data.email)
    })

    it.only('Home page search.', async () => {
        await HomePage.open()
        await HomePage.search(data.searchProduct)
    })

})
