import { test } from './base.js';
import { ActivitiesPage } from './objects/pages/activities.page.js';
import { TimelinePage } from './objects/pages/timeline.page.js';

test.describe('Работа с активностями', () => {

  test('Сброс активности в интервале на странице "Timeline" после удалении активности',
    {
      tag: '@e2e',
      annotation: [{
        type: 'bug',
        description: 'https://github.com/on-track/on-track/issues/1'
      },
        {
          type: 'owner',
          description: 'Vasya Pupkin'
        }
      ]
    },
    async ({ page }) => {
      const timelinePage = new TimelinePage(page);
      const activitiesPage = new ActivitiesPage(page);

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

  test('Add new activity in timeline item select options', async ({ page }) => {
    const timelinePage = new TimelinePage(page);
    const activitiesPage = new ActivitiesPage(page);

    await activitiesPage.open();
    await activitiesPage.activityForm.typeIntoActivityInput('Test');
    await activitiesPage.activityForm.clickAddActivityButton();

    await timelinePage.open();
    const firstTimelineItem = await timelinePage.timelineList.timelineItem(1);
    await firstTimelineItem.shouldHaveActivitySelectOptions(['Rest', 'Coding', 'Reading', 'Training', 'Test']);
  });

  test('Удаление всех активностей', async ({ page }) => {
    const activitiesPage = new ActivitiesPage(page);

    await activitiesPage.open();
    await activitiesPage.activitiesList.shouldBeVisible();

    await activitiesPage.activitiesList.deleteAllActivities();
  });

});

test.describe('Элемент активности на странице "Activities"', () => {
  test('Отображение элемента "Activity" без указания времени', async ({ page }) => {
    const activitiesPage = new ActivitiesPage(page);
    const activitiesList = activitiesPage.activitiesList;

    await activitiesPage.open();
    const codingActivityItem = activitiesList.activityItem(0);

    await codingActivityItem.deleteButtonShouldBeCorrect();
    await codingActivityItem.nameShouldBeVisible('Coding');
    await codingActivityItem.resetTimeButtonShouldBeVisible();
    await codingActivityItem.timeSelectShouldHaveSelectedTime('hh:mm');
    await codingActivityItem.timeToCompleteShouldBeHidden();
  });

  test('Отображение элемента "Activity" c указанием времени', async ({ page }) => {
    const activitiesPage = new ActivitiesPage(page);
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
