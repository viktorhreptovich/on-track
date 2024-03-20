import { test } from './base.js';
import { ActivitiesPage } from './objects/pages/activities.page.js';

test.describe('Activity add form test', () => {

  test('Button "Add an activity" should be disabled', async ({ page }) => {
    const activitiesPage = new ActivitiesPage(page);

    await activitiesPage.open();
    await activitiesPage.activityForm.addActivityButtonShouldBeDisabled();
  });

  test('Button "Add an activity" should be enabled after input', async ({ page }) => {
    // await page.goto('/#activities');
    // await page.getByTestId('add-activity-input').fill('Test');
    // await expect(page.getByTestId('add-activity-button')).toBeEnabled();
    const activitiesPage = new ActivitiesPage(page);

    await activitiesPage.open();
    await activitiesPage.activityForm.typeIntoActivityInput('Test');
    await activitiesPage.activityForm.addActivityButtonShouldBeEnabled();

  });

  test('Activity should be added', async ({ page }) => {
    const activitiesPage = new ActivitiesPage(page);

    await activitiesPage.open();
    await activitiesPage.activityForm.typeIntoActivityInput('Test');
    await activitiesPage.activityForm.clickAddActivityButton();
    await activitiesPage.activitiesList.activityItemByName('Test').shouldBeVisible();

  });
});
