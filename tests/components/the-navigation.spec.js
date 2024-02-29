import { expect, test } from '@playwright/experimental-ct-vue';
import TheNavigation from '@/components/TheNavigation.vue';
import { navigationItems } from '@/navigation.js';

test.describe('TheNavigation component test', () => {

  test.use({ viewport: { width: 500, height: 500 } });

  test('TheNavigation should have 3 items: Timeline, Activities, Progress', async ({ mount, page }) => {
    const messages = [];
    const component = await mount(TheNavigation, {
      props: {
        currentPage: 'timeline'
      },
      setup: {
        navigationItems
      },
      on: {
        'navigate': (message) => {
          messages.push(message);
        }
      }
    });
    // await expect(component.locator('div')).toHaveText('Hello');
    await expect(component.getByTestId('navigation-item')).toHaveCount(3);
    await expect(component.getByTestId('navigation-item')).toHaveText(['Timeline', 'Activities', 'Progress'], { useInnerText: true });

    await component.getByTestId('activities-link').click();
    await expect(messages).toEqual(['progress']);
  });
});
