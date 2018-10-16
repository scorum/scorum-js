const scorum = require('../../lib');

scorum.api.setOptions({ url: 'https://testnet.scorum.com' });
scorum.config.set('address_prefix', 'SCR');
scorum.config.set('chain_id', 'd3c1f19a4947c296446583f988c43fd1a83818fabaf3454a0020198cb361ebd2');

module.exports = scorum;
