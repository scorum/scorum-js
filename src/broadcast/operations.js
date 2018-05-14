module.exports = [
  {
    roles: ['posting', 'active', 'owner'],
    operation: 'vote',
    params: ['voter', 'author', 'permlink', 'weight']
  },
  {
    roles: ['posting', 'active', 'owner'],
    operation: 'comment',
    params: ['parent_author', 'parent_permlink', 'author', 'permlink', 'title', 'body', 'json_metadata']
  },
  {
    roles: ['active', 'owner'],
    operation: 'transfer',
    params: ['from', 'to', 'amount', 'memo']
  },
  {
    roles: ['active', 'owner'],
    operation: 'transfer_to_scorumpower',
    params: ['from', 'to', 'amount']
  },
  {
    roles: ['active', 'owner'],
    operation: 'withdraw_scorumpower',
    params: ['account', 'scorumpower']
  },
  {
    roles: ['active', 'owner'],
    operation: 'account_create_by_committee',
    params: ['creator', 'new_account_name', 'owner', 'active', 'posting', 'memo_key', 'json_metadata']
  },
  {
    roles: ['active', 'owner'],
    operation: 'account_create',
    params: ['fee', 'creator', 'new_account_name', 'owner', 'active', 'posting', 'memo_key', 'json_metadata']
  },
  {
    roles: ['active', 'owner'],
    operation: 'account_create_with_delegation',
    params: [
      'fee',
      'delegation',
      'creator',
      'new_account_name',
      'owner',
      'active',
      'posting',
      'memo_key',
      'json_metadata',
      'extensions'
    ]
  },
  {
    roles: ['active', 'owner'],
    operation: 'account_update',
    params: ['account', 'owner', 'active', 'posting', 'memo_key', 'json_metadata']
  },
  {
    roles: ['active', 'owner'],
    operation: 'witness_update',
    params: ['owner', 'url', 'block_signing_key', 'props']
  },
  {
    roles: ['active', 'owner'],
    operation: 'account_witness_vote',
    params: ['account', 'witness', 'approve']
  },
  {
    roles: ['active', 'owner'],
    operation: 'account_witness_proxy',
    params: ['account', 'proxy']
  },
  {
    roles: ['posting', 'active', 'owner'],
    operation: 'delete_comment',
    params: ['author', 'permlink']
  },
  {
    roles: ['posting', 'active', 'owner'],
    operation: 'comment_options',
    params: [
      'author',
      'permlink',
      'max_accepted_payout',
      'percent_steem_dollars',
      'allow_votes',
      'allow_curation_rewards',
      'extensions'
    ]
  },
  {
    roles: ['active', 'owner'],
    operation: 'set_withdraw_scorumpower_route_to_account',
    params: ['from_account', 'to_account', 'percent', 'auto_vest']
  },
  {
    roles: ['active', 'owner'],
    operation: 'set_withdraw_scorumpower_route_to_dev_pool',
    params: ['from_account', 'percent', 'auto_vest']
  },
  {
    roles: ['active', 'owner'],
    operation: 'prove_authority',
    params: ['challenged', 'require_owner']
  },
  {
    roles: ['active', 'owner'],
    operation: 'request_account_recovery',
    params: ['recovery_account', 'account_to_recover', 'new_owner_authority', 'extensions']
  },
  {
    roles: ['owner'],
    operation: 'recover_account',
    params: ['account_to_recover', 'new_owner_authority', 'recent_owner_authority', 'extensions']
  },
  {
    roles: ['owner'],
    operation: 'change_recovery_account',
    params: ['account_to_recover', 'new_recovery_account', 'extensions']
  },
  {
    roles: ['active', 'owner'],
    operation: 'escrow_approve',
    params: ['from', 'to', 'agent', 'who', 'escrow_id', 'approve']
  },
  {
    roles: ['active', 'owner'],
    operation: 'escrow_dispute',
    params: ['from', 'to', 'agent', 'who', 'escrow_id']
  },
  {
    roles: ['active', 'owner'],
    operation: 'escrow_release',
    params: ['from', 'to', 'agent', 'who', 'receiver', 'escrow_id', 'sbd_amount', 'steem_amount']
  },
  {
    roles: ['active', 'owner'],
    operation: 'escrow_transfer',
    params: [
      'from',
      'to',
      'agent',
      'escrow_id',
      'sbd_amount',
      'steem_amount',
      'fee',
      'ratification_deadline',
      'escrow_expiration',
      'json_meta'
    ]
  },
  {
    roles: ['owner'],
    operation: 'decline_voting_rights',
    params: ['account', 'decline']
  },
  {
    roles: ['active', 'owner'],
    operation: 'delegate_scorumpower',
    params: ['delegator', 'delegatee', 'scorumpower']
  },
  {
    roles: ['active', 'owner'],
    operation: 'create_budget',
    params: ['owner', 'content_permlink', 'balance', 'deadline']
  },
  {
    roles: ['active', 'owner'],
    operation: 'close_budget',
    params: ['budget_id', 'owner']
  },
  {
    roles: ['active', 'owner'],
    operation: 'proposal_vote',
    params: ['voting_account', 'proposal_id']
  },
  {
    roles: ['active', 'owner'],
    operation: 'proposal_create',
    params: ['creator', 'lifetime_sec', 'operation']
  },
  {
    roles: ['active', 'owner'],
    operation: 'registration_committee_add_member',
    params: ['account_name']
  },
  {
    roles: ['active', 'owner'],
    operation: 'registration_committee_exclude_member',
    params: ['account_name']
  },
  {
    roles: ['active', 'owner'],
    operation: 'registration_committee_change_quorum',
    params: ['quorum', 'committee_quorum']
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_add_member',
    params: ['account_name']
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_exclude_member',
    params: ['account_name']
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_change_quorum',
    params: ['quorum', 'committee_quorum']
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_withdraw_vesting',
    params: ['vesting_shares']
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_transfer',
    params: ['amount', 'to_account']
  }
];
