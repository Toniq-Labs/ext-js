"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports["default"] = void 0;
var _default = exports["default"] = function _default(_ref) {
  var IDL = _ref.IDL;
  var AccountIdentifier = IDL.Text;
  var Duration = IDL.Record({
    'secs': IDL.Nat64,
    'nanos': IDL.Nat32
  });
  var ArchiveOptions = IDL.Record({
    'max_message_size_bytes': IDL.Opt(IDL.Nat32),
    'node_max_memory_size_bytes': IDL.Opt(IDL.Nat32),
    'controller_id': IDL.Principal
  });
  var ICPTs = IDL.Record({
    'e8s': IDL.Nat64
  });
  var LedgerCanisterInitPayload = IDL.Record({
    'send_whitelist': IDL.Vec(IDL.Tuple(IDL.Principal)),
    'minting_account': AccountIdentifier,
    'transaction_window': IDL.Opt(Duration),
    'max_message_size_bytes': IDL.Opt(IDL.Nat32),
    'archive_options': IDL.Opt(ArchiveOptions),
    'initial_values': IDL.Vec(IDL.Tuple(AccountIdentifier, ICPTs))
  });
  var AccountBalanceArgs = IDL.Record({
    'account': AccountIdentifier
  });
  var SubAccount = IDL.Vec(IDL.Nat8);
  var BlockHeight = IDL.Nat64;
  var NotifyCanisterArgs = IDL.Record({
    'to_subaccount': IDL.Opt(SubAccount),
    'from_subaccount': IDL.Opt(SubAccount),
    'to_canister': IDL.Principal,
    'max_fee': ICPTs,
    'block_height': BlockHeight
  });
  var Memo = IDL.Nat64;
  var TimeStamp = IDL.Record({
    'timestamp_nanos': IDL.Nat64
  });
  var SendArgs = IDL.Record({
    'to': AccountIdentifier,
    'fee': ICPTs,
    'memo': Memo,
    'from_subaccount': IDL.Opt(SubAccount),
    'created_at_time': IDL.Opt(TimeStamp),
    'amount': ICPTs
  });
  return IDL.Service({
    'account_balance_dfx': IDL.Func([AccountBalanceArgs], [ICPTs], ['query']),
    'notify_dfx': IDL.Func([NotifyCanisterArgs], [], []),
    'send_dfx': IDL.Func([SendArgs], [BlockHeight], [])
  });
};
var init = exports.init = function init(_ref2) {
  var IDL = _ref2.IDL;
  var AccountIdentifier = IDL.Text;
  var Duration = IDL.Record({
    'secs': IDL.Nat64,
    'nanos': IDL.Nat32
  });
  var ArchiveOptions = IDL.Record({
    'max_message_size_bytes': IDL.Opt(IDL.Nat32),
    'node_max_memory_size_bytes': IDL.Opt(IDL.Nat32),
    'controller_id': IDL.Principal
  });
  var ICPTs = IDL.Record({
    'e8s': IDL.Nat64
  });
  var LedgerCanisterInitPayload = IDL.Record({
    'send_whitelist': IDL.Vec(IDL.Tuple(IDL.Principal)),
    'minting_account': AccountIdentifier,
    'transaction_window': IDL.Opt(Duration),
    'max_message_size_bytes': IDL.Opt(IDL.Nat32),
    'archive_options': IDL.Opt(ArchiveOptions),
    'initial_values': IDL.Vec(IDL.Tuple(AccountIdentifier, ICPTs))
  });
  return [LedgerCanisterInitPayload];
};