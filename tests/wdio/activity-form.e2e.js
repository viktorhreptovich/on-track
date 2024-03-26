import { ActivitiesPage } from './objects/pages/activities.page.js';

describe('Форма добавления активности', () => {
  it('Отображение формы добавления активности', async () => {
    const activitiesPage = new ActivitiesPage();

    await activitiesPage.open();
    await activitiesPage.activityForm.shouldBeVisible();
    await activitiesPage.activityForm.activityInputShouldBeVisible();
    await activitiesPage.activityForm.addActivityButtonShouldBeVisible();
    await activitiesPage.activityForm.addActivityButtonShouldBeDisabled();
  });

  it('Кнопка "Add an activity" доступна после заполнения поля', async () => {
    const activitiesPage = new ActivitiesPage();

    await activitiesPage.open();
    await activitiesPage.activityForm.typeIntoActivityInput('Test');
    await activitiesPage.activityForm.addActivityButtonShouldBeEnabled();
  });

  it('Добавление активности', async () => {
    const activitiesPage = new ActivitiesPage();

    await activitiesPage.open();
    await activitiesPage.activityForm.typeIntoActivityInput('Test');
    await activitiesPage.activityForm.clickAddActivityButton();
    await activitiesPage.activitiesList.activityItemByName('Test').shouldBeVisible();
  });
});
