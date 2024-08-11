import { beforeAll, beforeEach, describe, it } from "@jest/globals";

describe('Modules Screen', () => {
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

  it('should display the modules screen after a course is selected', async () => {

    // Assume you've already navigated to the Courses screen and selected a course
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verify that the Modules screen is displayed
    await waitFor(element(by.text('Explore the Modules'))).toBeVisible();
    await waitFor(element(by.id('moduleButton-1'))).toBeVisible(); // Check the first module is visible
    await waitFor(element(by.id('moduleButton-2'))).toBeVisible();
    await waitFor(element(by.id('moduleButton-3'))).toBeVisible();
    await waitFor(element(by.id('moduleButton-4'))).toBeVisible();
  });

  it('should show a loading indicator while modules are being fetched', async () => {
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verify the loading indicator is shown while data is being fetched
    await waitFor(element(by.text('Loading your modules...'))).toBeVisible();
    await waitFor(element(by.type('UIActivityIndicatorView'))).toBeVisible(); // For iOS
    // await expect(element(by.type('android.widget.ProgressBar'))).toBeVisible(); // For Android
  });

  it('should navigate to the QuestionFlow or CompletionScreen when a module 1 is tapped', async () => {
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Tap the first module
    await element(by.id('moduleButton-1')).tap();

    await waitFor(element(by.type('RCTText')))
      .toBeVisible()
  });

  it('should navigate to the QuestionFlow or CompletionScreen when a module 2 is tapped', async () => {
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Tap the first module
    await element(by.id('moduleButton-2')).tap();

    await waitFor(element(by.type('RCTText')))
      .toBeVisible()
  });

  it('should navigate to the QuestionFlow or CompletionScreen when a module 3 is tapped', async () => {
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Tap the first module
    await element(by.id('moduleButton-3')).tap();

    await waitFor(element(by.type('RCTText')))
      .toBeVisible()
  });

  it('should navigate to the QuestionFlow or CompletionScreen when a module 4 is tapped', async () => {
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Tap the first module
    await element(by.id('moduleButton-4')).tap();

    await waitFor(element(by.type('RCTText')))
      .toBeVisible()
  });
});
