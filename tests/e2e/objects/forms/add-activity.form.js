import { expect, test } from '@playwright/test';

export class AddActivityForm {
  constructor(locator) {
    this.locator = locator;
    this.input = this.locator.getByTestId('add-activity-input');
    this.button = this.locator.getByTestId('add-activity-button');
  }


  async addActivityButtonShouldBeDisabled() {
    await test.step('Button "Add an activity" should be disabled', async () => {
      await expect(this.button).toBeDisabled();
    });
  }

  async addActivityButtonShouldBeEnabled() {
    await test.step('Button "Add an activity" should be enabled', async () => {
      await expect(this.button).toBeEnabled();
    });
  }

  async typeIntoActivityInput(text) {
    await test.step(`Type into "Add activity input" "${text}"`, async () => {
      await this.input.fill(text);
    });
  }
  async clickAddActivityButton() {
    await test.step('Click "Add an activity" button', async () => {
      await this.button.click();
    });
  }
}
