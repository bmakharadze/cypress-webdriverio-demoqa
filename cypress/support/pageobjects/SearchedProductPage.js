import { FilterSort } from '../components/FilterSort';
import { FilterStyle } from '../components/FilterStyle';
import { FilterSize } from '../components/FilterSize';
import { FilterColor } from '../components/FilterColor';

const priceEx = /[^0-9.-]+/g;

export class SearchedProductPage {
    constructor() {
        this.product = '.noo-product-inner';
        this.filterSort = new FilterSort() 
        this.filterStyle = new FilterStyle() 
        this.filterSize = new FilterSize() 
        this.filterColor = new FilterColor()
    }

    getFilterSort(){
        return this.filterSort
    }

    getFilterStyle(){
        return this.filterStyle
    }

    getFilterSize(){
        return this.filterSize
    }

    getFilterColor(){
        return this.filterColor
    }

    selectProduct(productName) {
        cy.get(this.product).contains('h3 a', productName).click();
    }

    printAllProductNames(){
        cy.get(`${this.product} h3 a`).each(($el) => {
            cy.log($el.text())
        })
    }

    //Validate the search results using .each(), .then() and .invoke() methods.
    validateSearchResults(searchText) {
        cy.get(this.product).each(($el) => {
            cy.wrap($el).find('h3 a').invoke('text').then((text) => {
                if (!text.toLowerCase().includes(searchText.toLowerCase())) {
                    cy.log(`Assert failed: ${text} does not include "${searchText}"`);
                } else {
                    expect(text.toLowerCase()).to.contain(searchText.toLowerCase());
                }
            });
        });
    }
    
    //Validate that price of the prodict is in the range.
    validatePriceRange(price) {
        cy.get(this.product).each(($el) => {
            cy.wrap($el).find('.price span bdi').invoke('text').then((text) => {
                try {
                    const parsedPrice = parseFloat(text.replace(priceEx, ''));
                    expect(parsedPrice).to.be.lessThan(price);
                } catch (error) {
                    cy.log(`Assert failed: "${text}" is not a valid price`);
                }
            });
        });
    }
}

export const onSearchedProductPage = new SearchedProductPage();