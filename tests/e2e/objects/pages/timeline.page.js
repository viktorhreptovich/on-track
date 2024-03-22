import { test, expect } from '@playwright/test';
import { TimelineList } from '../elements/timeline.list.js';

export class TimelinePage {

  constructor(page) {
    this.page = page;
    this.url = '/#timeline';
    this.content = page.getByTestId('timeline-page');
    this.timelineList = new TimelineList(page.getByTestId('timeline-list'));
  }


  async open() {
    await test.step('Открыть страницу "Timeline"', async () => {
      await this.page.goto(this.url);
    });
  }

  async shouldBeOpen() {
    await test.step('Страница "Timeline" открыта', async () => {
      await expect(this.page).toHaveURL(this.url);
      await expect(this.content).toBeVisible();
    });
  }
}
