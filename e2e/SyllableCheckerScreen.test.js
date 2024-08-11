import { beforeAll, beforeEach, it } from "@jest/globals";

describe('Syllable Checker Screen', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
    await element(by.id('emailInputLogin')).typeText('test@example.com');
    await element(by.id('passwordInputLogin')).typeText('StrongPassword@123');
    await element(by.id('passwordInputLogin')).tapReturnKey();

    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('loginButton')).tap();

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Ensure we are on the home screen
    await waitFor(element(by.id('mainTabsScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate to the Syllable Checker screen from Main Tabs', async () => {
    await element(by.text('Syllable Stress')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor(element(by.id('syllableInput'))).toBeVisible();
  });

  it('should display an error if no word is entered', async () => {
    await element(by.text('Syllable Stress')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('analyzeButton')).tap();
    await waitFor(element(by.text('Oops! It looks like you forgot to enter a word.'))).toBeVisible();
  });

  it('should display loading indicator while fetching syllable data', async () => {
    await element(by.text('Syllable Stress')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('syllableInput')).typeText('example');
    await element(by.id('analyzeButton')).tap();
    await waitFor(element(by.id('loadingIndicator'))).toBeVisible();
  });

  it('should display syllable stress results when a valid word is entered', async () => {
    await element(by.text('Syllable Stress')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('syllableInput')).typeText('example');
    await element(by.id('analyzeButton')).tap();

    await new Promise(resolve => setTimeout(resolve, 5000));

    // // Wait for loading to finish
    // await waitFor(element(by.id('syllableList')))
    //   .toBeVisible()
    //   .withTimeout(5000);

    await waitFor(element(by.id('syllableList'))).toBeVisible();
  });
});
