"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _agent = require("@dfinity/agent");
var _principal = require("@dfinity/principal");
var _utils = require("./utils.js");
var _ledgerDid = _interopRequireDefault(require("./candid/ledger.did.js"));
var _governanceDid = _interopRequireDefault(require("./candid/governance.did.js"));
var _nnsDid = _interopRequireDefault(require("./candid/nns.did.js"));
var _hzldDid = _interopRequireDefault(require("./candid/hzld.did.js"));
var _extDid = _interopRequireDefault(require("./candid/ext.did.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /* global BigInt */
var bip39 = require('bip39');

//hardcode to hzld...

var constructUser = function constructUser(u) {
  if ((0, _utils.isHex)(u) && u.length === 64) {
    return {
      'address': u
    };
  } else {
    return {
      'principal': _principal.Principal.fromText(u)
    };
  }
  ;
};
var tokenIdentifier = function tokenIdentifier(principal, index) {
  var padding = Buffer("\x0Atid");
  var array = new Uint8Array([].concat(_toConsumableArray(padding), _toConsumableArray(_principal.Principal.fromText(principal).toUint8Array()), _toConsumableArray((0, _utils.to32bits)(index))));
  return _principal.Principal.fromUint8Array(array).toText();
};
var decodeTokenId = function decodeTokenId(tid) {
  var p = _toConsumableArray(_principal.Principal.fromText(tid).toUint8Array());
  var padding = p.splice(0, 4);
  if ((0, _utils.toHexString)(padding) !== (0, _utils.toHexString)(Buffer("\x0Atid"))) {
    return {
      index: 0,
      canister: tid,
      token: tokenIdentifier(tid, 0)
    };
  } else {
    return {
      index: (0, _utils.from32bits)(p.splice(-4)),
      canister: _principal.Principal.fromUint8Array(p).toText(),
      token: tid
    };
  }
};

//Preload IDLS against a common name
var _preloadedIdls = {
  'governance': _governanceDid["default"],
  'ledger': _ledgerDid["default"],
  'hzld': _hzldDid["default"],
  'nns': _nnsDid["default"],
  'ext': _extDid["default"],
  'default': _extDid["default"]
};
var ExtConnection = /*#__PURE__*/function () {
  function ExtConnection(host, identity) {
    var _defineProperty2, _defineProperty3;
    _classCallCheck(this, ExtConnection);
    //map known canisters to preloaded IDLs
    _defineProperty(this, "_mapIdls", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _utils.LEDGER_CANISTER_ID, _preloadedIdls['ledger']), _defineProperty(_defineProperty2, _utils.GOVERNANCE_CANISTER_ID, _preloadedIdls['governance']), _defineProperty(_defineProperty2, _utils.NNS_CANISTER_ID, _preloadedIdls['nns']), _defineProperty(_defineProperty2, "qz7gu-giaaa-aaaaf-qaaka-cai", _preloadedIdls['hzld']), _defineProperty2));
    _defineProperty(this, "_metadata", (_defineProperty3 = {}, _defineProperty(_defineProperty3, _utils.LEDGER_CANISTER_ID, {
      name: "ICP",
      symbol: "ICP",
      decimals: 8,
      type: 'fungible'
    }), _defineProperty(_defineProperty3, "qz7gu-giaaa-aaaaf-qaaka-cai", {
      name: "HZLD",
      symbol: "HZLD",
      decimals: 0,
      type: 'fungible'
    }), _defineProperty3));
    _defineProperty(this, "_identity", false);
    //new AnonymousIdentity();
    _defineProperty(this, "_host", false);
    _defineProperty(this, "_agent", false);
    _defineProperty(this, "_canisters", {});
    if (identity) this._identity = identity;
    if (host) this._host = host;
    this._makeAgent();
  }
  _createClass(ExtConnection, [{
    key: "idl",
    value: function idl(canister, _idl) {
      //Map a canister to a preloaded idl
      this._mapIdls[canister] = _idl;
      return this;
    }
  }, {
    key: "setIdentity",
    value: function setIdentity(identity) {
      if (identity) this._identity = identity;else this._identity = false;
      this._makeAgent();
      return this;
    }
  }, {
    key: "setHost",
    value: function setHost(host) {
      if (host) this._host = host;else this._host = false;
      this._makeAgent();
      return this;
    }
  }, {
    key: "canister",
    value: function canister(cid, idl) {
      if (!idl) {
        if (this._mapIdls.hasOwnProperty(cid)) {
          idl = this._mapIdls[cid];
        } else {
          //Resort to default IDLS
          //todo: Look into loading IDLs on the fly
          idl = _preloadedIdls['default'];
        }
      } else if (typeof idl == 'string') {
        if (_preloadedIdls.hasOwnProperty(idl)) {
          idl = _preloadedIdls[idl];
        } else {
          throw new Error(idl + " is not a preloaded IDL");
        }
      }
      if (!this._canisters.hasOwnProperty(cid)) {
        this._canisters[cid] = _agent.Actor.createActor(idl, {
          agent: this._agent,
          canisterId: cid
        });
      }
      return this._canisters[cid];
    }
  }, {
    key: "token",
    value: function token(tid, idl) {
      var _this = this;
      if (!tid) tid = _utils.LEDGER_CANISTER_ID; //defaults to ledger
      var tokenObj = decodeTokenId(tid);
      if (!idl) {
        if (this._mapIdls.hasOwnProperty(tokenObj.canister)) idl = this._mapIdls[tokenObj.canister];else idl = _preloadedIdls['ext']; //ext is our token default...
      }

      var api = this.canister(tokenObj.canister, idl);
      return {
        call: api,
        fee: function fee() {
          return new Promise(function (resolve, reject) {
            switch (tokenObj.canister) {
              case _utils.LEDGER_CANISTER_ID:
                resolve(10000);
                break;
              case "qz7gu-giaaa-aaaaf-qaaka-cai":
                resolve(1);
                break;
              default:
                //TODO compute fees
                resolve(0);
                break;
            }
          });
        },
        getMetadata: function getMetadata() {
          return new Promise(function (resolve, reject) {
            if (_this._metadata.hasOwnProperty(tokenObj.canister)) {
              resolve(_this._metadata[tokenObj.canister]);
            } else {
              switch (tokenObj.canister) {
                default:
                  api.metadata(tokenObj.token).then(function (r) {
                    if (typeof r.ok != 'undefined') {
                      if (typeof r.ok.fungible != 'undefined') {
                        resolve({
                          name: r.ok.fungible.name,
                          symbol: r.ok.fungible.symbol,
                          decimals: r.ok.fungible.decimals,
                          metadata: r.ok.fungible.metadata,
                          type: 'fungible'
                        });
                      } else {
                        resolve({
                          metadata: r.ok.nonfungible.metadata,
                          type: 'nonfungible'
                        });
                      }
                    } else if (typeof r.err != 'undefined') reject(r.err);else reject(r);
                  })["catch"](reject);
                  break;
              }
            }
          });
        },
        getBearer: function getBearer() {
          return new Promise(function (resolve, reject) {
            api.bearer(tokenObj.token).then(function (r) {
              if (typeof r.ok != 'undefined') resolve(r.ok);else if (typeof r.err != 'undefined') reject(r.err);else reject(r);
            })["catch"](reject);
          });
        },
        getBalance: function getBalance(address, princpal) {
          return new Promise(function (resolve, reject) {
            var args;
            switch (tokenObj.canister) {
              case _utils.LEDGER_CANISTER_ID:
                _utils.rosettaApi.getAccountBalance(address).then(function (b) {
                  resolve(b);
                });
                break;
              case "qz7gu-giaaa-aaaaf-qaaka-cai":
                args = {
                  "user": _principal.Principal.fromText(princpal)
                };
                api.getBalanceInsecure(args).then(function (b) {
                  var bal = b.length === 0 ? 0 : b[0];
                  resolve(bal);
                })["catch"](reject);
                break;
              default:
                args = {
                  "user": constructUser(address),
                  'token': tokenObj.token
                };
                api.balance(args).then(function (r) {
                  if (typeof r.ok != 'undefined') resolve(r.ok);else if (typeof r.err != 'undefined') reject(r.err);else reject(r);
                })["catch"](reject);
                break;
            }
          });
        },
        getTransactions: function getTransactions(address, princpal) {
          return new Promise(function (resolve, reject) {
            switch (tokenObj.canister) {
              case _utils.LEDGER_CANISTER_ID:
                _utils.rosettaApi.getTransactionsByAccount(address).then(function (ts) {
                  if (!Array.isArray(ts)) resolve([]);
                  var _ts = [];
                  ts.map(function (_t) {
                    if (_t.type !== "TRANSACTION") return false;
                    if (_t.status !== "COMPLETED") return false;
                    _ts.push({
                      from: _t.account1Address,
                      to: _t.account2Address,
                      amount: Number(_t.amount) / Math.pow(10, 8),
                      fee: Number(_t.fee) / Math.pow(10, 8),
                      hash: _t.hash,
                      timestamp: _t.timestamp,
                      memo: Number(_t.memo)
                    });
                    return true;
                  });
                  resolve(_ts);
                })["catch"](reject);
                break;
              case "qz7gu-giaaa-aaaaf-qaaka-cai":
              default:
                resolve([]);
                break;
            }
          });
        },
        /*
          from_principal = principal of account as text
          from_sa = subaccount (to produce hex address). null/0 default as number
          to_user = valid User (address or principal) as text
          amount = valid amount as BigInt
          fee = valid fee as BigInt
          memo = data to be sent as text/hex/number
          notify = if we need to notify TODO
        */
        transfer: function transfer(from_principal, from_sa, to_user, amount, fee, memo, notify) {
          return new Promise(function (resolve, reject) {
            var args;
            switch (tokenObj.canister) {
              case _utils.LEDGER_CANISTER_ID:
                args = {
                  "from_subaccount": [(0, _utils.getSubAccountArray)(from_sa !== null && from_sa !== void 0 ? from_sa : 0)],
                  "to": to_user,
                  //Should be an address
                  "amount": {
                    "e8s": amount
                  },
                  "fee": {
                    "e8s": fee
                  },
                  "memo": memo ? Number(BigInt(memo)) : 0,
                  "created_at_time": []
                };
                api.send_dfx(args).then(function (bh) {
                  resolve(true);
                })["catch"](reject);
                //Notify here
                break;
              case "qz7gu-giaaa-aaaaf-qaaka-cai":
                args = {
                  "to": _principal.Principal.fromText(to_user),
                  "metadata": [],
                  "from": _principal.Principal.fromText(from_principal),
                  "amount": amount
                };
                api.transfer(args).then(function (b) {
                  if (typeof b.ok != 'undefined') {
                    resolve(true);
                  } else {
                    reject(JSON.stringify(b.err));
                  }
                })["catch"](reject);
                break;
              default:
                args = {
                  'token': tid,
                  'from': {
                    'address': (0, _utils.principalToAccountIdentifier)(from_principal, from_sa !== null && from_sa !== void 0 ? from_sa : 0)
                  },
                  'subaccount': [(0, _utils.getSubAccountArray)(from_sa !== null && from_sa !== void 0 ? from_sa : 0)],
                  'to': constructUser(to_user),
                  'amount': amount,
                  'fee': fee,
                  'memo': (0, _utils.fromHexString)(memo),
                  'notify': notify
                };
                api.transfer(args).then(function (b) {
                  if (typeof b.ok != 'undefined') {
                    resolve(true);
                  } else {
                    reject(JSON.stringify(b.err));
                  }
                })["catch"](reject);
                break;
            }
          });
        },
        mintCycles: function mintCycles(from_principal, from_sa, canister, amount, fee) {
          return new Promise(function (resolve, reject) {
            switch (tokenObj.canister) {
              case _utils.LEDGER_CANISTER_ID:
                var _to_sub = (0, _utils.getCyclesTopupSubAccount)(canister);
                var _to = (0, _utils.principalToAccountIdentifier)(_utils.CYCLES_MINTING_CANISTER_ID, _to_sub);
                var args = {
                  "from_subaccount": [(0, _utils.getSubAccountArray)(from_sa !== null && from_sa !== void 0 ? from_sa : 0)],
                  "to": _to,
                  "fee": {
                    "e8s": fee
                  },
                  "memo": Number(BigInt("0x50555054")),
                  "created_at_time": [],
                  "amount": {
                    "e8s": amount
                  }
                };
                api.send_dfx(args).then(function (block) {
                  var args = {
                    "block_height": block,
                    "max_fee": {
                      e8s: fee
                    },
                    "from_subaccount": [(0, _utils.getSubAccountArray)(from_sa !== null && from_sa !== void 0 ? from_sa : 0)],
                    "to_subaccount": [(0, _utils.getSubAccountArray)(_to_sub)],
                    "to_canister": _principal.Principal.fromText(_utils.CYCLES_MINTING_CANISTER_ID)
                  };
                  api.notify_dfx(args).then(resolve)["catch"](reject);
                })["catch"](reject);
                break;
              case "5ymop-yyaaa-aaaah-qaa4q-cai":
                reject("WIP");
                break;
              default:
                reject("Cycle topup is not supported by this token");
                break;
            }
          });
        }
      };
    }
  }, {
    key: "_makeAgent",
    value: function _makeAgent() {
      var args = {};
      if (this._identity) args['identity'] = this._identity;
      if (this._host) args['host'] = this._host;
      this._agent = new _agent.HttpAgent(args);
    }
  }]);
  return ExtConnection;
}();
;
var extjs = {
  connect: function connect(host, identity) {
    return new ExtConnection(host !== null && host !== void 0 ? host : "https://boundary.ic0.app/", identity);
  },
  decodeTokenId: decodeTokenId,
  encodeTokenId: tokenIdentifier,
  constructUser: constructUser,
  principalToAccountIdentifier: _utils.principalToAccountIdentifier,
  fromHexString: _utils.fromHexString,
  toHexString: _utils.toHexString,
  mnemonicToId: _utils.mnemonicToId,
  generateMnemonic: bip39.generateMnemonic
};
var _default = exports["default"] = extjs;