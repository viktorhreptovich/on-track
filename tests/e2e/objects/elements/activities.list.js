import { expect, test } from '@playwright/test';
import { ActivityItem } from './activity.item.js';

export class ActivitiesList {
  constructor(locator) {
    this.locator = locator;
    this.activityItems = this.locator.getByTestId('activity-item');
    this.activityItem = (index) => new ActivityItem(this.activityItems.nth(index), index);
    this.activityItemByName = (name) => new ActivityItem(this.activityItems.filter({ hasText: name }).first(), -1, name);
  }

  async shouldBeVisible() {
    await test.step('Список активностей отображается', async () => {
      await expect(this.locator).toBeVisible();
      const itemsCount = await this.activityItems.count();
      expect(itemsCount).toBeGreaterThan(0);
    });
  }

  async deleteAllActivities() {
    await test.step('Удалить все активности', async () => {
      const itemsCount = await this.activityItems.count();
      for (let i = itemsCount - 1; i >= 0; i--) {
        await this.activityItem(i).clickDeleteButton();
      }
    });

  }
}
