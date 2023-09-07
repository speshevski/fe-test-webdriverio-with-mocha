import BrowserUtils from "../utils/BrowserUtils";

class TheInternetService {
    private readonly defaultRoute: string;

    constructor() {
        this.defaultRoute = 'https://the-internet.herokuapp.com/'
    }

    public async navigateToDefaultAppPage(): Promise<void> {
        await browser.maximizeWindow();
        await browser.url(this.defaultRoute);
        await BrowserUtils.waitForURL(this.defaultRoute);
    }
}

export default TheInternetService;