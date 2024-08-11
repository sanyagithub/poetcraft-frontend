describe('Login Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the login screen with all elements', async () => {
    await expect(element(by.id('loginScreenTitle'))).toBeVisible();
    await expect(element(by.id('emailInputLogin'))).toBeVisible();
    await expect(element(by.id('passwordInputLogin'))).toBeVisible();
    await expect(element(by.id('showPasswordButton'))).toBeVisible();
    await expect(element(by.id('loginButton'))).toBeVisible();
    await expect(element(by.id('forgotPasswordLink'))).toBeVisible();
    await waitFor(element(by.id('signUpLink'))).toBeVisible();
  });

  it('should show error when login is attempted with an invalid email', async () => {
    await element(by.id('emailInputLogin')).typeText('invalid-email');
    await element(by.id('passwordInputLogin')).typeText('password123');
    await element(by.id('loginButton')).tap();

    await waitFor(element(by.text('Please enter a valid email address.'))).toBeVisible();
  });

  it('should toggle password visibility when the toggle button is pressed', async () => {
    await element(by.id('passwordInputLogin')).typeText('password123');
    await element(by.id('showPasswordButton')).tap();

    // The password should now be visible
    // Optionally, you can add checks here if your implementation allows inspecting the secureTextEntry status
  });

  it('should attempt to log in with valid credentials', async () => {
    await element(by.id('emailInputLogin')).typeText('test@example.com');
    await element(by.id('passwordInputLogin')).typeText('password123');
    await element(by.id('loginButton')).tap();

    // Expect to navigate to the main tabs screen after successful login
    await waitFor(element(by.id('mainTabsScreen'))).toBeVisible(); // Adjust this based on your actual screen ID
  });

  it('should navigate to reset password screen when "Forgot Password" is tapped', async () => {
    await element(by.id('forgotPasswordLink')).tap();

    await waitFor(element(by.id('resetPasswordScreen'))).toBeVisible(); // Adjust this based on your actual screen ID
  });

  it('should navigate to the registration screen when "Sign Up" is tapped', async () => {
    await waitFor(element(by.id('signUpLink')))
      .toBeVisible();

    await element(by.id('signUpLink')).tap();

    // Wait for the registration screen to become visible
    await waitFor(element(by.id('registerScreen')))
      .toBeVisible()
      .withTimeout(5000); // Adjust the timeout as necessary
  });
});
