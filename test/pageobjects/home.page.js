const Page = require('./page');
const Header = require('../components/header.page');
const TopHeader = require('../components/topheader.page');

class HomePage extends Page {
    get inputSearch () {
        return $('[type="search"]');
    }

    get circle() {
        return $('.tp-loader');
    }

    get header() {
        return Header;
    }

    get topHeader() {  
        return TopHeader;
    }

    async waitForCircle() {
        await this.circle.waitForDisplayed({ timeout: 5000, reverse: true });
    }

    async search (search) {
        await Header.clickSearch();
        await this.inputSearch.setValue(search);
        await browser.keys('Enter')
    }
    
    open () {
        return super.open('/');
    }
}

module.exports = new HomePage();