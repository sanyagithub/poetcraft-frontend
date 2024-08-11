describe('RegisterScreen', () => {
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
    await element(by.id('registerButton')).tap();

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
    await element(by.id('registerButton')).tap();

    await expect(
      element(by.text("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."))
    ).toBeVisible();
  });

  it('should show an error when passwords do not match', async () => {
    await element(by.id('passwordInput')).clearText();
    await element(by.id('passwordInput')).typeText('StrongPassword@123');
    await element(by.id('confirmPasswordInput')).clearText();
    await element(by.id('confirmPasswordInput')).typeText('DifferentPassword@123');
    await element(by.id('registerButton')).tap();

    await waitFor(
      element(by.text("Passwords do not match."))
    ).toBeVisible();
  });

  it('should show a loading indicator when registering', async () => {
    await element(by.id('passwordInput')).clearText();
    await element(by.id('passwordInput')).typeText('StrongPassword@123');
    await element(by.id('confirmPasswordInput')).clearText();
    await element(by.id('confirmPasswordInput')).typeText('StrongPassword@123');
    await element(by.id('registerButton')).tap();

    await waitFor(element(by.id('loadingIndicator'))).toBeVisible();
  });

  it('should navigate to login screen after successful registration', async () => {
    await element(by.id('emailInput')).clearText();
    await element(by.id('emailInput')).typeText('newemail@example.com');
    await element(by.id('passwordInput')).clearText();
    await element(by.id('passwordInput')).typeText('StrongPassword@123');
    await element(by.id('confirmPasswordInput')).clearText();
    await element(by.id('confirmPasswordInput')).typeText('StrongPassword@123');
    await element(by.id('registerButton')).tap();

    await waitFor(element(by.text('Welcome Back!'))).toBeVisible();
  });
});
