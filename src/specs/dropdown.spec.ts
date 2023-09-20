import TheInternetService from "../services/TheInternetService";
import HomePage from "../pageObjectModel/HomePage";
import DropdownPage from "../pageObjectModel/DropdownPage";

describe('Dropdown tests', () => {
    let theInternetService: TheInternetService;
    let homePage: HomePage;
    let dropdownPage: DropdownPage;

    before(async () => {
        theInternetService = new TheInternetService();
        homePage = new HomePage();
        dropdownPage = new DropdownPage();
    });

    it('Selected option persists', async () => {
        const DROPDOWN_OPTION: string = 'Option 2';
        await theInternetService.navigateToDefaultAppPage();
        await homePage.clickOnDropdownLink();
        await dropdownPage.selectDropdownListByText(DROPDOWN_OPTION);
        await expect(await dropdownPage.getSelectedDropdownListOptionText()).toEqual(DROPDOWN_OPTION);
    });
});