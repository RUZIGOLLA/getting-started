chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // console.log('event listener')
    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url) {
        console.log('test', changeInfo.url)
        scrapIt(changeInfo.url);
        // do something here
        // console.log(changeInfo.url)
        // test(40)
    }
});




const scrapIt = async(urlTab) => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            args: ["--disable-setui-sandbow"],
            'ingnoreHTTPSErrors': true
        });

        const url = urlTab;
        const page = await browser.newPage();
        const cookieAccept = ".css-k8o10q";

        await page.goto(url);
        if (page.url == 'https://www.scamdoc.com/fr/interrogation') {
            await scrapIt();
            return;
        }
        // await browser.close();

        // 
        const searchButton = 'button[type=submit]';
        const searchInput = "#search_input";
        const slider = "#slidervalue";
        // https://www.scamdoc.com/fr/interrogation
        await page.waitForSelector(searchInput)
        await page.$eval(searchInput, si => si.value = 'www.facebook.com')
        await page.click(searchButton)

        await page.waitForSelector(cookieAccept)
        await page.click(cookieAccept)


        await page.waitForSelector(slider);
        const sliderValue = await page.evaluate(() => {
            const anchor = document.querySelector("#slidervalue");
            return anchor.textContent;
        })
        console.log(sliderValue)
            // console.log(searchInput);
            // await page.waitForSelector(searchInput);
            // page.focus(searchInput);
            // await page.keyboard.type("");
    } catch (e) {
        console.log(e)
    }
}

// scrapIt();