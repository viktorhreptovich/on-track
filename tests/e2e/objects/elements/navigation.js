import { expect, test } from '@playwright/test';

const activeClass = /bg-gray-200/;


export class Navigation {

  constructor(page) {
    this.page = page;
    this.locator = page.getByTestId('navigation');
    this.timelineItem = this.locator.getByTestId('navigation-item-timeline-link');
    this.activitiesItem = this.locator.getByTestId('navigation-item-activities-link');
    this.progressItem = this.locator.getByTestId('navigation-item-progress-link');

  }

  async shouldBeVisible() {
    await test.step('Navigation should be visible', async () => {
      await expect(this.locator).toBeVisible();
    });
  }

  async shouldHaveItems(items) {
    await test.step(`Navigation should have items ${items}`, async () => {
      await expect(this.locator.getByTestId('navigation-item')).toHaveCount(items.length);
      await expect(this.locator.getByTestId('navigation-item')).toHaveText(items, { useInnerText: true });
    });
  }

  async clickTimeline() {
    await test.step('Click timeline item', async () => {
      await this.timelineItem.click();
    });
  }

  async timelineShouldHaveIcon() {
    await test.step('Timeline item should have icon', async () => {
      const icon = this.timelineItem.locator('[data-slot="icon"]');
      const box = await icon.boundingBox();
      await expect(this.page).toHaveScreenshot('timeline-icon.png', { clip: box });
    });
  }

  async clickActivities() {
    await test.step('Click activities item', async () => {
      await this.activitiesItem.click();
    });
  }

  async activitiesShouldHaveIcon() {
    await test.step('Activities item should have icon', async () => {
      const icon = this.activitiesItem.locator('[data-slot="icon"]');
      const box = await icon.boundingBox();
      await expect(this.page).toHaveScreenshot('activities-icon.png', { clip: box });
    });
  }

  async clickProgress() {
    await test.step('Click progress item', async () => {
      await this.progressItem.click();
    });
  }

  async progressShouldHaveIcon() {
    await test.step('Progress item should have icon', async () => {
      const icon = this.progressItem.locator('[data-slot="icon"]');
      const box = await icon.boundingBox();
      await expect(this.page).toHaveScreenshot('progress-icon.png', { clip: box });
    });
  }
  async timelineItemShouldBeActive() {

    await test.step('Timeline item should be active', async () => {
      await expect(this.timelineItem).toHaveClass(activeClass);
    });
  }

  async timelineItemShouldNotBeActive() {
    await test.step('Timeline item should not be active', async () => {
      await expect(this.timelineItem).not.toHaveClass(activeClass);
    });
  }

  async activitiesItemShouldBeActive() {
    await test.step('Activities item should be active', async () => {
      await expect(this.activitiesItem).toHaveClass(activeClass);
    });
  }

  async activitiesItemShouldNotBeActive() {
    await test.step('Activities item should not be active', async () => {
      await expect(this.activitiesItem).not.toHaveClass(activeClass);
    });
  }

  async progressItemShouldBeActive() {
    await test.step('Progress item should be active', async () => {
      await expect(this.progressItem).toHaveClass(activeClass);
    });
  }

  async progressItemShouldNotBeActive() {
    await test.step('Progress item should not be active', async () => {
      await expect(this.progressItem).not.toHaveClass(activeClass);
    });
  }
}
