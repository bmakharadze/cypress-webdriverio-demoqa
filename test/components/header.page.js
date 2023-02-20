class Header {
    get search() {
        return $('.noo-search i');
    }

    get homePageLogoBtn() {
        return $('.navbar-logo a');
    }

    get cartBtn() {
        return $('.noo-cart-simple li a').first();
    }

    async clickSearch() {
        await this.search.click();
    }

    async clickHomePageLogoBtn() {
        await this.homePageLogoBtn.click();
    }

    async clickCartBtn() {
        await this.cartBtn.click();
    }
}

module.exports = new Header();