const scorum = require('../config/scorum');

(async () => {
  try {
    const response = await scorum.api.getModeratorAsync();
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
