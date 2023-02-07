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

}



export const onFilterStyle = new FilterStyle();