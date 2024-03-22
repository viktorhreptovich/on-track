import { step } from '@wdio/allure-reporter';
import { $, browser } from '@wdio/globals';
import { expect } from 'expect-webdriverio';
import Page from '../page.js';
import { TimelineList } from '../elements/timeline.list.js';


export class TimelinePage extends Page {
  get url() {return '/#timeline';}
  get content() {return $('[data-testid="timeline-page"]');}
  get timelineList() {return new TimelineList($('[data-testid="timeline-list"]'));}


  async open() {
    await step('Открыть страницу "Timeline"', async () => {
      await super.open(this.url);
    });
  }

  async shouldBeOpen() {
    await step('Страница "Timeline" открыта', async () => {
      await expect(browser).toHaveUrl(expect.stringContaining(this.url));
      await expect(this.content).toBeDisplayed();
    });
  }
}


