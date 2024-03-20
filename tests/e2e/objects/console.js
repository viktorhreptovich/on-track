import { expect, test } from '@playwright/test';

export class Console {
  constructor(page) {
    this.page = page;
    this.warningMessages = [];
    this.page.on('console', (message) => {
      if (message.type() === 'warning') {
        this.warningMessages.push(message.text());
      }
    });
  }

  async notHaveAnyWarningMessages() {
    await test.step('Should not have any warning messages', async () => {
      expect(this.warningMessages).toEqual([]);
    });
  }
}
