import Promise from 'bluebird';
import should from 'should';
import scorum from '../src';
import pkg from '../package.json';

const username = process.env.SCORUM_USERNAME || 'gina';
const password = process.env.SCORUM_PASSWORD;
const postingWif = password ? scorum.auth.toWif(username, password, 'posting') : '5J2b1VrPKgtP6j8TCKr67kXwF2yAjYphSrjhBUWv7FVLd1MDFLc';

describe('scorum.broadcast:', () => {
  describe('comment with options', () => {
    before(() => Promise.delay(2000));

    it('works', async () => {
      const permlink = scorum.formatter.commentPermlink('gina', 'test-comment');
      const operations = [
        [
          'comment',
          {
            parent_author: 'gina',
            parent_permlink: 'new-test-post',
            author: username,
            permlink,
            title: 'Test comment',
            body: `This is a test using scorum.js v${pkg.version}.`,
            json_metadata: JSON.stringify({
              tags: ['test'],
              app: `scorumjs/${pkg.version}`
            })
          }
        ]
      ];

      const tx = await scorum.broadcast.sendAsync({ operations, extensions: [] }, { posting: postingWif });

      tx.should.have.properties(['expiration', 'ref_block_num', 'ref_block_prefix', 'extensions', 'operations', 'signatures']);
    });
  });
});
