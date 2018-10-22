import assert from 'assert';
import should from 'should';
import testPost from './test-post.json';
import scorum from '../src';

require('babel-polyfill');

describe('scorum.api:', function () {
  this.timeout(30 * 1000);

  describe('setOptions', () => {
    it('works', () => {
      scorum.api.setOptions({ url: scorum.config.get('url') });
    });
  });

  describe('getContent', () => {
    describe('getting a random post', () => {
      it('works', async () => {
        const result = await scorum.api.getContentAsync('gina', 'new-test-post');
        result.should.have.properties(testPost);
      });

      it('clears listeners', async () => {
        scorum.api.listeners('message').should.have.lengthOf(0);
      });
    });
  });

  describe('streamBlockNumber', () => {
    it('streams scorum transactions', (done) => {
      let i = 0;
      const release = scorum.api.streamBlockNumber((err, block) => {
        should.exist(block);
        block.should.be.instanceOf(Number);
        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  describe('streamBlock', () => {
    it('streams scorum blocks', (done) => {
      let i = 0;
      const release = scorum.api.streamBlock((err, block) => {
        try {
          should.exist(block);
          block.should.have.properties(['previous', 'transactions', 'timestamp']);
        } catch (err2) {
          release();
          done(err2);
          return;
        }

        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  // describe('streamTransactions', () => {
  //   it('streams scorum transactions', (done) => {
  //     let i = 0;
  //     const release = scorum.api.streamTransactions((err, transaction) => {
  //       try {
  //         should.exist(transaction);
  //         transaction.should.have.properties(['ref_block_num', 'operations', 'extensions']);
  //       } catch (err2) {
  //         release();
  //         done(err2);
  //         return;
  //       }

  //       i++;
  //       if (i === 2) {
  //         release();
  //         done();
  //       }
  //     });
  //   });
  // });

  // describe('streamOperations', () => {
  //   it('streams scorum operations', (done) => {
  //     let i = 0;
  //     const release = scorum.api.streamOperations((err, operation) => {
  //       try {
  //         should.exist(operation);
  //       } catch (err2) {
  //         release();
  //         done(err2);
  //         return;
  //       }

  //       i++;
  //       if (i === 2) {
  //         release();
  //         done();
  //       }
  //     });
  //   });
  // });
});
