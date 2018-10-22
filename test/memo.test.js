import assert from 'assert';
import { encode, decode } from '../src/auth/memo';
import { PrivateKey } from '../src/auth/ecc';

const private_key = PrivateKey.fromSeed('');
const public_key = private_key.toPublicKey();

describe('scorum.auth: memo', () => {
  it('plain text', () => {
    const plaintext1 = encode(null /* private_key */, null /* public_key */, 'memo');
    assert.equal(plaintext1, 'memo');

    const plaintext2 = decode(null /* private_key */, plaintext1);
    assert.equal(plaintext2, 'memo');
  });
  it('encryption obj params', () => {
    const cypertext = encode(private_key, public_key, '#memo');
    const plaintext = decode(private_key, cypertext);
    assert.equal(plaintext, '#memo');
  });
  it('encryption string params', () => {
    const cypertext = encode(private_key.toWif(), public_key.toPublicKeyString(), '#memo2');
    const plaintext = decode(private_key.toWif(), cypertext);
    assert.equal(plaintext, '#memo2');
  });
  it('known encryption', () => {
    const base58 =
      '#GBX2PaB5tYX6nJMkY5K4XbTWB9tJTXKNySo4TyzbTVmDn5p21fvPjkFuCXfrLTMLxgUGgMcKW6G9tiyrJUk7seEvW4pTmLcPirBC4daq5HvfV45qGv8R3RJWsoYgWHbjP';
    const nonce = '1462976530069648';
    const text = '#爱';

    const cypertext = encode(private_key, public_key, text, nonce);
    assert.equal(cypertext, base58);
    const plaintext = decode(private_key, cypertext);
    assert.equal(plaintext, text);
  });
});
