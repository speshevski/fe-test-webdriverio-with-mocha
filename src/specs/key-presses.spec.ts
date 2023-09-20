import TheInternetService from "../services/TheInternetService";
import HomePage from "../pageObjectModel/HomePage";
import KeyPressesPage from "../pageObjectModel/KeyPressesPage";
import {given} from 'mocha-testdata';

describe('Key Presses tests', () => {
    let theInternetService: TheInternetService;
    let homePage: HomePage;
    let keyPressesPage: KeyPressesPage;

    before(async () => {
        theInternetService = new TheInternetService();
        homePage = new HomePage();
        keyPressesPage = new KeyPressesPage();
        await theInternetService.navigateToDefaultAppPage();
    });

    given('A', 'b', 'test')
        .it('Text on the page contains the last letter you entered in uppercase', async (keyInput: string) => {
            await theInternetService.navigateToDefaultAppPage();
            await homePage.clickOnKeyPressesLink();
            await keyPressesPage.clearInputAndTypeText(keyInput);
            await expect(await keyPressesPage.getResultText()).toEqual(turnKeyInputToExpectedResult(keyInput))
        });

    function turnKeyInputToExpectedResult(keyInput: string): string {
        return (keyInput.length > 1
            ? keyInput.slice(-1)
            : keyInput)
            .toUpperCase();
    }
});