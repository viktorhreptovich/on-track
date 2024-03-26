import Page from './page.js';
import { step } from '../allure.step.js';

export class WebApp extends Page {
  async open() {
    await step('Открыть приложение', async () => {
      await super.open('/');
    });
  }
}
