module.exports = class Page {
    open (path) {
        return browser.url(`https://shop.demoqa.com/${path}`)
    }
}
