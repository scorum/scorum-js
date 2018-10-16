const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.delegateScorumpowerWithAsync(users.leonarda.privateKey, {
      delegator: users.leonarda.account,
      delegatee: users.noelle.account,
      scorumpower: '11.000000000 SP'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
