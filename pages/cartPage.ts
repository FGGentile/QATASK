import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './basePage'
import * as data from '../data/categoriesData.json';
import { faker } from '@faker-js/faker';



export class CartPage extends BasePage {
    private addToCartButton: Locator;
    private cartLink: Locator;
    private cartUrl: string = data.cartUrl;
    private placerOderButton: Locator;
    private nameInput: Locator;
    private countryInput: Locator;
    private cityInput: Locator;
    private creditCardNumberInput: Locator;
    private creditCardMonthInput: Locator;
    private creditCardYearInput: Locator;
    private purchaseButton: Locator;
    private price: Locator;
    private confirmationButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addToCartButton = page.getByText('Add to cart');
        this.cartLink = page.locator("a[id='cartur']");
        this.placerOderButton = page.getByRole('button', { name: 'Place order' });
        this.nameInput = page.locator("input[id='name']");
        this.countryInput = page.locator("input[id='country']");
        this.cityInput = page.locator("input[id='city']");
        this.creditCardNumberInput = page.locator("input[id='card']");
        this.creditCardMonthInput = page.locator("input[id='month']");
        this.creditCardYearInput = page.locator("input[id='year']");
        this.purchaseButton = page.getByText('Purchase');
        this.price = page.locator('h3[id="totalp"]');
        this.confirmationButton = page.locator('button', { hasText: 'OK' });
    }

    async addToCart(): Promise<void> {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('Product added');
            await dialog.dismiss();
        })
        await this.addToCartButton.click();
        await this.page.waitForResponse(request => request.url().includes('/addtocart') && request.status() === 200)
        
    }

    async placeOrder(): Promise<void> {
        await this.cartLink.click();
        await expect(this.page).toHaveURL(this.cartUrl);
        await expect(this.price).toBeVisible();
        await this.placerOderButton.click();
        //
        await this.nameInput.fill(faker.person.fullName());
        await this.countryInput.fill(faker.location.country());
        await this.cityInput.fill(faker.location.city());
        await this.creditCardNumberInput.fill(faker.finance.creditCardNumber());
        await this.creditCardMonthInput.fill(faker.date.month());
        await this.creditCardYearInput.fill(faker.date.future().getFullYear().toString());
        //
        await this.purchaseButton.click();
        await this.page.waitForResponse(request => request.url().includes('/deletecart'));
        expect(this.confirmationButton).toBeVisible();
        await this.confirmationButton.click();

    }
}
