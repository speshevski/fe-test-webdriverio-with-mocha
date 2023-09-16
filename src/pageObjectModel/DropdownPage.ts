import BasePage from "./BasePage";

class DropdownPage extends BasePage {
    public async getDropdownList(): Promise<WebdriverIO.Element> {
        return $('[id="dropdown"]');
    }

    public async selectDropdownListByText(text: string): Promise<void> {
        await this.selectDropdownByText(await this.getDropdownList(), text);
    }

    public async getSelectedDropdownListOptionText(): Promise<string> {
        const dropdownListSelectedOption: WebdriverIO.Element = await $('[id="dropdown"] option[selected="selected"]');
        return dropdownListSelectedOption.getText();
    }
}

export default DropdownPage;