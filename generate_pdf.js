
import puppeteer from 'puppeteer';

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        console.log('Navigating to page...');
        await page.setViewport({ width: 1440, height: 900 });

        // Go to the local server
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 60000 });

        console.log('Page loaded. Calculating height...');
        // Calculate full height
        const bodyHandle = await page.$('body');
        const { height } = await bodyHandle.boundingBox();
        await bodyHandle.dispose();

        console.log(`Height is ${height}px. Generating PDF...`);

        // Emulate screen media to capture exactly what is seen (ignoring print styles like print:hidden)
        await page.emulateMediaType('screen');

        // Generate PDF
        await page.pdf({
            path: 'main_screen.pdf',
            width: '1440px',
            height: `${Math.ceil(height)}px`,
            printBackground: true,
        });

        console.log('PDF generated successfully: main_screen.pdf');
        await browser.close();
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    }
})();
