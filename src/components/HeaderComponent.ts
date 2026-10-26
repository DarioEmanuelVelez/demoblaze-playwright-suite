import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly loginlink: Locator;
  readonly signUplink: Locator;
  readonly cartlink: Locator;
  readonly userGreeting: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginlink = page.getByRole('link', { name: 'Log in' });
    this.signUplink = page.getByRole('link', { name: 'Sign up' });
    this.cartlink = page.getByRole('link', { name: 'Cart', exact:true });
    this.userGreeting = page.locator('#nameofuser');
  }

  async openLoginModal(): Promise<void> {
    await this.loginlink.click();
  }

  // Agregamos el método clickCart para que lo use checkout.spec.ts
  async clickCart(): Promise<void> {
    await this.cartlink.click();
  }
}
