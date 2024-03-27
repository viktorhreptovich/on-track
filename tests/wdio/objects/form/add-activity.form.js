import { expect } from 'expect-webdriverio';
import { $ } from '@wdio/globals';
import { step } from '../../allure.step.js';

export class AddActivityForm {
  get locator() { return $('[data-testid="add-activity-form"]'); }
  get input() { return $('[data-testid="add-activity-input"]'); }
  get button() { return $('[data-testid="add-activity-button"]'); }

  async shouldBeVisible() {
    await step('Форма "Add an activity" отображается', async () => {
      await expect(this.locator).toBeDisplayed();
    });
  }

  async activityInputShouldBeVisible() {
    await step('Поле "Add activity input" отображается', async () => {
      await expect(this.input).toBeDisplayed();
    });
  }
  async typeIntoActivityInput(text) {
    await step(`Ввести в поле "Add activity input" текст "${text}"`, async () => {
      await this.input.setValue(text);
    });
  }

  async addActivityButtonShouldBeDisabled() {
    await step('Кнопка "Add an activity" неактивна', async () => {
      await expect(this.button).toBeDisabled();
    });
  }

  async addActivityButtonShouldBeEnabled() {
    await step('Кнопка "Add an activity" активна', async () => {
      await expect(this.button).toBeEnabled();
    });
  }

  async addActivityButtonShouldBeVisible() {
    await step('Кнопка "Add an activity" отображается', async () => {
      await expect(this.button).toBeDisplayed();
    });
  }
  async clickAddActivityButton() {
    await step('Нажать на "Add an activity"', async () => {
      await this.button.click();
    });
  }
}
