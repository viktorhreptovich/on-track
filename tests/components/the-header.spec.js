import { expect, test } from '@playwright/experimental-ct-vue';
import TheHeader from '@/components/TheHeader.vue';


test.describe('TheHeader component test', () => {

  test.use({ viewport: { width: 500, height: 500 } });

  test('Logo should be visible', async ({ mount }) => {
    const component = await mount(TheHeader, {});
    await expect(component.getByTestId('logo')).toBeVisible();
  });

  test('Click on logo should navigate to timeline', async ({ mount, page }) => {
    const component = await mount(TheHeader, {});
    await component.getByTestId('logo').click();
    await expect(page).toHaveURL('#timeline');
  });

  test('Progress should be visible', async ({ mount }) => {
    const component = await mount(TheHeader, {});
    await expect(component.getByTestId('header-progress')).toBeVisible();
    await expect(component.getByTestId('header-progress')).toHaveText('Progress: 20%');
    await expect(component.getByTestId('header-progress-indicator')).toBeVisible();
  });


  test('Click on progress indicator should navigate to progress',
    async ({ mount, page }) => {
      const component = await mount(TheHeader, {});
      await component.getByTestId('header-progress-indicator').click();
      await expect(page).toHaveURL('#progress');
    });

});
