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

  // describe('post bet', () => {
  //   beforeEach(() => Promise.delay(2000));

  //   it('works', async (done) => {
  //     const tx = await scorum.broadcast.postBetWithAsync(postingWif, {
  //       uuid: '707cb551-2ee6-4988-8a20-2407ceb84334',
  //       better: 'gina',
  //       game_uuid: '505d4b88-94d9-4ee0-9e4a-a1c55f2588d7',
  //       wincase: [
  //         'total_goals_away::under',
  //         {
  //           threshold: 1000
  //         }
  //       ],
  //       odds: {
  //         numerator: 3,
  //         denominator: 1
  //       },
  //       stake: '2.000000000 SCR',
  //       live: true
  //     });
  //     console.log(tx);

  //     // const bets = await scorum.api.lookupPendingBetsWithAsync({ limit: 100, from: 0 });
  //     // const bets = await scorum.api.getPendingBetsWithAsync({ uuids: ['505d4b88-94d9-4ee0-9e4a-a1c55f2588d7'] });
  //     // const bets = await scorum.api.getGamesByStatusWithAsync({ filter: ['created'] });
  //     // console.log(JSON.stringify(bets));

  //     // tx.should.have.properties(['expiration', 'ref_block_num', 'ref_block_prefix', 'extensions', 'operations', 'signatures']);
  //     done();
  //   });
  // });

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
