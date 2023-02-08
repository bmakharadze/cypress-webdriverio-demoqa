export class FilterSort {
    constructor() {
        this.sortSelector = 'select[class="orderby"]';
    }

    selectOption(option) {
        cy.get(this.sortSelector).first().select(option);
    }

    sortByRelevance() {
        this.selectOption('Relevance');
    }

    sortByPopularity() {
        this.selectOption('Sort by popularity');
    }

    sortByAverageRating() {
        this.selectOption('Sort by average rating');
    }

    sortByLatest() {
        this.selectOption('Sort by latest');
    }

    sortByPriceLowToHigh() {
        this.selectOption('Sort by price: low to high');
    }

    sortByPriceHighToLow() {
        this.selectOption('Sort by price: high to low');
    }

    //Validate the filter options using .then and .should methods.
    validateContent() {
        cy.get(this.sortSelector).then(selectElement => {
            cy.wrap(selectElement.first()).should('contain', 'Relevance');
            cy.wrap(selectElement.first()).should('contain', 'Sort by popularity');
            cy.wrap(selectElement.first()).should('contain', 'Sort by average rating');
            cy.wrap(selectElement.first()).should('contain', 'Sort by latest');
            cy.wrap(selectElement.first()).should('contain', 'Sort by price: low to high');
            cy.wrap(selectElement.first()).should('contain', 'Sort by price: high to low');
        });
    }
    
    
      
}



export const onFilterSort = new FilterSort();