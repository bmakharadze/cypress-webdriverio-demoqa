export class HomePage {

    constructor() {
        this.searchProductInp = '[type="search"]'
        this.searchProductBtn = '[class="noo-search"]'
    }

    searchProductInput(searchProductInp) {
        cy.get(this.searchProductInp).type(searchProductInp)
    }

    searchProductButton() {
        cy.get(this.searchProductBtn).click()
    }

    searchProduct(searchProductInp){ 
        this.searchProductButton()
        this.searchProductInput(searchProductInp) 
    }

}

export const onHomePage = new HomePage();