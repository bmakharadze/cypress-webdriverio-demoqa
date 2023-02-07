export class FilterColor {
    constructor() {
        this.filterColor = '.noo-woo-filter';
    }

    selectOption(option) {
        cy.get(this.filterColor).eq(0).select(option);
    }

    filterByDefault() {
        this.selectOption('Filter color');
    }

    sortByBeige() {
        this.selectOption('Beige');
    }

    sortByBlack() {
        this.selectOption('Black');
    }

    sortByBlue() {
        this.selectOption('Blue');
    }

    sortByBrown() {
        this.selectOption('Brown');
    }

    sortByDarkBlue() {
        this.selectOption('Dark Blue');
    }

    sortByGreen() {
        this.selectOption('Green');
    }

    sortByGrey() {
        this.selectOption('Grey');
    }

    sortByMauve() {
        this.selectOption('Mauve');
    }

    sortByMustard() {
        this.selectOption('Mustard');
    }

    sortByNude() {
        this.selectOption('Nude');
    }

    sortByOrange() {
        this.selectOption('Orange');
    }

    sortByPink() {
        this.selectOption('Pink');
    }

    sortByRed() {
        this.selectOption('Red');
    }

    sortByRoseGold() {
        this.selectOption('Rose Gold');
    }

    sortByRust() {
        this.selectOption('Rust');
    }

    sortBySilver() {
        this.selectOption('silver');
    }

    sortByWhite() {
        this.selectOption('White');
    }

    sortByYellow() {
        this.selectOption('Yellow');
    }
}

export const onFilterColor = new FilterColor();