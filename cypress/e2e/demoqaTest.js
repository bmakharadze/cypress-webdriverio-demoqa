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
    })

    it('Search product, filter and print all names.', () => { 
        homePage.openHomePage()
        homePage.searchProduct(data.searchProduct + '{enter}')
        searchedProductPage.getFilterStyle().sortByGrid()
        searchedProductPage.getFilterSort().sortByPriceHighToLow()
        searchedProductPage.printAllProductNames()
        searchedProductPage.selectProduct(data.selectedProduct);
    })
}) 
