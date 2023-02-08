export class FilterStyle {
    constructor() {
        this.filterStyle = '.noo-woo-filter';
    }

    selectOption(option) {
        cy.get(this.filterStyle).eq(2).select(option);
    }

    filterByDefault() {
        this.selectOption('Filter style');
    }

    sortByGrid() {
        this.selectOption('Grid');
    }

    sortByList() {
        this.selectOption('List');
    }

    //Validate the filter options using .should() and .and() methods.
    validateContent() {
        cy.get(this.filterStyle).eq(2).should('be.visible').and('contain', 'Filter style').and('contain', 'Grid').and('contain', 'List');
    }
}



export const onFilterStyle = new FilterStyle();