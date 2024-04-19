import {BasePage} from './basePage'

export class HomePage extends BasePage {
    async goToHomePage() {
        await this.page.goto('/');
    }
}