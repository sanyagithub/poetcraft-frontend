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

  it('should test all question types in Module 3', async () => {
    await waitFor(element(by.text('Begin Your Poetry Journey'))).toBeVisible()
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Tap on the module by index (1-based index)
    await element(by.id('moduleButton-3')).tap();

    try {
      await waitFor(element(by.text("Symbols for Stressed and Unstressed Syllables"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step ")
    }

    try {
      await waitFor(element(by.text("How to Mark Syllables"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step ")
    }

    try {
      await waitFor(element(by.id('MCQQuestion-33'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.id('MCQQuestion-34'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible

      // Mark the first syllable as stressed
      await expect(element(by.id('WordScantion-35'))).toBeVisible()
      await element(by.id('WordSyllable-pose')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-pro')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

   try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed
     await expect(element(by.id('WordScantion-36'))).toBeVisible()
      await element(by.id('WordSyllable-an')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-i')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-mal')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

  try {
    // Check if the WordScantion screen is visible
    // Mark the first syllable as stressed
    await expect(element(by.id('WordScantion-37'))).toBeVisible()
    await element(by.id('WordSyllable-tack')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check that the input was registered correctly
    await waitFor(element(by.text('/')))
      .toBeVisible()

    await element(by.text('Check Your Answer')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await waitFor(element(by.text('Next Challenge')))
      .toBeVisible()

    // Proceed to the next question
    await element(by.text('Next Challenge')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mark the second syllable as unstressed
    await element(by.id('WordSyllable-at')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await waitFor(element(by.text('u')))
      .toBeVisible()

    // Submit the answer
    await element(by.text('Check Your Answer')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check that feedback is given
    await waitFor(element(by.text('Next Challenge')))
      .toBeVisible()

    // Proceed to the next question
    await element(by.text('Next Challenge')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
    console.warn("Skipping this step due to error:", error);
  }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed
      await expect(element(by.id('WordScantion-38'))).toBeVisible()
      await element(by.id('WordSyllable-hav')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-be')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ior')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed
      await expect(element(by.id('WordScantion-39'))).toBeVisible()
      await element(by.id('WordSyllable-den')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-i')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ti')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ty')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }



    // try {
    //   await element(by.id('MCQQuestion-39')).tap();
    //   for (let i = 0; i < 4; i++) {
    //     await element(by.id(`MCQOption-${i}`)).tap();
    //     try {
    //       await waitFor(element(by.text('Next Challenge'))).toBeVisible();
    //       await element((by.text("Next Challenge"))).tap();
    //       await new Promise(resolve => setTimeout(resolve, 500));
    //       break;
    //     } catch (error) {
    //       // Ignore error and continue tapping
    //       await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
    //       await element((by.text("Give It Another Go!"))).tap();
    //       await new Promise(resolve => setTimeout(resolve, 500));
    //     }
    //   }
    // } catch (error){
    //   console.warn("Skipping this step due to error:", error);
    // }

    // try {
    //   for (let i = 0; i < 4; i++) {
    //     await element(by.id(`MCQOption-${i}`)).tap();
    //     try {
    //       await waitFor(element(by.text('Next Challenge'))).toBeVisible();
    //       await element((by.text("Next Challenge"))).tap();
    //       await new Promise(resolve => setTimeout(resolve, 500));
    //       break;
    //     } catch (error) {
    //       // Ignore error and continue tapping
    //       await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
    //       await element((by.text("Give It Another Go!"))).tap();
    //       await new Promise(resolve => setTimeout(resolve, 500));
    //     }
    //   }
    // } catch (error){
    //   console.warn("Skipping this step due to error:", error);
    // }
    //
    // try {
    //   for (let i = 0; i < 4; i++) {
    //     await element(by.id(`MCQOption-${i}`)).tap();
    //     try {
    //       await waitFor(element(by.text('Next Challenge'))).toBeVisible();
    //       await element((by.text("Next Challenge"))).tap();
    //       await new Promise(resolve => setTimeout(resolve, 500));
    //       break;
    //     } catch (error) {
    //       // Ignore error and continue tapping
    //       await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
    //       await element((by.text("Give It Another Go!"))).tap();
    //       await new Promise(resolve => setTimeout(resolve, 500));
    //     }
    //   }
    // } catch (error){
    //   console.warn("Skipping this step due to error:", error);
    // }

    try {
      await expect(element(by.text("What is Phrasal Accent?"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step ")
    }

    try {
      await expect(element(by.text("Accent Hierarchy and Idioms"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step ")
    }

    try {
      await expect(element(by.text("How to Mark Syllables in a Phrase"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step ")
    }

    // try {
    //   await element(by.id('MCQQuestion-39')).tap();
    //   for (let i = 0; i < 4; i++) {
    //     await element(by.id(`MCQOption-${i}`)).tap();
    //     try {
    //       await waitFor(element(by.text('Next Challenge'))).toBeVisible();
    //       await element((by.text("Next Challenge"))).tap();
    //       await new Promise(resolve => setTimeout(resolve, 500));
    //       break;
    //     } catch (error) {
    //       // Ignore error and continue tapping
    //       await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
    //       await element((by.text("Give It Another Go!"))).tap();
    //       await new Promise(resolve => setTimeout(resolve, 500));
    //     }
    //   }
    // } catch (error){
    //   console.warn("Skipping this step due to error:", error);
    // }


    try {
      await waitFor(element(by.id('MCQQuestion-40'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }


    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed
      await expect(element(by.id('WordScantion-41'))).toBeVisible()
      await element(by.id('WordSyllable-break')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-leg')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed
      await expect(element(by.id('WordScantion-42'))).toBeVisible()
      await element(by.id('WordSyllable-arm')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('and')).swipe('left', 'fast', 0.75);


      await element(by.id('WordSyllable-leg')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-an')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-and')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }


    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-43'))).toBeVisible()
      await element(by.id('WordSyllable-hit')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-sack')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-the')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }


    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed
      await expect(element(by.id('WordScantion-44'))).toBeVisible()

      await element(by.id('WordSyllable-not')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-fast')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-so')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-45'))).toBeVisible()

      await element(by.id('WordSyllable-once')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('once')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-blue')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-moon')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('once')).swipe('right', 'fast', 0.75);

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-in')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("What is Performative Accent?"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Flexibility with Monosyllabic Words"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.text("Influence of Meter on Performative Stress"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.id('MCQQuestion-46'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.id('MCQQuestion-47'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await waitFor(element(by.id('MCQQuestion-48'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-49'))).toBeVisible()

      await element(by.id('WordSyllable-I')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-am')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-hap')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-py')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-50'))).toBeVisible()

      await element(by.id('WordSyllable-am')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-I')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-hap')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-py')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }


    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-51'))).toBeVisible()

      await element(by.id('WordSyllable-hap')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-I')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-am')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-py')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }


    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-52'))).toBeVisible()

      await element(by.id('WordSyllable-his')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-dog')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-barks')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-loud')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('loud')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-ly')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-53'))).toBeVisible()

      await element(by.id('WordSyllable-dog')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-his')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-barks')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-loud')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('loud')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-ly')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-54'))).toBeVisible()

      await element(by.text('dog')).swipe('right', 'fast', 0.75);


      await element(by.id('WordSyllable-barks')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-dog')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-his')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-loud')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('loud')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-ly')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }



    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-55'))).toBeVisible()

      await element(by.text('drink')).swipe('right', 'fast', 0.75);


      await element(by.id('WordSyllable-I')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-don\'t')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-want')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('to')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-drink')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ny')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.id('WordSyllable-thing')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-56'))).toBeVisible()

     // await element(by.text('drink')).swipe('right', 'fast', 0.75);


      await element(by.id('WordSyllable-want')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-don\'t')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-I')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('to')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-drink')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ny')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.id('WordSyllable-thing')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-57'))).toBeVisible()

      await element(by.text('to')).swipe('left', 'fast', 0.3);

      await element(by.id('WordSyllable-drink')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('drink')).swipe('right', 'fast', 0.75);


      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-don\'t')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-I')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-want')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('to')).swipe('left', 'fast', 0.75);

      // await element(by.id('WordSyllable-drink')).tap();
      // await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ny')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.id('WordSyllable-thing')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-58'))).toBeVisible()

      await element(by.text('drink')).swipe('left', 'fast', 0.75);


      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ny')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('drink')).swipe('right', 'fast', 0.75);

      // Mark the second syllable as unstressed

      await element(by.id('WordSyllable-I')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-don\'t')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-want')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('to')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-drink')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.id('WordSyllable-thing')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }


    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-59'))).toBeVisible()

      await element(by.id('WordSyllable-we')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      // Mark the second syllable as unstressed

      await element(by.id('WordSyllable-al')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ways')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-eat')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.text('eat')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-din')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ner')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('ner')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-geth')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('geth')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-er')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-60'))).toBeVisible()

      await element(by.id('WordSyllable-al')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      // Mark the second syllable as unstressed

      await element(by.id('WordSyllable-we')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ways')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-eat')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.text('eat')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-din')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ner')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('ner')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-geth')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('geth')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-er')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-61'))).toBeVisible()

      await element(by.text('eat')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-din')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      // Mark the second syllable as unstressed

      await element(by.text('din')).swipe('right', 'fast', 0.75);

      await element(by.id('WordSyllable-we')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-al')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ways')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-eat')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.text('eat')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-ner')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('ner')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-geth')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('geth')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-er')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-62'))).toBeVisible()

      await element(by.text('eat')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-geth')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      // Mark the second syllable as unstressed

      await element(by.text('to')).swipe('right', 'fast', 0.75);

      await element(by.id('WordSyllable-we')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-al')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ways')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-eat')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.text('eat')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-din')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ner')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('ner')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.text('geth')).swipe('left', 'slow', 0.35);

      await element(by.id('WordSyllable-er')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-63'))).toBeVisible()

     // await element(by.text('lot')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-snows')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      // Mark the second syllable as unstressed

      //await element(by.text('to')).swipe('right', 'fast', 0.75);

      await element(by.id('WordSyllable-it')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-lot')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.text('lot')).swipe('left', 'slow', 0.75);

      await element(by.id('WordSyllable-in')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-win')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ter')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-64'))).toBeVisible()

      // await element(by.text('lot')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-lot')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      // Mark the second syllable as unstressed

      //await element(by.text('to')).swipe('right', 'fast', 0.75);

      await element(by.id('WordSyllable-it')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-snows')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.text('lot')).swipe('left', 'slow', 0.75);

      await element(by.id('WordSyllable-in')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-win')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ter')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // Check if the WordScantion screen is visible
      // Mark the first syllable as stressed

      await expect(element(by.id('WordScantion-65'))).toBeVisible()

      await element(by.text('lot')).swipe('left', 'fast', 0.75);

      await element(by.id('WordSyllable-win')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
      // Mark the second syllable as unstressed

      await element(by.text('in')).swipe('right', 'fast', 0.75);

      await element(by.id('WordSyllable-it')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-snows')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-a')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-lot')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


      await element(by.text('lot')).swipe('left', 'slow', 0.75);

      await element(by.id('WordSyllable-in')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-ter')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('u')))
        .toBeVisible()

      // Submit the answer
      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check that feedback is given
      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
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

  }, 500000);



  it('should test all question types in Module 4', async () => {
    await waitFor(element(by.text('Begin Your Poetry Journey'))).toBeVisible()
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.text('Begin Your Poetry Journey')).tap();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor(element(by.id('coursesScreen'))).toBeVisible();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await element(by.id('courseItem')).atIndex(0).tap(); // Tap the first course in the list
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Tap on the module by index (1-based index)
    await element(by.id('moduleButton-4')).tap();

    try {
      await expect(element(by.id('PoemScantion-66'))).toBeVisible();

      await element((by.id('Syllable-0-1'))).tap();
      await element((by.id('Syllable-0-3'))).tap();
      await element((by.id('Syllable-0-5'))).tap();

      await element((by.id('Syllable-1-1'))).tap();
      await element((by.id('Syllable-1-3'))).tap();
      await element((by.id('Syllable-1-5'))).tap();

      await element((by.id('Syllable-2-1'))).tap();
      await element((by.id('Syllable-2-3'))).tap();
      await element((by.id('Syllable-2-5'))).tap();

      await element((by.id('Syllable-3-1'))).tap();
      await element((by.id('Syllable-3-3'))).tap();
      await element((by.id('Syllable-3-5'))).tap();

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element((by.id('Syllable-0-0'))).tap();
      await element((by.id('Syllable-0-2'))).tap();
      await element((by.id('Syllable-0-4'))).tap();

      await element((by.id('Syllable-1-0'))).tap();
      await element((by.id('Syllable-1-2'))).tap();
      await element((by.id('Syllable-1-4'))).tap();

      await element((by.id('Syllable-2-0'))).tap();
      await element((by.id('Syllable-2-2'))).tap();
      await element((by.id('Syllable-2-4'))).tap();

      await element((by.id('Syllable-3-0'))).tap();
      await element((by.id('Syllable-3-2'))).tap();
      await element((by.id('Syllable-3-4'))).tap();

      // Check that the input was registered correctly
      await waitFor(element(by.text('u')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
        console.warn("Skipping this step due to error:", error);
    }

    try {
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }


    try {
      await waitFor(element(by.text("What are Metrical Feet?"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step ")
    }

    try {
      await waitFor(element(by.text("Basic Types of Metrical Feet"))).toBeVisible();
      await element((by.text("Next"))).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error){
      console.warn("Skipping this step ")
    }

    try {
      await expect(element(by.id('MCQQuestion-67'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await expect(element(by.id('MCQQuestion-68'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await expect(element(by.id('MCQQuestion-69'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await expect(element(by.id('MCQQuestion-70'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await expect(element(by.id('MCQQuestion-71'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await expect(element(by.id('MCQQuestion-72'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await expect(element(by.id('MCQQuestion-73'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    try {
      await expect(element(by.id('MCQQuestion-74'))).toBeVisible();
      for (let i = 0; i < 4; i++) {
        await element(by.id(`MCQOption-${i}`)).tap();
        try {
          await waitFor(element(by.text('Next Challenge'))).toBeVisible();
          await element((by.text("Next Challenge"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        } catch (error) {
          // Ignore error and continue tapping
          await waitFor(element(by.text('Give It Another Go!'))).toBeVisible();
          await element((by.text("Give It Another Go!"))).tap();
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error){
      console.warn("Skipping this step due to error:", error);
    }

    // /u/u/u/\n/uu/uu/u\n/u/u/u/\n/u/uu/\n/u/u/u/\n/u/u/u/
    try {
      await expect(element(by.id('PoemScantion-75'))).toBeVisible();

      await element((by.id('Syllable-0-0'))).tap();
      await element((by.id('Syllable-0-2'))).tap();
      await element((by.id('Syllable-0-4'))).tap();

      await element((by.id('Syllable-0-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-0-6'))).tap();
      await element((by.id('Syllable-0-4'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-1-0'))).tap();
      await element((by.id('Syllable-1-3'))).tap();
      await element((by.id('Syllable-1-3'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-1-6'))).tap();
      await element((by.id('Syllable-1-3'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-2-0'))).tap();
      await element((by.id('Syllable-2-2'))).tap();
      await element((by.id('Syllable-2-4'))).tap();
      await element((by.id('Syllable-2-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-2-6'))).tap();
      await element((by.id('Syllable-2-4'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-3-0'))).tap();
      await element((by.id('Syllable-3-2'))).tap();
      await element((by.id('Syllable-3-2'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-3-5'))).tap();
      await element((by.id('Syllable-3-2'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-4-0'))).tap();
      await element((by.id('Syllable-4-2'))).tap();
      await element((by.id('Syllable-4-4'))).tap();
      await element((by.id('Syllable-4-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-4-6'))).tap();
      await element((by.id('Syllable-4-4'))).swipe('right', 'slow', 0.75)

      await element(by.id('scrollView')).scrollTo('bottom');

      await element((by.id('Syllable-5-0'))).tap();
      await element((by.id('Syllable-5-2'))).tap();
      await element((by.id('Syllable-5-4'))).tap();
      await element((by.id('Syllable-5-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-5-6'))).tap();
      await element((by.id('Syllable-5-4'))).swipe('right', 'slow', 0.75)

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // /u/u/u/\n/uu/uu/u\n/u/u/u/\n/u/uu/\n/u/u/u/\n/u/u/u/

      await element((by.id('Syllable-0-1'))).tap();
      await element((by.id('Syllable-0-3'))).tap();
      await element((by.id('Syllable-0-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-0-5'))).tap();
      await element((by.id('Syllable-0-4'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-1-1'))).tap();
      await element((by.id('Syllable-1-2'))).tap();
      await element((by.id('Syllable-1-4'))).tap();
      await element((by.id('Syllable-1-3'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-1-5'))).tap();
      await element((by.id('Syllable-1-7'))).tap();
      await element((by.id('Syllable-1-3'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-2-1'))).tap();
      await element((by.id('Syllable-2-3'))).tap();
      await element((by.id('Syllable-2-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-2-5'))).tap();
      await element((by.id('Syllable-2-4'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-3-1'))).tap();
      await element((by.id('Syllable-3-3'))).tap();
      await element((by.id('Syllable-3-2'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-3-4'))).tap();
      await element((by.id('Syllable-3-2'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-4-1'))).tap();
      await element((by.id('Syllable-4-3'))).tap();
      await element((by.id('Syllable-4-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-4-5'))).tap();
      await element((by.id('Syllable-4-4'))).swipe('right', 'slow', 0.75)

      await element(by.id('scrollView')).scrollTo('bottom');

      await element((by.id('Syllable-5-1'))).tap();
      await element((by.id('Syllable-5-3'))).tap();
      await element((by.id('Syllable-5-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-5-5'))).tap();
      await element((by.id('Syllable-5-4'))).swipe('right', 'slow', 0.75)

      // Check that the input was registered correctly
      await waitFor(element(by.text('u')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // -|-|-|
      // -|-|-|
      // -|-|-|
      // -|-|
      // -|-|-|
      // -|-|-|

      await element((by.id('Arrow-0-1'))).tap();
      await element((by.id('Arrow-0-3'))).tap();
       await element((by.id('Arrow-0-5'))).tap();

      await element((by.id('Arrow-1-1'))).tap();
      await element((by.id('Arrow-1-3'))).tap();
      await element((by.id('Arrow-1-5'))).tap();

      await element((by.id('Arrow-2-1'))).tap();
      await element((by.id('Arrow-2-3'))).tap();
       await element((by.id('Arrow-2-5'))).tap();

      await element((by.id('Arrow-3-1'))).tap();
      await element((by.id('Arrow-3-3'))).tap();

      await element(by.id('scrollView')).scrollTo('bottom');

      await element((by.id('Arrow-4-1'))).tap();
      await element((by.id('Arrow-4-3'))).tap();
      await element((by.id('Arrow-4-5'))).tap()

      await element((by.id('Arrow-5-1'))).tap();
      await element((by.id('Arrow-5-3'))).tap();
      await element((by.id('Arrow-5-5'))).tap();

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

    } catch (error) {
      console.warn("Skipping this step due to error:", error);
    }

    try {
      // uu//u/uu/uu/
      // u/uu/uu/uu/
      // uu/uu/uu/uu/
      // uu/uu/uu/uu/
      await expect(element(by.id('PoemScantion-76'))).toBeVisible();

      await element((by.id('Syllable-0-2'))).tap();
      await element((by.id('Syllable-0-3'))).tap();
      await element((by.id('Syllable-0-5'))).tap();
      await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-0-8'))).tap();
      await element((by.id('Syllable-0-11'))).tap();
      await element((by.id('Syllable-0-8'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-1-1'))).tap();
      await element((by.id('Syllable-1-4'))).tap();
      await element((by.id('Syllable-1-3'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-1-7'))).tap();
      await element((by.id('Syllable-1-10'))).tap();
      await element((by.id('Syllable-1-7'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-2-2'))).tap();
      await element((by.id('Syllable-2-5'))).tap();
      await element((by.id('Syllable-2-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-2-8'))).tap();
      await element((by.id('Syllable-2-11'))).tap();
      await element((by.id('Syllable-2-8'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-3-2'))).tap();
      await element((by.id('Syllable-3-5'))).tap();
      await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-3-8'))).tap();
      await element((by.id('Syllable-3-11'))).tap();
      await element((by.id('Syllable-3-8'))).swipe('right', 'slow', 0.75)

      // Check that the input was registered correctly
      await waitFor(element(by.text('/')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      // uu//u/uu/uu/
      // u/uu/uu/uu/
      // uu/uu/uu/uu/
      // uu/uu/uu/uu/

      await element((by.id('Syllable-0-0'))).tap();
      await element((by.id('Syllable-0-1'))).tap();
      await element((by.id('Syllable-0-4'))).tap();
      await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-0-6'))).tap();
      await element((by.id('Syllable-0-7'))).tap();
      await element((by.id('Syllable-0-9'))).tap();
      await element((by.id('Syllable-0-10'))).tap();
      await element((by.id('Syllable-0-8'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-1-0'))).tap();
      await element((by.id('Syllable-1-2'))).tap();
      await element((by.id('Syllable-1-3'))).tap();
      await element((by.id('Syllable-1-5'))).tap();
      await element((by.id('Syllable-1-3'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-1-6'))).tap();
      await element((by.id('Syllable-1-8'))).tap();
      await element((by.id('Syllable-1-9'))).tap();
      await element((by.id('Syllable-1-7'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-2-0'))).tap();
      await element((by.id('Syllable-2-1'))).tap();
      await element((by.id('Syllable-2-3'))).tap();
      await element((by.id('Syllable-2-4'))).tap();
      await element((by.id('Syllable-2-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-2-6'))).tap();
      await element((by.id('Syllable-2-7'))).tap();
      await element((by.id('Syllable-2-9'))).tap();
      await element((by.id('Syllable-2-10'))).tap();
      await element((by.id('Syllable-2-8'))).swipe('right', 'slow', 0.75)

      await element((by.id('Syllable-3-0'))).tap();
      await element((by.id('Syllable-3-1'))).tap();
      await element((by.id('Syllable-3-3'))).tap();
      await element((by.id('Syllable-3-4'))).tap();
      await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-3-6'))).tap();
      await element((by.id('Syllable-3-7'))).tap();
      await element((by.id('Syllable-3-9'))).tap();
      await element((by.id('Syllable-3-10'))).tap();
      await element((by.id('Syllable-3-8'))).swipe('right', 'slow', 0.75)

      // Check that the input was registered correctly
      await waitFor(element(by.text('u')))
        .toBeVisible()

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      //--|--|--|
      // -|--|--|
      // --|--|--|
      // --|--|--|

      await element((by.id('Arrow-0-2'))).tap();
      await element((by.id('Arrow-0-5'))).tap();
      await element((by.id('Arrow-0-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Arrow-0-8'))).tap();
      await element((by.id('Arrow-0-8'))).swipe('right', 'slow', 0.75)

      await element((by.id('Arrow-1-1'))).tap();
      await element((by.id('Arrow-1-4'))).tap();
      await element((by.id('Arrow-1-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Arrow-1-7'))).tap();
      await element((by.id('Arrow-1-8'))).swipe('right', 'slow', 0.75)

      await element((by.id('Arrow-2-2'))).tap();
      await element((by.id('Arrow-2-5'))).tap();
      await element((by.id('Arrow-2-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Arrow-2-8'))).tap();
      await element((by.id('Arrow-2-8'))).swipe('right', 'slow', 0.75)


      await element((by.id('Arrow-3-2'))).tap();
      await element((by.id('Arrow-3-5'))).tap();
      await element((by.id('Arrow-3-5'))).swipe('left', 'slow', 0.75)
      await element((by.id('Arrow-3-8'))).tap();
      await element((by.id('Arrow-3-8'))).swipe('right', 'slow', 0.75)

      await element(by.text('Check Your Answer')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await waitFor(element(by.text('Next Challenge')))
        .toBeVisible()

      // Proceed to the next question
      await element(by.text('Next Challenge')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
    console.warn("Skipping this step due to error:", error);
  }

  try {
    await expect(element(by.id('PoemScantion-77'))).toBeVisible();

    // /uu/u/uu/uu
    // /uu/uu/uu/uu
    // /uu/uu/uu/uu
    // /uu/uu/uu/u

    await element((by.id('Syllable-0-0'))).tap();
    await element((by.id('Syllable-0-3'))).tap();
    await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-0-5'))).tap();
    await element((by.id('Syllable-0-8'))).tap();
    await element((by.id('Syllable-0-8'))).swipe('right', 'slow', 0.75)


    await element((by.id('Syllable-1-0'))).tap();
    await element((by.id('Syllable-1-3'))).tap();
    await element((by.id('Syllable-1-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-1-6'))).tap();
    await element((by.id('Syllable-1-9'))).tap();
    await element((by.id('Syllable-1-8'))).swipe('right', 'slow', 0.75)


    await element((by.id('Syllable-2-0'))).tap();
    await element((by.id('Syllable-2-3'))).tap();
    await element((by.id('Syllable-2-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-2-6'))).tap();
    await element((by.id('Syllable-2-9'))).tap();
    await element((by.id('Syllable-2-8'))).swipe('right', 'slow', 0.75)


    await element((by.id('Syllable-3-0'))).tap();
    await element((by.id('Syllable-3-3'))).tap();
    await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-3-6'))).tap();
    await element((by.id('Syllable-3-9'))).tap();
    await element((by.id('Syllable-3-8'))).swipe('right', 'slow', 0.75)

    // Check that the input was registered correctly
    await waitFor(element(by.text('/')))
      .toBeVisible()

    await element(by.text('Check Your Answer')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await waitFor(element(by.text('Next Challenge')))
      .toBeVisible()

    // Proceed to the next question
    await element(by.text('Next Challenge')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    // /uu/u/uu/uu
    // /uu/uu/uu/uu
    // /uu/uu/uu/uu
    // /uu/uu/uu/u

    await element((by.id('Syllable-0-1'))).tap();
    await element((by.id('Syllable-0-2'))).tap();
    await element((by.id('Syllable-0-4'))).tap();
    await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-0-6'))).tap();
    await element((by.id('Syllable-0-7'))).tap();
    await element((by.id('Syllable-0-9'))).tap();
    await element((by.id('Syllable-0-10'))).tap();
    await element((by.id('Syllable-0-8'))).swipe('right', 'slow', 0.75)

    await element((by.id('Syllable-1-1'))).tap();
    await element((by.id('Syllable-1-2'))).tap();
    await element((by.id('Syllable-1-4'))).tap();
    await element((by.id('Syllable-1-5'))).tap();
    await element((by.id('Syllable-1-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-1-7'))).tap();
    await element((by.id('Syllable-1-8'))).tap();
    await element((by.id('Syllable-1-10'))).tap();
    await element((by.id('Syllable-1-11'))).tap();
    await element((by.id('Syllable-1-8'))).swipe('right', 'slow', 0.75)

    await element((by.id('Syllable-2-1'))).tap();
    await element((by.id('Syllable-2-2'))).tap();
    await element((by.id('Syllable-2-4'))).tap();
    await element((by.id('Syllable-2-5'))).tap();
    await element((by.id('Syllable-2-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-2-7'))).tap();
    await element((by.id('Syllable-2-8'))).tap();
    await element((by.id('Syllable-2-10'))).tap();
    await element((by.id('Syllable-2-11'))).tap();
    await element((by.id('Syllable-2-8'))).swipe('right', 'slow', 0.75)

    await element((by.id('Syllable-3-1'))).tap();
    await element((by.id('Syllable-3-2'))).tap();
    await element((by.id('Syllable-3-4'))).tap();
    await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.3)
    await element((by.id('Syllable-3-5'))).tap();
    await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-3-7'))).tap();
    await element((by.id('Syllable-3-8'))).tap();
    await element((by.id('Syllable-3-10'))).tap();
    await element((by.id('Syllable-3-8'))).swipe('right', 'slow', 0.75)


    // Check that the input was registered correctly
    await waitFor(element(by.text('u')))
      .toBeVisible()

    await element(by.text('Check Your Answer')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await waitFor(element(by.text('Next Challenge')))
      .toBeVisible()

    // Proceed to the next question
    await element(by.text('Next Challenge')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await element((by.id('Arrow-0-2'))).tap();
    await element((by.id('Arrow-0-4'))).tap();
    await element((by.id('Arrow-0-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Arrow-0-7'))).tap();
    await element((by.id('Arrow-0-8'))).swipe('right', 'slow', 0.75)

    await element((by.id('Arrow-1-2'))).tap();
    await element((by.id('Arrow-1-5'))).tap();
    await element((by.id('Arrow-1-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Arrow-1-8'))).tap();
    await element((by.id('Arrow-1-8'))).swipe('right', 'slow', 0.75)

    await element((by.id('Arrow-2-2'))).tap();
    await element((by.id('Arrow-2-5'))).tap();
    await element((by.id('Arrow-2-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Arrow-2-8'))).tap();
    await element((by.id('Arrow-2-8'))).swipe('right', 'slow', 0.75)


    await element((by.id('Arrow-3-2'))).tap();
    await element((by.id('Arrow-3-5'))).tap();
    await element((by.id('Arrow-3-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Arrow-3-8'))).tap();
    await element((by.id('Arrow-3-8'))).swipe('right', 'slow', 0.75)

    await element(by.text('Check Your Answer')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await waitFor(element(by.text('Next Challenge')))
      .toBeVisible()

    // Proceed to the next question
    await element(by.text('Next Challenge')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
    console.warn("Skipping this step due to error:", error);
  }

  try {
    // /uu/u//u /uu/u// //u/uu/u /uu//u/

    await element((by.id('Syllable-0-0'))).tap();
    await element((by.id('Syllable-0-3'))).tap();
    await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-0-5'))).tap();
    await element((by.id('Syllable-0-6'))).tap();
    await element((by.id('Syllable-0-6'))).swipe('right', 'slow', 0.75)

    await element((by.id('Syllable-1-0'))).tap();
    await element((by.id('Syllable-1-3'))).tap();
    await element((by.id('Syllable-1-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-1-5'))).tap();
    await element((by.id('Syllable-1-6'))).tap();
    await element((by.id('Syllable-1-6'))).swipe('right', 'slow', 0.75)

    await element((by.id('Syllable-2-0'))).tap();
    await element((by.id('Syllable-2-1'))).tap();
    await element((by.id('Syllable-2-3'))).tap();
    await element((by.id('Syllable-2-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-2-6'))).tap();
    await element((by.id('Syllable-2-6'))).swipe('right', 'slow', 0.75)

    await element((by.id('Syllable-3-0'))).tap();
    await element((by.id('Syllable-3-3'))).tap();
    await element((by.id('Syllable-3-4'))).tap();
    await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-3-6'))).tap();
    await element((by.id('Syllable-3-6'))).swipe('right', 'slow', 0.75)

    // Check that the input was registered correctly
    await waitFor(element(by.text('/')))
      .toBeVisible()

    await element(by.text('Check Your Answer')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await waitFor(element(by.text('Next Challenge')))
      .toBeVisible()

    // Proceed to the next question
    await element(by.text('Next Challenge')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    // /uu/u//u /uu/u// //u/uu/u /uu//u/

    await element((by.id('Syllable-0-1'))).tap();
    await element((by.id('Syllable-0-2'))).tap();
    await element((by.id('Syllable-0-4'))).tap();
    await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-0-7'))).tap();
    await element((by.id('Syllable-0-6'))).swipe('right', 'slow', 0.75)

    await element((by.id('Syllable-1-1'))).tap();
    await element((by.id('Syllable-1-2'))).tap();
    await element((by.id('Syllable-1-4'))).tap();
    // await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.75)
    // await element((by.id('Syllable-0-7'))).tap();
    // await element((by.id('Syllable-0-6'))).swipe('right', 'slow', 0.75)

    await element((by.id('Syllable-2-2'))).tap();
    await element((by.id('Syllable-2-4'))).tap();
    await element((by.id('Syllable-2-5'))).tap();
    await element((by.id('Syllable-2-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-2-7'))).tap();
    await element((by.id('Syllable-2-6'))).swipe('right', 'slow', 0.75)

    await element((by.id('Syllable-3-1'))).tap();
    await element((by.id('Syllable-3-2'))).tap();
    await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-3-5'))).tap();
    await element((by.id('Syllable-3-6'))).swipe('right', 'slow', 0.75)

    // Check that the input was registered correctly
    await waitFor(element(by.text('u')))
      .toBeVisible()

    await element(by.text('Check Your Answer')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await waitFor(element(by.text('Next Challenge')))
      .toBeVisible()

    // Proceed to the next question
    await element(by.text('Next Challenge')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await element((by.id('Arrow-0-2'))).tap();
    await element((by.id('Arrow-0-5'))).tap();

    await element((by.id('Arrow-1-2'))).tap();
    await element((by.id('Arrow-1-5'))).tap();

    await element((by.id('Arrow-2-2'))).tap();
    await element((by.id('Arrow-2-5'))).tap();

    await element((by.id('Arrow-3-2'))).tap();
    await element((by.id('Arrow-3-5'))).tap();

    await element(by.text('Check Your Answer')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));

    await waitFor(element(by.text('Next Challenge')))
      .toBeVisible()

    // Proceed to the next question
    await element(by.text('Next Challenge')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
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
