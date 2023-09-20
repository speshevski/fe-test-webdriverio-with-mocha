import TheInternetService from "../services/TheInternetService";
import HomePage from "../pageObjectModel/HomePage";
import DynamicLoadingPage from "../pageObjectModel/DynamicLoadingPage";
import DynamicLoadingTwoPage from "../pageObjectModel/DynamicLoadingTwoPage";

describe('Dynamic loading tests', () => {
    let theInternetService: TheInternetService;
    let homePage: HomePage;
    let dynamicLoading: DynamicLoadingPage;
    let dynamicLoadingTwo: DynamicLoadingTwoPage;

    before(async () => {
        theInternetService = new TheInternetService();
        homePage = new HomePage();
        dynamicLoading = new DynamicLoadingPage();
        dynamicLoadingTwo = new DynamicLoadingTwoPage();
    });

    it('Text of a dynamically loaded element is as expected', async () => {
        await theInternetService.navigateToDefaultAppPage();
        await homePage.clickOnDynamicLoadingLink();
        await dynamicLoading.clickOnElementRenderedAfterFactLink();
        await dynamicLoadingTwo.clickOnStartButton();
        await dynamicLoadingTwo.waitForFinishTitleToBeDisplayed();
        await expect(await dynamicLoadingTwo.getFinishTitleText()).toEqual('Hello World!');
    })
});