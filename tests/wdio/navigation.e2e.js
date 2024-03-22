import { TimelinePage } from './objects/pages/timeline.page.js';
import { WebApp } from './objects/webapp.js';
import { Navigation } from './objects/elements/navigation.js';
import { ActivitiesPage } from './objects/pages/activities.page.js';
import { ProgressPage } from './objects/pages/progress.page.js';

describe('Меню навигации', () => {

  it('Меню навигации должно иметь 3 пункта: Timeline, Activities, Progress', async () => {
    const timelinePage = new TimelinePage();
    const navigation = new Navigation();

    await timelinePage.open();
    await navigation.shouldBeVisible();
    await navigation.shouldHaveItems(['Timeline', 'Activities', 'Progress']);
  });

  it('Navigation items should have icons', async () => {
    const timelinePage = new TimelinePage();
    const navigation = new Navigation();

    await timelinePage.open();
    await navigation.timelineShouldHaveIcon();
    await navigation.activitiesShouldHaveIcon();
    await navigation.progressShouldHaveIcon();
  });

  it('Навигация по пунктам меню', async () => {
    const webApp = new WebApp();
    const navigation = new Navigation();
    const timelinePage = new TimelinePage();
    const activitiesPage = new ActivitiesPage();
    const progressPage = new ProgressPage();


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

  it('Переход на страницу Timeline когда hash некорректен', async () => {
    const webApp = new WebApp();
    const timelinePage = new TimelinePage();
    const navigation = new Navigation();

    await webApp.open();
    await webApp.navigateTo('/#random-hash');
    await timelinePage.shouldBeOpen();
    await navigation.timelineItemShouldBeActive();
    await navigation.activitiesItemShouldNotBeActive();
    await navigation.progressItemShouldNotBeActive();
  });
});
