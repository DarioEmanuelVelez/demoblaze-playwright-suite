import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly buttonPlaceOrder: Locator;
  readonly totalAmount: Locator;

  readonly nameInput: Locator;
  readonly countryInput: Locator;
  readonly cityInput: Locator;
  readonly creditCardInput: Locator;
  readonly monthInput: Locator;
  readonly yearInput: Locator;
  readonly purchaseButton: Locator;

  readonly successModal: Locator;
  readonly purchaseConfirmation: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonPlaceOrder = page.getByRole('button', { name: 'Place Order' });
    this.totalAmount = page.locator('#totalp');

    this.nameInput = page.locator('#name');
    this.countryInput = page.locator('#country');
    this.cityInput = page.locator('#city');
    this.creditCardInput = page.locator('#card');
    this.monthInput = page.locator('#month');
    this.yearInput = page.locator('#year');

    this.purchaseButton = page.getByRole('button', { name: 'Purchase' });

    this.successModal = page.locator('.sweet-alert');
    this.purchaseConfirmation = page.getByRole('button', { name: 'OK' });
  } // <-- El constructor se cierra ACÁ

  async clickPlaceOrder(): Promise<void> {
    await this.buttonPlaceOrder.click();
  }

  async fillOrderForm(data: {
    name: string;
    country: string;
    city: string;
    card: string;
    month: string;
    year: string;
  }): Promise<void> {
    await this.nameInput.fill(data.name);
    await this.countryInput.fill(data.country);
    await this.cityInput.fill(data.city);
    await this.creditCardInput.fill(data.card);
    await this.monthInput.fill(data.month);
    await this.yearInput.fill(data.year);

    await this.purchaseButton.click();
  }

  async confirmPurchase(): Promise<void> {
    await this.purchaseConfirmation.click();
    
  }
}