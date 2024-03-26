import { expect } from 'expect-webdriverio';
import Page from '../page.js';
import { browser } from '@wdio/globals';
import { step } from '../../allure.step.js';

export class ProgressPage extends Page {

  get url() {return '/#progress';}
  get content() {return $('[data-testid="progress-page"]');}

  async open() {
    await step('Открыть страницу "Progress"', async () => {
      await super.open(this.url);
    });
  }

  async shouldBeOpen() {
    await step('Страница "Progress" открыта', async () => {
      await expect(browser).toHaveUrl(expect.stringContaining(this.url));
      await expect(this.content).toBeDisplayed();
    });
  }

}
