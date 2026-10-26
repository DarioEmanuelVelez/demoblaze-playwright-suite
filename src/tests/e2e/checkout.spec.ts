import { test, expect } from '../../fixtures/testOptions';

test.describe('Flujo de Checkout E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
  });

  test('Debería realizar una compra completa con éxito', async ({
    homePage,
    productPage,
    header,
    cartPage,
  }) => {
    // 1. Navegar al producto y agregarlo al carrito
    await homePage.selectProduct('Nokia lumia 1520');
    await productPage.addToCart();

    // 2. Ir al carrito
    await header.clickCart();

    // 3. Validar que cargó el total
    await expect(cartPage.totalAmount).toBeVisible();

    // 4. Abrir modal y completar datos de compra
    await cartPage.clickPlaceOrder();
    await cartPage.fillOrderForm({
      name: 'Dario Velez',
      country: 'Argentina',
      city: 'Cordoba',
      card: '1234567890123456',
      month: '12',
      year: '2026',
    });

    // 5. Validar mensaje de éxito
    await expect(cartPage.successModal).toBeVisible();
    await expect(cartPage.successModal).toContainText('Thank you for your purchase!');

    // 6. Cerrar modal
    await cartPage.confirmPurchase();
  });
});