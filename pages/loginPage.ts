import { Page, Locator, expect } from '@playwright/test';
import * as data from '../data/loginData.json'
import { BasePage } from './basePage'

export class LoginPage extends BasePage {
    private logInLink: Locator;
    private userNameInput: Locator;
    private passwordInput: Locator;
    private confirmButton: Locator;
    private nameOfUser: Locator;
    private logOutLink: Locator


    constructor(page: Page) {
        super(page);
        this.logInLink = page.locator("a[id='login2']");
        this.userNameInput = page.locator("input[id='loginusername']");
        this.passwordInput = page.locator("input[id='loginpassword']");
        this.confirmButton = page.locator("button[type='button']", { hasText: 'Log in' });
        this.nameOfUser = this.page.locator(`text=Welcome ${data.login.userNameValid}`);
        this.logOutLink = page.locator("a[id='logout2']");

    }

    async loginEmpty(): Promise<void> {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe(data.login.emptyMessage)
            await dialog.dismiss();
        })
        await this.logInLink.click();
        await this.confirmButton.click();
        await this.page.keyboard.press('Escape')
    }

    async loginIncorrectPassword(): Promise<void> {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe(data.login.invalidPasswordMessage)
            await dialog.dismiss();
        })
        await this.logInLink.click();

        await this.userNameInput.fill(data.login.userNameValid);
        await this.passwordInput.fill(data.login.passwordInvalid);
        await this.confirmButton.click();
        await this.userNameInput.clear();
        await this.passwordInput.clear();
        await this.page.keyboard.press('Escape');


    }

    async loginIncorrectUser(): Promise<void> {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe(data.login.invalidUserMessage)
            await dialog.dismiss();

        })
        await this.logInLink.click();

        await this.userNameInput.fill(data.login.userNameInvalid, { timeout: 3000 });
        await this.passwordInput.fill(data.login.passwordInvalid);
        await this.confirmButton.click();
        await this.page.keyboard.press('Escape')
    }


    async loginValid(): Promise<void> {
        await this.logInLink.click();
        await this.userNameInput.fill(data.login.userNameValid);
        await this.passwordInput.fill(data.login.passwordValid);
        await this.confirmButton.click();
        await expect(this.logOutLink).toBeVisible();
        await this.logOutLink.click();
        await expect(this.logInLink).toBeVisible();

    }





}