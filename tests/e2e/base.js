import { test as base } from '@playwright/test';
import { Console } from './objects/console.js';

export const test = base.extend({
  testHook: [
    async ({page}, use) => {

    const console = new Console(page);

    await use();

    await console.notHaveAnyWarningMessages();
    },
    { auto: true }
  ]
});
