const scorum = require('../config/scorum');

const UUID = 'b6b86d40-88e0-4a5d-b931-0429efe3ee43';
const TYPE = 0; // post

(async () => {
  try {
    const response = await scorum.api.getBudgetWithAsync({ uuid: UUID, type: TYPE });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
