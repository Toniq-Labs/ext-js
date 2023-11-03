"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _identity = require("@dfinity/identity");
var _authClient = require("@dfinity/auth-client");
var _openlogin7 = _interopRequireDefault(require("@toruslabs/openlogin"));
var _utils = require("./utils.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var identities = {};
var openlogin = false;
var oauths = ['google', 'twitter', 'facebook', 'github'];
var loadOpenLogin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!openlogin) {
            openlogin = new _openlogin7["default"]({
              clientId: "BHGs7-pkZO-KlT_BE6uMGsER2N1PC4-ERfU_c7BKN1szvtUaYFBwZMC2cwk53yIOLhdpaOFz4C55v_NounQBOfU",
              network: "mainnet",
              uxMode: 'popup'
            });
          }
          _context.next = 3;
          return openlogin.init();
        case 3:
          return _context.abrupt("return", openlogin);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function loadOpenLogin() {
    return _ref.apply(this, arguments);
  };
}();
var processId = function processId(id, type) {
  var p = id.getPrincipal().toString();
  identities[p] = id;
  return {
    principal: p,
    type: type
  };
};
var isLoaded = function isLoaded(p) {
  return identities.hasOwnProperty(p);
};
var ICIdentity = {
  getIdentity: function getIdentity(principal) {
    if (!identities.hasOwnProperty(principal)) return false;
    return identities[principal];
  },
  setup: function setup(type, optdata) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
        var id, auth, _openlogin;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = type;
              _context3.next = _context3.t0 === "ii" ? 3 : _context3.t0 === "private" ? 8 : _context3.t0 === "watch" ? 12 : 13;
              break;
            case 3:
              _context3.next = 5;
              return _authClient.AuthClient.create();
            case 5:
              auth = _context3.sent;
              auth.login({
                identityProvider: "https://identity.ic0.app/",
                onSuccess: function () {
                  var _onSuccess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return auth.getIdentity();
                        case 2:
                          id = _context2.sent;
                          return _context2.abrupt("return", resolve(processId(id, type)));
                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  function onSuccess() {
                    return _onSuccess.apply(this, arguments);
                  }
                  return onSuccess;
                }(),
                onError: reject
              });
              return _context3.abrupt("return");
            case 8:
              localStorage.setItem('_m', optdata.mnemonic);
              id = (0, _utils.mnemonicToId)(optdata.mnemonic);
              (0, _utils.encrypt)(optdata.mnemonic, id.getPrincipal().toString(), optdata.password).then(function (_em) {
                var ems = localStorage.getItem('_em');
                if (!ems) {
                  ems = {};
                  ems[id.getPrincipal().toString()] = _em;
                } else {
                  ems = JSON.parse(ems);
                  ems[id.getPrincipal().toString()] = _em;
                }
                localStorage.setItem('_em', JSON.stringify(ems));
                return resolve(processId(id, type));
              });
              return _context3.abrupt("return");
            case 12:
              return _context3.abrupt("return", resolve({
                principal: optdata.principal,
                type: type
              }));
            case 13:
              return _context3.abrupt("break", 14);
            case 14:
              if (!(oauths.indexOf(type) >= 0)) {
                _context3.next = 25;
                break;
              }
              _context3.next = 17;
              return loadOpenLogin();
            case 17:
              _openlogin = _context3.sent;
              if (!_openlogin.privKey) {
                _context3.next = 21;
                break;
              }
              _context3.next = 21;
              return _openlogin.logout();
            case 21:
              _context3.next = 23;
              return _openlogin.login({
                loginProvider: type
              });
            case 23:
              id = _identity.Ed25519KeyIdentity.generate(new Uint8Array((0, _utils.fromHexString)(_openlogin.privKey)));
              return _context3.abrupt("return", resolve(processId(id, type)));
            case 25:
              return _context3.abrupt("return", reject("Cannot setup, invalid type: " + type));
            case 26:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  },
  load: function load(_id) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
        var id, auth, t, mnemonic, _openlogin2;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = _id.type;
              _context4.next = _context4.t0 === "ii" ? 3 : _context4.t0 === "private" ? 14 : _context4.t0 === "watch" ? 26 : 27;
              break;
            case 3:
              _context4.next = 5;
              return _authClient.AuthClient.create();
            case 5:
              auth = _context4.sent;
              _context4.next = 8;
              return auth.getIdentity();
            case 8:
              id = _context4.sent;
              if (!(id.getPrincipal().toString() === '2vxsx-fae')) {
                _context4.next = 11;
                break;
              }
              return _context4.abrupt("return", reject("Not logged in"));
            case 11:
              if (!(id.getPrincipal().toString() !== _id.principal)) {
                _context4.next = 13;
                break;
              }
              return _context4.abrupt("return", reject("Logged in using the incorrect user: " + id.getPrincipal().toString() + " but expecting " + _id.principal));
            case 13:
              return _context4.abrupt("return", resolve(processId(id, _id.type)));
            case 14:
              if (isLoaded(_id.principal)) {
                _context4.next = 25;
                break;
              }
              t = localStorage.getItem('_m');
              if (t) {
                _context4.next = 20;
                break;
              }
              return _context4.abrupt("return", reject("No seed"));
            case 20:
              mnemonic = t;
              id = (0, _utils.mnemonicToId)(mnemonic);
              return _context4.abrupt("return", resolve(processId(id, _id.type)));
            case 23:
              _context4.next = 26;
              break;
            case 25:
              return _context4.abrupt("return", resolve({
                principal: _id.principal,
                type: _id.type
              }));
            case 26:
              return _context4.abrupt("return", resolve({
                principal: _id.principal,
                type: _id.type
              }));
            case 27:
              return _context4.abrupt("break", 28);
            case 28:
              if (!(oauths.indexOf(_id.type) >= 0)) {
                _context4.next = 44;
                break;
              }
              _context4.next = 31;
              return loadOpenLogin();
            case 31:
              _openlogin2 = _context4.sent;
              if (!(!_openlogin2.privKey || _openlogin2.privKey.length === 0)) {
                _context4.next = 36;
                break;
              }
              return _context4.abrupt("return", reject("Not logged in"));
            case 36:
              id = _identity.Ed25519KeyIdentity.generate(new Uint8Array((0, _utils.fromHexString)(_openlogin2.privKey)));
              if (!(id.getPrincipal().toString() !== _id.principal)) {
                _context4.next = 43;
                break;
              }
              _context4.next = 40;
              return _openlogin2.logout();
            case 40:
              return _context4.abrupt("return", reject("Logged in using the incorrect user " + id.getPrincipal().toString() + " expecting " + _id.principal));
            case 43:
              return _context4.abrupt("return", resolve(processId(id, _id.type)));
            case 44:
              return _context4.abrupt("return", reject());
            case 45:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  unlock: function unlock(_id, optdata) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              ICIdentity.load(_id).then(resolve)["catch"]( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
                  var id, auth, t, ems, em, nems, _openlogin3;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.t0 = _id.type;
                        _context6.next = _context6.t0 === "ii" ? 3 : _context6.t0 === "private" ? 8 : 24;
                        break;
                      case 3:
                        _context6.next = 5;
                        return _authClient.AuthClient.create();
                      case 5:
                        auth = _context6.sent;
                        auth.login({
                          identityProvider: "https://identity.ic0.app/",
                          onSuccess: function () {
                            var _onSuccess2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                while (1) switch (_context5.prev = _context5.next) {
                                  case 0:
                                    _context5.next = 2;
                                    return auth.getIdentity();
                                  case 2:
                                    id = _context5.sent;
                                    if (!(id.getPrincipal().toString() === '2vxsx-fae')) {
                                      _context5.next = 5;
                                      break;
                                    }
                                    return _context5.abrupt("return", reject("Not logged in"));
                                  case 5:
                                    if (!(id.getPrincipal().toString() !== _id.principal)) {
                                      _context5.next = 7;
                                      break;
                                    }
                                    return _context5.abrupt("return", reject("Logged in using the incorrect user: " + id.getPrincipal().toString() + " but expecting " + _id.principal));
                                  case 7:
                                    return _context5.abrupt("return", resolve(processId(id, _id.type)));
                                  case 8:
                                  case "end":
                                    return _context5.stop();
                                }
                              }, _callee5);
                            }));
                            function onSuccess() {
                              return _onSuccess2.apply(this, arguments);
                            }
                            return onSuccess;
                          }(),
                          onError: reject
                        });
                        return _context6.abrupt("return");
                      case 8:
                        t = localStorage.getItem('_em');
                        if (t) {
                          _context6.next = 11;
                          break;
                        }
                        return _context6.abrupt("return", reject("No encrypted seed to decrypt"));
                      case 11:
                        ems = JSON.parse(t);
                        if (!(ems.hasOwnProperty("iv") === true)) {
                          _context6.next = 19;
                          break;
                        }
                        //old format
                        //convert to new?
                        em = JSON.stringify(ems);
                        nems = {};
                        nems[_id.principal] = em;
                        localStorage.setItem('_em', JSON.stringify(nems));
                        _context6.next = 22;
                        break;
                      case 19:
                        if (!(ems.hasOwnProperty(_id.principal) === false)) {
                          _context6.next = 21;
                          break;
                        }
                        return _context6.abrupt("return", reject("No encrypted seed to decrypt"));
                      case 21:
                        em = ems[_id.principal];
                      case 22:
                        (0, _utils.decrypt)(em, _id.principal, optdata.password).then(function (mnemonic) {
                          localStorage.setItem('_m', mnemonic);
                          id = (0, _utils.mnemonicToId)(mnemonic);
                          return resolve(processId(id, _id.type));
                        })["catch"](reject);
                        return _context6.abrupt("return");
                      case 24:
                        return _context6.abrupt("break", 25);
                      case 25:
                        if (!(oauths.indexOf(_id.type) >= 0)) {
                          _context6.next = 46;
                          break;
                        }
                        _context6.prev = 26;
                        _context6.next = 29;
                        return loadOpenLogin();
                      case 29:
                        _openlogin3 = _context6.sent;
                        if (_openlogin3.privKey) {
                          _context6.next = 33;
                          break;
                        }
                        _context6.next = 33;
                        return _openlogin3.login({
                          loginProvider: _id.type
                        });
                      case 33:
                        id = _identity.Ed25519KeyIdentity.generate(new Uint8Array((0, _utils.fromHexString)(_openlogin3.privKey)));
                        if (!(id.getPrincipal().toString() !== _id.principal)) {
                          _context6.next = 40;
                          break;
                        }
                        _context6.next = 37;
                        return _openlogin3.logout();
                      case 37:
                        return _context6.abrupt("return", reject("Logged in using the incorrect user " + id.getPrincipal().toString() + " expecting " + _id.principal));
                      case 40:
                        return _context6.abrupt("return", resolve(processId(id, _id.type)));
                      case 41:
                        _context6.next = 46;
                        break;
                      case 43:
                        _context6.prev = 43;
                        _context6.t1 = _context6["catch"](26);
                        return _context6.abrupt("return", reject("Something happened"));
                      case 46:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6, null, [[26, 43]]);
                }));
                return function (_x7) {
                  return _ref5.apply(this, arguments);
                };
              }());
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }());
  },
  lock: function lock(_id) {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
        var auth, _openlogin4;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.t0 = _id.type;
              _context8.next = _context8.t0 === "ii" ? 3 : _context8.t0 === "private" ? 8 : 10;
              break;
            case 3:
              _context8.next = 5;
              return _authClient.AuthClient.create();
            case 5:
              auth = _context8.sent;
              auth.logout();
              return _context8.abrupt("break", 11);
            case 8:
              localStorage.removeItem("_m");
              return _context8.abrupt("break", 11);
            case 10:
              return _context8.abrupt("break", 11);
            case 11:
              if (!(oauths.indexOf(_id.type) >= 0)) {
                _context8.next = 23;
                break;
              }
              _context8.prev = 12;
              _context8.next = 15;
              return loadOpenLogin();
            case 15:
              _openlogin4 = _context8.sent;
              _context8.next = 18;
              return _openlogin4.logout();
            case 18:
              _context8.next = 23;
              break;
            case 20:
              _context8.prev = 20;
              _context8.t1 = _context8["catch"](12);
              console.log(_context8.t1);
            case 23:
              return _context8.abrupt("return", resolve(true));
            case 24:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[12, 20]]);
      }));
      return function (_x8, _x9) {
        return _ref6.apply(this, arguments);
      };
    }());
  },
  clear: function clear(_id) {
    return new Promise( /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
        var auth, _openlogin5;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.t0 = _id.type;
              _context9.next = _context9.t0 === "ii" ? 3 : _context9.t0 === "private" ? 8 : 11;
              break;
            case 3:
              _context9.next = 5;
              return _authClient.AuthClient.create();
            case 5:
              auth = _context9.sent;
              auth.logout();
              return _context9.abrupt("break", 12);
            case 8:
              localStorage.removeItem("_m");
              localStorage.removeItem("_em");
              return _context9.abrupt("break", 12);
            case 11:
              return _context9.abrupt("break", 12);
            case 12:
              if (!(oauths.indexOf(_id.type) >= 0)) {
                _context9.next = 24;
                break;
              }
              _context9.prev = 13;
              _context9.next = 16;
              return loadOpenLogin();
            case 16:
              _openlogin5 = _context9.sent;
              _context9.next = 19;
              return _openlogin5.logout();
            case 19:
              _context9.next = 24;
              break;
            case 21:
              _context9.prev = 21;
              _context9.t1 = _context9["catch"](13);
              console.log(_context9.t1);
            case 24:
              return _context9.abrupt("return", resolve(true));
            case 25:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[13, 21]]);
      }));
      return function (_x10, _x11) {
        return _ref7.apply(this, arguments);
      };
    }());
  },
  change: function change(_id, type, optdata) {
    return new Promise( /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
        var auth, _openlogin6;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.t0 = _id.type;
              _context10.next = _context10.t0 === "ii" ? 3 : _context10.t0 === "private" ? 8 : 10;
              break;
            case 3:
              _context10.next = 5;
              return _authClient.AuthClient.create();
            case 5:
              auth = _context10.sent;
              auth.logout();
              return _context10.abrupt("break", 11);
            case 8:
              localStorage.removeItem("_m");
              return _context10.abrupt("break", 11);
            case 10:
              return _context10.abrupt("break", 11);
            case 11:
              if (!(oauths.indexOf(_id.type) >= 0)) {
                _context10.next = 23;
                break;
              }
              _context10.prev = 12;
              _context10.next = 15;
              return loadOpenLogin();
            case 15:
              _openlogin6 = _context10.sent;
              _context10.next = 18;
              return _openlogin6.logout();
            case 18:
              _context10.next = 23;
              break;
            case 20:
              _context10.prev = 20;
              _context10.t1 = _context10["catch"](12);
              console.log(_context10.t1);
            case 23:
              //setup new
              ICIdentity.setup(type, optdata).then(resolve)["catch"](reject);
            case 24:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[12, 20]]);
      }));
      return function (_x12, _x13) {
        return _ref8.apply(this, arguments);
      };
    }());
  },
  validatePrincipal: _utils.validatePrincipal,
  validateMnemonic: _utils.bip39.validateMnemonic,
  generateMnemonic: _utils.bip39.generateMnemonic,
  validatePassword: function validatePassword(p) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(p);
  }
};
var _default = exports["default"] = ICIdentity;