const { Given} = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage,
}

Given(/^user on the saucedemo (\w+) page$/, async (page) => {
    await pages[page].open()
});