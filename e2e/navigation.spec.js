import { expect, test } from '@playwright/test';

test.describe('Navigation test', () => {
  test('Navigation should have 3 items: Timeline, Activities, Progress', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('navigation-item')).toHaveCount(3);
    await expect(page.getByTestId('navigation-item')).toHaveText(
      ['Timeline', 'Activities', 'Progress'],
      { useInnerText: true }
    );
  });

  // test('Timeline item should have icon', async ({ page }) => {
  //   await page.goto('/');
  //   const icon = page.getByTestId('timeline-link').locator('[data-slot="icon"]');
  //   const box = await icon.boundingBox();
  //   await expect(page).toHaveScreenshot('timeline-icon.png', { clip: box });
  // });
  //
  // test('Activities item should have icon', async ({ page }) => {
  //   await page.goto('/');
  //   const icon = page.getByTestId('activities-link').locator('[data-slot="icon"]');
  //   const box = await icon.boundingBox();
  //   await expect(page).toHaveScreenshot('activities-icon.png', { clip: box });
  // });
  //
  // test('Progress item should have icon', async ({ page }) => {
  //   await page.goto('/');
  //   const icon = page.getByTestId('progress-link').locator('[data-slot="icon"]');
  //   const box = await icon.boundingBox();
  //   await expect(page).toHaveScreenshot('progress-icon.png', { clip: box });
  // });
});
