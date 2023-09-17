import BasePage from "./BasePage";
import {Key} from "webdriverio";

class HorizontalSliderPage extends BasePage {
    public async getSliderInput(): Promise<WebdriverIO.Element> {
        return $('[class="sliderContainer"] input');
    }

    public async moveSlider(times: number): Promise<void> {
        const sliderInput: WebdriverIO.Element = await this.getSliderInput();
        for (const _ of Array.from({length: times})) {
            await browser.execute((slider: WebdriverIO.Element) => {
                // @ts-ignore
                slider.focus();
            }, sliderInput);
            await browser.keys(Key.ArrowRight);
        }
    }

    public async getResult(): Promise<WebdriverIO.Element> {
        return $('[class="sliderContainer"] span');
    }

    public async getResultText(): Promise<string> {
        return this.getElementText(await this.getResult());
    }
}

export default HorizontalSliderPage;