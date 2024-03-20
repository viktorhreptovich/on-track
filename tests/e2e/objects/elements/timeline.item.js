import { expect, test } from '@playwright/test';
export class TimelineItem{
  constructor(locator, index = -1, time = '') {
    this.locator = locator;
    this.index = index;
    this.time = time;
    this.timeLink = this.locator.getByTestId('timeline-item-link');
    this.select = this.locator.getByTestId('select');
    this.timerValue = this.locator.getByTestId('timeline-item-timer-value');
  }

  timeOrIndex() {
    if (this.time.length > 0) {
      return `"${this.time}"`;
    }
    if (this.index >= 0) {
      return `[${this.index}]`;
    }
    return '';
  }

  async shouldBeVisible() {
    await test.step(`Интревал "${this.timeOrIndex()}" отображается`, async () => {
      await expect(this.locator).toBeVisible();
    });
  }

  async timeLinkShouldBeActive() {
    await test.step(`Интревал "${this.timeOrIndex()}" активен`, async () => {
      await expect(this.timeLink).toHaveClass(/bg-blue-600/);
    });
  }

  async timeLinkShouldBeInactive() {
    await test.step(`Интревал "${this.timeOrIndex()}" неактивен`, async () => {
      await expect(this.timeLink).not.toHaveClass(/bg-blue-600/);
    });
  }

  async shouldHaveTimeLink(time) {
    await test.step(`Timeline item should have time link "${time}"`, async () => {
      await expect(this.timeLink).toHaveText(time);
    });
  }

  async shouldHaveActivitySelectOptions(options) {
    await test.step(`Timeline item should have activity select options "${options}"`, async () => {
      await expect(this.select.locator('option')).toHaveText(options, { useInnerText: true });
    });
  }


  async selectActivity(activity) {
    await test.step(`Выбрать активность "${activity}" в интервале "${this.timeOrIndex()}"`, async () => {
      await this.select.selectOption(activity);
    });
  }

  async shouldHaveSelectedActivity(activity) {
    await test.step(`В интервале "${this.timeOrIndex()}" выбрана активность "${activity}"`, async () => {
      await this.select.scrollIntoViewIfNeeded();
      const selectedActivity = await this.select.inputValue();
      await expect(this.select.locator(`option[value="${selectedActivity}"]`)).toHaveText(activity);
    });
  }

  async shouldHaveTimerValue(time) {
    await test.step(`Интервал "${this.timeOrIndex()}" должен иметь значение таймера: "${time}"`, async () => {
      await expect(this.timerValue).toHaveText(time);
    });
  }
}
