const LoginPage = require('../pageobjects/login.page')
const data = require('../fixtures/data.json')
const AccountPage = require('../pageobjects/account.page')
const HomePage = require('../pageobjects/home.page')
const SearchedPage = require('../pageobjects/searched.page')

describe('Ecommerce test.', () => {

    it.only('Should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(data.email, data.password)
        await AccountPage.validateLogin(data.email)
    })

    it('Home page search.', async () => {
        await HomePage.open()
        await HomePage.waitForCircle()
        await HomePage.topHeader.validateContent()
        await HomePage.search(data.searchProduct)
        await SearchedPage.selectProduct(data.selectedProduct)
    })

})
