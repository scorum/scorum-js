import types from "./types"
import SerializerImpl from "./serializer"

const {
    //id_type,
    //varint32, uint8, int64, fixed_array, object_id_type, vote_id, address,
    uint16, uint32, int16, uint64,
    string, string_binary, bytes, bool, array,
    // protocol_id_type,
    static_variant, map, set,
    public_key,
    time_point_sec,
    optional,
    asset,
} = types

const future_extensions = types.void
const hardfork_version_vote = types.void
const version = types.void

const operation = static_variant();
module.exports.operation = operation;

// For module.exports
const Serializer = function(operation_name, serilization_types_object){
    const s = new SerializerImpl(operation_name, serilization_types_object);
    return module.exports[operation_name] = s;
}

const beneficiaries = new Serializer("beneficiaries", {
  account: string,
  weight: uint16
});

const comment_payout_beneficiaries = new Serializer(0, {
  beneficiaries: set(beneficiaries)
});

// Custom-types after Generated code

// ##  Generated code follows
// -------------------------------
/*
When updating generated code (fix closing notation)
Replace:  var operation = static_variant([
with:     operation.st_operations = [

Delete (these are custom types instead):
let public_key = new Serializer(
    "public_key",
    {key_data: bytes(33)}
);

let asset = new Serializer(
    "asset",
    {amount: int64,
    symbol: uint64}
);

Replace: authority.prototype.account_authority_map
With: map((string), (uint16))
*/

const authority = new Serializer(
  "authority", {
  weight_threshold: uint32,
  account_auths: map((string), (uint16)),
  key_auths: map((public_key), (uint16))
}
);

let vote = new Serializer(
    "vote", {
    voter: string,
    author: string,
    permlink: string,
    weight: int16
}
);

let comment = new Serializer(
    "comment", {
    parent_author: string,
    parent_permlink: string,
    author: string,
    permlink: string,
    title: string,
    body: string,
    json_metadata: string
}
);

let transfer = new Serializer(
    "transfer", {
    from: string,
    to: string,
    amount: asset,
    memo: string
}
);

let transfer_to_scorumpower = new Serializer(
    "transfer_to_scorumpower", {
    from: string,
    to: string,
    amount: asset
}
);

let withdraw_scorumpower = new Serializer(
    "withdraw_scorumpower", {
    account: string,
    scorumpower: asset
}
);

let account_create_by_committee = new Serializer(
    "account_create_by_committee", {
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string
}
);

let account_create = new Serializer(
    "account_create", {
    fee: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string
}
);

let account_create_with_delegation = new Serializer(
  "account_create_with_delegation", {
  fee: asset,
  delegation: asset,
  creator: string,
  new_account_name: string,
  owner: authority,
  active: authority,
  posting: authority,
  memo_key: public_key,
  json_metadata: string,
  extensions: set(future_extensions)
}
);

let account_update = new Serializer(
    "account_update", {
    account: string,
    owner: optional(authority),
    active: optional(authority),
    posting: optional(authority),
    memo_key: public_key,
    json_metadata: string
}
);

const chain_properties = new Serializer(
    "chain_properties", {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    sbd_interest_rate: uint16
}
);

let witness_update = new Serializer(
    "witness_update", {
    owner: string,
    url: string,
    block_signing_key: public_key,
    props: chain_properties,
    fee: asset
}
);

let account_witness_vote = new Serializer(
    "account_witness_vote", {
    account: string,
    witness: string,
    approve: bool
}
);

let account_witness_proxy = new Serializer(
    "account_witness_proxy", {
    account: string,
    proxy: string
}
);

let delete_comment = new Serializer(
    "delete_comment", {
    author: string,
    permlink: string
}
);

let comment_options = new Serializer(
    "comment_options", {
    author: string,
    permlink: string,
    max_accepted_payout: asset,
    percent_steem_dollars: uint16,
    allow_votes: bool,
    allow_curation_rewards: bool,
    extensions: set(static_variant([
        comment_payout_beneficiaries
    ]))
}
);

let set_withdraw_scorumpower_route_to_account = new Serializer(
    "set_withdraw_scorumpower_route_to_account", {
    from_account: string,
    to_account: string,
    percent: uint16,
    auto_vest: bool
}
);

let set_withdraw_scorumpower_route_to_dev_pool = new Serializer(
    "set_withdraw_scorumpower_route_to_dev_pool", {
    from_account: string,
    percent: uint16,
    auto_vest: bool
}
);

let prove_authority = new Serializer(
    "prove_authority", {
    challenged: string,
    require_owner: bool
}
);

let request_account_recovery = new Serializer(
    "request_account_recovery", {
    recovery_account: string,
    account_to_recover: string,
    new_owner_authority: authority,
    extensions: set(future_extensions)
}
);

let recover_account = new Serializer(
    "recover_account", {
    account_to_recover: string,
    new_owner_authority: authority,
    recent_owner_authority: authority,
    extensions: set(future_extensions)
}
);

let change_recovery_account = new Serializer(
    "change_recovery_account", {
    account_to_recover: string,
    new_recovery_account: string,
    extensions: set(future_extensions)
}
);

let escrow_approve = new Serializer(
  "escrow_approve", {
  from: string,
  to: string,
  agent: string,
  who: string,
  escrow_id: uint32,
  approve: bool
}
);

let escrow_dispute = new Serializer(
    "escrow_dispute", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32
}
);

let escrow_release = new Serializer(
    "escrow_release", {
    from: string,
    to: string,
    agent: string,
    who: string,
    receiver: string,
    escrow_id: uint32,
    sbd_amount: asset,
    steem_amount: asset
}
);

let escrow_transfer = new Serializer(
  "escrow_transfer", {
  from: string,
  to: string,
  sbd_amount: asset,
  steem_amount: asset,
  escrow_id: uint32,
  agent: string,
  fee: asset,
  json_meta: string,
  ratification_deadline: time_point_sec,
  escrow_expiration: time_point_sec
}
);

let decline_voting_rights = new Serializer(
  "decline_voting_rights", {
  account: string,
  decline: bool
}
);

let delegate_scorumpower = new Serializer(
    "delegate_scorumpower", {
    delegator: string,
    delegatee: string,
    scorumpower: asset
}
);

let create_budget = new Serializer(
    "create_budget", {
    owner: string,
    content_permlink: string,
    balance: asset,
    deadline: time_point_sec
}
);

let close_budget = new Serializer(
    "close_budget", {
    budget_id: uint64,
    owner: string
}
);

let proposal_vote = new Serializer(
    "proposal_vote", {
    voting_account: string,
    proposal_id: uint64
}
);

let proposal_create = new Serializer(
    "proposal_create", {
    creator: string,
    lifetime_sec: time_point_sec,
    operation
}
);

let author_reward = new Serializer(
    "author_reward", {
    author: string,
    permlink: string,
    sbd_payout: asset,
    steem_payout: asset,
    vesting_payout: asset
}
);

let curation_reward = new Serializer(
    "curation_reward", {
    curator: string,
    reward: asset,
    comment_author: string,
    comment_permlink: string
}
);

let comment_reward = new Serializer(
    "comment_reward", {
    author: string,
    permlink: string,
    payout: asset
}
);

let fill_scorumpower_withdraw = new Serializer(
    "fill_scorumpower_withdraw", {
    from_account: string,
    to_account: string,
    withdrawn: asset,
    deposited: asset
}
);

let shutdown_witness = new Serializer(
    "shutdown_witness",
    {owner: string}
);

let hardfork = new Serializer(
    "hardfork",
    {hardfork_id: uint32}
);

let comment_payout_update = new Serializer(
    "comment_payout_update", {
    author: string,
    permlink: string
}
);

let return_scorumpower_delegation = new Serializer(
    "return_scorumpower_delegation", {
    account: string,
    scorumpower: asset
}
);

let comment_benefactor_reward = new Serializer(
    "comment_benefactor_reward", {
    benefactor: string,
    author: string,
    permlink: string,
    reward: asset
}
);

operation.st_operations = [
    vote,
    comment,
    transfer,
    transfer_to_scorumpower,
    withdraw_scorumpower,
    account_create_by_committee,
    account_create,
    account_create_with_delegation,
    account_update,
    witness_update,
    account_witness_vote,
    account_witness_proxy,
    delete_comment,
    comment_options,
    set_withdraw_scorumpower_route_to_account,
    set_withdraw_scorumpower_route_to_dev_pool,
    prove_authority,
    request_account_recovery,
    recover_account,
    change_recovery_account,
    escrow_approve,
    escrow_dispute,
    escrow_release,
    escrow_transfer,
    decline_voting_rights,
    delegate_scorumpower,
    create_budget,
    close_budget,
    null, // proposal_vote_operation,
    null, // proposal_create_operation,
    null, // atomicswap_initiate_operation,
    null, // atomicswap_redeem_operation,
    null, // atomicswap_refund_operation,
    author_reward,
    comment_benefactor_reward,
    comment_payout_update,
    comment_reward,
    curation_reward,
    fill_scorumpower_withdraw,
    hardfork,
    null, // producer_reward_operation,
    return_scorumpower_delegation,
    shutdown_witness
];
