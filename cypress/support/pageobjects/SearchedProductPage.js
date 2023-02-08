import { FilterSort } from '../components/FilterSort';
import { FilterStyle } from '../components/FilterStyle';
import { FilterSize } from '../components/FilterSize';
import { FilterColor } from '../components/FilterColor';

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
}

export const onSearchedProductPage = new SearchedProductPage();