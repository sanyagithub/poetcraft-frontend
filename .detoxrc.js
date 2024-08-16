/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/PoetCraft.app',
      build: 'xcodebuild -workspace ios/PoetCraft.xcworkspace -scheme PoetCraft -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/PoetCraft.app',
      build: 'xcodebuild -workspace ios/PoetCraft.xcworkspace -scheme PoetCraft -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081],
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
    },
  },
  devices: {
    'simulator.iphonese3': {
      type: 'ios.simulator',
      device: { type: 'iPhone SE (3rd generation)' },
    },
    'simulator.iphone14': {
      type: 'ios.simulator',
      device: { type: 'iPhone 14' },
    },
    'simulator.iphone15': {
      type: 'ios.simulator',
      device: { type: 'iPhone 15' },
    },
    'simulator.iphone14promax': {
      type: 'ios.simulator',
      device: { type: 'iPhone 14 Pro Max' },
    },
    'attached': {
      type: 'android.attached',
      device: { adbName: '.*' },
    },
    'emulator': {
      type: 'android.emulator',
      device: { avdName: 'Pixel_3a_API_30_x86' },
    },
  },
  configurations: {
    'ios.sim.debug.iphonese3': {
      device: 'simulator.iphonese3',
      app: 'ios.debug',
    },
    'ios.sim.debug.iphone14': {
      device: 'simulator.iphone14',
      app: 'ios.debug',
    },
    'ios.sim.debug.iphone15': {
      device: 'simulator.iphone15',
      app: 'ios.debug',
    },
    'ios.sim.debug.iphone14promax': {
      device: 'simulator.iphone14promax',
      app: 'ios.debug',
    },
    'ios.sim.release': {
      device: 'simulator.iphone14promax',
      app: 'ios.release',
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug',
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
  },
};
