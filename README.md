# Scorum.js
Scorum.js the JavaScript API for Scorum blockchain

# Documentation

- [Install](https://github.com/scorum/scorum-js/tree/master/doc#install)
- [Browser](https://github.com/scorum/scorum-js/tree/master/doc#browser)
- [Config](https://github.com/scorum/scorum-js/tree/master/doc#config)
- [Database API](https://github.com/scorum/scorum-js/tree/master/doc#api)
    - [Subscriptions](https://github.com/scorum/scorum-js/tree/master/doc#subscriptions)
    - [Tags](https://github.com/scorum/scorum-js/tree/master/doc#tags)
    - [Blocks and transactions](https://github.com/scorum/scorum-js/tree/master/doc#blocks-and-transactions)
    - [Globals](https://github.com/scorum/scorum-js/tree/master/doc#globals)
    - [Keys](https://github.com/scorum/scorum-js/tree/master/doc#keys)
    - [Accounts](https://github.com/scorum/scorum-js/tree/master/doc#accounts)
    - [Market](https://github.com/scorum/scorum-js/tree/master/doc#market)
    - [Authority / validation](https://github.com/scorum/scorum-js/tree/master/doc#authority--validation)
    - [Votes](https://github.com/scorum/scorum-js/tree/master/doc#votes)
    - [Content](https://github.com/scorum/scorum-js/tree/master/doc#content)
    - [Witnesses](https://github.com/scorum/scorum-js/tree/master/doc#witnesses)
- [Login API](https://github.com/scorum/scorum-js/tree/master/doc#login)
- [Follow API](https://github.com/scorum/scorum-js/tree/master/doc#follow-api)
- [Broadcast API](https://github.com/scorum/scorum-js/tree/master/doc#broadcast-api)
- [Broadcast](https://github.com/scorum/scorum-js/tree/master/doc#broadcast)
- [Auth](https://github.com/scorum/scorum-js/tree/master/doc#auth)


Here is full documentation:
https://github.com/scorum/scorum-js/tree/master/doc

## Browser
```html
<script src="./scorum.min.js"></script>
<script>
steem.api.getAccounts(['ned', 'dan'], function(err, response){
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

## WebSockets
ws://node1-testnet.scorum.com:8090 By Default<br/>
ws://node2-testnet.scorum.com:8090<br/>
ws://node3-testnet.scorum.com:8090<br/>
ws://node4-testnet.scorum.com:8090<br/>

## Examples
### Broadcast Vote
```js
var scorum = require('scorum-js');

var wif = scorum.auth.toWif(username, password, 'posting');
scorum.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
	console.log(err, result);
});
```

### Get Accounts
```js
scorum.api.getAccounts(['ned', 'dan'], function(err, result) {
	console.log(err, result);
});
```

### Get State
```js
scorum.api.getState('/trends/funny', function(err, result) {
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
