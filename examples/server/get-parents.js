const scorum = require('../../lib');

(async () => {
  try {
    const response = await scorum.api.getParentsWithAsync({
      query: {
        author: 'gina',
        permlink: 'test'
      }
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
