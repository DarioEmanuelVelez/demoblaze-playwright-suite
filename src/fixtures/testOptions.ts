import { test as baseTest, expect } from '@playwright/test';
import { HeaderComponent } from '../components/HeaderComponent';
import { AuthModalComponent } from '../components/AuthModalComponent';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';

type Fixtures = {
  header: HeaderComponent;
  authModal: AuthModalComponent;
  homePage: HomePage;
  productPage: ProductPage;
  cartPage: CartPage;
};

export const test = baseTest.extend<Fixtures>({
  header: async ({ page }, use) => {
    const header = new HeaderComponent(page);
    await use(header);
  },

  authModal: async ({ page }, use) => {
    const authModal = new AuthModalComponent(page);
    await use(authModal);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
});

export { expect };