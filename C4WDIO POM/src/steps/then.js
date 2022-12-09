const {Then} = require('@wdio/cucumber-framework');

const ProductsPage = require('../pageobjects/products.page');
const CartPage = require('../pageobjects/cart.page');

const pages = {
    products: ProductsPage,
    cart:CartPage,
}

Then(/^shopping cart increased by 1$/, async () => {
    await expect(ProductsPage.spanShoppingCartBadge).toHaveTextContaining('1');
});

Then(/^user is able to see product in shopping cart$/, async () => {
    await expect(CartPage.divItem).toBeExisting();
});