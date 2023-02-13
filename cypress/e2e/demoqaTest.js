import { LoginPage } from '../support/pageobjects/LoginPage'
import { HomePage } from '../support/pageobjects/HomePage'
import { SearchedProductPage } from '../support/pageobjects/SearchedProductPage';
import data from '../fixtures/data.json';

describe('Ecommerce test', () => { 
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const searchedProductPage = new SearchedProductPage();

    it('Login test.', () => { 
        loginPage.openLoginPage()
        loginPage.login(data.email, data.password)
    })

    it('Validating content on header and searched product page.', () => { 
        homePage.openHomePage()
        homePage.getTopHeader().validateContent()
        homePage.searchProduct(data.searchProduct + '{enter}')
        searchedProductPage.getFilterColor().validateContent()
        searchedProductPage.getFilterSize().validateContent()
        searchedProductPage.getFilterStyle().validateContent()
        searchedProductPage.getFilterSort().validateContent()
        searchedProductPage.validatePriceRange(data.price)
        searchedProductPage.validateSearchResults(data.searchProduct)
    })

    it('Search product, filter and print all names. Open product page.', () => { 
        homePage.openHomePage()
        homePage.searchProduct(data.searchProduct + '{enter}')
        searchedProductPage.getFilterStyle().sortByGrid()
        searchedProductPage.getFilterSort().sortByPriceHighToLow()
        searchedProductPage.printAllProductNames()
        searchedProductPage.validatePriceRange(data.price)
        searchedProductPage.selectProduct(data.selectedProduct)
    })

    it('Waiting until loading circle hides ', () => {
        homePage.openHomePage()
        homePage.waitForCircle()
        homePage.searchProduct(data.searchProduct + '{enter}')
        searchedProductPage.getFilterSort().sortByPriceHighToLow()
        searchedProductPage.waitForCircle()
    })
    
    it('Working on login'), () => {
        loginPage.openLoginPage()
        loginPage.login(data.email, data.password)
        cy.intercept('POST', 'https://shop.demoqa.com/my-account/').as('generateToken')
        cy.wait('@generateToken')
    }
}) 
