const scorum = require('../config/scorum');
const users = require('../config/users');

const MINUTE = 60 * 1000;
const UUID = 'b6b86d40-88e0-4a5d-b931-0429efe3ee43';
const TYPE = 0; // post

(async () => {
  try {
    const response = await scorum.broadcast.createBudgetWithAsync(users.kristie.privateKey, {
      type: TYPE,
      uuid: UUID,
      owner: users.kristie.account,
      json_metadata: '{}',
      balance: '10.000000000 SCR',
      start: new Date(Date.now() + MINUTE).toISOString().split('.')[0],
      deadline: new Date(Date.now() + MINUTE * 3).toISOString().split('.')[0]
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
