import { test, expect } from '../../fixtures/testOptions';

test.describe('Flujo de Checkout E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
  });

  test('Debería realizar una compra completa con éxito', async ({
    homePage,
    productPage,
    header,
    cartPage,
  }) => {

    const productName = 'Nokia lumia 1520';


    // 1. Dentro de el Home de la pagina, Seleccionamos el producto. 
    await homePage.selectProduct(productName);
    await productPage.addToCart();

   // Le damos click al carrito con lo elegido. 
    await header.clickCart(); 

    //Verificamos que el total de la compra pertenezca a nuestro producto en cuestion. 
    await expect(cartPage.totalAmount).toBeVisible();
    await expect(cartPage.page.getByRole("cell"  ,{name: productName })).toBeVisible(); 

    //iniciamos y completamos la compra. 

    await cartPage.clickPlaceOrder(); 

    await cartPage.fillOrderForm({
      name: 'Dario Velez',
      country: 'Argentina',
      city: 'Cordoba',
      card: '1234567890123456',
      month: '12',
      year: '2026',
    });
     
    await cartPage.clickPurchase(); 
    await expect(cartPage.successModal).toBeVisible(); 
    await expect(cartPage.successModal).toContainText('Thank you for your purchase!');
     
     await cartPage.closeSuccessModal(); 
     }); 
}); 


