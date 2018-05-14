# Scorum.js

[![CircleCI](https://circleci.com/gh/scorum/scorum-js.svg?style=svg)](https://circleci.com/gh/scorum/scorum-js)

Scorum.js the JavaScript API for Scorum blockchain

# Documentation

* [Install](https://github.com/scorum/scorum-js/tree/master/doc#install)
* [Browser](https://github.com/scorum/scorum-js/tree/master/doc#browser)
* [Config](https://github.com/scorum/scorum-js/tree/master/doc#config)
* [JSON-RPC](https://github.com/scorum/scorum-js/tree/master/doc#json-rpc)
* [API (getters)](https://github.com/scorum/scorum-js/tree/master/doc#api)
  * [Tags API](https://github.com/scorum/scorum-js/tree/master/doc#tags-api)
  * [Blockchain History API](https://github.com/scorum/scorum-js/tree/master/doc#blockchain-history-api)
  * [Chain API](https://github.com/scorum/scorum-js/tree/master/doc#chain-api)
  * [Account By Key API](https://github.com/scorum/scorum-js/tree/master/doc#account-by-key-api)
  * [Database API](https://github.com/scorum/scorum-js/tree/master/doc#database-api)
  * [Account History API](https://github.com/scorum/scorum-js/tree/master/doc#account-history-api)
  * [Account Statistics API](https://github.com/scorum/scorum-js/tree/master/doc#account-statistics-api)
  * [Network Broadcast API](https://github.com/scorum/scorum-js/tree/master/doc#network-broadcast-api)
* [Broadcast](https://github.com/scorum/scorum-js/tree/master/doc#broadcast)
* [Auth](https://github.com/scorum/scorum-js/tree/master/doc#auth)
* [Formatter](https://github.com/scorum/scorum-js/tree/master/doc#formatter)

Here is full documentation:
https://github.com/scorum/scorum-js/tree/master/doc

## Browser

```html
<script src="./scorum.min.js"></script>
<script>
scorum.api.getAccounts(['alice', 'bob'], function(err, response){
    console.log(err, response);
});
</script>
```

## Webpack

[Please have a look at the webpack usage example.](https://github.com/scorum/scorum-js/blob/master/examples/webpack-example)

## Server

## Install

```
$ npm install @scorum/scorum-js --save
```

## Examples

### Broadcast Vote

```js
var scorum = require('@scorum/scorum-js');

var wif = scorum.auth.toWif(username, password, 'posting');
scorum.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
  console.log(err, result);
});
```

### Get Accounts

```js
scorum.api.getAccounts(['bob', 'alice'], function(err, result) {
  console.log(err, result);
});
```

### Reputation Formatter

```js
var reputation = scorum.formatter.reputation(user.reputation);
console.log(reputation);
```

## Contributions

Patches are welcome! Contributors are listed in the package.json file. Please run the tests before opening a pull request and make sure that you are passing all of them. If you would like to contribute, but don't know what to work on, check the issues list.

## Issues

When you find issues, please report them!

## License

MIT
