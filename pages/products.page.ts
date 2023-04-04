import BasePage from "./BasePage";

export class ProductsPage extends BasePage {
    public constructor() {
        super();
    }

    private products() { return $$(".inventory_item button[id^=add-to-cart]"); }
    public inventoryPageLogoLabel() { return $(".app_logo"); }
    public shoppingCartLink() { return $(".//*[contains(@class, 'shopping_cart_link')]"); }
    public productsLabel() { return $(".header_secondary_container > .title"); }
    public cartNumberLabel() { return $(".//*[contains(@class, 'shopping_cart_badge')]"); }
    public addToCartAllProducts() {
        this.products().forEach(async i => {
            await i.click();
            await this.waitForSeconds(3);
        });
        return this;
    }

    async openApp() {
        await super.open("https://www.saucedemo.com/inventory.html");
    }
}

export default new ProductsPage();
