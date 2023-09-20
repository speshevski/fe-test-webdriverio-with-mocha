import BasePage from "./BasePage";

class KeyPressesPage extends BasePage {
    public async getInput(): Promise<WebdriverIO.Element> {
        return $('[id="target"]');
    }

    public async clearInputAndTypeText(text: string): Promise<void> {
        await this.clearInputAndType(await this.getInput(), text);
    }

    public async getResult(): Promise<WebdriverIO.Element> {
        return $('[id="result"]');
    }

    /**
     * Removes the default text and returns only the result
     */
    public async getResultText(): Promise<string> {
        const resultText: string = await this.getElementText(await this.getResult());
        return resultText.replace('You entered: ', '');
    }
}

export default KeyPressesPage;