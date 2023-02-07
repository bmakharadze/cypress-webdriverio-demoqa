export class FilterSize {
    constructor() {
        this.filterSize = '.noo-woo-filter';
    }

    selectOption(option) {
        cy.get(this.filterSize).eq(1).select(option);
    }
    
    filterByDefault() {
        this.selectOption('Filter size');
    }

    sortByGrid() {
        this.selectOption('32');
    }

    sortByList() {
        this.selectOption('34');
    }

    sortByGrid() {
        this.selectOption('36');
    }

    sortByList() {
        this.selectOption('37');
    }

    sortByGrid() {
        this.selectOption('38');
    }

    sortByList() {
        this.selectOption('40');
    }

    sortByGrid() {
        this.selectOption('42');
    }

    sortByList() {
        this.selectOption('44');
    }

    sortByList() {
        this.selectOption('Large');
    }

    sortByGrid() {
        this.selectOption('Medium');
    }

    sortByList() {
        this.selectOption('One');
    }

    sortByList() {
        this.selectOption('Small');
    }

    sortByGrid() {
        this.selectOption('X-Large');
    }
}



export const onFilterSize = new FilterSize();