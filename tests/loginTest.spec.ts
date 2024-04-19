import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

test.describe('Login tests', () => {

  test('should do a empty login', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    await home.goToHomePage();
    await login.loginEmpty();
  });

  test('should do an invalid password login', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    await home.goToHomePage();
    await login.loginIncorrectPassword();
  });

  test('should do an invalid user login', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    await home.goToHomePage();
    await login.loginIncorrectUser();
  });

  test('should do a valid user login', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    await home.goToHomePage();
    await login.loginValid();

  });



})
