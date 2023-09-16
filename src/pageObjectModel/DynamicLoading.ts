import BasePage from "./BasePage";
import BrowserUtils from "../utils/BrowserUtils";

class DynamicLoading extends BasePage {
    public async getElementRenderedAfterTheFactLink(): Promise<WebdriverIO.Element> {
        return $('[href="/dynamic_loading/2"]');
    }

    public async clickOnElementRenderedAfterFactLink(): Promise<void> {
        await this.clickOnElement(await this.getElementRenderedAfterTheFactLink());
        await BrowserUtils.waitForURL('https://the-internet.herokuapp.com/dynamic_loading/2');
    }
}

export default DynamicLoading;