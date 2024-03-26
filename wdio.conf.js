import { step } from './tests/wdio/allure.step.js';

export const config = {
  runner: 'local',

  specs: [
    ['./tests/wdio/*.js']
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['headless', 'disable-gpu']
    }
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost:5173',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    'visual'
  ],
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: true
    }]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  afterTest: async () =>{
    await step('Закрыть браузер', async () => {
      await browser.reloadSession();
    });
  }
};
