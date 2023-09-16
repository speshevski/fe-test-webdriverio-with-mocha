import TheInternetService from "../services/TheInternetService";
import HomePage from "../pageObjectModel/HomePage";
import DynamicLoading from "../pageObjectModel/DynamicLoading";
import DynamicLoadingTwo from "../pageObjectModel/DynamicLoadingTwo";

describe('Dynamic loading tests', () => {
    let theInternetService: TheInternetService;
    let homePage: HomePage;
    let dynamicLoading: DynamicLoading;
    let dynamicLoadingTwo: DynamicLoadingTwo;

    before(async () => {
        theInternetService = new TheInternetService();
        homePage = new HomePage();
        dynamicLoading = new DynamicLoading();
        dynamicLoadingTwo = new DynamicLoadingTwo();
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