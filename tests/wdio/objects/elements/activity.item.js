import { expect } from 'expect-webdriverio';
import { step } from '../../allure.step.js';

export class ActivityItem {
  get nameText() { return this.locator.$('[data-testid="activity-item-name"]'); }
  get deleteButton() { return this.locator.$('[data-testid="activity-item-delete-button"]'); }
  get resetTimeButton() { return this.locator.$('[data-testid="select-clear-button"]'); }
  get timeSelect() { return this.locator.$('[data-testid="select"]'); }
  get timeToCompleteText() { return this.locator.$('[data-testid="activity-seconds-to-complete"]'); }


  constructor(locator, index = -1, name = '') {
    this.locator = locator;
    this.index = index;
    this.name = name;
  }

  nameOrIndex() {
    if (this.name.length > 0) {
      return this.name;
    }
    if (this.index >= 0) {
      return `[${this.index}]`;
    }
    return '';
  }

  async shouldBeVisible() {
    await step(`Активность "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.locator).toBeDisplayed();
    });
  }

  async shouldBeDeleted() {
    await step(`Активность "${this.nameOrIndex()}" удалена`, async () => {
      await expect(this.locator).not.toBeDisplayed();
    });
  }

  async deleteButtonShouldBeVisible() {
    await step(`Кнопка удаления активности  "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.deleteButton).toBeDisplayed();
    });
  }

  async deleteButtonShouldBeCorrect() {
    await step(`Кнопка удаления активности "${this.nameOrIndex()}" отображается корректно`, async () => {
      await expect(this.deleteButton).toMatchElementSnapshot('activity-item-delete-button.png', { threshold: 0.01 });
    });
  }

  async clickDeleteButton() {
    await step(`Нажать на кнопку удаления активности "${this.nameOrIndex()}"`, async () => {
      await this.deleteButton.click();
    });
  }

  async nameShouldBeVisible(name) {
    await step(`Название "${name}" активности "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.nameText).toHaveText(name);
    });
  }

  async resetTimeButtonShouldBeVisible() {
    await step(`Кнопка сброса времени активности "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.resetTimeButton).toBeDisplayed();
    });
  }

  async resetTimeButtonShouldBeCorrect() {
    await step(`Кнопка сброса времени активности "${this.nameOrIndex()}" отображается корректно`, async () => {
      await expect(this.resetTimeButton).toMatchElementSnapshot('activity-item-reset-time-button.png', { threshold: 0.01 });
    });
  }

  async clickResetTimeButton() {
    await step(`Нажать на кнопку сброса времени активности "${this.nameOrIndex()}"`, async () => {
      await this.resetTimeButton.click();
    });
  }

  async timeSelectShouldHaveSelectedTime(time) {
    await step(`Выпадающий список с временем "${time}" активности "${this.nameOrIndex()}" отображается`, async () => {
      await this.timeSelect.scrollIntoView();
      const selectedTime = await this.timeSelect.getValue();
      await expect(this.timeSelect.$(`option[value="${selectedTime}"]`)).toHaveText(time);
    });
  }

  async timeToCompleteShouldBeVisible(time) {
    await step(`Время завершения "${time}" активности "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.timeToCompleteText).toHaveText(time);
    });
  }

  async timeToCompleteShouldBeHidden() {
    await step(`Время завершения активности "${this.nameOrIndex()}" скрыто`, async () => {
      await expect(this.timeToCompleteText).not.toBeDisplayed();
    });
  }
}
