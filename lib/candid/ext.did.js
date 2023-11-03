"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports["default"] = void 0;
var _default = exports["default"] = function _default(_ref) {
  var IDL = _ref.IDL;
  var TokenIdentifier = IDL.Text;
  var AccountIdentifier_2 = IDL.Text;
  var AccountIdentifier = AccountIdentifier_2;
  var User = IDL.Variant({
    'principal': IDL.Principal,
    'address': AccountIdentifier
  });
  var AllowanceRequest_2 = IDL.Record({
    'token': TokenIdentifier,
    'owner': User,
    'spender': IDL.Principal
  });
  var AllowanceRequest = AllowanceRequest_2;
  var Balance = IDL.Nat;
  var Balance_2 = Balance;
  var CommonError_2 = IDL.Variant({
    'InvalidToken': TokenIdentifier,
    'Other': IDL.Text
  });
  var CommonError = CommonError_2;
  var Result_2 = IDL.Variant({
    'ok': Balance_2,
    'err': CommonError
  });
  var SubAccount_2 = IDL.Vec(IDL.Nat8);
  var SubAccount = SubAccount_2;
  var ApproveRequest_2 = IDL.Record({
    'token': TokenIdentifier,
    'subaccount': IDL.Opt(SubAccount),
    'allowance': Balance,
    'spender': IDL.Principal
  });
  var ApproveRequest = ApproveRequest_2;
  var BalanceRequest_2 = IDL.Record({
    'token': TokenIdentifier,
    'user': User
  });
  var BalanceRequest = BalanceRequest_2;
  var Result_5 = IDL.Variant({
    'ok': Balance,
    'err': CommonError_2
  });
  var BalanceResponse_2 = Result_5;
  var BalanceResponse = BalanceResponse_2;
  var TokenIdentifier_2 = TokenIdentifier;
  var AccountIdentifier_3 = AccountIdentifier;
  var Result_4 = IDL.Variant({
    'ok': AccountIdentifier_3,
    'err': CommonError
  });
  var Extension_2 = IDL.Text;
  var Extension = Extension_2;
  var TokenIndex_2 = IDL.Nat32;
  var TokenIndex = TokenIndex_2;
  var Metadata_2 = IDL.Variant({
    'fungible': IDL.Record({
      'decimals': IDL.Nat8,
      'metadata': IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name': IDL.Text,
      'symbol': IDL.Text
    }),
    'nonfungible': IDL.Record({
      'metadata': IDL.Opt(IDL.Vec(IDL.Nat8))
    })
  });
  var Metadata = Metadata_2;
  var Result_3 = IDL.Variant({
    'ok': Metadata,
    'err': CommonError
  });
  var MintRequest_2 = IDL.Record({
    'to': User,
    'metadata': IDL.Opt(IDL.Vec(IDL.Nat8))
  });
  var MintRequest = MintRequest_2;
  var Memo = IDL.Vec(IDL.Nat8);
  var TransferRequest_2 = IDL.Record({
    'to': User,
    'token': TokenIdentifier,
    'notify': IDL.Bool,
    'from': User,
    'memo': Memo,
    'subaccount': IDL.Opt(SubAccount),
    'amount': Balance
  });
  var TransferRequest = TransferRequest_2;
  var Result = IDL.Variant({
    'ok': Balance,
    'err': IDL.Variant({
      'CannotNotify': AccountIdentifier,
      'InsufficientBalance': IDL.Null,
      'InvalidToken': TokenIdentifier,
      'Rejected': IDL.Null,
      'Unauthorized': AccountIdentifier,
      'Other': IDL.Text
    })
  });
  var TransferResponse_2 = Result;
  var TransferResponse = TransferResponse_2;
  var erc721_token = IDL.Service({
    'acceptCycles': IDL.Func([], [], []),
    'allowance': IDL.Func([AllowanceRequest], [Result_2], ['query']),
    'approve': IDL.Func([ApproveRequest], [], []),
    'availableCycles': IDL.Func([], [IDL.Nat], ['query']),
    'balance': IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'bearer': IDL.Func([TokenIdentifier_2], [Result_4], ['query']),
    'extensions': IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'getAllowances': IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, IDL.Principal))], ['query']),
    'getMinter': IDL.Func([], [IDL.Principal], ['query']),
    'getRegistry': IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier_3))], ['query']),
    'getTokens': IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, Metadata))], ['query']),
    'metadata': IDL.Func([TokenIdentifier_2], [Result_3], ['query']),
    'mintNFT': IDL.Func([MintRequest], [TokenIndex], []),
    'setMinter': IDL.Func([IDL.Principal], [], []),
    'supply': IDL.Func([TokenIdentifier_2], [Result_2], ['query']),
    'transfer': IDL.Func([TransferRequest], [TransferResponse], [])
  });
  return erc721_token;
};
var init = exports.init = function init(_ref2) {
  var IDL = _ref2.IDL;
  return [IDL.Principal];
};