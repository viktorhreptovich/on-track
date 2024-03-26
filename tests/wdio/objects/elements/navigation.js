import { $ } from '@wdio/globals';
import { expect } from 'expect-webdriverio';
import { step } from '../../allure.step.js';

const activeClass = /bg-gray-200/;

export class Navigation {
  get locator() { return $('[data-testid="navigation"]'); }
  get timelineItem() { return this.locator.$('[data-testid="navigation-item-timeline-link"]'); }
  get activitiesItem() { return this.locator.$('[data-testid="navigation-item-activities-link"]'); }
  get progressItem() { return this.locator.$('[data-testid="navigation-item-progress-link"]'); }

  async shouldBeVisible() {
    await step('Меню навигации отображается', async () => {
      await expect(this.locator).toBeDisplayed();
    });
  }

  async shouldHaveItems(items) {
    await step(`Меню навигации содержит: ${items}`, async () => {
      await expect(await this.locator.$$('[data-testid="navigation-item"]')).toBeElementsArrayOfSize(items.length);
      const itemsTexts = await this.locator.$$('[data-testid="navigation-item"]').map(item => item.getText());
      await expect(itemsTexts).toEqual(items);
    });
  }

  async clickTimeline() {
    await step('Нажать на пункт "timeline" в меню навигации', async () => {
      await this.timelineItem.click();
    });
  }

  async timelineItemShouldBeActive() {
    await step('Пункт "timeline" в меню активен', async () => {
      await expect(await this.timelineItem).toHaveElementClass(activeClass);
    });
  }

  async timelineItemShouldNotBeActive() {
    await step('Пункт "timeline" в меню неактивен', async () => {
      await expect(await this.timelineItem).not.toHaveElementClass(activeClass);
    });
  }

  async clickActivities() {
    await step('Нажать на пункт "activities" в меню навигации', async () => {
      await this.activitiesItem.click();
    });
  }

  async activitiesItemShouldBeActive() {
    await step('Пункт "activities" в меню активен', async () => {
      await expect(this.activitiesItem).toHaveElementClass(activeClass);
    });
  }

  async activitiesItemShouldNotBeActive() {
    await step('Пункт "activities" в меню неактивен', async () => {
      await expect(this.activitiesItem).not.toHaveElementClass(activeClass);
    });
  }

  async clickProgress() {
    await step('Нажать на пункт "progress" в меню навигации', async () => {
      await this.progressItem.click();
    });
  }

  async progressItemShouldBeActive() {
    await step('Пункт "progress" в меню активен', async () => {
      await expect(this.progressItem).toHaveElementClass(activeClass);
    });
  }

  async progressItemShouldNotBeActive() {
    await step('Пункт "progress" в меню неактивен', async () => {
      await expect(this.progressItem).not.toHaveElementClass(activeClass);
    });
  }
  async timelineShouldHaveIcon() {
    await step('Пункт "Timeline" в меню имеет иконку', async () => {
      const icon = this.timelineItem.$('[data-slot="icon"]');
      await expect(icon).toMatchElementSnapshot('timeline-icon.png', { threshold: 0.01 });
    });
  }

  async activitiesShouldHaveIcon() {
    await step('Пункт "Activities" в меню имеет иконку', async () => {
      const icon = await this.activitiesItem.$('[data-slot="icon"]');
      await expect(icon).toMatchElementSnapshot('activities-icon.png', { threshold: 0.01 });
    });
  }

  async progressShouldHaveIcon() {
    await step('Пункт "Progress" в меню имеет иконку', async () => {
      const icon = await this.progressItem.$('[data-slot="icon"]');
      await expect(icon).toMatchElementSnapshot('progress-icon.png', { threshold: 0.01 });
    });
  }
}
