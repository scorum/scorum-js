let BigInteger = require('bigi');
const ecurve = require('ecurve');

const secp256k1 = ecurve.getCurveByName('secp256k1');
BigInteger = require('bigi');
const base58 = require('bs58');
const hash = require('./hash');
const config = require('../../../config');
const assert = require('assert');

const G = secp256k1.G;
const n = secp256k1.n;

class PublicKey {
  /** @param {ecurve.Point} public key */
  constructor(Q) {
    this.Q = Q;
  }

  static fromBinary(bin) {
    return PublicKey.fromBuffer(new Buffer(bin, 'binary'));
  }

  static fromBuffer(buffer) {
    if (
      buffer.toString("hex") ===
        "000000000000000000000000000000000000000000000000000000000000000000"
       )
      return new PublicKey(null);
    return new PublicKey(ecurve.Point.decodeFrom(secp256k1, buffer));
  }

   toBuffer(compressed = this.Q ? this.Q.compressed : null) {
     if (this.Q === null)
       return Buffer.from(
         "000000000000000000000000000000000000000000000000000000000000000000",
         "hex"
        );
    return this.Q.getEncoded(compressed);
  }

  static fromPoint(point) {
    return new PublicKey(point);
  }

  toUncompressed() {
    const buf = this.Q.getEncoded(false);
    const point = ecurve.Point.decodeFrom(secp256k1, buf);
    return PublicKey.fromPoint(point);
  }

  /** bts::blockchain::address (unique but not a full public key) */
  toBlockchainAddress() {
    const pub_buf = this.toBuffer();
    const pub_sha = hash.sha512(pub_buf);
    return hash.ripemd160(pub_sha);
  }

  toString(address_prefix = config.get('address_prefix')) {
    return this.toPublicKeyString(address_prefix);
  }

  /**
        Full public key
        {return} string
    */
  toPublicKeyString(address_prefix = config.get('address_prefix')) {
    if (this.pubdata) return address_prefix + this.pubdata;
    const pub_buf = this.toBuffer();
    const checksum = hash.ripemd160(pub_buf);
    const addy = Buffer.concat([pub_buf, checksum.slice(0, 4)]);
    this.pubdata = base58.encode(addy);
    return address_prefix + this.pubdata;
  }

  /**
        @arg {string} public_key - like SCRXyz...
        @arg {string} address_prefix - like SCR
        @return PublicKey or `null` (if the public_key string is invalid)
        @deprecated fromPublicKeyString (use fromString instead)
    */
  static fromString(public_key, address_prefix = config.get('address_prefix')) {
    try {
      return PublicKey.fromStringOrThrow(public_key, address_prefix);
    } catch (e) {
      return null;
    }
  }

  /**
        @arg {string} public_key - like SCRXyz...
        @arg {string} address_prefix - like SCR
        @throws {Error} if public key is invalid
        @return PublicKey
    */
  static fromStringOrThrow(public_key, address_prefix = config.get('address_prefix')) {
    const prefix = public_key.slice(0, address_prefix.length);
    assert.equal(address_prefix, prefix, `Expecting key to begin with ${address_prefix}, instead got ${prefix}`);
    public_key = public_key.slice(address_prefix.length);

    public_key = new Buffer(base58.decode(public_key), 'binary');
    const checksum = public_key.slice(-4);
    public_key = public_key.slice(0, -4);
    let new_checksum = hash.ripemd160(public_key);
    new_checksum = new_checksum.slice(0, 4);
    assert.deepEqual(checksum, new_checksum, 'Checksum did not match');
    return PublicKey.fromBuffer(public_key);
  }

  toAddressString(address_prefix = config.get('address_prefix')) {
    const pub_buf = this.toBuffer();
    const pub_sha = hash.sha512(pub_buf);
    let addy = hash.ripemd160(pub_sha);
    const checksum = hash.ripemd160(addy);
    addy = Buffer.concat([addy, checksum.slice(0, 4)]);
    return address_prefix + base58.encode(addy);
  }

  toPtsAddy() {
    const pub_buf = this.toBuffer();
    const pub_sha = hash.sha256(pub_buf);
    let addy = hash.ripemd160(pub_sha);
    addy = Buffer.concat([new Buffer([0x38]), addy]); // version 56(decimal)

    let checksum = hash.sha256(addy);
    checksum = hash.sha256(checksum);

    addy = Buffer.concat([addy, checksum.slice(0, 4)]);
    return base58.encode(addy);
  }

  child(offset) {
    assert(Buffer.isBuffer(offset), 'Buffer required: offset');
    assert.equal(offset.length, 32, 'offset length');

    offset = Buffer.concat([this.toBuffer(), offset]);
    offset = hash.sha256(offset);

    const c = BigInteger.fromBuffer(offset);

    if (c.compareTo(n) >= 0) throw new Error('Child offset went out of bounds, try again');

    const cG = G.multiply(c);
    const Qprime = this.Q.add(cG);

    if (secp256k1.isInfinity(Qprime)) throw new Error('Child offset derived to an invalid key, try again');

    return PublicKey.fromPoint(Qprime);
  }

  // toByteBuffer() {
  //     var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
  //     this.appendByteBuffer(b);
  //     return b.copy(0, b.offset);
  // }

  static fromHex(hex) {
    return PublicKey.fromBuffer(new Buffer(hex, 'hex'));
  }

  toHex() {
    return this.toBuffer().toString('hex');
  }

  static fromStringHex(hex) {
    return PublicKey.fromString(new Buffer(hex, 'hex'));
  }

  /* </HEX> */
}

module.exports = PublicKey;
