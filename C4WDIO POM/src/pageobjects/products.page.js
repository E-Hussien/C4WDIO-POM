const Page = require('./page');
const pageRepo = require("../support/ObjectRepo")
var itemdDict = {
    SauceLabsOnesie: pageRepo.AddToCartBtn,
};
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get menuFilter() {
        return $(pageRepo.FilterMenu);
    }

    get spanShoppingCartBadge() {
        return $(pageRepo.ShoppingCartBadgeSpan);
    }

    get linkShoppingCart() {
        return $(pageRepo.ShoppingCartLink);
    }

    async chooseFilter(filterOption) {
        await this.menuFilter.selectByVisibleText(filterOption);
    }

    async addToCart(productName) {
        await $(itemdDict[productName.replace(/\s+/g, '')]).click();
    }

    async goToCart(username, password) {
        await this.linkShoppingCart.click();
    }
}

module.exports = new ProductsPage();
