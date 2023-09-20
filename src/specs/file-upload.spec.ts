import TheInternetService from "../services/TheInternetService";
import HomePage from "../pageObjectModel/HomePage";
import FileUpdatePage from "../pageObjectModel/FileUpdatePage";

describe('File upload tests', () => {
    let path: typeof import('path');
    let theInternetService: TheInternetService;
    let homePage: HomePage;
    let fileUpdatePage: FileUpdatePage;

    before(async () => {
        theInternetService = new TheInternetService();
        homePage = new HomePage();
        fileUpdatePage = new FileUpdatePage();
        path = require('path');
    });

    it('Upload image on the page', async () => {
        const filePath: string = path.join(__dirname, '../resources/img/endavaLogo.png');
        await theInternetService.navigateToDefaultAppPage();
        await homePage.clickOnFileUpdateLink();
        await fileUpdatePage.uploadFile(filePath);
        await expect(await fileUpdatePage.getUploadedFilesText()).toEqual('endavaLogo.png');
    });
});