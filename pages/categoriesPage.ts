import { Page, expect, Locator } from '@playwright/test';
import * as data from '../data/categoriesData.json';
import { BasePage } from './basePage'

export class CategoriesPage extends BasePage {
    private productLink: Locator;

    constructor(page: Page) {
        super(page);
        this.productLink = this.page.locator("a[href*='prod.html?idp']");
    }

    async verifyCategories(): Promise<void> {

        for (const category of data.category) {
            const categoriesLink = this.page.locator(`a:has-text("${category}")`);
            await expect(categoriesLink).toBeVisible();
        }
    }

    async navigateToCategory(categoryName: string) {
        await this.page.click(`a:has-text("${categoryName}")`);
    }

    async clickAProduct(): Promise<void> {
        await this.productLink.first().click();
    }
}
