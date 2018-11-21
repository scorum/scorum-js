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
    params: ['fee', 'delegation', 'creator', 'new_account_name', 'owner', 'active', 'posting', 'memo_key', 'json_metadata', 'extensions']
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
    params: ['author', 'permlink', 'max_accepted_payout', 'percent_steem_dollars', 'allow_votes', 'allow_curation_rewards', 'extensions']
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
    params: ['type', 'uuid', 'owner', 'json_metadata', 'balance', 'start', 'deadline']
  },
  {
    roles: ['active', 'owner'],
    operation: 'update_budget',
    params: ['type', 'uuid', 'owner', 'json_metadata']
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
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_empower_advertising_moderator',
    params: ['account']
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_change_post_budgets_auction_properties',
    params: ['auction_coefficients']
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_change_banner_budgets_auction_properties',
    params: ['auction_coefficients']
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_empower_betting_moderator',
    params: ['account']
  },
  {
    roles: ['active', 'owner'],
    operation: 'development_committee_change_betting_resolve_delay',
    params: ['delay_sec']
  },
  {
    roles: ['active', 'owner'],
    operation: 'cancel_pending_bets',
    params: ['bet_uuids', 'better']
  },
  {
    roles: ['active', 'owner'],
    operation: 'post_bet',
    params: ['uuid', 'better', 'game_uuid', 'wincase', 'odds', 'stake', 'live']
  },
  {
    roles: ['active', 'owner'],
    operation: 'create_game',
    params: ['uuid', 'moderator', 'json_metadata', 'start_time', 'auto_resolve_delay_sec', 'game', 'markets']
  },
  // game types
  {
    roles: ['active', 'owner'],
    operation: 'soccer_game'
  },
  {
    roles: ['active', 'owner'],
    operation: 'hockey_game'
  },
  // markets
  {
    roles: ['active', 'owner'],
    operation: 'result_home'
  },
  {
    roles: ['active', 'owner'],
    operation: 'result_draw'
  },
  {
    roles: ['active', 'owner'],
    operation: 'result_away'
  },
  {
    roles: ['active', 'owner'],
    operation: 'round_home'
  },
  {
    roles: ['active', 'owner'],
    operation: 'handicap',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score_home'
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score_draw'
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score_away'
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score',
    params: ['home', 'away']
  },
  {
    roles: ['active', 'owner'],
    operation: 'goal_home'
  },
  {
    roles: ['active', 'owner'],
    operation: 'goal_both'
  },
  {
    roles: ['active', 'owner'],
    operation: 'goal_away'
  },
  {
    roles: ['active', 'owner'],
    operation: 'total',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'total_goals_home',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'total_goals_away',
    params: ['threshold']
  },
  // wincases
  {
    roles: ['active', 'owner'],
    operation: 'result_home::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'result_home::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'result_draw::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'result_draw::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'result_away::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'result_away::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'round_home::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'round_home::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'handicap::over',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'handicap::under',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score_home::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score_home::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score_draw::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score_draw::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score_away::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score_away::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score::yes',
    params: ['home', 'away']
  },
  {
    roles: ['active', 'owner'],
    operation: 'correct_score::no',
    params: ['home', 'away']
  },
  {
    roles: ['active', 'owner'],
    operation: 'goal_home::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'goal_home::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'goal_both::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'goal_both::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'goal_away::yes'
  },
  {
    roles: ['active', 'owner'],
    operation: 'goal_away::no'
  },
  {
    roles: ['active', 'owner'],
    operation: 'total::over',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'total::under',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'total_goals_home::over',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'total_goals_home::under',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'total_goals_away::over',
    params: ['threshold']
  },
  {
    roles: ['active', 'owner'],
    operation: 'total_goals_away::under',
    params: ['threshold']
  }
];
