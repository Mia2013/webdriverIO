const logStep = (logMessage: string) => console.log(`STEP || ${logMessage}`);

export default class BasePage {

    async waitForSeconds(value: number) {
        await browser.pause(value * 1000);
    }

    protected async open(path: string) {
        await browser.maximizeWindow();
        await browser.url(path)
    }
}
