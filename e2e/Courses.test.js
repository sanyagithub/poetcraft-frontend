import { beforeAll, beforeEach, describe, it } from "@jest/globals";

describe('Courses Screen', () => {
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
    await waitFor(element(by.text('Begin Your Poetry Journey'))).toBeVisible();

  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the courses screen', async () => {

    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor(element(by.text('Explore Our Courses'))).toBeVisible();
  });

  it('should show a list of courses', async () => {

    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor(element(by.id('courseItem')).atIndex(0)).toBeVisible();
  });

  it('should navigate to the Modules screen when a course is tapped', async () => {

    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor(element(by.text('Modules'))).toBeVisible();
  });

  it('should display loading indicator while fetching courses', async () => {
    //await device.launchApp({ newInstance: true });

    await element(by.text('Begin Your Poetry Journey')).tap();

    await waitFor(element(by.text('Loading your courses...'))).toBeVisible();
    await waitFor(element(by.type('UIActivityIndicatorView'))).toBeVisible(); // For iOS
    // await expect(element(by.type('android.widget.ProgressBar'))).toBeVisible(); // For Android
  });

  it('should show progress bar for each course', async () => {

    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor(element(by.id('courseItem')).atIndex(0)).toBeVisible();

    // Check that the progress bar exists for the first course item
    const progressBar = element(by.id('progressBar')).atIndex(0);
    await waitFor(progressBar).toBeVisible();
  });
});
