"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _agent = require("@dfinity/agent");
var _utils = require("./utils.js");
var _extjs = _interopRequireDefault(require("./extjs.js"));
var _jsSha = require("js-sha256");
var _types = require("@dfinity/agent/lib/esm/types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /* global BigInt */
//import {StoicIdentity} from "./identity.js";

var topics = [["All topics", 0], ["Neuron Management", 1], ["Exchange Rate", 2], ["Network Economics", 3], ["Governance", 4], ["Node Admin", 5], ["Participant Management", 6], ["Subnet Management", 7], ["Network Canister Management", 8], ["KYC", 9], ["Node Proivuder Rewards", 10]];
var sha256 = function sha256(data) {
  var shaObj = _jsSha.sha256.create();
  shaObj.update(data);
  return (0, _types.blobFromUint8Array)(new Uint8Array(shaObj.array()));
};
var getStakingAddress = function getStakingAddress(principal, nonce) {
  if (typeof nonce == 'string') nonce = Buffer(nonce);
  if (nonce.length > 8) return false;
  var array = new Uint8Array([[0x0c]].concat(_toConsumableArray(Buffer("neuron-stake")), _toConsumableArray(_agent.Principal.fromText(principal).toBlob()), _toConsumableArray(nonce)));
  var hash = sha256(array);
  return (0, _utils.principalToAccountIdentifier)(_utils.GOVERNANCE_CANISTER_ID, Array.from(hash));
};
var _api = /*#__PURE__*/new WeakMap();
var _identity = /*#__PURE__*/new WeakMap();
var ICNeuron = /*#__PURE__*/function () {
  function ICNeuron(neuronid, neurondata, identity) {
    _classCallCheck(this, ICNeuron);
    _classPrivateFieldInitSpec(this, _api, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _identity, {
      writable: true,
      value: false
    });
    _defineProperty(this, "neuronid", 0);
    _defineProperty(this, "id", 0);
    _defineProperty(this, "data", {});
    if (!neuronid) throw new Error("NeuronID is required");
    if (!identity) throw new Error("Identity is required");
    this.neuronid = neuronid;
    this.id = neuronid.toString();
    _classPrivateFieldSet(this, _identity, identity);
    this.data = neurondata;
    _classPrivateFieldSet(this, _api, _extjs["default"].connect("https://boundary.ic0.app/", _classPrivateFieldGet(this, _identity)).canister(_utils.GOVERNANCE_CANISTER_ID));
  }
  _createClass(ICNeuron, [{
    key: "topup",
    value: function () {
      var _topup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(from_sa, amount) {
        var args, memo;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              args = {
                "from_subaccount": [(0, _utils.getSubAccountArray)(from_sa !== null && from_sa !== void 0 ? from_sa : 0)],
                "to": this.data.address,
                "amount": {
                  "e8s": (0, _utils.amountToBigInt)(amount, 8)
                },
                "fee": {
                  "e8s": 10000n
                },
                "memo": 0,
                "created_at_time": []
              };
              _context.next = 3;
              return _extjs["default"].connect("https://boundary.ic0.app/", _classPrivateFieldGet(this, _identity)).canister(_utils.LEDGER_CANISTER_ID).send_dfx(args);
            case 3:
              _context.next = 5;
              return _utils.rosettaApi.getTransactionsByAccount(this.data.address).then(function (rs) {
                return Number(rs.pop().memo);
              });
            case 5:
              memo = _context.sent;
              args = {
                controller: [],
                memo: memo
              };
              _context.next = 9;
              return _extjs["default"].connect("https://boundary.ic0.app/", _classPrivateFieldGet(this, _identity)).canister(_utils.GOVERNANCE_CANISTER_ID).claim_or_refresh_neuron_from_account(args);
            case 9:
              return _context.abrupt("return", true);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function topup(_x, _x2) {
        return _topup.apply(this, arguments);
      }
      return topup;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return NeuronManager.getData(this.neuronid, _classPrivateFieldGet(this, _identity));
            case 2:
              this.data = _context2.sent;
              return _context2.abrupt("return", this.data);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function update() {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "spawn",
    value: function () {
      var _spawn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var commandArgs, cmdId, cmdBody, res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              //TODO TEST
              commandArgs = {
                new_controller: []
              };
              cmdId = "Spawn";
              cmdBody = {};
              cmdBody[cmdId] = commandArgs;
              _context3.next = 6;
              return _classPrivateFieldGet(this, _api).manage_neuron({
                id: [{
                  id: this.neuronid
                }],
                command: [cmdBody]
              });
            case 6:
              res = _context3.sent;
              if (!res.command[0].hasOwnProperty('Error')) {
                _context3.next = 11;
                break;
              }
              throw new Error("Error:" + JSON.stringify(res.command[0].Error.error_message));
            case 11:
              return _context3.abrupt("return", res.command[0][cmdId]);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function spawn() {
        return _spawn.apply(this, arguments);
      }
      return spawn;
    }()
  }, {
    key: "split",
    value: function () {
      var _split = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(amount) {
        var commandArgs, cmdId, cmdBody, res;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              //TODO TEST
              commandArgs = {
                amount_e8s: BigInt(amount) * BigInt(Math.pow(10, 8))
              };
              cmdId = "Split";
              cmdBody = {};
              cmdBody[cmdId] = commandArgs;
              _context4.next = 6;
              return _classPrivateFieldGet(this, _api).manage_neuron({
                id: [{
                  id: this.neuronid
                }],
                command: [cmdBody]
              });
            case 6:
              res = _context4.sent;
              if (!res.command[0].hasOwnProperty('Error')) {
                _context4.next = 11;
                break;
              }
              throw new Error("Error:" + JSON.stringify(res.command[0].Error.error_message));
            case 11:
              return _context4.abrupt("return", res.command[0][cmdId]);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function split(_x3) {
        return _split.apply(this, arguments);
      }
      return split;
    }()
  }, {
    key: "follow",
    value: function () {
      var _follow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(topic, neuron) {
        var commandArgs, cmdId, cmdBody, res;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              commandArgs = {
                topic: BigInt(topic),
                "followees": [{
                  id: BigInt(neuron)
                }]
              };
              cmdId = "Follow";
              cmdBody = {};
              cmdBody[cmdId] = commandArgs;
              _context5.next = 6;
              return _classPrivateFieldGet(this, _api).manage_neuron({
                id: [{
                  id: this.neuronid
                }],
                command: [cmdBody]
              });
            case 6:
              res = _context5.sent;
              if (!res.command[0].hasOwnProperty('Error')) {
                _context5.next = 11;
                break;
              }
              throw new Error("Error:" + JSON.stringify(res.command[0].Error.error_message));
            case 11:
              return _context5.abrupt("return", res.command[0][cmdId]);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function follow(_x4, _x5) {
        return _follow.apply(this, arguments);
      }
      return follow;
    }()
  }, {
    key: "startDissolving",
    value: function () {
      var _startDissolving = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var commandArgs, cmdId, cmdBody, res;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              commandArgs = {
                operation: [{
                  "StartDissolving": {}
                }]
              };
              cmdId = "Configure";
              cmdBody = {};
              cmdBody[cmdId] = commandArgs;
              _context6.next = 6;
              return _classPrivateFieldGet(this, _api).manage_neuron({
                id: [{
                  id: this.neuronid
                }],
                command: [cmdBody]
              });
            case 6:
              res = _context6.sent;
              if (!res.command[0].hasOwnProperty('Error')) {
                _context6.next = 11;
                break;
              }
              throw new Error("Error:" + JSON.stringify(res.command[0].Error.error_message));
            case 11:
              return _context6.abrupt("return", res.command[0][cmdId]);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function startDissolving() {
        return _startDissolving.apply(this, arguments);
      }
      return startDissolving;
    }()
  }, {
    key: "stopDissolving",
    value: function () {
      var _stopDissolving = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var commandArgs, cmdId, cmdBody, res;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              commandArgs = {
                operation: [{
                  "StopDissolving": {}
                }]
              };
              cmdId = "Configure";
              cmdBody = {};
              cmdBody[cmdId] = commandArgs;
              _context7.next = 6;
              return _classPrivateFieldGet(this, _api).manage_neuron({
                id: [{
                  id: this.neuronid
                }],
                command: [cmdBody]
              });
            case 6:
              res = _context7.sent;
              if (!res.command[0].hasOwnProperty('Error')) {
                _context7.next = 11;
                break;
              }
              throw new Error("Error:" + JSON.stringify(res.command[0].Error.error_message));
            case 11:
              return _context7.abrupt("return", res.command[0][cmdId]);
            case 12:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function stopDissolving() {
        return _stopDissolving.apply(this, arguments);
      }
      return stopDissolving;
    }()
  }, {
    key: "increaseDissolveDelay",
    value: function () {
      var _increaseDissolveDelay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(seconds) {
        var commandArgs, cmdId, cmdBody, res;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              commandArgs = {
                operation: [{
                  "IncreaseDissolveDelay": {
                    "additional_dissolve_delay_seconds": BigInt(seconds)
                  }
                }]
              };
              cmdId = "Configure";
              cmdBody = {};
              cmdBody[cmdId] = commandArgs;
              _context8.next = 6;
              return _classPrivateFieldGet(this, _api).manage_neuron({
                id: [{
                  id: this.neuronid
                }],
                command: [cmdBody]
              });
            case 6:
              res = _context8.sent;
              if (!res.command[0].hasOwnProperty('Error')) {
                _context8.next = 11;
                break;
              }
              throw new Error("Error:" + JSON.stringify(res.command[0].Error.error_message));
            case 11:
              return _context8.abrupt("return", res.command[0][cmdId]);
            case 12:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function increaseDissolveDelay(_x6) {
        return _increaseDissolveDelay.apply(this, arguments);
      }
      return increaseDissolveDelay;
    }()
  }, {
    key: "setDissolveTime",
    value: function () {
      var _setDissolveTime = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(seconds) {
        var commandArgs, cmdId, cmdBody, res;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              //not really needed
              commandArgs = {
                operation: [{
                  "SetDissolveTimestamp": {
                    dissolve_timestamp_seconds: BigInt(seconds)
                  }
                }]
              };
              cmdId = "Configure";
              cmdBody = {};
              cmdBody[cmdId] = commandArgs;
              _context9.next = 6;
              return _classPrivateFieldGet(this, _api).manage_neuron({
                id: [{
                  id: this.neuronid
                }],
                command: [cmdBody]
              });
            case 6:
              res = _context9.sent;
              if (!res.command[0].hasOwnProperty('Error')) {
                _context9.next = 11;
                break;
              }
              throw new Error("Error:" + JSON.stringify(res.command[0].Error.error_message));
            case 11:
              return _context9.abrupt("return", res.command[0][cmdId]);
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function setDissolveTime(_x7) {
        return _setDissolveTime.apply(this, arguments);
      }
      return setDissolveTime;
    }()
  }, {
    key: "disburse",
    value: function () {
      var _disburse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var commandArgs, cmdId, cmdBody, res;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              commandArgs = {
                to_account: [],
                amount: []
              };
              cmdId = "Disburse";
              cmdBody = {};
              cmdBody[cmdId] = commandArgs;
              _context10.next = 6;
              return _classPrivateFieldGet(this, _api).manage_neuron({
                id: [{
                  id: this.neuronid
                }],
                command: [cmdBody]
              });
            case 6:
              res = _context10.sent;
              if (!res.command[0].hasOwnProperty('Error')) {
                _context10.next = 11;
                break;
              }
              throw new Error("Error:" + JSON.stringify(res.command[0].Error.error_message));
            case 11:
              return _context10.abrupt("return", res.command[0][cmdId]);
            case 12:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function disburse() {
        return _disburse.apply(this, arguments);
      }
      return disburse;
    }()
  }]);
  return ICNeuron;
}();
;
var NeuronManager = {
  scan: function () {
    var _scan = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id) {
      var ns, rns;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _extjs["default"].connect("https://boundary.ic0.app/", id).canister(_utils.GOVERNANCE_CANISTER_ID).list_neurons({
              include_neurons_readable_by_caller: true,
              neuron_ids: []
            });
          case 2:
            ns = _context11.sent;
            rns = [];
            ns.full_neurons.map(function (n, i) {
              var nid = n.id[0].id;
              var nn = ns.neuron_infos.find(function (e) {
                return e[0] === nid;
              })[1];
              var ndata = {
                age: nn.age_seconds,
                created: nn.created_timestamp_seconds,
                dissolve_delay: nn.dissolve_delay_seconds,
                retreived: nn.retrieved_at_timestamp_seconds,
                state: nn.state,
                voting_power: nn.voting_power,
                stake: n.cached_neuron_stake_e8s,
                maturity: n.maturity_e8s_equivalent,
                fees: n.neuron_fees_e8s,
                operator: true,
                address: (0, _utils.principalToAccountIdentifier)(_utils.GOVERNANCE_CANISTER_ID, n.account)
              };
              rns.push(new ICNeuron(nid, ndata, id));
              return true;
            });
            return _context11.abrupt("return", rns);
          case 6:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    function scan(_x8) {
      return _scan.apply(this, arguments);
    }
    return scan;
  }(),
  create: function () {
    var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(amount, id, sa) {
      var index, principal, nonce, memo, stakingTo, args, nd, neuronid;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            index = Math.floor(Math.random() * 4294967296);
            if (!(amount < 1)) {
              _context12.next = 3;
              break;
            }
            return _context12.abrupt("return", false);
          case 3:
            principal = id.getPrincipal();
            nonce = Array(4).fill(0).concat((0, _utils.to32bits)(index));
            memo = BigInt("0x" + (0, _utils.toHexString)(nonce));
            stakingTo = getStakingAddress(principal.toText(), nonce);
            args = {
              "from_subaccount": [(0, _utils.getSubAccountArray)(sa !== null && sa !== void 0 ? sa : 0)],
              "to": stakingTo,
              "amount": {
                "e8s": (0, _utils.amountToBigInt)(amount, 8)
              },
              "fee": {
                "e8s": 10000n
              },
              "memo": Number(memo),
              "created_at_time": []
            }; //Call
            _context12.next = 10;
            return _extjs["default"].connect("https://boundary.ic0.app/", id).canister(_utils.LEDGER_CANISTER_ID).send_dfx(args);
          case 10:
            args = {
              controller: [principal],
              memo: Number(memo)
            };

            //Call
            _context12.next = 13;
            return _extjs["default"].connect("https://boundary.ic0.app/", id).canister(_utils.GOVERNANCE_CANISTER_ID).claim_or_refresh_neuron_from_account(args);
          case 13:
            nd = _context12.sent;
            if (!nd.result[0].hasOwnProperty("Error")) {
              _context12.next = 16;
              break;
            }
            throw new Error("Error: " + JSON.stringify(nd.result[0].Error));
          case 16:
            neuronid = nd.result[0].NeuronId.id;
            _context12.next = 19;
            return NeuronManager.get(neuronid, id);
          case 19:
            return _context12.abrupt("return", _context12.sent);
          case 20:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    function create(_x9, _x10, _x11) {
      return _create.apply(this, arguments);
    }
    return create;
  }(),
  get: function () {
    var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(neuronid, id) {
      var ndata;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return NeuronManager.getData(neuronid, id);
          case 2:
            ndata = _context13.sent;
            return _context13.abrupt("return", new ICNeuron(neuronid, ndata, id));
          case 4:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    function get(_x12, _x13) {
      return _get.apply(this, arguments);
    }
    return get;
  }(),
  getData: function () {
    var _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(neuronid, id) {
      var ns, ndata;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return _extjs["default"].connect("https://boundary.ic0.app/", id).canister(_utils.GOVERNANCE_CANISTER_ID).list_neurons({
              neuron_ids: [neuronid],
              include_neurons_readable_by_caller: false
            });
          case 2:
            ns = _context14.sent;
            ndata = {
              operator: false,
              age: ns.neuron_infos[0][1].age_seconds,
              created: ns.neuron_infos[0][1].created_timestamp_seconds,
              dissolve_delay: ns.neuron_infos[0][1].dissolve_delay_seconds,
              retreived: ns.neuron_infos[0][1].retrieved_at_timestamp_seconds,
              state: ns.neuron_infos[0][1].state,
              voting_power: ns.neuron_infos[0][1].voting_power
            };
            if (ns.full_neurons.length === 1) {
              ndata['stake'] = ns.full_neurons[0].cached_neuron_stake_e8s;
              ndata['maturity'] = ns.full_neurons[0].maturity_e8s_equivalent;
              ndata['fees'] = ns.full_neurons[0].neuron_fees_e8s;
              ndata['operator'] = true;
              ndata['address'] = (0, _utils.principalToAccountIdentifier)(_utils.GOVERNANCE_CANISTER_ID, ns.full_neurons[0].account);
            }
            return _context14.abrupt("return", ndata);
          case 6:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    function getData(_x14, _x15) {
      return _getData.apply(this, arguments);
    }
    return getData;
  }(),
  topics: topics
};
var _default = exports["default"] = NeuronManager;