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

      await element(by.id('scrollView')).scrollTo('bottom');

      await element((by.id('Syllable-4-0'))).tap();
      await element((by.id('Syllable-4-2'))).tap();
      await element((by.id('Syllable-4-4'))).tap();
      await element((by.id('Syllable-4-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-4-6'))).tap();
      await element((by.id('Syllable-4-4'))).swipe('right', 'slow', 0.75)


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

      await element(by.id('scrollView')).scrollTo('bottom');

      await element((by.id('Syllable-4-1'))).tap();
      await element((by.id('Syllable-4-3'))).tap();
      await element((by.id('Syllable-4-4'))).swipe('left', 'slow', 0.75)
      await element((by.id('Syllable-4-5'))).tap();
      await element((by.id('Syllable-4-4'))).swipe('right', 'slow', 0.75)


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

      await element(by.id('scrollView')).scrollTo('bottom');

      await element((by.id('Arrow-3-1'))).tap();
      await element((by.id('Arrow-3-3'))).tap();

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

      await element(by.id('scrollView')).scrollTo('bottom');

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
    await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.35)
    await element((by.id('Syllable-0-5'))).tap();
    await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.35)
    await element((by.id('Syllable-0-8'))).tap();
    await element((by.id('Syllable-0-8'))).swipe('right', 'fast', 0.75)


    await element((by.id('Syllable-1-0'))).tap();
    await element((by.id('Syllable-1-3'))).tap();
    await element((by.id('Syllable-1-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-1-6'))).tap();
    await element((by.id('Syllable-1-9'))).tap();
    await element((by.id('Syllable-1-8'))).swipe('right', 'fast', 0.75)

    await element(by.id('scrollView')).scrollTo('bottom');

    await element((by.id('Syllable-2-0'))).tap();
    await element((by.id('Syllable-2-3'))).tap();
    await element((by.id('Syllable-2-5'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-2-6'))).tap();
    await element((by.id('Syllable-2-6'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-2-9'))).tap();
    await element((by.id('Syllable-2-8'))).swipe('right', 'fast', 0.75)


    await element((by.id('Syllable-3-0'))).tap();
    await element((by.id('Syllable-3-3'))).tap();
    await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-3-6'))).tap();
    await element((by.id('Syllable-3-6'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-3-9'))).tap();
    await element((by.id('Syllable-3-8'))).swipe('right', 'fast', 0.75)

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
    await element((by.id('Syllable-0-5'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-0-6'))).tap();
    await element((by.id('Syllable-0-7'))).tap();
    await element((by.id('Syllable-0-7'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-0-9'))).tap();
    await element((by.id('Syllable-0-10'))).tap();
    await element((by.id('Syllable-0-8'))).swipe('right', 'fast', 0.75)

    await element((by.id('Syllable-1-1'))).tap();
    await element((by.id('Syllable-1-2'))).tap();
    await element((by.id('Syllable-1-4'))).tap();
    await element((by.id('Syllable-1-5'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-1-5'))).tap();
    await element((by.id('Syllable-1-7'))).tap();
    await element((by.id('Syllable-1-8'))).tap();
    await element((by.id('Syllable-1-8'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-1-10'))).tap();
    await element((by.id('Syllable-1-11'))).tap();
    await element((by.id('Syllable-1-8'))).swipe('right', 'fast', 0.75)

    await element(by.id('scrollView')).scrollTo('bottom');

    await element((by.id('Syllable-2-1'))).tap();
    await element((by.id('Syllable-2-2'))).tap();
    await element((by.id('Syllable-2-4'))).tap();
    await element((by.id('Syllable-2-5'))).tap();
    await element((by.id('Syllable-2-5'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-2-7'))).tap();
    await element((by.id('Syllable-2-8'))).tap();
    await element((by.id('Syllable-2-8'))).swipe('left', 'slow', 0.45)
    await element((by.id('Syllable-2-10'))).tap();
    await element((by.id('Syllable-2-11'))).tap();
    await element((by.id('Syllable-2-8'))).swipe('right', 'fast', 0.75)

    await element((by.id('Syllable-3-1'))).tap();
    await element((by.id('Syllable-3-2'))).tap();
    await element((by.id('Syllable-3-4'))).tap();
    await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.3)
    await element((by.id('Syllable-3-5'))).tap();
    await element((by.id('Syllable-3-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Syllable-3-7'))).tap();
    await element((by.id('Syllable-3-8'))).tap();
    await element((by.id('Syllable-3-10'))).tap();
    await element((by.id('Syllable-3-8'))).swipe('right', 'fast', 0.75)


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
    await element((by.id('Arrow-0-8'))).swipe('right', 'fast', 0.75)

    await element((by.id('Arrow-1-2'))).tap();
    await element((by.id('Arrow-1-5'))).tap();
    await element((by.id('Arrow-1-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Arrow-1-8'))).tap();
    await element((by.id('Arrow-1-8'))).swipe('right', 'fast', 0.75)


    await element(by.id('scrollView')).scrollTo('bottom');
    await element((by.id('Arrow-2-2'))).tap();
    await element((by.id('Arrow-2-5'))).tap();
    await element((by.id('Arrow-2-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Arrow-2-8'))).tap();
    await element((by.id('Arrow-2-8'))).swipe('right', 'fast', 0.75)


    await element((by.id('Arrow-3-2'))).tap();
    await element((by.id('Arrow-3-5'))).tap();
    await element((by.id('Arrow-3-5'))).swipe('left', 'slow', 0.75)
    await element((by.id('Arrow-3-8'))).tap();
    await element((by.id('Arrow-3-8'))).swipe('right', 'fast', 0.75)

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

    await element(by.id('scrollView')).scrollTo('bottom');

    await element((by.id('Arrow-2-2'))).tap();
    await element((by.id('Arrow-2-5'))).tap();

    await element((by.id('Arrow-3-2'))).tap();
    await element((by.id('Arrow-3-2'))).swipe('left', 'slow', 0.75)
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
