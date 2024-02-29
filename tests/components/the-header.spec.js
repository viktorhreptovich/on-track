import { expect, test } from '@playwright/experimental-ct-vue';
import TheHeader from '@/components/TheHeader.vue';


test.describe('TheHeader component test', () => {

  test.use({ viewport: { width: 500, height: 500 } });

  test('Logo should be visible', async ({ mount,  }) => {
    const component = await mount(TheHeader, {});
    await expect(component.getByTestId('logo')).toBeVisible();
  });

  test('Click on logo should navigate to timeline and emit event "goToTimeline"', async ({ mount, page }) => {
    const events = [];
    const component = await mount(TheHeader, {
      on: {
        'goToTimeline': () => {
          events.push('goToTimeline');
        }
      }
    });
    await component.getByTestId('logo').click();
    await expect(events).toEqual(['goToTimeline']);
    await expect(page).toHaveURL('#timeline');
  });

  test('Progress should be visible', async ({ mount,  }) => {
    const component = await mount(TheHeader, {});
    await expect(component.getByTestId('progress')).toBeVisible();
    await expect(component.getByTestId('progress')).toHaveText('Progress: 20%');
    await expect(component.getByTestId('progress-indicator')).toBeVisible();
  });


  test('Click on progress indicator should navigate to progress and emit event "goToProgress"', async ({
                                                                                                         mount,
                                                                                                         page
                                                                                                       }) => {
    const events = [];
    const component = await mount(TheHeader, {
      on: {
        'goToProgress': () => {
          events.push('goToProgress');
        }
      }
    });
    await component.getByTestId('progress-indicator').click();
    await expect(events).toEqual(['goToProgress']);
    await expect(page).toHaveURL('#progress');
  });

});
