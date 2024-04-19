import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CategoriesPage } from '../pages/categoriesPage';

test.describe('Categories tests', () => {

    test('should verify categories', async ({ page }) => {
        const home = new HomePage(page);
        const categories = new CategoriesPage(page);
        await home.goToHomePage();
        await categories.verifyCategories();
    })
    
})