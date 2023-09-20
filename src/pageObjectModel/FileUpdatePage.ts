import BasePage from "./BasePage";

class FileUpdatePage extends BasePage {
    public async getFileUploadInput(): Promise<WebdriverIO.Element> {
        return $('[id="file-upload"]');
    }

    public async getUploadBtn(): Promise<WebdriverIO.Element> {
        return $('[id="file-submit"]');
    }

    public async clickOnUploadBtn(): Promise<void> {
        await this.clickOnElement(await this.getUploadBtn());
    }

    public async getUploadedFiles(): Promise<WebdriverIO.Element> {
        return $('[id="uploaded-files"]');
    }

    public async getUploadedFilesText(): Promise<string> {
        return this.getElementText(await this.getUploadedFiles());
    }

    public async uploadFile(filePath: string): Promise<void> {
        const fileUploadInput: WebdriverIO.Element = await this.getFileUploadInput();
        await fileUploadInput.addValue(filePath);
        await this.clickOnUploadBtn();
        await this.waitForElementToBeDisplayed(await this.getUploadedFiles());
    }
}

export default FileUpdatePage;