class FilterStyle {
    get filterSelect() {
        return $('select[name="filter_style"]');
    }
      
    async selectOption(option) {
        const selectElement = await this.filterSelect;
        await selectElement.selectByVisibleText(option);
    }
      
    async filterByDefault() {
        await this.selectOption('Filter style');
    }  

    async sortByGrid() {
        await this.selectOption('Grid');
    }

    async sortByList() {
        await this.selectOption('List');
    }

    async validateContent() {
        const filterSelect = await this.filterSelect;
        await filterSelect.shouldBeVisible();
        await expect(filterSelect).toHaveTextContaining('Filter style');
        await expect(filterSelect).toHaveTextContaining('Grid');
        await expect(filterSelect).toHaveTextContaining('List');
    }
}

const onFilterStyle = new FilterStyle();
