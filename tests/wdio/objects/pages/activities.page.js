import { expect } from 'expect-webdriverio';
import { $, browser } from '@wdio/globals';
import Page from '../page.js';
import { ActivitiesList } from '../elements/activities.list.js';
import { AddActivityForm } from '../form/add-activity.form.js';
import { step } from '../../allure.step.js';

export class ActivitiesPage extends Page {
  get url() { return '/#activities'; }
  get content() { return $('[data-testid="activities-page"]'); }
  get activitiesList() { return new ActivitiesList(); }
  get activityForm() { return new AddActivityForm(); }

  async open() {
    await step('Открыть страницу "Activities"', async () => {
      await super.open(this.url);
    });
  }

  async shouldBeOpen() {
    await step('Страница "Activities" открыта', async () => {
      await expect(browser).toHaveUrl(expect.stringContaining(this.url));
      await expect(this.content).toBeDisplayed();
    });
  }
}
