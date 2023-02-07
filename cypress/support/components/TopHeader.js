export class TopHeader {
    constructor() {
        this.topLeftContent = '.noo-topbar-left li a'
        this.topRightContent = '.noo-topbar-right li a'
    }
    
    clickEmail() {
        cy.get(this.topLeftContent).first().click()
    }

    clickPhone() {
        cy.get(this.topLeftContent).eq(1).click()
    }

    clickMyWishlist() {
        cy.get(this.topRightContent).eq(0).click()
    }

    clickMyAccount() {
        cy.get(this.topRightContent).eq(1).click()
    }

    clickCheckout() {
        cy.get(this.topRightContent).eq(2).click()
    }

    validateContent(){
        cy.get(this.topLeftContent).first().should('contain','nomail@toolsqa.com')
        cy.get(this.topLeftContent).eq(1).should('contain','+(099) 999 - 9999')
        cy.get(this.topRightContent).eq(0).should('contain','My Wishlist')
        cy.get(this.topRightContent).eq(1).should('contain','My Account')
        cy.get(this.topRightContent).eq(2).should('contain','Checkout')
    }

}

export const onTopHeader = new TopHeader();