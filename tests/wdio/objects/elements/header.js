import { step } from '@wdio/allure-reporter';
import { expect } from 'expect-webdriverio';
import { $ } from '@wdio/globals';

export class Header {
  get locator() { return $('[data-testid="header"]'); }
  get logo() { return this.locator.$('[data-testid="logo"]'); }
  get progress() { return this.locator.$('[data-testid="header-progress"]'); }

  async shouldBeVisible() {
    await step('Header отображается', async () => {
      expect(await this.locator).toBeDisplayed();
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
