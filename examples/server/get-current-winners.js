const scorum = require('../config/scorum');

const TYPE = 0; // post

(async () => {
  try {
    const response = await scorum.api.getCurrentWinnersWithAsync({ type: TYPE });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
