import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly productPrice: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('h2.name');
    this.productPrice = page.locator('.price-container');
    this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
  }

  async addToCart(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });

    await this.addToCartButton.click();
  }
}