import { afterAll, beforeAll, beforeEach, describe, it } from "@jest/globals";

describe('All Modules Tests with Dynamic Question Types', () => {
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
;
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should test all question types in Module 2', async () => {
    await waitFor(element(by.text('Begin Your Poetry Journey'))).toBeVisible()
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Tap on the module by index (1-based index)
    await element(by.id('moduleButton-2')).tap();

    try {
      await waitFor(element(by.text("What is an Accented or Stressed Syllable?"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step ")
    }

    try {
      await waitFor(element(by.text("Components of Accent"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step ")
    }

    try {
      await waitFor(element(by.text("A syllable that is more heavily stressed or emphasized than others"))).toBeVisible();
      await element(by.text("A syllable that is more heavily stressed or emphasized than others")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Loudness, length, and pitch"))).toBeVisible();
      await element(by.text("Loudness, length, and pitch")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("It is the first step in learning to scan poetry"))).toBeVisible();
      await element(by.text("It is the first step in learning to scan poetry")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Reading a list of heteronyms aloud and noticing the accent components"))).toBeVisible();
      await element(by.text("Reading a list of heteronyms aloud and noticing the accent components")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Exaggerating the difference between the syllables by whispering one syllable softly and shouting the other syllable loudly"))).toBeVisible();
      await element(by.text("Exaggerating the difference between the syllables by whispering one syllable softly and shouting the other syllable loudly")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Both syllables"))).toBeVisible();
      await element(by.text("Both syllables")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Imagine shouting the word or phrase to a friend across a large room and embed the word in a natural sentence"))).toBeVisible();
      await element(by.text("Imagine shouting the word or phrase to a friend across a large room and embed the word in a natural sentence")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("MON"))).toBeVisible();
      await element(by.text("MON")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("PUR"))).toBeVisible();
      await element(by.text("PUR")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("IS"))).toBeVisible();
      await element(by.text("IS")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("FOL"))).toBeVisible();
      await element(by.text("FOL")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("RE"))).toBeVisible();
      await element(by.text("RE")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("BLE"))).toBeVisible();
      await element(by.text("BLE")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("SURE"))).toBeVisible();
      await element(by.text("SURE")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("SIC"))).toBeVisible();
      await element(by.text("SIC")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("TOR"))).toBeVisible();
      await element(by.text("TOR")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("CIL"))).toBeVisible();
      await element(by.text("CIL")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    await waitFor(element(by.text('Well Done!'))).toBeVisible();
    await waitFor(element(by.text("You've successfully completed this module. Ready for the next challenge?"))).toBeVisible();

    // Verify the module image is displayed
    await waitFor(element(by.id('moduleImage'))).toBeVisible();

    // Verify the "Continue to Next Module" button is present
    await waitFor(element(by.text('Continue to Next Module'))).toBeVisible();

    // Tap the "Continue to Next Module" button
    await element(by.text('Continue to Next Module')).tap();

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Wait for the Modules screen to be visible
    await waitFor(element(by.text('Modules'))).toBeVisible()

  }, 400000);

  afterAll(async () => {
      console.log("I am done with all the tests")
    }
  )

});
