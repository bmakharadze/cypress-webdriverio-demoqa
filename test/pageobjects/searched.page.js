const Page = require('./page');

class SearchedPage extends Page {
    get product() {
        return $('.noo-product-inner');
    }
    
    async selectProduct(productName) {
        const productLink = await this.product.$(`//h3/a[contains(text(), "${productName}")]`);
        await productLink.click();
    }
}

module.exports = new SearchedPage();