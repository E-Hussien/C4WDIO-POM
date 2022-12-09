const Page = require('./page');
const pageRepo = require("../support/ObjectRepo")

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $(pageRepo.UsernameInput);
    }

    get inputPassword () {
        return $(pageRepo.PasswordInput);
    }

    get btnSubmit () {
        return $(pageRepo.LoginInput);
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
