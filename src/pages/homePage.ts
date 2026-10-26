import { Page, Locator } from '@playwright/test';

export class HomePage  {
  readonly page: Page;
  readonly categories: Locator;
  readonly productLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categories = page.locator('.list-group-item');
    this.productLinks = page.locator('.href-ch');
  }

  async selectCategory(categoryName: string) {
    await this.page.getByRole('link', { name: categoryName }).click();
  }

  async selectProduct(productName: string) {
    await this.page.getByRole('link', { name: productName }).click();
  }
}