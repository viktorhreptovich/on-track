import { expect, test } from '@playwright/experimental-ct-vue';
import TheNavigation from '@/components/TheNavigation.vue';

test.describe('TheNavigation component test', () => {

  test.use({ viewport: { width: 500, height: 500 } });

  test('TheNavigation should have 3 items: Timeline, Activities, Progress', async ({ mount, page }) => {

    const component = await mount(TheNavigation, {});

    await expect(component.getByTestId('navigation-item')).toHaveCount(3);
    await expect(component.getByTestId('navigation-item')).toHaveText(['Timeline', 'Activities', 'Progress'], { useInnerText: true });
    await expect(component.getByTestId('navigation-item-timeline-link')).toHaveClass(/bg-gray-200/);

    await component.getByTestId('navigation-item-activities-link').click();
    await expect(page).toHaveURL('#activities');

    await component.getByTestId('navigation-item-progress-link').click();
    await expect(page).toHaveURL('#progress');
  });
});
