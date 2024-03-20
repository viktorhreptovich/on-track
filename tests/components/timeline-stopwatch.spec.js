import { test } from '@playwright/experimental-ct-vue';
import TimelineStopwatch from '@/components/TimelineStopwatch.vue';
import { expect } from './fixtures.js';
import { updateTimelineItemActivitySecondsKey } from '@/keys.js';

test.describe('TimelineStopwatch component test', () => {

  test.use({ viewport: { width: 500, height: 500 } });

  test('Start and stop stopwatch', async ({ mount, page }) => {

    const timelineItem = { activitySeconds: 0, hour: new Date().getHours() };
    const component = await mount(<TimelineStopwatch timelineItem={timelineItem} />,
      {
        global: {
          provide: {
            [updateTimelineItemActivitySecondsKey]: () => {
              console.log('updateTimelineItemActivitySecondsKey');
            }
          }
        }
      }
    );

    await expect(component.getByTestId('timeline-item-timer-value')).toHaveText('00:00:00');
    await expect(component.getByTestId('timeline-stopwatch-start-button')).toBeVisible();
    await expect(component.getByTestId('timeline-stopwatch-stop-button')).toBeHidden();

    await component.getByTestId('timeline-stopwatch-start-button').click();
    await expect(component.getByTestId('timeline-stopwatch-stop-button')).toBeVisible();
    await expect(component.getByTestId('timeline-stopwatch-start-button')).toBeHidden();

    const time = await component.getByTestId('timeline-item-timer-value').textContent();

    await expect(component.getByTestId('timeline-item-timer-value')).toHaveText('00:00:03');
  })
    ;
  });
