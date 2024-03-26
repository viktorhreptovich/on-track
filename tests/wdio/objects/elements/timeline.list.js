import { expect } from 'expect-webdriverio';
import { TimelineItem } from './timeline.item.js';
import { step } from '../../allure.step.js';

export class TimelineList {
  get timelineItems() { return this.locator.$$('[data-testid="timeline-item"]'); }
  timelineItem(index) { return new TimelineItem(this.timelineItems[index], index);}

  constructor(locator) {
    this.locator = locator;
  }

  async shouldBeVisible() {
    await step('Временная лента отображается', async () => {
      await expect(this.locator).toBeDisplayed();
    });
  }
}
