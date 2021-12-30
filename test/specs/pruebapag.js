const homePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');
const expectChai = require('chai').expect; // need to use this for CHAI

describe('Signals Notebook Login', () => {
   /*  it('Alerta, credenciales inválidas', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(LoginPage.msjAlerta).toHaveText(
            'Invalid user name or password');
    }); */
    it('Loggeo exitoso', async () => {
        await LoginPage.open();
        await LoginPage.login('march.pkitest@gmail.com','snb123$');
        await expect(browser).toHaveTitle('Dashboard - SignalsNotebook');
    });

    it('Inspección de elemento', async () => {
        /* await homePage.navParallel.click();
        await expect(browser).toHaveTitle('Parallel Experiments - SignalsNotebook'); */
        await expect(homePage.btnFavorites).toBeDisplayed();
    });
});


