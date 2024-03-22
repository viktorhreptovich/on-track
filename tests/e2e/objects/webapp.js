import { test } from '@playwright/test';

export class WebApp {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await test.step('Открыть приложение', async () => {
      await this.page.goto('/');
    });
  }
  async navigateTo(url) {
    await test.step(`Перейти по адресу ${url}`, async () => {
      await this.page.goto(url);
    });
  }
}
