import { beforeAll, beforeEach, describe, it } from "@jest/globals";

describe('HomeScreen', () => {
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

  it('should display the heading on the home screen', async () => {
    await waitFor(element(by.text('Dive Into the Rhythm of Poetry'))).toBeVisible();
  });

  it('should display the image on the home screen', async () => {
    await waitFor(element(by.type('ImageView'))).toBeVisible(); // Adjust to match the actual type
  });

  it('should display the description text on the home screen', async () => {
    await waitFor(element(by.text('Unveil the Secrets of Meter and Transform Your Words into Art!'))).toBeVisible();
  });

  it('should display the ready text on the home screen', async () => {
    await waitFor(element(by.text('Are You Ready to Start Your Journey?'))).toBeVisible();
  });


  it('should navigate to Courses screen when the button is tapped', async () => {

    await waitFor(element(by.text('Begin Your Poetry Journey'))).toBeVisible();

    await element(by.text('Begin Your Poetry Journey')).tap();

    await waitFor(element(by.id('coursesScreen'))).toBeVisible();

  });
});
