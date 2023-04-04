import BasePage from "./BasePage";

export class CartPage extends BasePage {
  private checkoutButton() {
    return $("#checkout");
  }
  private continueShoppingButton() {
    return $("#continue-shopping");
  }
  private continueButton() {
    return $("#continue");
  }
  private finishButton() {
    return $("#finish");
  }
  private firstNameInput() {
    return $(".form_group > #first-name");
  }
  private lastNameInput() {
    return $(".form_group > #last-name");
  }
  private zipCodeInput() {
    return $(".form_group > #postal-code");
  }

  public completeText() {
    return $(".complete-text");
  }

  public cartItems() {
    return $("cart_list > cart_item");
  }
  public cartTitle() {
    return $("#header_container > .title");
  }

  public checkoutStepOneUrl() {
    return "https://www.saucedemo.com/checkout-step-one.html";
  }

  public checkoutStepTwoUrl() {
    return "https://www.saucedemo.com/checkout-step-two.html";
  }

  private baseCartUrl() {
    return "https://www.saucedemo.com/cart.html";
  }

  public async fillTheForm(
    firstName: string,
    lastName: string,
    zipCode: number | string
  ) {
    await this.firstNameInput().setValue(firstName);
    await this.lastNameInput().setValue(lastName);
    await this.zipCodeInput().setValue(zipCode);
  }

  public async verifyCheckoutInformation() {
    await this.finishButton().click();
  }

  public async clickTheCheckout() {
    await this.checkoutButton().click();
  }

  public async clickTheContinue() {
    await this.continueButton().click();
  }

  public async clickTheFinish() {
    await this.finishButton().click();
  }

  async openApp(url: string = this.baseCartUrl()) {
    await super.open(url);
  }
}

export default new CartPage();
