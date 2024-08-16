const Sequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends Sequencer {
  sort(tests) {
    // Define your custom order here
    const customOrder = [
      '0_RegisterScreen.test.js',
      'starter.test.js',
      'Login.test.js',
      'HomeScreen.test.js',
      'Courses.test.js',
      'SyllableCheckerScreen.test.js',
      'ModulesScreen.test.js',
      'Module1.test.js',
      'Module2.test.js',
      'Module3.test.js',
      'Module4.test.js',
    ];

    return tests.sort((a, b) => {
      const fileNameA = a.path.split('/').pop();
      const fileNameB = b.path.split('/').pop();

      const indexA = customOrder.indexOf(fileNameA);
      const indexB = customOrder.indexOf(fileNameB);

      // If the file is not in the custom order, put it at the end
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    });
  }
}

module.exports = CustomSequencer;
