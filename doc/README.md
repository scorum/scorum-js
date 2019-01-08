# Documentation

* [Install](#install)
* [Browser](#browser)
* [Config](#config)
* [JSON-RPC](#json-rpc)
* [API (getters)](#api)
  * [Tags API](#tags-api)
  * [Blockchain History API](#blockchain-history-api)
  * [Chain API](#chain-api)
  * [Account By Key API](#account-by-key-api)
  * [Database API](#database-api)
  * [Account History API](#account-history-api)
  * [Account Statistics API](#account-statistics-api)
  * [Network Broadcast API](#network-broadcast-api)
* [Broadcast](#broadcast)
* [Auth](#auth)
* [Betting](#betting)
* [Formatter](#formatter)

# Install

```
$ npm install @scorum/scorum-js --save
```

# Browser

```html
<script src="./scorum.min.js"></script>
<script>
scorum.api.getAccounts(['bob', 'alice'], function(err, response) {
    console.log(err, response);
});
</script>
```

## Config

Default config should work with scorum. however you can change it to work with scorum
as

```js
scorum.api.setOptions({ url: 'https://prodnet.scorum.com' });
scorum.config.set('address_prefix', 'SCR');
scorum.config.set('chain_id', 'db4007d45f04c1403a7e66a5c66b5b1cdfc2dde8b5335d1d2f116d592ca3dbb1');
```

### set

```
scorum.config.set('address_prefix','SCR');
```

### get

```
scorum.config.get('chain_id');
```

## JSON-RPC

Here is how to activate JSON-RPC transport:

```js
scorum.api.setOptions({ url: 'https://prodnet.scorum.com' });
```

# API

## Tags API

### Get Discussions By Trending

```
scorum.api.getDiscussionsByTrending(query, function(err, result) {
  console.log(err, result);
});
```

### Get Discussions By Created

```
scorum.api.getDiscussionsByCreated(query, function(err, result) {
  console.log(err, result);
});
```

### Get Discussions By Hot

```
scorum.api.getDiscussionsByHot(query, function(err, result) {
  console.log(err, result);
});
```

### Get Discussions By Author

```
scorum.api.getDiscussionsByAuthor(author, startPermlink, limit, function(err, result) {
  console.log(err, result);
});
```

### Get Comments

```
scorum.api.getComments(author, permlink, depth, function(err, result) {
  console.log(err, result);
});
```

### Get Tags By Category

```
scorum.api.getTagsByCategory(category, function(err, result) {
  console.log(err, result);
});
```

### Get Content

```
scorum.api.getContent(author, permlink, function(err, result) {
  console.log(err, result);
});
```

## Blockchain History API

### Get Operations History

```
scorum.api.getOpsHistory(from, limit, opt, function(err, result) {
  console.log(err, result);
});
```

### Get Operations History In Block

```
scorum.api.getOpsInBlock(blockNum, onlyVirtual, function(err, result) {
  console.log(err, result);
});
```

### Get Transaction

```
scorum.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```

### Get Block Header

```
scorum.api.getBlockHeader(blockNum, function(err, result) {
  console.log(err, result);
});
```

### Get Block

```
scorum.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```

### Get Blocks History

```
scorum.api.getBlocksHistory(from, limit, function(err, result) {
  console.log(err, result);
});
```

## Chain API

### Get Chain Properties

```
scorum.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```

## Account By Key API

### Get Key References

```
scorum.api.getKeyReferences(key, function(err, result) {
  console.log(err, result);
});
```

## Database API

### Get Accounts

```
scorum.api.getAccounts(names, function(err, result) {
  console.log(err, result);
});
```

### Get Accounts

```
scorum.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```

### Lookup Proposals

```
scorum.api.lookupProposals(function(err, result) {
  console.log(err, result);
});
```

### Get Active Witnesses

```
scorum.api.getActiveWitnesses(function(err, result) {
  console.log(err, result);
});
```

### Get Witness By Account

```
scorum.api.getWitnessByAccount(accountName, function(err, result) {
  console.log(err, result);
});
```

### Get Witnesses By Vote

```
scorum.api.getWitnessesByVote(from, limit, function(err, result) {
  console.log(err, result);
});
```

### Get Config

```
scorum.api.getConfig(function(err, result) {
  console.log(err, result);
});
```

### Get Dynamic Global Properties

```
scorum.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```

## Account History API

### Get Account History

```
scorum.api.getAccountHistory(account, from, limit, function(err, result) {
  console.log(err, result);
});
```

### Get Account SCR To SCR Transfers

```
scorum.api.getAccountScrToScrTransfers(account, from, limit, function(err, result) {
  console.log(err, result);
});
```

### Get Account SCR To SP Transfers

```
scorum.api.getAccountScrToSpTransfers(account, from, limit, function(err, result) {
  console.log(err, result);
});
```

### Get Account SP To SCR Transfers

```
scorum.api.getAccountSpToScrTransfers(account, from, limit, function(err, result) {
  console.log(err, result);
});
```

## Account Statistics API

### Get Stats For Time By Account Name

```
scorum.api.getStatsForTimeByAccountName(account, timeOpen, function(err, result) {
  console.log(err, result);
});
```

### Get Stats For Interval By Account Name

```
scorum.api.getStatsForIntervalByAccountName(account, timeStart, timeFinish, function(err, result) {
  console.log(err, result);
});
```

### Get Lifetime Stats By Account Name

```
scorum.api.getLifetimeStatsByAccountName(account, function(err, result) {
  console.log(err, result);
});
```

## Network Broadcast API

### Broadcast Transaction

```
scorum.api.broadcastTransaction(trx, function(err, result) {
  console.log(err, result);
});
```

### Broadcast Transaction With Callback

```
scorum.api.broadcastTransactionWithCallback(confirmationCallback, trx, function(err, result) {
  console.log(err, result);
});
```

### Broadcast Transaction Synchronous

```
scorum.api.broadcastTransactionSynchronous(trx, function(err, result) {
  console.log(err, result);
});
```

# Broadcast

### Vote

```
scorum.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
  console.log(err, result);
});
```

### Comment

```
scorum.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```

### Transfer

```
scorum.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```

### Transfer To Scorum Power

```
scorum.broadcast.transferToScorumpower(wif, from, to, amount, function(err, result) {
  console.log(err, result);
});
```

### Withdraw Scorum Power

```
scorum.broadcast.withdrawScorumpower(wif, account, scorumPower, function(err, result) {
  console.log(err, result);
});
```

### Account Create By Committee

```
scorum.broadcast.accountCreateByCommittee(wif, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```

### Account Create

```
scorum.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```

### Account Create With Delegation

```
scorum.broadcast.accountCreateWithDelegation(wif, fee, delegation, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, extensions, function(err, result) {
  console.log(err, result);
});
```

### Account Update

```
scorum.broadcast.accountUpdate(wif, account, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```

### Witness Update

```
scorum.broadcast.witnessUpdate(wif, owner, url, blockSigningKey, props, fee, function(err, result) {
  console.log(err, result);
});
```

### Account Witness Vote

```
scorum.broadcast.accountWitnessVote(wif, account, witness, approve, function(err, result) {
  console.log(err, result);
});
```

### Account Witness Proxy

```
scorum.broadcast.accountWitnessProxy(wif, account, proxy, function(err, result) {
  console.log(err, result);
});
```

### Delete Comment

```
scorum.broadcast.deleteComment(wif, author, permlink, function(err, result) {
  console.log(err, result);
});
```

### Comment Options

```
scorum.broadcast.commentOptions(wif, author, permlink, maxAcceptedPayout, percentScorumDollars, allowVotes, allowCurationRewards, extensions, function(err, result) {
  console.log(err, result);
});
```

### Set Withdraw Scorumpower Route To Account

```
scorum.broadcast.setWithdrawScorumpowerRouteToAccount(wif, fromAccount, toAccount, percent, autoVest, function(err, result) {
  console.log(err, result);
});
```

### Set Withdraw Scorumpower Route To Dev Pool

```
scorum.broadcast.setWithdrawScorumpowerRouteToDevPool(wif, fromAccount, percent, autoVest, function(err, result) {
  console.log(err, result);
});
```

### Prove Authority

```
scorum.broadcast.proveAuthority(wif, challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```

### Request Account Recovery

```
scorum.broadcast.requestAccountRecovery(wif, recoveryAccount, accountToRecover, newOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```

### Recover Account

```
scorum.broadcast.recoverAccount(wif, accountToRecover, newOwnerAuthority, recentOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```

### Change Recovery Account

```
scorum.broadcast.changeRecoveryAccount(wif, accountToRecover, newRecoveryAccount, extensions, function(err, result) {
  console.log(err, result);
});
```

### Escrow Approve

```
scorum.broadcast.escrowApprove(wif, from, to, agent, who, escrowId, approve, function(err, result) {
  console.log(err, result);
});
```

### Escrow Dispute

```
scorum.broadcast.escrowDispute(wif, from, to, agent, who, escrowId, function(err, result) {
  console.log(err, result);
});
```

### Escrow Release

```
scorum.broadcast.escrowRelease(wif, from, to, agent, who, receiver, escrowId, sbdAmount, scorumAmount, function(err, result) {
  console.log(err, result);
});
```

### Escrow Transfer

```
scorum.broadcast.escrowTransfer(wif, from, to, agent, escrowId, sbdAmount, scorumAmount, fee, ratificationDeadline, escrowExpiration, jsonMeta, function(err, result) {
  console.log(err, result);
});
```

### Decline Voting Rights

```
scorum.broadcast.declineVotingRights(wif, account, decline, function(err, result) {
  console.log(err, result);
});
```

### Delegate Scorum Power

```
scorum.broadcast.delegateScorumpower(wif, delegator, delegatee, scorumpower, function(err, result) {
  console.log(err, result);
});
```

### Create Budget

```
scorum.broadcast.createBudget(wif, owner, contentPermlink, balance, deadline, function(err, result) {
  console.log(err, result);
});
```

### Close Budget

```
scorum.broadcast.closeBudget(wif, budgetId, owner, function(err, result) {
  console.log(err, result);
});
```

### Proposal Vote

```
scorum.broadcast.proposalVote(wif, votingAccount, proposalId, function(err, result) {
  console.log(err, result);
});
```

### Proposal Create

```
scorum.broadcast.proposalCreate(wif, creator, lifetime_sec, operaion, function(err, result) {
  console.log(err, result);
});
```

### Multisig

You can use multisignature to broadcast an operation.

```
scorum.broadcast.send({
  extensions: [],
  operations: [
    ['vote', {
      voter: 'guest123',
      author: 'fabien',
      permlink: 'test',
      weight: 1000
    }]
  ]}, [privPostingWif1, privPostingWif2], (err, result) => {
  console.log(err, result);
});
```

# Auth

### Verify

```
scorum.auth.verify(name, password, auths);
```

### Generate Keys

```
scorum.auth.generateKeys(name, password, roles);
```

### Get Private Keys

```
scorum.auth.getPrivateKeys(name, password, roles);
```

### Is Wif

```
scorum.auth.isWif(privWif);
```

### To Wif

```
scorum.auth.toWif(name, password, role);
```

### Wif Is Valid

```
scorum.auth.wifIsValid(privWif, pubWif);
```

### Wif To Public

```
scorum.auth.wifToPublic(privWif);
```

### Sign Transaction

```
scorum.auth.signTransaction(trx, keys);
```

# Formatter

### Create Suggested Password

```
var password = scorum.formatter.createSuggestedPassword();
console.log(password);
// => 'GAz3GYFvvQvgm7t2fQmwMDuXEzDqTzn9'
```

### Comment Permlink

```
var parentAuthor = 'alice';
var parentPermlink = 'a-selfie';
var commentPermlink = scorum.formatter.commentPermlink(parentAuthor, parentPermlink);
console.log(commentPermlink);
// => 're-alice-a-selfie-20170621t080403765z'
```

### Estimate Account Value

```
var scorumPower = scorum.formatter.estimateAccountValue(account);
```

### Reputation

```
var reputation = scorum.formatter.reputation(3512485230915);
console.log(reputation);
// => 56
```

### Vest To Scorum

```
var scorumPower = scorum.formatter.scorumPowerToScr(scorumPower, totalscorumPower, totalVestingFundScorum);
console.log(scorumPower);
```

# Betting

## Broadcast operations

### Post Bet

```
scorum.broadcast.postBet(wif, uuid, game_uuid, wincase, odds, stake, live, function(err, result) {
  console.log(err, result);
});
```

```
// EXAMPLE

const tx = await scorum.broadcast.postBetWithAsync(yourWif, {
  uuid: '707cb551-2ee6-4988-8a20-2407ceb84334',
  better: 'john',
  game_uuid: '505d4b88-94d9-4ee0-9e4a-a1c55f2588d7',
  wincase: [
    'total_goals_away::under',
    {
      threshold: 1000 // total under 1. if treshhold 1500 => under 1.5
    }
  ],
  odds: {
    numerator: 3,
    denominator: 1
  }, // => coefficient 3.0
  stake: '2.000000000 SCR',
  live: false
});
```

Allow wincases:

* result_home::yes // wincase: [ 'result_home::yes', {} ]
* result_home::no // wincase: [ 'result_home::no', {} ]
* result_draw::yes // wincase: [ 'result_draw::yes', {} ]
* result_draw::no // wincase: [ 'result_draw::no', {} ]
* result_away::yes // wincase: [ 'result_away::yes', {} ]
* result_away::no // wincase: [ 'result_away::no', {} ]
* round_home::yes // wincase: [ 'round_home::yes', {} ]
* round_home::no // wincase: [ 'round_home::no', {} ]
* handicap::over // wincase: [ 'handicap::over', { threshold: 1000 } ]
* handicap::under // wincase: [ 'handicap::under', { threshold: 1000 } ]
* correct_score_home::yes // wincase: [ 'correct_score_home::yes', {} ]
* correct_score_home::no // wincase: [ 'correct_score_home::no', {} ]
* correct_score_draw::yes // wincase: [ 'correct_score_draw::yes', {} ]
* correct_score_draw::no // wincase: [ 'correct_score_draw::no', {} ]
* correct_score_away::yes // wincase: [ 'correct_score_away::yes', {} ]
* correct_score_away::no // wincase: [ 'correct_score_away::no', {} ]
* correct_score::yes // wincase: [ 'correct_score::yes', { home: 1, away: 3 } ]
* correct_score::no // wincase: [ 'correct_score::no', { home: 1, away: 3 } ]
* goal_home::yes // wincase: [ 'goal_home::yes', {} ]
* goal_home::no // wincase: [ 'goal_home::no', {} ]
* goal_both::yes // wincase: [ 'goal_both::yes', {} ]
* goal_both::no // wincase: [ 'goal_both::no', {} ]
* goal_away::yes // wincase: [ 'goal_away::yes', {} ]
* goal_away::no // wincase: [ 'goal_away::no', {} ]
* total::over // wincase: [ 'total::over', { threshold: 1000 } ]
* total::under // wincase: [ 'total::under', { threshold: 1000 } ]
* total_goals_home::over // wincase: [ 'total_goals_home::over', { threshold: 1000 } ]
* total_goals_home::under // wincase: [ 'total_goals_home::under', { threshold: 1000 } ]
* total_goals_away::over // wincase: [ 'total_goals_away::over', { threshold: 1000 } ]
* total_goals_away::under // wincase: [ 'total_goals_away::under', { threshold: 1000 } ]

### Cancel pending bets

```
scorum.broadcast.cancelPendingBets(wif, bet_uuids, better, function(err, result) {
  console.log(err, result);
});
```

```
// EXAMPLE

const tx = await scorum.broadcast.cancelPendingBetsWithAsync(yourWif, {
  bet_uuids: ['505d4b88-94d9-4ee0-9e4a-a1c55f2588d7', '505d4b88-94d9-4ee0-9e4a-a1c55f2588d7'],
  better: 'john',
});
```

## Getters

### Lookup matched bets

```
scorum.broadcast.lookupMatchedBets(from, limit, function(err, result) {
  console.log(err, result);
});
```

### Lookup pending bets

```
scorum.broadcast.lookupPendingBets(from, limit, function(err, result) {
  console.log(err, result);
});

// const bets = await scorum.api.lookupPendingBetsWithAsync({ limit: 100, from: 0 })
```

### Get matched bets

```
scorum.broadcast.getMatchedBets(uuids, function(err, result) {
  console.log(err, result);
});
```

### Get pending bets

```
scorum.broadcast.getPendingBets(uuids, function(err, result) {
  console.log(err, result);
});

// const bets = await scorum.api.getPendingBetsWithAsync({ uuids: ['505d4b88-94d9-4ee0-9e4a-a1c55f2588d7'] })
```

### Get games by status

```
scorum.broadcast.getGamesByStatus(filter, function(err, result) {
  console.log(err, result);
});

// const bets = await scorum.api.getGamesByStatusWithAsync({ filter: ['created'] }
```

# Utils

### Validate Username

```
var isValidUsername = scorum.utils.validateAccountName('test1234');
console.log(isValidUsername);
// => 'null'

var isValidUsername = scorum.utils.validateAccountName('a1');
console.log(isValidUsername);
// => 'Account name should be longer.'
```
