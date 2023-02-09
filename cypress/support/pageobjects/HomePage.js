import { TopHeader } from '../components/TopHeader';
import { Header } from '../components/Header';

export class HomePage {

    constructor() {
        this.searchProductInp = '[type="search"]'
        this.topHeader = new TopHeader()
        this.header = new Header() 
        this.url = '/'
    }

    openHomePage() {
        cy.visit(this.url)
    }

    searchProductInput(searchProductInp) {
        cy.get(this.searchProductInp).type(searchProductInp)
    }

    getTopHeader() {
        return this.topHeader
    } 

    getHeader() {
        return this.header
    } 

    searchProduct(searchProductInp){ 
        this.getHeader().clickSearch()
        this.searchProductInput(searchProductInp) 
    }

    waitUntilLoadingCircleHides() {
        cy.get('.tp-loader').should('not.be.visible');
    }
    
}

export const onHomePage = new HomePage();