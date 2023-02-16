const Page = require('./page');

class AccountPage extends Page {
    
    get elememnt () {
        return $('.woocommerce-MyAccount-content p strong');
    }

    async validateLogin (username) {
        await browser.waitUntil(
            async () => {
                const text = await this.elememnt.getText();
                return text === username;
            },
            {
                timeout: 5000,
                timeoutMsg: `Expected username to be ${username} but it was not found.`
            }
        );
      }
      
}

module.exports = new AccountPage();
