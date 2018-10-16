const scorum = require('../config/scorum');
const users = require('../config/users');

const UUID = 'b6b86d40-88e0-4a5d-b931-0429efe3ee43';

(async () => {
  try {
    const response = await scorum.broadcast.updateBudgetWithAsync(users.kristie.privateKey, {
      type: 0,
      uuid: UUID,
      owner: users.kristie.account,
      json_metadata: '{}'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
