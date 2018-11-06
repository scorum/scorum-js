import { PublicKey } from '@scorum-js/ecc';

class FastParser {
  static fixed_data(b, len, buffer) {
    if (!b) {
      return;
    }
    if (buffer) {
      const data = buffer.slice(0, len).toString('binary');
      b.append(data, 'binary');
      while (len-- > data.length) {
        b.writeUint8(0);
      }
    } else {
      const b_copy = b.copy(b.offset, b.offset + len);
      b.skip(len);
      return new Buffer(b_copy.toBinary(), 'binary');
    }
  }

  static public_key(b, public_key) {
    if (!b) {
      return;
    }
    if (public_key) {
      var buffer = public_key.toBuffer();
      b.append(buffer.toString('binary'), 'binary');
    } else {
      buffer = FastParser.fixed_data(b, 33);
      return PublicKey.fromBuffer(buffer);
    }
  }

  static ripemd160(b, ripemd160) {
    if (!b) {
      return;
    }
    if (ripemd160) {
      FastParser.fixed_data(b, 20, ripemd160);
    } else {
      return FastParser.fixed_data(b, 20);
    }
  }

  static time_point_sec(b, epoch) {
    if (epoch) {
      epoch = Math.ceil(epoch / 1000);
      b.writeInt32(epoch);
    } else {
      epoch = b.readInt32(); // fc::time_point_sec
      return new Date(epoch * 1000);
    }
  }

  static UUIDtoBuffer(uuid) {
    if (!uuid) {
      return Buffer.alloc(16); // Return empty buffer
    }
    const hexStr = uuid.replace(/-/g, '');
    if (uuid.length != 36 || hexStr.length != 32) throw new Error(`Invalid UUID string: ${uuid}`);
    return Buffer.from(hexStr, 'hex');
  }

  static UUIDtoString(buffer) {
    // console.log('buffer', buffer, buffer.length);
    if (buffer.length != 16) throw new Error(`Invalid buffer length for uuid: ${buffer.length}`);
    if (buffer.equals(Buffer.alloc(16))) return null; // If buffer is all zeros, return null
    const str = buffer.toString('hex');
    return `${str.slice(0, 8)}-${str.slice(8, 12)}-${str.slice(12, 16)}-${str.slice(16, 20)}-${str.slice(20)}`;
  }
}

module.exports = FastParser;
