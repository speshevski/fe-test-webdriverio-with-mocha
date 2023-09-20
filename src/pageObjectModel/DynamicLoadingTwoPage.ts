import BasePage from "./BasePage";

class DynamicLoadingTwoPage extends BasePage {
    public async getStartButton(): Promise<WebdriverIO.Element> {
        return $('[id="start"] button');
    }

    public async clickOnStartButton(): Promise<void> {
        await this.clickOnElement(await this.getStartButton());
    }

    public async getFinishTitle(): Promise<WebdriverIO.Element> {
        return $('[id="finish"] h4');
    }

    public async waitForFinishTitleToBeDisplayed(): Promise<void> {
        await this.waitForElementToBeDisplayed(await this.getFinishTitle());
    }

    public async getFinishTitleText(): Promise<string> {
        return this.getElementText(await this.getFinishTitle());
    }
}

export default DynamicLoadingTwoPage;