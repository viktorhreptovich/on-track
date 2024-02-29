import { expect, test } from '@playwright/test';

test.describe('Header test', () => {
  test('Click on logo should navigate to timeline', async ({ page }) => {
    await page.goto('/#progress');
    await page.getByTestId('logo').click();
    await expect(page).toHaveURL('#timeline');
    await expect(page.getByTestId('navigation-item-timeline-link')).toHaveClass(/bg-gray-200/);
  });

  test('Click on progress should navigate to progress', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('progress').click();
    await expect(page).toHaveURL('#progress');
    await expect(page.getByTestId('navigation-item-progress-link')).toHaveClass(/bg-gray-2001/);
  });
});
