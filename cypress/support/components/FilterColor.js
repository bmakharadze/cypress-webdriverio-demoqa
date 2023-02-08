export class FilterColor {
    constructor() {
        this.filterColor = 'select[name="filter_color"]';
    }

    selectOption(option) {
        cy.get(this.filterColor).first().select(option);
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

    //Validate the filter options using .contains, .then and .expect methods.
    validateContent() {
        cy.contains('Filter color').then(($element) => {
            expect($element).to.be.visible;
        });
        
        cy.contains('Beige').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Black').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Blue').then(($element) => {
            expect($element).to.be.visible;
        });
        
        cy.contains('Brown').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Dark Blue').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Green').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Grey').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Mauve').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Mustard').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Nude').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Orange').then(($element) => {
            expect($element).to.be.visible;
        });
        
        cy.contains('Pink').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Red').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Rose Gold').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Rust').then(($element) => {
            expect($element).to.be.visible;
        });
        
        cy.contains('silver').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('White').then(($element) => {
            expect($element).to.be.visible;
        });

        cy.contains('Yellow').then(($element) => {
            expect($element).to.be.visible;
        });
    }
    
}

export const onFilterColor = new FilterColor();