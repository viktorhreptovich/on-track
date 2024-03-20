import { test, expect } from '@playwright/test';
export class ProgressPage{
  constructor(page){
    this.page = page;
    this.url = '/#progress';
    this.content = page.getByTestId('progress-page');
  }

  async open() {
    await test.step('Open the Progress page', async () => {
      await this.page.goto(this.url);
    });
  }

  async shouldBeOpen() {
    await test.step('The Progress page should be open', async () => {
      await expect(this.page).toHaveURL(this.url);
      await expect(this.content).toBeVisible();
    });
  }
}
