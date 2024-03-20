import { test } from './base.js';
import { TimelinePage } from './objects/pages/timeline.page.js';

test.describe('Страница Timeline', () => {
  test('Отображение списка интервалов на странице "Timeline"', async ({ page }) => {
    const timelinePage = new TimelinePage(page);

    await timelinePage.open();
    await timelinePage.timelineList.shouldBeVisible();

    const firstTimelineItem = await timelinePage.timelineList.timelineItem(0);
    await firstTimelineItem.shouldBeVisible();
    await firstTimelineItem.shouldHaveTimeLink('00:00');

    const secondTimelineItem = await timelinePage.timelineList.timelineItem(1);
    await secondTimelineItem.shouldBeVisible();
    await secondTimelineItem.shouldHaveTimeLink('01:00');
  });

  test('Выбор активности в текущем интервале', async ({ page }) => {
    const timelinePage = new TimelinePage(page);
    const currentHour = new Date().getHours();

    await timelinePage.open();
    await timelinePage.timelineList.shouldBeVisible();
    const currentTimelineItem = await timelinePage.timelineList.timelineItem(currentHour);

    await currentTimelineItem.selectActivity('Reading');
    await currentTimelineItem.shouldHaveSelectedActivity('Reading');


  });
});
