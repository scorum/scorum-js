const scorum = require('../../lib');

(async () => {
  try {
    const response = await scorum.api.getContentsWithAsync({
      queries: [{
        author: 'gina',
        permlink: 'test'
      }, {
        author: 'dionne',
        permlink: 'test2'
      }]
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
