const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    get username(){
        return $('input[name="username"]');
    }

    get password(){
        return $('input[name="password"]');
    }
    
    get btnLogIn(){
        return $('button[class="uk-button uk-button-primary"]');
    }

    get msjAlerta(){
        return $('.uk-alert-danger')
    }

    async login (user, pass) {
        await this.username.addValue(user);
        await this.password.addValue(pass);
        await this.btnLogIn.click();
    }

    open() {
        return super.open('https://edwinqa.elements-qa.scienceaccelerated.com/');
    }
}

module.exports = new LoginPage();
