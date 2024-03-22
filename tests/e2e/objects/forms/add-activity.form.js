import { expect, test } from '@playwright/test';

export class AddActivityForm {
  constructor(locator) {
    this.locator = locator;
    this.input = this.locator.getByTestId('add-activity-input');
    this.button = this.locator.getByTestId('add-activity-button');
  }


  async addActivityButtonShouldBeDisabled() {
    await test.step('Кнопка "Add an activity" неактивна', async () => {
      await expect(this.button).toBeDisabled();
    });
  }

  async addActivityButtonShouldBeEnabled() {
    await test.step('Кнопка "Add an activity" активна', async () => {
      await expect(this.button).toBeEnabled();
    });
  }

  async typeIntoActivityInput(text) {
    await test.step(`Ввести в поле "Add activity input" текст "${text}"`, async () => {
      await this.input.fill(text);
    });
  }
  async clickAddActivityButton() {
    await test.step('Нажать на "Add an activity"', async () => {
      await this.button.click();
    });
  }
}
