const Page = require('./page');
const pageRepo = require("../support/ObjectRepo")

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get divItem () {
        return $(pageRepo.ItemDivLink);
    }

    get btnRemoveItem() {
        return $(pageRepo.RemoveItemBtn);
    }

    async removeItem () {
        await this.btnRemoveItem.click();
    }
}
module.exports = new CartPage();
