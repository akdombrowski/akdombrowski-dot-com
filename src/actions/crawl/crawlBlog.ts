// Import puppeteer
import puppeteer, { type Browser } from "puppeteer";

export const crawl = async (props: { url: string }) => {
  const browser = await puppeteer.launch();

  try {
    const { url } = props;

    // Create a page
    const page = await browser.newPage();

    // Go to your site
    await page.goto(url);

    // Query for an element handle.
    const element = await page.waitForSelector("div > .class-name");

    if (element) {
      // Do something with element...
      await element.click(); // Just an example.

      // Dispose of handle
      await element.dispose();
    }
  } catch (error) {
  } finally {
    if (browser) {
      // Close browser.
      await browser.close();
    }
  }
};
