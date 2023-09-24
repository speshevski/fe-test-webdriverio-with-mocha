import TheInternetService from "../services/TheInternetService";
import HomePage from "../pageObjectModel/HomePage";
import HorizontalSliderPage from "../pageObjectModel/HorizontalSliderPage";

describe('Horizontal scroll tests', () => {
    let theInternetService: TheInternetService;
    let homePage: HomePage;
    let horizontalSlidePage: HorizontalSliderPage;

    before(async () => {
        theInternetService = new TheInternetService();
        homePage = new HomePage();
        horizontalSlidePage = new HorizontalSliderPage();
    });

    it('Text on the page corresponds to the amount of times the slider has been moved', async () => {
        await theInternetService.navigateToDefaultAppPage();
        await homePage.clickOnHorizontalSliderLink();
        await horizontalSlidePage.moveSlider(5);
        await expect(await horizontalSlidePage.getResultText()).toEqual('2.8');
    });
});