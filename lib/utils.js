"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NNS_CANISTER_ID = exports.LEDGER_CANISTER_ID = exports.GOVERNANCE_CANISTER_ID = exports.CYCLES_MINTING_CANISTER_ID = void 0;
Object.defineProperty(exports, "Principal", {
  enumerable: true,
  get: function get() {
    return _principal.Principal;
  }
});
exports.validatePrincipal = exports.validateAddress = exports.toHexString = exports.to32bits = exports.rosettaApi = exports.principalToAccountIdentifier = exports.mnemonicToId = exports.isHex = exports.getSubaccountFromHex = exports.getSubAccountArray = exports.getCyclesTopupSubAccount = exports.getCyclesTopupAddress = exports.fromHexString = exports.from32bits = exports.encrypt = exports.decrypt = exports.bip39 = exports.amountToBigInt = void 0;
var _principal = require("@dfinity/principal");
var _identity = require("@dfinity/identity");
var _getCrc = require("@dfinity/principal/lib/esm/utils/getCrc");
var _sha = require("@dfinity/principal/lib/esm/utils/sha224");
var _RosettaApi = _interopRequireDefault(require("./RosettaApi.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /* global BigInt */
var sjcl = require('sjcl');
var bip39 = exports.bip39 = require('bip39');
var pbkdf2 = require("pbkdf2");
var LEDGER_CANISTER_ID = exports.LEDGER_CANISTER_ID = "ryjl3-tyaaa-aaaaa-aaaba-cai";
var GOVERNANCE_CANISTER_ID = exports.GOVERNANCE_CANISTER_ID = "rrkah-fqaaa-aaaaa-aaaaq-cai";
var NNS_CANISTER_ID = exports.NNS_CANISTER_ID = "qoctq-giaaa-aaaaa-aaaea-cai";
var CYCLES_MINTING_CANISTER_ID = exports.CYCLES_MINTING_CANISTER_ID = "rkp4c-7iaaa-aaaaa-aaaca-cai";
var rosettaApi = exports.rosettaApi = new _RosettaApi["default"]();
var getCyclesTopupAddress = exports.getCyclesTopupAddress = function getCyclesTopupAddress(canisterId) {
  return principalToAccountIdentifier(CYCLES_MINTING_CANISTER_ID, getCyclesTopupSubAccount(canisterId));
};
var getCyclesTopupSubAccount = exports.getCyclesTopupSubAccount = function getCyclesTopupSubAccount(canisterId) {
  var pb = Array.from(_principal.Principal.fromText(canisterId).toUint8Array());
  return [pb.length].concat(pb);
};
var amountToBigInt = exports.amountToBigInt = function amountToBigInt(amount, decimals) {
  //decimals = decimals ?? 8;
  if (amount < 1) {
    amount = BigInt(amount * Math.pow(10, decimals));
  } else {
    amount = BigInt(amount) * BigInt(Math.pow(10, decimals));
  }
  return amount;
};
var principalToAccountIdentifier = exports.principalToAccountIdentifier = function principalToAccountIdentifier(p, s) {
  var padding = Buffer("\x0Aaccount-id");
  var array = new Uint8Array([].concat(_toConsumableArray(padding), _toConsumableArray(_principal.Principal.fromText(p).toUint8Array()), _toConsumableArray(getSubAccountArray(s))));
  var hash = (0, _sha.sha224)(array);
  var checksum = to32bits((0, _getCrc.getCrc32)(hash));
  var array2 = new Uint8Array([].concat(_toConsumableArray(checksum), _toConsumableArray(hash)));
  return toHexString(array2);
};
var getSubAccountArray = exports.getSubAccountArray = function getSubAccountArray(s) {
  if (Array.isArray(s)) {
    return s.concat(Array(32 - s.length).fill(0));
  } else {
    //32 bit number only
    return Array(28).fill(0).concat(to32bits(s ? s : 0));
  }
};
var from32bits = exports.from32bits = function from32bits(ba) {
  var value;
  for (var i = 0; i < 4; i++) {
    value = value << 8 | ba[i];
  }
  return value;
};
var to32bits = exports.to32bits = function to32bits(num) {
  var b = new ArrayBuffer(4);
  new DataView(b).setUint32(0, num);
  return Array.from(new Uint8Array(b));
};
var toHexString = exports.toHexString = function toHexString(byteArray) {
  return Array.from(byteArray, function (_byte) {
    return ('0' + (_byte & 0xFF).toString(16)).slice(-2);
  }).join('');
};
var fromHexString = exports.fromHexString = function fromHexString(hex) {
  if (hex.substr(0, 2) === "0x") hex = hex.substr(2);
  for (var bytes = [], c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
};
var mnemonicToId = exports.mnemonicToId = function mnemonicToId(mnemonic) {
  var seed = bip39.mnemonicToSeedSync(mnemonic);
  seed = Array.from(seed);
  seed = seed.splice(0, 32);
  seed = new Uint8Array(seed);
  return _identity.Ed25519KeyIdentity.generate(seed);
};
var encrypt = exports.encrypt = function encrypt(mnemonic, principal, password) {
  return new Promise(function (resolve, reject) {
    pbkdf2.pbkdf2(password, principal, 30000, 512, 'sha512', function (e, d) {
      if (e) return reject(e);
      resolve(sjcl.encrypt(d.toString(), btoa(mnemonic)));
    });
  });
};
var decrypt = exports.decrypt = function decrypt(data, principal, password) {
  return new Promise(function (resolve, reject) {
    pbkdf2.pbkdf2(password, principal, 30000, 512, 'sha512', function (e, d) {
      if (e) return reject(e);
      try {
        resolve(atob(sjcl.decrypt(d.toString(), data)));
      } catch (e) {
        reject(e);
      }
    });
  });
};
var isHex = exports.isHex = function isHex(h) {
  var regexp = /^[0-9a-fA-F]+$/;
  return regexp.test(h);
};
var validateAddress = exports.validateAddress = function validateAddress(a) {
  return isHex(a) && a.length === 64;
};
var validatePrincipal = exports.validatePrincipal = function validatePrincipal(p) {
  try {
    return p === _principal.Principal.fromText(p).toText();
  } catch (e) {
    return false;
  }
};
var getSubaccountFromHex = exports.getSubaccountFromHex = function getSubaccountFromHex(hex) {
  var dec = fromHexString(hex);
  return Array(32 - dec.length).fill(0).concat(dec);
};
//IC specific utils