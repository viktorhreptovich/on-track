import { expect, test } from '@playwright/test';
import { TimelineItem } from './timeline.item.js';

export class TimelineList {
  constructor(locator) {
    this.locator = locator;
    this.timelineItems = locator.getByTestId('timeline-item');
    this.timelineItem = (index) => new TimelineItem(this.timelineItems.nth(index), index);
    this.timeLineItemByTime = (time) => new TimelineItem(this.timelineItems.getByText(time), -1, time);
  }

  async shouldBeVisible() {
    await test.step('Timeline list should be visible', async () => {
      await expect(this.locator).toBeVisible();
      const itemsCount = await this.timelineItems.count();
      expect(itemsCount).toBeGreaterThan(0);
    });
  }


}
