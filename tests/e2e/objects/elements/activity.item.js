import { expect, test } from '@playwright/test';

export class ActivityItem {
  constructor(locator, index = -1, name = '') {
    this.locator = locator;
    this.index = index;
    this.name = name;
    this.nameText = this.locator.getByTestId('activity-item-name');
    this.deleteButton = this.locator.getByTestId('activity-item-delete-button');
    this.resetTimeButton = this.locator.getByTestId('select-clear-button');
    this.timeSelect = this.locator.getByTestId('select');
    this.timeToCompleteText = this.locator.getByTestId('activity-seconds-to-complete');
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
    await test.step(`Активность "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.locator).toBeVisible();
    });
  }

  async shouldBeDeleted() {
    await test.step(`Активность "${this.nameOrIndex()}" удалена`, async () => {
      await expect(this.locator).not.toBeVisible();
    });
  }

  async deleteButtonShouldBeVisible() {
    await test.step(`Кнопка удаления активности  "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.deleteButton).toBeVisible();
    });
  }

  async deleteButtonShouldBeCorrect() {
    await test.step(`Кнопка удаления активности "${this.nameOrIndex()}" отображается корректно`, async () => {
      await expect(this.deleteButton).toHaveScreenshot('activity-item-delete-button.png');
    });
  }

  async clickDeleteButton() {
    await test.step(`Нажать на кнопку удаления активности "${this.nameOrIndex()}"`, async () => {
      await this.deleteButton.click();
    });
  }

  async nameShouldBeVisible(name) {
    await test.step(`Название "${name}" активности "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.nameText).toHaveText(name);
    });
  }

  async resetTimeButtonShouldBeVisible() {
    await test.step(`Кнопка сброса времени активности "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.resetTimeButton).toBeVisible();
    });
  }

  async resetTimeButtonShouldBeCorrect() {
    await test.step(`Кнопка сброса времени активности "${this.nameOrIndex()}" отображается корректно`, async () => {
      await expect(this.resetTimeButton).toHaveScreenshot('activity-item-reset-time-button.png');
    });
  }

  async clickResetTimeButton() {
    await test.step(`Нажать на кнопку сброса времени активности "${this.nameOrIndex()}"`, async () => {
      await this.resetTimeButton.click();
    });
  }

  async timeSelectShouldHaveSelectedTime(time) {
    await test.step(`Выпадающий список с временем "${time}" активности "${this.nameOrIndex()}" отображается`, async () => {
      await this.timeSelect.scrollIntoViewIfNeeded();
      const selectedTime = await this.timeSelect.inputValue();
      await expect(this.timeSelect.locator(`option[value="${selectedTime}"]`)).toHaveText(time);
    });
  }

  async timeToCompleteShouldBeVisible(time) {
    await test.step(`Время завершения "${time}" активности "${this.nameOrIndex()}" отображается`, async () => {
      await expect(this.timeToCompleteText).toHaveText(time);
    });
  }

  async timeToCompleteShouldBeHidden() {
    await test.step(`Время завершения активности "${this.nameOrIndex()}" скрыто`, async () => {
      await expect(this.timeToCompleteText).not.toBeVisible();
    });
  }
}
