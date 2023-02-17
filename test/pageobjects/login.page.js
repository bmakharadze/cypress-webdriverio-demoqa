const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[value="Log in"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    
    open () {
        return super.open('my-account/');
    }
    
}

module.exports = new LoginPage();