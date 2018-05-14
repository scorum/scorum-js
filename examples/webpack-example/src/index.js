import scorum from '@scorum/scorum-js';

console.log('Getting post content...');

const resultP = scorum.api.getContentAsync('andrew', 'test-permlink');

resultP.then(result => console.log(result));
