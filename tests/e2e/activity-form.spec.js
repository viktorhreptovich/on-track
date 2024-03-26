import { test } from './base.js';
import { ActivitiesPage } from './objects/pages/activities.page.js';

test.describe('Форма добавления активности', () => {

  test('Отображение формы добавления активности', async ({ page }) => {
    const activitiesPage = new ActivitiesPage(page);

    await activitiesPage.open();
    await activitiesPage.activityForm.shouldBeVisible();
    await activitiesPage.activityForm.activityInputShouldBeVisible();
    await activitiesPage.activityForm.addActivityButtonShouldBeVisible();
    await activitiesPage.activityForm.addActivityButtonShouldBeDisabled();
  });

  test('Кнопка "Add an activity" доступна после заполнения поля', async ({ page }) => {
    const activitiesPage = new ActivitiesPage(page);

    await activitiesPage.open();
    await activitiesPage.activityForm.typeIntoActivityInput('Test');
    await activitiesPage.activityForm.addActivityButtonShouldBeEnabled();
  });

  test('Добавление активности', async ({ page }) => {
    const activitiesPage = new ActivitiesPage(page);

    await activitiesPage.open();
    await activitiesPage.activityForm.typeIntoActivityInput('Test');
    await activitiesPage.activityForm.clickAddActivityButton();
    await activitiesPage.activitiesList.activityItemByName('Test').shouldBeVisible();
  });
});
