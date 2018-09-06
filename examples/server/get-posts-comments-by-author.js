const scorum = require('../../lib');

(async () => {
  try {
    const response = await scorum.api.getPostsCommentsByAuthorWithAsync({
      query: {
        start_author: 'gina',
        limit: 10
      }
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
