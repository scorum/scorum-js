export default [
  // tags_api
  {
    api: 'tags_api',
    method: 'get_discussions_by_trending',
    params: ['query']
  },
  {
    api: 'tags_api',
    method: 'get_discussions_by_created',
    params: ['query']
  },
  {
    api: 'tags_api',
    method: 'get_discussions_by_hot',
    params: ['query']
  },
  {
    api: 'tags_api',
    method: 'get_discussions_by_author',
    params: ['query']
  },
  {
    api: 'tags_api',
    method: 'get_comments',
    params: ['author', 'permlink', 'depth']
  },
  {
    api: 'tags_api',
    method: 'get_tags_by_category',
    params: ['domain', 'category']
  },
  {
    api: 'tags_api',
    method: 'get_content',
    params: ['author', 'permlink']
  },

  // blockchain_history_api
  {
    api: 'blockchain_history_api',
    method: 'get_ops_history',
    params: ['from', 'limit', 'opt']
  },
  {
    api: 'blockchain_history_api',
    method: 'get_ops_in_block',
    params: ['blockNum', 'onlyVirtual']
  },
  {
    api: 'blockchain_history_api',
    method: 'get_transaction',
    params: ['trxId']
  },
  {
    api: 'blockchain_history_api',
    method: 'get_block_header',
    params: ['blockNum']
  },
  {
    api: 'blockchain_history_api',
    method: 'get_block',
    params: ['blockNum']
  },
  {
    api: 'blockchain_history_api',
    method: 'get_blocks_history',
    params: ['from', 'limit']
  },

  // chain_api
  {
    api: 'chain_api',
    method: 'get_chain_properties'
  },

  // account_by_key_api
  {
    api: 'account_by_key_api',
    method: 'get_key_references',
    params: ['key']
  },

  // database_api
  {
    api: 'database_api',
    method: 'get_accounts',
    params: ['names']
  },
  {
    api: 'database_api',
    method: 'get_account_count'
  },
  {
    api: 'database_api',
    method: 'lookup_proposals'
  },
  {
    api: 'database_api',
    method: 'get_active_witnesses'
  },
  {
    api: 'database_api',
    method: 'get_witness_by_account',
    params: ['accountName']
  },
  {
    api: 'database_api',
    method: 'get_witnesses_by_vote',
    params: ['from', 'limit']
  },
  {
    api: 'database_api',
    method: 'get_config'
  },
  {
    api: 'database_api',
    method: 'get_dynamic_global_properties'
  },

  // account_history_api
  {
    api: 'account_history_api',
    method: 'get_account_history',
    params: ['account', 'from', 'limit']
  },
  {
    api: 'account_history_api',
    method: 'get_account_scr_to_scr_transfers',
    params: ['account', 'from', 'limit']
  },
  {
    api: 'account_history_api',
    method: 'get_account_scr_to_sp_transfers',
    params: ['account', 'from', 'limit']
  },

  // account_statistics_api
  {
    api: 'account_statistics_api',
    method: 'get_stats_for_time_by_account_name',
    params: ['account', 'timeOpen']
  },
  {
    api: 'account_statistics_api',
    method: 'get_stats_for_interval_by_account_name',
    params: ['account', 'timeStart', 'timeFinish']
  },
  {
    api: 'account_statistics_api',
    method: 'get_lifetime_stats_by_account_name',
    params: ['account']
  },

  // network_broadcast_api
  {
    api: 'network_broadcast_api',
    method: 'broadcast_transaction',
    params: ['trx']
  },
  {
    api: 'network_broadcast_api',
    method: 'broadcast_transaction_with_callback',
    params: ['confirmationCallback', 'trx']
  },
  {
    api: 'network_broadcast_api',
    method: 'broadcast_transaction_synchronous',
    params: ['trx']
  }
];
