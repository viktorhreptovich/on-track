import { test } from '@playwright/test';

export class WebApp {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await test.step('Open the Web App', async () => {
      await this.page.goto('/');
    });
  }
  async navigateTo(url) {
    await test.step(`Navigate to ${url}`, async () => {
      await this.page.goto(url);
    });
  }
}
