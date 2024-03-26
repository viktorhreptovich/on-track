import { expect } from 'expect-webdriverio';
import { $ } from '@wdio/globals';
import { step } from '../../allure.step.js';

export class Header {
  get locator() { return $('[data-testid="header"]'); }
  get logo() { return this.locator.$('[data-testid="logo"]'); }
  get progress() { return this.locator.$('[data-testid="header-progress"]'); }

  async shouldBeVisible() {
    await step('Header отображается', async () => {
      await expect(await this.locator).toBeDisplayed();
    });
  }

  async clickLogo() {
    await step('Нажать на logo', async () => {
      await this.logo.click();
    });
  }

  async clickProgress() {
    await step('Нажать на progress', async () => {
      await this.progress.click();
    });
  }
}
