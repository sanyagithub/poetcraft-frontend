import { beforeAll, beforeEach, describe, it } from "@jest/globals";

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the heart image on the splash screen', async () => {
    await waitFor(element(by.id('heart_image')))
      .toBeVisible()
    //  .withTimeout(3000); // Wait up to 3 seconds
  });

  it('should display the title "A Beating Heart" on the splash screen', async () => {
    await waitFor(element(by.id('title_beating_heart')))
      .toBeVisible()
    //  .withTimeout(5000); // Increase timeout to 5 seconds
  });

  it('should display the title "The Poet\'s Craft" on the splash screen', async () => {
    await waitFor(element(by.id('title_poets_craft')))
      .toBeVisible()
    //   .withTimeout(5000); // Increase timeout to 5 seconds
  });
});
