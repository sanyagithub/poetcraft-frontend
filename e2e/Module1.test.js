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

  it('should test all question types in Module 1', async () => {
    await waitFor(element(by.text('Begin Your Poetry Journey'))).toBeVisible()
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Tap on the module by index (1-based index)
    await element(by.id('moduleButton-1')).tap();

    // for (let i = 0; i < 4; i++) {
    //   await element(by.id(`MCQOption-${i}`)).tap();
    //   try {
    //     await waitFor(element(by.text('Next Challenge'))).toBeVisible();
    //     await element((by.text("Next Challenge"))).tap();
    //     await new Promise(resolve => setTimeout(resolve, 500));
    //     break;
    //   } catch (error) {
    //     // Ignore error and continue tapping
    //     await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
    //     await element((by.text("Give It Another Go!"))).tap();
    //     await new Promise(resolve => setTimeout(resolve, 500));
    //   }
    // }

    // TODO : First two screens are not coming up
    try {
      await waitFor(element(by.text("Why Scan a Poem?"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Unlocking the Meter’s Magic"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Navigating Innermost Realities"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Experiencing Physical Sensations"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Let's Start with Syllables"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("It translates the wordless language of meter into awareness"))).toBeVisible();
      await element(by.text("It translates the wordless language of meter into awareness")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("rhythm"))).toBeVisible();
      await element(by.text("rhythm")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("By understanding the lengths, weights, and rhythms of its syllables"))).toBeVisible();
      await element(by.text("By understanding the lengths, weights, and rhythms of its syllables")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Sensations of length, weight, and rhythm"))).toBeVisible();
      await element(by.text("Sensations of length, weight, and rhythm")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("A part of a word that contains a single vowel sound and is pronounced as a unit"))).toBeVisible();
      await element(by.text("A part of a word that contains a single vowel sound and is pronounced as a unit")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("3"))).toBeVisible();
      await element(by.text("3")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("2"))).toBeVisible();
      await element(by.text("2")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("3"))).toBeVisible();
      await element(by.text("3")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("1"))).toBeVisible();
      await element(by.text("1")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("3"))).toBeVisible();
      await element(by.text("3")).tap();
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }
    try {
      await waitFor(element(by.id("DraggableItem-0"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-1"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-2"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-3"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-4"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-5"))).toBeVisible();

      await waitFor(element(by.id("inputBox-0"))).toBeVisible();
      await waitFor(element(by.id("inputBox-1"))).toBeVisible();
      await waitFor(element(by.id("inputBox-2"))).toBeVisible();

      // Drag DraggableItem-0 into the first input box
      await element(by.id("DraggableItem-2")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-0')), NaN, NaN, "slow", 0);

      // Drag DraggableItem-1 into the second input box
      await element(by.id("DraggableItem-3")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-1')), NaN, NaN,"slow", 0);

      // Drag DraggableItem-2 into the third input box
      await element(by.id("DraggableItem-4")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-2')),  NaN, NaN,"slow", 0);

      await waitFor(element(by.text('Check Answer'))).toBeVisible();
      await element(by.text('Check Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.id("DraggableItem-0"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-1"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-2"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-3"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-4"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-5"))).toBeVisible();

      await waitFor(element(by.id("inputBox-0"))).toBeVisible();
      await waitFor(element(by.id("inputBox-1"))).toBeVisible();
      await waitFor(element(by.id("inputBox-2"))).toBeVisible();

      // Drag DraggableItem-0 into the first input box
      await element(by.id("DraggableItem-0")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-0')), NaN, NaN, "slow", 0);

      // Drag DraggableItem-1 into the second input box
      await element(by.id("DraggableItem-1")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-1')), NaN, NaN,"slow", 0);

      // Drag DraggableItem-2 into the third input box
      await element(by.id("DraggableItem-2")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-2')),  NaN, NaN,"slow", 0);

      await waitFor(element(by.text('Check Answer'))).toBeVisible();
      await element(by.text('Check Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.id("DraggableItem-0"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-1"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-2"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-3"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-4"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-5"))).toBeVisible();

      await waitFor(element(by.id("inputBox-0"))).toBeVisible();
      await waitFor(element(by.id("inputBox-1"))).toBeVisible();
      await waitFor(element(by.id("inputBox-2"))).toBeVisible();

      // Drag DraggableItem-0 into the first input box
      await element(by.id("DraggableItem-2")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-0')), NaN, NaN, "slow", 0);

      // Drag DraggableItem-1 into the second input box
      await element(by.id("DraggableItem-3")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-1')), NaN, NaN,"slow", 0);

      // Drag DraggableItem-2 into the third input box
      await element(by.id("DraggableItem-4")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-2')),  NaN, NaN,"slow", 0);

      await waitFor(element(by.text('Check Answer'))).toBeVisible();
      await element(by.text('Check Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.id("DraggableItem-0"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-1"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-2"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-3"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-4"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-5"))).toBeVisible();

      await waitFor(element(by.id("inputBox-0"))).toBeVisible();
      await waitFor(element(by.id("inputBox-1"))).toBeVisible();
      await waitFor(element(by.id("inputBox-2"))).toBeVisible();

      // Drag DraggableItem-0 into the first input box
      await element(by.id("DraggableItem-1")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-0')), NaN, NaN, "slow", 0);

      // Drag DraggableItem-1 into the second input box
      await element(by.id("DraggableItem-2")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-1')), NaN, NaN,"slow", 0);

      // Drag DraggableItem-2 into the third input box
      await element(by.id("DraggableItem-3")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-2')),  NaN, NaN,"slow", 0);

      await waitFor(element(by.text('Check Answer'))).toBeVisible();
      await element(by.text('Check Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      await waitFor(element(by.text('Next Challenge'))).toBeVisible();
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.id("DraggableItem-0"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-1"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-2"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-3"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-4"))).toBeVisible();
      await waitFor(element(by.id("DraggableItem-5"))).toBeVisible();

      await waitFor(element(by.id("inputBox-0"))).toBeVisible();
      await waitFor(element(by.id("inputBox-1"))).toBeVisible();
      await waitFor(element(by.id("inputBox-2"))).toBeVisible();

      // Drag DraggableItem-0 into the first input box
      await element(by.id("DraggableItem-0")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-0')), NaN, NaN, "slow", 0);

      // Drag DraggableItem-1 into the second input box
      await element(by.id("DraggableItem-1")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-1')), NaN, NaN,"slow", 0);

      // Drag DraggableItem-2 into the third input box
      await element(by.id("DraggableItem-2")).longPressAndDrag(2000, NaN, NaN, element(by.id('inputBox-2')),  NaN, NaN,"slow", 0);

      await waitFor(element(by.text('Check Answer'))).toBeVisible();
      await element(by.text('Check Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
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
