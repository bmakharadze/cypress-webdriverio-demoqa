import { LoginPage } from '../support/pageobjects/LoginPage'
import { HomePage } from '../support/pageobjects/HomePage'
import { Sorting } from '../support/components/Sorting';
import { SearchedProductPage } from '../support/pageobjects/SearchedProductPage';

describe('Ecommerce test', () => { 
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const sortOptions = new Sorting();
    const product = new SearchedProductPage('[class="noo-product-inner"]');

    it('Ecommerce test login and search.', () => { 
        cy.visit('/')
        //log in
        loginPage.login('bm','bm@mail.com')
        //switching to home page.
        cy.get('[alt="ToolsQA Demo Site"]').first().click()
        //searching product in search bar.
        homePage.searchProduct('Dress{enter}')
        //selecting sort By Price High To Low.
        sortOptions.sortByPriceHighToLow();
        //selecting specific product with product name.
        product.selectProduct('Tokyo Talkies');
    })
}) 
