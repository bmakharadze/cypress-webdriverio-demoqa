export class SearchedProductPage {
    constructor(product) {
        this.product = product;
    }

    selectProduct(productName) {
        cy.get(this.product).contains('h3 a', productName).click();
    }
}

export const onSearchedProductPage = new SearchedProductPage();