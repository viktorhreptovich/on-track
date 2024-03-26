import allure from '@wdio/allure-reporter';

export async function step(name, fn) {
  allure.startStep(name);
  try {
    await fn();
    allure.endStep();
  } catch (err) {
    allure.endStep('failed');
    throw err;
  }
}
