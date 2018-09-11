const scorum = require('../../lib');

(async () => {
  try {
    const response = await scorum.api.getPaidPostsCommentsByAuthorWithAsync({
      query: {
        start_author: 'gina',
        start_permlink: '',
        limit: 10
      }
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
