import { test,expect } from "../../fixtures/testOptions";

 
test.describe('Flujo de Checkout E2E-Flujo Negativo de compra', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  }); 

  test('Debería realizar una compra sin agregarar productos al carrito', async ({
    page,
    header,
    cartPage,
  }) => {

    await header.clickCart(); 
    await cartPage.clickPlaceOrder(); 

    let alertText = '';
    page.once('dialog', async (dialog) => {
      alertText = dialog.message(); // Guardamos el texto de la alerta
      await dialog.accept();        // Aceptamos/cerramos el cartel
    });

    await cartPage.clickPurchase(); 

    await expect(alertText).toBe("Please fill out Name and Creditcard.");

    await expect(cartPage.successModal).not.toBeVisible();

    });
    });