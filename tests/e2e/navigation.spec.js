import { test } from './base.js';
import { TimelinePage } from './objects/pages/timeline.page.js';
import { Navigation } from './objects/elements/navigation.js';
import { WebApp } from './objects/webapp.js';
import { ActivitiesPage } from './objects/pages/activities.page.js';
import { ProgressPage } from './objects/pages/progress.page.js';
import { Header } from './objects/elements/header.js';

test.describe('Navigation test', () => {
  test('Navigation should have 3 items: Timeline, Activities, Progress', async ({ page }) => {
    const timelinePage = new TimelinePage(page);
    const navigation = new Navigation(page);

    await timelinePage.open();
    await navigation.shouldBeVisible();
    await navigation.shouldHaveItems(['Timeline', 'Activities', 'Progress']);
  });

  test('Navigation items should have icons', async ({ page }) => {
    const timelinePage = new TimelinePage(page);
    const navigation = new Navigation(page);

    await timelinePage.open();
    await navigation.timelineShouldHaveIcon();
    await navigation.activitiesShouldHaveIcon();
    await navigation.progressShouldHaveIcon();
  });

  test('Navigate to Activities', async ({ page }) => {
    const webApp = new WebApp(page);
    const timelinePage = new TimelinePage(page);
    const activitiesPage = new ActivitiesPage(page);
    const progressPage = new ProgressPage(page);
    const navigation = new Navigation(page);
    const header = new Header(page);

    await webApp.open();

    await timelinePage.shouldBeOpen();
    await navigation.timelineItemShouldBeActive();
    await navigation.activitiesItemShouldNotBeActive();
    await navigation.progressItemShouldNotBeActive();

    await navigation.clickActivities();
    await activitiesPage.shouldBeOpen();
    await navigation.timelineItemShouldNotBeActive();
    await navigation.activitiesItemShouldBeActive();
    await navigation.progressItemShouldNotBeActive();

    await navigation.clickProgress();
    await progressPage.shouldBeOpen();
    await navigation.timelineItemShouldNotBeActive();
    await navigation.activitiesItemShouldNotBeActive();
    await navigation.progressItemShouldBeActive();
  });

  test('Navigate to Timeline when hash is not correct', async ({ page }) => {
    const webApp = new WebApp(page);
    const timelinePage = new TimelinePage(page);
    const navigation = new Navigation(page);

    await webApp.navigateTo('/#random-hash');
    await timelinePage.shouldBeOpen();
    await navigation.timelineItemShouldBeActive();
    await navigation.activitiesItemShouldNotBeActive();
    await navigation.progressItemShouldNotBeActive();
  });
});
