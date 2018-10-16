const scorum = require('../config/scorum');
const users = require('../config/users');

const UUID = 'b6b86d40-88e0-4a5d-b931-0429efe3ee43';
const TYPE = 0; // post

(async () => {
  try {
    const response = await scorum.broadcast.closeBudgetWithAsync(users.kristie.privateKey, {
      type: TYPE,
      uuid: UUID,
      owner: users.kristie.account
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
