"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports["default"] = void 0;
var _default = exports["default"] = function _default(_ref) {
  var IDL = _ref.IDL;
  var AccountIdentifier = IDL.Text;
  var AttachCanisterRequest = IDL.Record({
    'name': IDL.Text,
    'canister_id': IDL.Principal
  });
  var AttachCanisterResponse = IDL.Variant({
    'Ok': IDL.Null,
    'CanisterAlreadyAttached': IDL.Null,
    'NameAlreadyTaken': IDL.Null,
    'NameTooLong': IDL.Null,
    'CanisterLimitExceeded': IDL.Null
  });
  var SubAccount = IDL.Vec(IDL.Nat8);
  var SubAccountDetails = IDL.Record({
    'name': IDL.Text,
    'sub_account': SubAccount,
    'account_identifier': AccountIdentifier
  });
  var CreateSubAccountResponse = IDL.Variant({
    'Ok': SubAccountDetails,
    'AccountNotFound': IDL.Null,
    'NameTooLong': IDL.Null,
    'SubAccountLimitExceeded': IDL.Null
  });
  var DetachCanisterRequest = IDL.Record({
    'canister_id': IDL.Principal
  });
  var DetachCanisterResponse = IDL.Variant({
    'Ok': IDL.Null,
    'CanisterNotFound': IDL.Null
  });
  var HardwareWalletAccountDetails = IDL.Record({
    'name': IDL.Text,
    'account_identifier': AccountIdentifier
  });
  var AccountDetails = IDL.Record({
    'account_identifier': AccountIdentifier,
    'hardware_wallet_accounts': IDL.Vec(HardwareWalletAccountDetails),
    'sub_accounts': IDL.Vec(SubAccountDetails)
  });
  var GetAccountResponse = IDL.Variant({
    'Ok': AccountDetails,
    'AccountNotFound': IDL.Null
  });
  var CanisterDetails = IDL.Record({
    'name': IDL.Text,
    'canister_id': IDL.Principal
  });
  var BlockHeight = IDL.Nat64;
  var Stats = IDL.Record({
    'latest_transaction_block_height': BlockHeight,
    'seconds_since_last_ledger_sync': IDL.Nat64,
    'sub_accounts_count': IDL.Nat64,
    'hardware_wallet_accounts_count': IDL.Nat64,
    'accounts_count': IDL.Nat64,
    'earliest_transaction_block_height': BlockHeight,
    'transactions_count': IDL.Nat64,
    'block_height_synced_up_to': IDL.Opt(IDL.Nat64),
    'latest_transaction_timestamp_nanos': IDL.Nat64,
    'earliest_transaction_timestamp_nanos': IDL.Nat64
  });
  var GetTransactionsRequest = IDL.Record({
    'page_size': IDL.Nat8,
    'offset': IDL.Nat32,
    'account_identifier': AccountIdentifier
  });
  var Timestamp = IDL.Record({
    'timestamp_nanos': IDL.Nat64
  });
  var ICPTs = IDL.Record({
    'e8s': IDL.Nat64
  });
  var Send = IDL.Record({
    'to': AccountIdentifier,
    'fee': ICPTs,
    'amount': ICPTs
  });
  var Receive = IDL.Record({
    'fee': ICPTs,
    'from': AccountIdentifier,
    'amount': ICPTs
  });
  var Transfer = IDL.Variant({
    'Burn': IDL.Record({
      'amount': ICPTs
    }),
    'Mint': IDL.Record({
      'amount': ICPTs
    }),
    'Send': Send,
    'Receive': Receive
  });
  var Transaction = IDL.Record({
    'memo': IDL.Nat64,
    'timestamp': Timestamp,
    'block_height': BlockHeight,
    'transfer': Transfer
  });
  var GetTransactionsResponse = IDL.Record({
    'total': IDL.Nat32,
    'transactions': IDL.Vec(Transaction)
  });
  var HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  var HttpRequest = IDL.Record({
    'url': IDL.Text,
    'method': IDL.Text,
    'body': IDL.Vec(IDL.Nat8),
    'headers': IDL.Vec(HeaderField)
  });
  var HttpResponse = IDL.Record({
    'body': IDL.Vec(IDL.Nat8),
    'headers': IDL.Vec(HeaderField),
    'status_code': IDL.Nat16
  });
  var RegisterHardwareWalletRequest = IDL.Record({
    'name': IDL.Text,
    'account_identifier': AccountIdentifier
  });
  var RegisterHardwareWalletResponse = IDL.Variant({
    'Ok': IDL.Null,
    'AccountNotFound': IDL.Null,
    'HardwareWalletAlreadyRegistered': IDL.Null,
    'HardwareWalletLimitExceeded': IDL.Null,
    'NameTooLong': IDL.Null
  });
  var RemoveHardwareWalletRequest = IDL.Record({
    'account_identifier': AccountIdentifier
  });
  var RemoveHardwareWalletResponse = IDL.Variant({
    'Ok': IDL.Null,
    'HardwareWalletNotFound': IDL.Null
  });
  var RenameSubAccountRequest = IDL.Record({
    'new_name': IDL.Text,
    'account_identifier': AccountIdentifier
  });
  var RenameSubAccountResponse = IDL.Variant({
    'Ok': IDL.Null,
    'AccountNotFound': IDL.Null,
    'SubAccountNotFound': IDL.Null,
    'NameTooLong': IDL.Null
  });
  return IDL.Service({
    'add_account': IDL.Func([], [AccountIdentifier], []),
    'attach_canister': IDL.Func([AttachCanisterRequest], [AttachCanisterResponse], []),
    'create_sub_account': IDL.Func([IDL.Text], [CreateSubAccountResponse], []),
    'detach_canister': IDL.Func([DetachCanisterRequest], [DetachCanisterResponse], []),
    'get_account': IDL.Func([], [GetAccountResponse], ['query']),
    'get_canisters': IDL.Func([], [IDL.Vec(CanisterDetails)], ['query']),
    'get_icp_to_cycles_conversion_rate': IDL.Func([], [IDL.Nat64], ['query']),
    'get_stats': IDL.Func([], [Stats], ['query']),
    'get_transactions': IDL.Func([GetTransactionsRequest], [GetTransactionsResponse], ['query']),
    'http_request': IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'register_hardware_wallet': IDL.Func([RegisterHardwareWalletRequest], [RegisterHardwareWalletResponse], []),
    'remove_hardware_wallet': IDL.Func([RemoveHardwareWalletRequest], [RemoveHardwareWalletResponse], []),
    'rename_sub_account': IDL.Func([RenameSubAccountRequest], [RenameSubAccountResponse], [])
  });
};
var init = exports.init = function init(_ref2) {
  var IDL = _ref2.IDL;
  return [];
};