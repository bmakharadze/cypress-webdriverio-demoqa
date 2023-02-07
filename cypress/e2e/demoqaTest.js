import { LoginPage } from '../support/pageobjects/LoginPage'
import { HomePage } from '../support/pageobjects/HomePage'
import { SearchedProductPage } from '../support/pageobjects/SearchedProductPage';
import data from '../fixtures/data.json';

describe('Ecommerce test', () => { 
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const searchedProductPage = new SearchedProductPage();

    it('Ecommerce test login and search.', () => { 
        //visiting log in/sign up page
        loginPage.openLoginPage()
        //log-ining
        loginPage.login(data.email, data.password)
        //switching to home page.
        homePage.openHomePage()
        //validating content
        homePage.getTopHeader().validateContent()
        //searching product in search bar.
        homePage.searchProduct(data.searchProduct + '{enter}')
        //sorting products by grid(Default)
        searchedProductPage.getFilterStyle().sortByGrid()
        //selecting sort By Price High To Low.
        searchedProductPage.getSorting().sortByPriceHighToLow()
        //printing out all product names
        searchedProductPage.printAllProductNames()
        //selecting specific product with product name.
        searchedProductPage.selectProduct(data.selectedProduct);
    })
}) 
