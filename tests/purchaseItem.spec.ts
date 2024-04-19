import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CategoriesPage } from '../pages/categoriesPage';
import { CartPage } from '../pages/cartPage';
import * as data from '../data/categoriesData.json';


test.describe('Purchase of item', () => {

    test('should add an item and make a purchase', async ({ page }) => {
        const home = new HomePage(page);
        const categories = new CategoriesPage(page);
        const cart = new CartPage(page);
        const i = Math.floor(Math.random() * data.category.length);
        await home.goToHomePage();
        await categories.navigateToCategory(data.category[i]);
        await categories.clickRandomProduct();
        await cart.addToCart();
        await cart.placeOrder();

    })

    
    
})