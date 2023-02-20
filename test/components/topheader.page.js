class TopHeader {
    constructor() {
        this.topLeftContent = '.noo-topbar-left li a'
        this.topRightContent = '.noo-topbar-right li a'
    }
    
    async clickEmail() {
        await $(this.topLeftContent).click();
    }

    async clickPhone() {
        await $$(this.topLeftContent)[1].click();
    }

    async clickMyWishlist() {
        await $$(this.topRightContent)[0].click();
    }

    async clickMyAccount() {
        await $$(this.topRightContent)[1].click();
    }

    async clickCheckout() {
        await $$(this.topRightContent)[2].click();
    }

    async validateContent(){
        await expect(await $(this.topLeftContent)).toHaveTextContaining('nomail@toolsqa.com')
        await expect(await $$(this.topLeftContent)[1]).toHaveTextContaining('+(099) 999 - 9999')
        await expect(await $$(this.topRightContent)[0]).toHaveTextContaining('My Wishlist')
        await expect(await $$(this.topRightContent)[1]).toHaveTextContaining('My Account')
        await expect(await $$(this.topRightContent)[2]).toHaveTextContaining('Checkout')
    }
}

module.exports = new TopHeader();
