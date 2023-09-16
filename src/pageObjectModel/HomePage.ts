import BasePage from "./BasePage";
import BrowserUtils from "../utils/BrowserUtils";

class HomePage extends BasePage {
    public async getDropdownLink(): Promise<WebdriverIO.Element> {
        return $('[href="/dropdown"]');
    }

    public async clickOnDropdownLink(): Promise<void> {
        await this.clickOnElement(await this.getDropdownLink());
        await BrowserUtils.waitForURL('https://the-internet.herokuapp.com/dropdown');
    }

    public async getDynamicLoadingLink(): Promise<WebdriverIO.Element> {
        return $('[href="/dynamic_loading"]');
    }

    public async clickOnDynamicLoadingLink(): Promise<void> {
        await this.clickOnElement(await this.getDynamicLoadingLink());
        await BrowserUtils.waitForURL('https://the-internet.herokuapp.com/dynamic_loading');
    }
}

export default HomePage;