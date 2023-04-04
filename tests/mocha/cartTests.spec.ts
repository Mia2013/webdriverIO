import loginPage from "../../pages/login.page";
import productPage from "../../pages/products.page";
import cartPage from "pages/cart.page";

describe("Login to the application", () => {
  before(async () => {
    await loginPage.openApp();
    await loginPage.waitForSeconds(2);
  });

  it("Verify a user can login to the application", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.waitForSeconds(2);
    productPage.productsLabel().then((label) => {
      expect(label.text()).toEqual("Products");
    });
  });
});

describe("Open Products page", () => {
  before(async () => {
    await productPage.openApp();
    await productPage.waitForSeconds(2);
  });

  it("Verified user adds all products to cart", async () => {
    await productPage.addToCartAllProducts();
    await productPage.waitForSeconds(2);
    productPage.cartNumberLabel().then((label) => {
      expect(label.text()).toEqual("6");
    });
  });

  it("When the verified user click on Cart icon, it should navigate to the cart page", async () => {
    await productPage.shoppingCartLink().click();
    await cartPage.waitForSeconds(2);
    cartPage.cartTitle().then((title) => {
      expect(title.text().toUpperCase()).toEqual("YOUR CART");
    });
  });
});

describe("Open Cart page", () => {
  before(async () => {
    await cartPage.openApp();
    await cartPage.waitForSeconds(2);
  });

  it("When The user added all products to the cart, it should be in the cart", async () => {

    cartPage.cartItems().then((items) => {
      expect(items.length()).toEqual(6);
    });
  });
  it("When the user click on the Checkout button, it should navigate to the the checkout form", async () => {
    await cartPage.clickTheCheckout();
    await cartPage.waitForSeconds(2);
    cartPage.cartTitle().then((title) => {
      expect(title.text().toUpperCase()).toEqual("CHECKOUT: YOUR INFORMATION");
    });
  });
});

describe("Open Checkout page", () => {
  before(async () => {
    await cartPage.openApp(cartPage.checkoutStepOneUrl());
    await cartPage.waitForSeconds(2);
  });

  it("When the user fulfills the form and click on the Continue button, it should navigate to the verify checkout information page", async () => {
    await cartPage.fillTheForm("Jane", "Doe", "1134");
    await cartPage.waitForSeconds(2);
    await cartPage.clickTheContinue();
    cartPage.cartTitle().then((title) => {
      expect(title.text().toUpperCase()).toEqual("CHECKOUT: OVERVIEW");
    });
  });
});

describe("Open Second checkout page", () => {
  before(async () => {
    await cartPage.openApp(cartPage.checkoutStepTwoUrl());
    await cartPage.waitForSeconds(2);
  });

  it("When the user The user click on the Finish button, it should navigate to the verify checkout complete page", async () => {
    await cartPage.clickTheFinish();
    await cartPage.waitForSeconds(2);
    cartPage.cartTitle().then((title) => {
      expect(title.text().toUpperCase()).toEqual("CHECKOUT: COMPLETE!");
    });
  });

  it("When the checkout complete, it should show the success message", async () => {
    cartPage.completeText().then(async (message) => {
      expect(message.text()).toEqual(
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      );
    });
  });
});
