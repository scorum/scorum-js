import Promise from 'bluebird';
import should from 'should';
import scorum from '../src';

const username = process.env.SCORUM_USERNAME || 'gina';
const password = process.env.SCORUM_PASSWORD;
const postingWif = password ? scorum.auth.toWif(username, password, 'posting') : '5J2b1VrPKgtP6j8TCKr67kXwF2yAjYphSrjhBUWv7FVLd1MDFLc';

describe('scorum.broadcast:', () => {
  it('exists', () => {
    should.exist(scorum.broadcast);
  });

  it('has generated methods', () => {
    should.exist(scorum.broadcast.vote);
    should.exist(scorum.broadcast.voteWith);
    should.exist(scorum.broadcast.comment);
    should.exist(scorum.broadcast.transfer);
  });

  it('has backing methods', () => {
    should.exist(scorum.broadcast.send);
  });

  it('has promise methods', () => {
    should.exist(scorum.broadcast.sendAsync);
    should.exist(scorum.broadcast.voteAsync);
    should.exist(scorum.broadcast.transferAsync);
  });

  describe('patching transaction with default global properties', () => {
    it('works', async () => {
      const tx = await scorum.broadcast._prepareTransaction({
        extensions: [],
        operations: [
          [
            'vote',
            {
              voter: 'gina',
              author: 'gina',
              permlink: 'new-test-post'
            }
          ]
        ]
      });

      tx.should.have.properties(['expiration', 'ref_block_num', 'ref_block_prefix', 'extensions', 'operations']);
    });
  });

  describe('downvoting', () => {
    it('works', async () => {
      const tx = await scorum.broadcast.voteAsync(postingWif, username, 'gina', 'new-test-post', -1000);
      tx.should.have.properties(['expiration', 'ref_block_num', 'ref_block_prefix', 'extensions', 'operations', 'signatures']);
    });
  });

  describe('voting', () => {
    beforeEach(() => Promise.delay(2000));

    it('works', async () => {
      const tx = await scorum.broadcast.voteAsync(postingWif, username, 'gina', 'new-test-post', 10000);

      tx.should.have.properties(['expiration', 'ref_block_num', 'ref_block_prefix', 'extensions', 'operations', 'signatures']);
    });

    it('works with callbacks', (done) => {
      scorum.broadcast.vote(postingWif, username, 'gina', 'new-test-post', 5000, (err, tx) => {
        if (err) return done(err);
        tx.should.have.properties(['expiration', 'ref_block_num', 'ref_block_prefix', 'extensions', 'operations', 'signatures']);
        done();
      });
    });
  });

  describe('writeOperations', () => {
    it('receives a properly formatted error response', () => {
      const wif = scorum.auth.toWif('username', 'password', 'posting');
      return scorum.broadcast.voteAsync(wif, 'voter', 'author', 'permlink', 0).then(
        () => {
          throw new Error("writeOperation should have failed but it didn't");
        },
        (e) => {
          should.exist(e.message);
        }
      );
    });
  });
});
