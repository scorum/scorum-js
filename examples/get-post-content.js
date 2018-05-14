const scorum = require('../lib');

const resultP = scorum.api.getContentAsync('andrew', 'test-permlink');
resultP.then(result => console.log(result));
