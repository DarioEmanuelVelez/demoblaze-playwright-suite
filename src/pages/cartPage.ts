import { Page, Locator } from '@playwright/test';

export interface OrderData {
  name: string;
  country: string;
  city: string;
  card: string;
  month: string;
  year: string;
}
export  class CartPage  {

  readonly page: Page;
  readonly totalAmount: Locator;
  readonly placeOrderButton: Locator;
  readonly nameInput: Locator;
  readonly countryInput: Locator;
  readonly cityInput: Locator;
  readonly cardInput: Locator;
  readonly monthInput: Locator;
  readonly yearInput: Locator;
  readonly purchaseButton: Locator;
  readonly successModal: Locator;
  readonly okButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.totalAmount = page.locator('#totalp');
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
    this.nameInput = page.locator('#name');
    this.countryInput = page.locator('#country');
    this.cityInput = page.locator('#city');
    this.cardInput = page.locator('#card');
    this.monthInput = page.locator('#month');
    this.yearInput = page.locator('#year');
    this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
    this.successModal = page.locator('.sweet-alert');
    this.okButton = page.getByRole('button', { name: 'OK' });
  }

  async clickPlaceOrder(): Promise<void> {
    await this.placeOrderButton.click();
  }

  async fillOrderForm(data: OrderData): Promise<void> {
    await this.nameInput.fill(data.name);
    await this.countryInput.fill(data.country);
    await this.cityInput.fill(data.city);
    await this.cardInput.fill(data.card);
    await this.monthInput.fill(data.month);
    await this.yearInput.fill(data.year);
  }

  async clickPurchase(): Promise<void> {
    await this.purchaseButton.click();
  }

  async closeSuccessModal(): Promise<void> {
    await this.okButton.click();
  }
}
