import { expect, test } from '@playwright/test';

export class AddActivityForm {
  constructor(page) {
    this.locator = page.getByTestId('add-activity-form');
    this.input = page.getByTestId('add-activity-input');
    this.button = page.getByTestId('add-activity-button');
  }

  async shouldBeVisible() {
    await test.step('Форма "Add an activity" отображается', async () => {
      await expect(this.locator).toBeVisible();
    });
  }

  async activityInputShouldBeVisible() {
    await test.step('Поле "Add activity input" отображается', async () => {
      await expect(this.input).toBeVisible();
    });
  }
  async typeIntoActivityInput(text) {
    await test.step(`Ввести в поле "Add activity input" текст "${text}"`, async () => {
      await this.input.fill(text);
    });
  }

  async addActivityButtonShouldBeDisabled() {
    await test.step('Кнопка "Add an activity" неактивна', async () => {
      await expect(this.button).toBeDisabled();
    });
  }

  async addActivityButtonShouldBeVisible() {
    await test.step('Кнопка "Add an activity" отображается', async () => {
      await expect(this.button).toBeVisible();
    });
  }
  async addActivityButtonShouldBeEnabled() {
    await test.step('Кнопка "Add an activity" активна', async () => {
      await expect(this.button).toBeEnabled();
    });
  }
  async clickAddActivityButton() {
    await test.step('Нажать на "Add an activity"', async () => {
      await this.button.click();
    });
  }

}
