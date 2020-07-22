const chromium = require('chrome-aws-lambda');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

/* eslint-disable no-console */
// exports.onCreatePage = ({page, actions}, {paths}) => {
//     const {createPage, deletePage} = actions;
//     const pagePath = page.path.slice(1, -1);

//     if (paths.indexOf(pagePath) >= 0) {
//         deletePage(page);
//         createPage({
//             ...page,
//             context: {
//                 downloadFile: `${pagePath}.pdf`,
//             },
//         });
//     }
// };

// Only runs during Gatsby Build process (not dev)
exports.onPostBuild = async (options, {paths, pdfGeneratorKey}) => {
    console.log('\nPost Build - generating pdfs\n');
    const launchBrowser = {
        development: puppeteerBrowser,
        netlify: chromiumBrowser,
    };

    const promises = paths.map((pathUri) =>
        pdfGeneratorKey && launchBrowser[pdfGeneratorKey]
            ? printPDF(pathUri, launchBrowser[pdfGeneratorKey])
            : console.error(
                `PDF generation failed. A valid pdfGeneratorKey (development or netlify)
                needs to be set in the plugin options.`,
            ),
    );

    await Promise.all(promises);
};

async function chromiumBrowser() {
    const executablePath = await chromium.executablePath;
    const browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
    });

    return browser;
}

async function puppeteerBrowser() {
    const browser = await puppeteer.launch({headless: true});

    return browser;
}

async function printPDF(pageName, launchBrowser) {
    const browser = await launchBrowser();
    const page = await browser.newPage();
    const htmlPath = path.join(__dirname, '..', '..', 'public', pageName, 'index.html');
    const downloadDir = path.join(__dirname, '..', '..', 'public', 'download');
    const contentHtml = fs.readFileSync(htmlPath, 'utf8');

    await page.setContent(contentHtml);

    // TODO: Need to figure out how to add styles
    // await page.addStyleTag({
    //     content: styles,
    // });
    // await page.addStyleTag({
    //     url:
    //         'https://fonts.googleapis.com/css?family=Ubuntu:300,400,500%7CMaterial+Icons%7CIceland',
    // });

    if (!fs.existsSync(downloadDir)) {
        fs.mkdirSync(downloadDir);
    }

    await page.pdf({
        format: 'A4',
        margin: {top: '1cm', bottom: '1cm'},
        path: path.join(downloadDir, `${pageName}.pdf`),
    });

    await browser.close();
}
