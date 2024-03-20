import { test } from './base.js';
import { TimelinePage } from './objects/pages/timeline.page.js';
import { ProgressPage } from './objects/pages/progress.page.js';
import { Header } from './objects/elements/header.js';
import { Navigation } from './objects/elements/navigation.js';
import { ActivitiesPage } from './objects/pages/activities.page.js';

test.describe('Header test', () => {
  test('Click on logo should navigate to timeline', async ({ page }) => {
    const timelinePage = new TimelinePage(page);
    const header = new Header(page);
    const progressPage = new ProgressPage(page);
    const navigation = new Navigation(page);

    await timelinePage.open();
    await header.clickProgress();
    await progressPage.shouldBeOpen();
    await navigation.timelineItemShouldNotBeActive();
    await navigation.activitiesItemShouldNotBeActive();
    await navigation.progressItemShouldBeActive();
  });

  test('Click on progress should navigate to progress', async ({ page }) => {
    const timelinePage = new TimelinePage(page);
    const activitiesPage = new ActivitiesPage(page);
    const header = new Header(page);
    const navigation = new Navigation(page);

    await activitiesPage.open();
    await header.clickLogo();
    await timelinePage.shouldBeOpen();
    await navigation.timelineItemShouldBeActive();
    await navigation.activitiesItemShouldNotBeActive();
    await navigation.progressItemShouldNotBeActive();
  });
});
