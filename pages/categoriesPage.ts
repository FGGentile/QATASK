import { Page, expect } from '@playwright/test';
import * as data from '../data/categoriesData.json';
import { BasePage } from './basePage'

export class CategoriesPage extends BasePage {

    async verifyCategories(): Promise<void> {

        for (const category of data.category) {
            const categoriesLink = this.page.locator(`a:has-text("${category}")`);
            await expect(categoriesLink).toBeVisible();
        }
    }

    async navigateToCategory(categoryName: string) {
        await this.page.click(`a:has-text("${categoryName}")`);
    }

    async clickRandomProduct(): Promise<void> {
        await this.page.waitForSelector('a.hrefch');
        const productElements = await this.page.$$(`a.hrefch`);

        const randomIndex = Math.floor(Math.random() * productElements.length);

        await productElements[randomIndex].click();
    }
}
