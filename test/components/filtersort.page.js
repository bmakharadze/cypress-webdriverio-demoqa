class FilterSort {
    get sortSelect() {
        return $('select[class="orderby"]')
    }

    async selectOption(option) {
        const selectElement = await this.sortSelect;
        await selectElement.selectByVisibleText(option);
    }
  
    async sortByRelevance() {
        await this.selectOption('Relevance');
    }
  
    async sortByPopularity() {
        await this.selectOption('Sort by popularity');
    }
  
    async sortByAverageRating() {
        await this.selectOption('Sort by average rating');
    }
  
    async sortByLatest() {
        await this.selectOption('Sort by latest');
    }
  
    async sortByPriceLowToHigh() {
        await this.selectOption('Sort by price: low to high');
    }
  
    async sortByPriceHighToLow() {
        await this.selectOption('Sort by price: high to low');
    }
  
    async validateContent() {
        const selectElement = await this.sortSelect;
        await selectElement.shouldHaveText('Relevance');
        await selectElement.shouldHaveText('Sort by popularity');
        await selectElement.shouldHaveText('Sort by average rating');
        await selectElement.shouldHaveText('Sort by latest');
        await selectElement.shouldHaveText('Sort by price: low to high');
        await selectElement.shouldHaveText('Sort by price: high to low');
    }
}
  
module.exports = new FilterSort();
  