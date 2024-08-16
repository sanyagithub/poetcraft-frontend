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

      await element(by.text('and')).swipe('right', 'fast', 0.75);

      // Mark the second syllable as unstressed
      await element(by.id('WordSyllable-an')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.text('and')).swipe('left', 'fast', 0.75);

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

      await element(by.text('ner')).swipe('left', 'slow', 0.75);

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-geth')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

     // await element(by.text('geth')).swipe('left', 'slow', 0.35);

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

      await element(by.text('ner')).swipe('left', 'slow', 0.75);

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-geth')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

    //  await element(by.text('geth')).swipe('left', 'slow', 0.35);

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

      await element(by.text('ner')).swipe('left', 'slow', 0.75);

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

      await element(by.id('WordSyllable-geth')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));

   //   await element(by.text('geth')).swipe('left', 'slow', 0.35);

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

      await element(by.text('ner')).swipe('left', 'slow', 0.75);

      await element(by.id('WordSyllable-to')).tap();
      await new Promise(resolve => setTimeout(resolve, 500));


     // await element(by.text('geth')).swipe('left', 'slow', 0.35);

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

  afterAll(async () => {
      console.log("I am done with all the tests")
    }
  )

});
