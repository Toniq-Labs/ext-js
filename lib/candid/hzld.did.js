"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports["default"] = void 0;
var _default = exports["default"] = function _default(_ref) {
  var IDL = _ref.IDL;
  var User = IDL.Principal;
  var BalanceRequest = IDL.Record({
    'user': User
  });
  var Balance = IDL.Nat;
  var Metadata = IDL.Vec(IDL.Nat8);
  var TransferRequest = IDL.Record({
    'to': User,
    'metadata': IDL.Opt(Metadata),
    'from': User,
    'amount': Balance
  });
  var Result_2 = IDL.Variant({
    'ok': IDL.Null,
    'err': IDL.Variant({
      'InsufficientBalance': IDL.Null,
      'InvalidSource': User,
      'Unauthorized': IDL.Null
    })
  });
  var TransferResponse = Result_2;
  var OperatorAction = IDL.Variant({
    'removeOperator': IDL.Null,
    'setOperator': IDL.Null
  });
  var OperatorRequest = IDL.Record({
    'owner': User,
    'operators': IDL.Vec(IDL.Tuple(User, OperatorAction))
  });
  var Result = IDL.Variant({
    'ok': IDL.Null,
    'err': IDL.Variant({
      'Unauthorized': IDL.Null,
      'InvalidOwner': User
    })
  });
  var OperatorResponse = Result;
  return IDL.Service({
    'getBalance': IDL.Func([BalanceRequest], [IDL.Opt(Balance)], []),
    'getBalanceInsecure': IDL.Func([BalanceRequest], [IDL.Opt(Balance)], ['query']),
    'getCommunityChestValueInsecure': IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'getInfo': IDL.Func([], [IDL.Record({
      'balance': IDL.Nat,
      'maxLiveSize': IDL.Nat,
      'heap': IDL.Nat,
      'size': IDL.Nat
    })], ['query']),
    'getNumberOfAccounts': IDL.Func([], [IDL.Nat], []),
    'getTokenInfo': IDL.Func([], [IDL.Record({
      'fee': IDL.Nat,
      'totalMinted': IDL.Nat,
      'totalSupply': IDL.Nat,
      'totalTransactions': IDL.Nat
    })], ['query']),
    'getTotalMinted': IDL.Func([], [IDL.Nat], []),
    'mint': IDL.Func([IDL.Principal, IDL.Nat], [], []),
    'transfer': IDL.Func([TransferRequest], [TransferResponse], []),
    'updateOperator': IDL.Func([IDL.Vec(OperatorRequest)], [OperatorResponse], [])
  });
};
var init = exports.init = function init(_ref2) {
  var IDL = _ref2.IDL;
  return [];
};