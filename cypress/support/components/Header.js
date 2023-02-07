export class Header {
    constructor() {
        this.search = '.noo-search i'
        this.homePageLogoBtn = '.navbar-logo a'
        this.cartBtn = '.noo-cart-simple li a'
    }

    clickSearch() {
        cy.get(this.search).click()
    }

    clickHomePageLogoBtn() {
        cy.get(this.homePageLogoBtn).click()
    }

    clickCartBtn() {
        cy.get(this.cartBtn).first().click()
    }
}

export const onHeader = new Header();