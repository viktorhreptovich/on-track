import { expect } from 'expect-webdriverio';
import { step } from '../../allure.step.js';

export class TimelineItem {
  get timeLink() { return this.locator.$('[data-testid="timeline-item-link"]'); }
  get select() { return this.locator.$('[data-testid="select"]'); }
  get timerValue() { return this.locator.$('[data-testid="timeline-item-timer-value"]'); }

  constructor(locator, index = -1, time = '') {
    this.locator = locator;
    this.index = index;
    this.time = time;
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
    await step(`Интревал "${this.timeOrIndex()}" отображается`, async () => {
      await expect(this.locator).toBeDisplayed();
    });
  }

  async shouldHaveTimeLink(time) {
    await step(`Timeline item should have time link "${time}"`, async () => {
      await expect(this.timeLink).toHaveText(time);
    });
  }

  async shouldHaveActivitySelectOptions(options) {
    await step(`Timeline item should have activity select options "${options}"`, async () => {
      await expect(this.select.$$('option')).toBeElementsArrayOfSize(options.length);
      const currentOptions = await this.select.$$('option');
      const receivedOptionsTexts = await currentOptions.map(option => option.getText()) ;
      await expect(receivedOptionsTexts).toEqual(options);
    });
  }

  async selectActivity(activity) {
    await step(`Выбрать активность "${activity}" в интервале "${this.timeOrIndex()}"`, async () => {
      await this.select.selectByVisibleText(activity);
    });
  }

  async shouldHaveSelectedActivity(activity) {
    await step(`В интервале "${this.timeOrIndex()}" выбрана активность "${activity}"`, async () => {
      await this.select.scrollIntoView();
      const selectedActivity = await this.select.getValue();
      await expect(this.select.$(`option[value="${selectedActivity}"]`)).toHaveText(activity);
    });
  }

  async shouldHaveTimerValue(time) {
    await step(`Интервал "${this.timeOrIndex()}" должен иметь значение таймера: "${time}"`, async () => {
      await expect(this.timerValue).toHaveText(time);
    });
  }
}
