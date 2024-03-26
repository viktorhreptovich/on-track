import { TimelinePage } from './objects/pages/timeline.page.js';
import { Navigation } from './objects/elements/navigation.js';
import { Header } from './objects/elements/header.js';
import { ProgressPage } from './objects/pages/progress.page.js';
import { ActivitiesPage } from './objects/pages/activities.page.js';

describe('Меню навигации', () => {

  it('При клике на logo должен быть выполнен переход на страницу timeline', async () => {
    const timelinePage = new TimelinePage();
    const activitiesPage = new ActivitiesPage();
    const header = new Header();
    const navigation = new Navigation();

    await activitiesPage.open();
    await header.clickLogo();
    await timelinePage.shouldBeOpen();
    await navigation.timelineItemShouldBeActive();
    await navigation.activitiesItemShouldNotBeActive();
    await navigation.progressItemShouldNotBeActive();
  });

  it('При клике на progress должен быть выполнен переход на стрнаицу progress', async () => {
    const timelinePage = new TimelinePage();
    const header = new Header();
    const progressPage = new ProgressPage();
    const navigation = new Navigation();

    await timelinePage.open();
    await header.clickProgress();
    await progressPage.shouldBeOpen();
    await navigation.timelineItemShouldNotBeActive();
    await navigation.activitiesItemShouldNotBeActive();
    await navigation.progressItemShouldBeActive();
  });

});
