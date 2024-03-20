import { expect as baseExpect } from '@playwright/test';

export const expect = baseExpect.extend({
  async toBeGreaterThanString(locator, expected) {
    try {
      await expect(async () => {
        const received = await locator.textContent();
        console.log(`Received: ${received>expected}`);
        expect(received>expected).toBe(true);
      }).toPass();
      return {
        message: 'passed',
        pass: true,
      };
    } catch (error) {
      return {
        message: error.message,
        pass: false,
      };
    }

  }
});
