const {When} = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const CartPage = require('../pageobjects/cart.page');

const pages = {
    login: LoginPage,
    products: ProductsPage,
    cart:CartPage,
}

When(/^user login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
When(/^user Change filter to (.+)$/, async (filterOption) => {
    await ProductsPage.chooseFilter(filterOption)
});
When(/^user click Add to cart for product (.+)$/, async (productName) => {
    await ProductsPage.addToCart(productName)
});
When(/^user is able to go to cart$/, async () => {
    await ProductsPage.goToCart()
});
When(/^user is able to remove item$/, async () => {
    await CartPage.removeItem()
});
