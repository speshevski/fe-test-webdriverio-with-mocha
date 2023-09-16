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
}

export default HomePage;