import types from './types';
import SerializerImpl from './serializer';

const {
  //id_type,
  //varint32, uint8, int64, fixed_array, object_id_type, vote_id, address,
  uint16,
  uint32,
  int16,
  uint64,
  string,
  string_binary,
  bytes,
  bool,
  array,
  // protocol_id_type,
  static_variant,
  map,
  set,
  public_key,
  time_point_sec,
  optional,
  asset
} = types;

const future_extensions = types.void;
const hardfork_version_vote = types.void;
const version = types.void;

const operation = static_variant();
module.exports.operation = operation;

// For module.exports
const Serializer = function(operation_name, serilization_types_object) {
  const s = new SerializerImpl(operation_name, serilization_types_object);
  return (module.exports[operation_name] = s);
};

const beneficiaries = new Serializer('beneficiaries', {
  account: string,
  weight: uint16
});

const comment_payout_beneficiaries = new Serializer(0, {
  beneficiaries: set(beneficiaries)
});

const authority = new Serializer('authority', {
  weight_threshold: uint32,
  account_auths: map(string, uint16),
  key_auths: map(public_key, uint16)
});

const signed_transaction = new Serializer('signed_transaction', {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  signatures: array(bytes(65))
});

const vote = new Serializer('vote', {
  voter: string,
  author: string,
  permlink: string,
  weight: int16
});

const comment = new Serializer('comment', {
  parent_author: string,
  parent_permlink: string,
  author: string,
  permlink: string,
  title: string,
  body: string,
  json_metadata: string
});

const transfer = new Serializer('transfer', {
  from: string,
  to: string,
  amount: asset,
  memo: string
});

const transfer_to_scorumpower = new Serializer('transfer_to_scorumpower', {
  from: string,
  to: string,
  amount: asset
});

const withdraw_scorumpower = new Serializer('withdraw_scorumpower', {
  account: string,
  scorumpower: asset
});

const account_create_by_committee = new Serializer('account_create_by_committee', {
  creator: string,
  new_account_name: string,
  owner: authority,
  active: authority,
  posting: authority,
  memo_key: public_key,
  json_metadata: string
});

const account_create = new Serializer('account_create', {
  fee: asset,
  creator: string,
  new_account_name: string,
  owner: authority,
  active: authority,
  posting: authority,
  memo_key: public_key,
  json_metadata: string
});

const account_create_with_delegation = new Serializer('account_create_with_delegation', {
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
});

const account_update = new Serializer('account_update', {
  account: string,
  owner: optional(authority),
  active: optional(authority),
  posting: optional(authority),
  memo_key: public_key,
  json_metadata: string
});

const chain_properties = new Serializer('chain_properties', {
  account_creation_fee: asset,
  maximum_block_size: uint32
});

const witness_update = new Serializer('witness_update', {
  owner: string,
  url: string,
  block_signing_key: public_key,
  props: chain_properties
});

const account_witness_vote = new Serializer('account_witness_vote', {
  account: string,
  witness: string,
  approve: bool
});

const account_witness_proxy = new Serializer('account_witness_proxy', {
  account: string,
  proxy: string
});

const delete_comment = new Serializer('delete_comment', {
  author: string,
  permlink: string
});

const comment_options = new Serializer('comment_options', {
  author: string,
  permlink: string,
  max_accepted_payout: asset,
  percent_steem_dollars: uint16,
  allow_votes: bool,
  allow_curation_rewards: bool,
  extensions: set(static_variant([comment_payout_beneficiaries]))
});

const set_withdraw_scorumpower_route_to_account = new Serializer('set_withdraw_scorumpower_route_to_account', {
  from_account: string,
  to_account: string,
  percent: uint16,
  auto_vest: bool
});

const set_withdraw_scorumpower_route_to_dev_pool = new Serializer('set_withdraw_scorumpower_route_to_dev_pool', {
  from_account: string,
  percent: uint16,
  auto_vest: bool
});

const prove_authority = new Serializer('prove_authority', {
  challenged: string,
  require_owner: bool
});

const request_account_recovery = new Serializer('request_account_recovery', {
  recovery_account: string,
  account_to_recover: string,
  new_owner_authority: authority,
  extensions: set(future_extensions)
});

const recover_account = new Serializer('recover_account', {
  account_to_recover: string,
  new_owner_authority: authority,
  recent_owner_authority: authority,
  extensions: set(future_extensions)
});

const change_recovery_account = new Serializer('change_recovery_account', {
  account_to_recover: string,
  new_recovery_account: string,
  extensions: set(future_extensions)
});

const escrow_approve = new Serializer('escrow_approve', {
  from: string,
  to: string,
  agent: string,
  who: string,
  escrow_id: uint32,
  approve: bool
});

const escrow_dispute = new Serializer('escrow_dispute', {
  from: string,
  to: string,
  agent: string,
  who: string,
  escrow_id: uint32
});

const escrow_release = new Serializer('escrow_release', {
  from: string,
  to: string,
  agent: string,
  who: string,
  receiver: string,
  escrow_id: uint32,
  sbd_amount: asset,
  steem_amount: asset
});

const escrow_transfer = new Serializer('escrow_transfer', {
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
});

const decline_voting_rights = new Serializer('decline_voting_rights', {
  account: string,
  decline: bool
});

const delegate_scorumpower = new Serializer('delegate_scorumpower', {
  delegator: string,
  delegatee: string,
  scorumpower: asset
});

const create_budget = new Serializer('create_budget', {
  owner: string,
  content_permlink: string,
  balance: asset,
  deadline: time_point_sec
});

const close_budget = new Serializer('close_budget', {
  budget_id: uint64,
  owner: string
});

const proposal_vote = new Serializer('proposal_vote', {
  voting_account: string,
  proposal_id: uint64
});

// proposal create operations
const registration_committee_add_member = new Serializer('registration_committee_add_member', {
  account_name: string
});

const registration_committee_exclude_member = new Serializer('registration_committee_exclude_member', {
  account_name: string
});

const registration_committee_change_quorum = new Serializer('registration_committee_change_quorum', {
  quorum: uint16,
  quorum_type: string
});

const development_committee_add_member = new Serializer('development_committee_add_member', {
  account_name: string
});

const development_committee_exclude_member = new Serializer('development_committee_exclude_member', {
  account_name: string
});

const development_committee_change_quorum = new Serializer('development_committee_change_quorum', {
  quorum: uint16,
  quorum_type: string
});

const development_committee_withdraw_vesting = new Serializer('development_committee_withdraw_vesting', {
  vesting_shares: asset
});

const development_committee_transfer = new Serializer('development_committee_transfer', {
  amount: asset,
  to_account: string
});

const proposal_create = new Serializer('proposal_create', {
  creator: string,
  lifetime_sec: uint32,
  operation: static_variant([
    registration_committee_add_member,
    registration_committee_exclude_member,
    registration_committee_change_quorum,
    development_committee_add_member,
    development_committee_exclude_member,
    development_committee_change_quorum,
    development_committee_withdraw_vesting,
    development_committee_transfer
  ])
});

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
  proposal_vote,
  proposal_create
];

const transaction = new Serializer('transaction', {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions)
});

const encrypted_memo = new Serializer('encrypted_memo', {
  from: public_key,
  to: public_key,
  nonce: uint64,
  check: uint32,
  encrypted: string_binary
});
