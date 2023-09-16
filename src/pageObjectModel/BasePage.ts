import {Timeout} from "../utils/Timeout";

abstract class BasePage {
    protected async waitForElementToBeDisplayed(selector: WebdriverIO.Element): Promise<void> {
        await selector.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: `Selector: ${selector} was not displayed within 10000ms`,
        });
    }

    protected async waitForElementNotToBeDisplayed(selector: WebdriverIO.Element): Promise<void> {
        await selector.waitForDisplayed({
            timeout: 10000,
            reverse: true,
            timeoutMsg: `Selector: ${selector} was still displayed within 10000ms`,
        });
    }

    protected async scrollToTheTop(): Promise<void> {
        await browser.execute('window.scrollTo(0, 0)');
    }

    public async clickOnElement(selector: WebdriverIO.Element): Promise<void> {
        await selector.click();
    }

    public async getElementText(selector: WebdriverIO.Element): Promise<string> {
        return await selector.getText();
    }
}

export default BasePage;