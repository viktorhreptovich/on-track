import { test } from './base.js';
import { TimelinePage } from './objects/pages/timeline.page.js';
import { Navigation } from './objects/elements/navigation.js';
import { WebApp } from './objects/webapp.js';
import { ActivitiesPage } from './objects/pages/activities.page.js';
import { ProgressPage } from './objects/pages/progress.page.js';

test.describe('Меню навигации', () => {
  test('Меню навигации должно иметь 3 пункта: Timeline, Activities, Progress', async ({ page }) => {
    const timelinePage = new TimelinePage(page);
    const navigation = new Navigation(page);

    await timelinePage.open();
    await navigation.shouldBeVisible();
    await navigation.shouldHaveItems(['Timeline', 'Activities', 'Progress']);
  });

  test('Пункты меню должны иметь иконки', async ({ page }) => {
    const timelinePage = new TimelinePage(page);
    const navigation = new Navigation(page);

    await timelinePage.open();
    await navigation.timelineShouldHaveIcon();
    await navigation.activitiesShouldHaveIcon();
    await navigation.progressShouldHaveIcon();
  });

  test('Навигация по пунктам меню', async ({ page }) => {
    const webApp = new WebApp(page);
    const timelinePage = new TimelinePage(page);
    const activitiesPage = new ActivitiesPage(page);
    const progressPage = new ProgressPage(page);
    const navigation = new Navigation(page);

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

  test('Переход на страницу Timeline когда hash некорректен', async ({ page }) => {
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
