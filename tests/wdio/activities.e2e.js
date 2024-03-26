import { TimelinePage } from './objects/pages/timeline.page.js';
import { ActivitiesPage } from './objects/pages/activities.page.js';

describe('Работа с активностями', () => {

  it('Сброс активности в интервале на странице "Timeline" после удалении активности', async () => {
    const timelinePage = new TimelinePage();
    const activitiesPage = new ActivitiesPage();

    await activitiesPage.open();
    await activitiesPage.activitiesList.shouldBeVisible();

    const codingActivity = await activitiesPage.activitiesList.activityItemByName('Coding');
    await codingActivity.clickDeleteButton();
    await codingActivity.shouldBeDeleted();

    await timelinePage.open();
    await timelinePage.timelineList.shouldBeVisible();
    const thirdTimelineItem = await timelinePage.timelineList.timelineItem(3);
    await thirdTimelineItem.shouldHaveSelectedActivity('Rest');
    await thirdTimelineItem.shouldHaveTimerValue('00:00:00');
  });

  it('Удаление всех активностей', async () => {
    const activitiesPage = new ActivitiesPage();

    await activitiesPage.open();
    await activitiesPage.activitiesList.shouldBeVisible();
    await activitiesPage.activitiesList.deleteAllActivities();
  });

  it('Отображение активности в выпадающем списке временного интервала после добавления', async () => {
    const timelinePage = new TimelinePage();
    const activitiesPage = new ActivitiesPage();

    await activitiesPage.open();
    await activitiesPage.activityForm.typeIntoActivityInput('Test');
    await activitiesPage.activityForm.clickAddActivityButton();

    await timelinePage.open();
    const firstTimelineItem = await timelinePage.timelineList.timelineItem(1);
    await firstTimelineItem.shouldHaveActivitySelectOptions(['Rest', 'Coding', 'Reading', 'Training', 'Test']);
  });

});

describe('Элемент активности на странице "Activities"', () => {

  it('Отображение элемента "Activity" без указания времени', async () => {
    const activitiesPage = new ActivitiesPage();
    const activitiesList =activitiesPage.activitiesList;

    await activitiesPage.open();
    const codingActivityItem = activitiesList.activityItem(0);

    await codingActivityItem.deleteButtonShouldBeCorrect();
    await codingActivityItem.nameShouldBeVisible('Coding');
    await codingActivityItem.resetTimeButtonShouldBeVisible();
    await codingActivityItem.timeSelectShouldHaveSelectedTime('hh:mm');
    await codingActivityItem.timeToCompleteShouldBeHidden();
  });

  it('Отображение элемента "Activity" c указанием времени', async () => {
    const activitiesPage = new ActivitiesPage();
    const activitiesList = activitiesPage.activitiesList;

    await activitiesPage.open();
    const codingActivityItem = activitiesList.activityItem(1);

    await codingActivityItem.deleteButtonShouldBeCorrect();
    await codingActivityItem.nameShouldBeVisible('Reading');
    await codingActivityItem.resetTimeButtonShouldBeVisible();
    await codingActivityItem.timeSelectShouldHaveSelectedTime('01:00');
    await codingActivityItem.timeToCompleteShouldBeVisible('-00:10:00');
  });
});


