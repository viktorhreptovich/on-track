import { step } from '@wdio/allure-reporter';
import { expect } from 'expect-webdriverio';
import { $, browser } from '@wdio/globals';
import Page from '../page.js';

export class ActivitiesPage extends Page {
  get url() { return '/#activities'; }
  get content() { return $('[data-testid="activities-page"]'); }

  async open() {
    await step('Открыть страницу "Activities"', async () => {
      await super.open(this.url);
    });
  }

  async shouldBeOpen() {
    await step('Страница "Activities" открыта', async () => {
      await expect(browser).toHaveUrl(expect.stringContaining(this.url));
      await expect(this.content).toBeDisplayed();
    });
  }
}
