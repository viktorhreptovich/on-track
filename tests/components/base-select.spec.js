import { expect, test } from '@playwright/experimental-ct-vue';
import BaseSelect from '@/components/BaseSelect.vue';

test.describe('BaseSelect component test', () => {

  test.use({ viewport: { width: 500, height: 500 } });

  test('BaseSelect should have options', async ({ mount, page }) => {

    const component = await mount(BaseSelect, {
      props: {
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' }
        ],
        placeholder: 'Select an option',
        selected: 2
      }
    });
    const select = component.locator('select');

    await expect(select.locator('option')).toHaveText(['Select an option', 'Option 1', 'Option 2', 'Option 3']);
    await expect(select).toHaveValue('2');
    await select.selectOption({ label: 'Option 3' });
    await expect(select).toHaveValue('3');
  });
});
