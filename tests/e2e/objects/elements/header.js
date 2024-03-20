import { expect, test } from '@playwright/test';

export class Header {

  constructor(page) {
    this.page = page;
    this.locator = page.getByTestId('header');
    this.logo = this.locator.getByTestId('logo');
    this.progress = this.locator.getByTestId('header-progress');
  }

  async shouldBeVisible() {
    await test.step('Header should be visible', async () => {
      await expect(this.locator).toBeVisible();
    });
  }

  async clickLogo() {
    await test.step('Click logo', async () => {
      await this.logo.click();
    });
  }

  async clickProgress() {
    await test.step('Click progress', async () => {
      await this.progress.click();
    });
  }
}
