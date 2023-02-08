export class FilterSize {
    constructor() {
        this.filterSize = 'select[name="filter_size"]';
    }

    selectOption(option) {
        cy.get(this.filterSize).first().select(option);
    }
    
    filterByDefault() {
        this.selectOption('Filter size');
    }

    sortBy32() {
        this.selectOption('32');
    }

    sortBy34() {
        this.selectOption('34');
    }

    sortBy36() {
        this.selectOption('36');
    }

    sortBy37() {
        this.selectOption('37');
    }

    sortBy38() {
        this.selectOption('38');
    }

    sortBy40() {
        this.selectOption('40');
    }

    sortBy42() {
        this.selectOption('42');
    }

    sortBy44() {
        this.selectOption('44');
    }

    sortByLarge() {
        this.selectOption('Large');
    }

    sortByMedium() {
        this.selectOption('Medium');
    }

    sortByOne() {
        this.selectOption('One');
    }

    sortBySmall() {
        this.selectOption('Small');
    }

    sortByXLarge() {
        this.selectOption('X-Large');
    }

    //Validate the filter options using .should methods.
    validateContent() {
        cy.get(this.filterSize).should('be.visible').and('contain', 'Filter size');
        cy.get(this.filterSize).should('contain', '32');
        cy.get(this.filterSize).should('contain', '34');
        cy.get(this.filterSize).should('contain', '36');
        cy.get(this.filterSize).should('contain', '37');
        cy.get(this.filterSize).should('contain', '38');
        cy.get(this.filterSize).should('contain', '40');
        cy.get(this.filterSize).should('contain', '42');
        cy.get(this.filterSize).should('contain', '44');
        cy.get(this.filterSize).should('contain', 'Large');
        cy.get(this.filterSize).should('contain', 'Medium');
        cy.get(this.filterSize).should('contain', 'One');
        cy.get(this.filterSize).should('contain', 'Small');
        cy.get(this.filterSize).should('contain', 'X-Large');
    }
}



export const onFilterSize = new FilterSize();