import { browser } from '@wdio/globals';
import { step } from '../allure.step.js';

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path) {
    await step(`Открыть cтраницу с адресом ${path}`, async () => {
      await browser.url(`${path}`);
    });
  }

  async navigateTo(url) {
    await step(`Перейти по адресу ${url}`, async () => {
      await browser.url(url);
    });
  }
}
