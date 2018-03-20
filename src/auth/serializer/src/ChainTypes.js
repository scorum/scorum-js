var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.operations= {
    vote: 0,
    comment: 1,

    transfer: 2,
    transfer_to_scorumpower: 3,
    withdraw_scorumpower: 4,

    account_create_by_committee: 5,
    account_create: 6,
    account_create_with_delegation: 7,
    account_update: 8,

    witness_update: 9,
    account_witness_vote: 10,
    account_witness_proxy:11,

    delete_comment: 12,
    comment_options: 13,
    set_withdraw_scorumpower_route_to_account: 14,
    set_withdraw_scorumpower_route_to_dev_pool: 15,

    prove_authority: 16,

    request_account_recovery: 17,
    recover_account: 18,
    change_recovery_account: 19,
    escrow_approve: 20,
    escrow_dispute: 21,
    escrow_release: 22,
    escrow_transfer: 23,

    decline_voting_rights: 24,
    delegate_scorumpower: 25,

    create_budget: 26,
    close_budget: 27,

    proposal_vote: 28,
    proposal_create: 29,

    // virtual operations
    atomicswap_initiate_operation: 30,
    atomicswap_redeem_operation: 31,
    atomicswap_refund_operation: 32,
    author_reward: 33,
    comment_benefactor_reward: 34,
    comment_payout_update: 35,
    comment_reward: 36,
    curation_reward: 37,
    fill_scorumpower_withdraw: 38,
    hardfork: 39,
    producer_reward: 40,
    return_scorumpower_delegation: 41,
    shutdown_witness: 42
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1,
};
