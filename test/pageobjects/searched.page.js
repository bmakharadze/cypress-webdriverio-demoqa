const Page = require('./page');
const FilterSort = require('../components/filtersort.page');
const FilterStyle = require('../components/filterstyle.page');

class SearchedPage extends Page {
    get product() {
        return $('.noo-product-inner');
    }
    
    get filterSort() {
        return FilterSort;
    }

    get filterStyle() {
        return FilterStyle;
    }

    async selectProduct(productName) {
        const productLink = await this.product.$(`//h3/a[contains(text(), "${productName}")]`);
        await productLink.click();
    }
}

module.exports = new SearchedPage();