import { expect, test } from '@playwright/test';
import { AddActivityForm } from '../forms/add-activity.form.js';
import { ActivitiesList } from '../elements/activities.list.js';

export class ActivitiesPage {
  constructor(page) {
    this.page = page;
    this.url = '/#activities';
    this.content = page.getByTestId('activities-page');
    this.activitiesList = new ActivitiesList(this.page.getByTestId('activities-list'));
    this.activityForm = new AddActivityForm(this.page);
  }

  async open() {
    await test.step('Открыть страницу "Activities"', async () => {
      await this.page.goto(this.url);
    });
  }

  async shouldBeOpen() {
    await test.step('Страница "Activities" открыта', async () => {
      await expect(this.page).toHaveURL(this.url);
      await expect(this.content).toBeVisible();
    });
  }
}
