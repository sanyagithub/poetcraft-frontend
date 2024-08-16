import { beforeAll, describe, it } from "@jest/globals";

describe('00_RegisterScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
    await element(by.id('signUpLink')).tap(); // Assuming you have a navigation to this screen
  });

  it('should show registration screen', async () => {
    await expect(element(by.text('Get Started with PoetCraft'))).toBeVisible();
  });

  it('should show an error when email is invalid', async () => {
    await element(by.id('emailInput')).typeText('invalidemail');
    await element(by.id('passwordInput')).typeText('StrongPassword@123');
    await element(by.id('confirmPasswordInput')).typeText('StrongPassword@123');
    await element(by.id('scrollView')).scrollTo('bottom');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('registerButton')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await expect(
      element(by.text("Hmm, that doesn’t look like a valid email. Can you double-check?"))
    ).toBeVisible();
  });

  it('should show an error when password is invalid', async () => {
    await element(by.id('emailInput')).clearText();
    await element(by.id('emailInput')).typeText('validemail@example.com');
    await element(by.id('passwordInput')).clearText();
    await element(by.id('passwordInput')).typeText('weakpass');
    await element(by.id('confirmPasswordInput')).clearText();
    await element(by.id('confirmPasswordInput')).typeText('weakpass');
    await element(by.id('scrollView')).scrollTo('bottom');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('registerButton')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await expect(
      element(by.text("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."))
    ).toBeVisible();
  });

  it('should show an error when passwords do not match', async () => {
    await element(by.id('passwordInput')).clearText();
    await element(by.id('passwordInput')).typeText('StrongPassword@123');
    await element(by.id('confirmPasswordInput')).clearText();
    await element(by.id('confirmPasswordInput')).typeText('DifferentPassword@123');
    await element(by.id('scrollView')).scrollTo('bottom');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('registerButton')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await expect(
      element(by.text("Passwords do not match."))
    ).toBeVisible();
  });

  it('should show a loading indicator when registering', async () => {
    await element(by.id('passwordInput')).clearText();
    await element(by.id('passwordInput')).typeText('StrongPassword@123');
    await element(by.id('confirmPasswordInput')).clearText();
    await element(by.id('confirmPasswordInput')).typeText('StrongPassword@123');
    await element(by.id('scrollView')).scrollTo('bottom');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await expect(element(by.text('Join PoetCraft'))).toBeVisible();
    await element(by.text('Join PoetCraft')).tap();
    await element(by.text('Join PoetCraft')).tap();
    await new Promise(resolve => setTimeout(resolve, 2000));

    await waitFor(element(by.id('loadingIndicator'))).toBeVisible();
  });

  it('should navigate to login screen after successful registration', async () => {
    await element(by.id('emailInput')).clearText();
    await element(by.id('emailInput')).typeText('test@example.com');
    await element(by.id('passwordInput')).clearText();
    await element(by.id('passwordInput')).typeText('StrongPassword@123');
    await element(by.id('confirmPasswordInput')).clearText();
    await element(by.id('confirmPasswordInput')).typeText('StrongPassword@123');
    await element(by.id('scrollView')).scrollTo('bottom');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await expect(element(by.text('Join PoetCraft'))).toBeVisible();
    await element(by.text('Join PoetCraft')).tap()
    await element(by.text('Join PoetCraft')).tap()
    await new Promise(resolve => setTimeout(resolve, 3000));

    await expect(element(by.text('Welcome Back!'))).toBeVisible();
  });
});
