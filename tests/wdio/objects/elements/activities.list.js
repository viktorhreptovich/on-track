import { ActivityItem } from './activity.item.js';
import { step } from '@wdio/allure-reporter';
import { expect } from 'expect-webdriverio';
import { $ } from '@wdio/globals';
import { text } from 'node:stream/consumers';

export class ActivitiesList {

  get locator() {return $('[data-testid="activities-list"]');}
  get activityItems() { return this.locator.$$('[data-testid="activity-item"]'); }
  get activityItem() { return (index) => new ActivityItem(this.activityItems[index], index);}
  get activityItemByName() {
    return (name) => {
      const item = this.locator.$(`//li[@data-testid="activity-item" and //*[text()="${name}"]]`);
      return new ActivityItem(item, -1, name);
    };
  }

  async shouldBeVisible() {
    await step('Список активностей отображается', async () => {
      await expect(this.locator).toBeDisplayed();
      const itemsCount = await this.activityItems.length;
      expect(itemsCount).toBeGreaterThan(0);
    });
  }

  async deleteAllActivities() {
    await step('Удалить все активности', async () => {
      const itemsCount = await this.activityItems.length;
      for (let i = itemsCount - 1; i >= 0; i--) {
        await this.activityItem(i).clickDeleteButton();
      }
    });
  }
}
