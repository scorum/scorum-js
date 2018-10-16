const scorum = require('../config/scorum');

const TYPE = 0; // post

(async () => {
  try {
    const response = await scorum.api.getAuctionCoefficientsWithAsync({ type: TYPE });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
