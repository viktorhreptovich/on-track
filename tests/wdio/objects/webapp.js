import { step } from '@wdio/allure-reporter';
import Page from './page.js';

export class WebApp extends Page {
  async open() {
    await step('Открыть приложение', async () => {
      await super.open('/');
    });
  }
}
