export class LoginPage {

    constructor() {
        this.submitButton = '[value="Log in"]'
        this.nameField = '[name="username"]' 
        this.passwordField = '[name="password"]'
    }

    fillName(name) {
        cy.get(this.nameField).first().type(name)
    }

    fillPassword(password) {
        cy.get(this.passwordField).first().type(password)
    }

    clickSubmit() {
        cy.get(this.submitButton).click()
    }

    login(name, pass){ 
        this.fillName(name) 
        this.fillPassword(pass)
        this.clickSubmit() 
    }
}

export const onLoginPage = new LoginPage();