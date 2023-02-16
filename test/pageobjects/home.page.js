const Page = require('./page');

class HomePage extends Page {
    get inputSearch () {
        return $('[type="search"]');
    }

    get btnSearch () {
        return $('.noo-search i');
    }

    async search (search) {
        await this.btnSearch.click();
        await this.inputSearch.setValue(search);
        await browser.keys('Enter')
    }
    
    open () {
        return super.open('/');
    }
}

module.exports = new HomePage();