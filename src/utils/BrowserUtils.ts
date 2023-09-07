class BrowserUtils {
    public static waitForURL = async (expectedUrl: string): Promise<void> => {
        await browser.waitUntil(
            async () => {
                const browserUrl: string = await browser.getUrl();
                return browserUrl === expectedUrl;
            },
            // Use default timeout
            {
                timeout: 20000,
                timeoutMsg: `Expected URL to be ${expectedUrl} but got ${await browser.getUrl()}`,
            },
        );
        await browser.pause(1000);
    };
}

export default BrowserUtils;