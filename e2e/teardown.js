const cleanup = require('../api/cleanup');

module.exports = async () => {
  await cleanup();
};
