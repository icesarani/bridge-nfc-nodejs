"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ACR122Reader", {
  enumerable: true,
  get: function () {
    return _ACR122Reader.default;
  }
});
Object.defineProperty(exports, "AuthenticationError", {
  enumerable: true,
  get: function () {
    return _errors.AuthenticationError;
  }
});
Object.defineProperty(exports, "BaseError", {
  enumerable: true,
  get: function () {
    return _errors.BaseError;
  }
});
Object.defineProperty(exports, "CARD_NOT_CONNECTED", {
  enumerable: true,
  get: function () {
    return _errors.CARD_NOT_CONNECTED;
  }
});
Object.defineProperty(exports, "CONNECT_MODE_CARD", {
  enumerable: true,
  get: function () {
    return _Reader.CONNECT_MODE_CARD;
  }
});
Object.defineProperty(exports, "CONNECT_MODE_DIRECT", {
  enumerable: true,
  get: function () {
    return _Reader.CONNECT_MODE_DIRECT;
  }
});
Object.defineProperty(exports, "ConnectError", {
  enumerable: true,
  get: function () {
    return _errors.ConnectError;
  }
});
Object.defineProperty(exports, "ControlError", {
  enumerable: true,
  get: function () {
    return _errors.ControlError;
  }
});
Object.defineProperty(exports, "DisconnectError", {
  enumerable: true,
  get: function () {
    return _errors.DisconnectError;
  }
});
Object.defineProperty(exports, "FAILURE", {
  enumerable: true,
  get: function () {
    return _errors.FAILURE;
  }
});
Object.defineProperty(exports, "GetUIDError", {
  enumerable: true,
  get: function () {
    return _errors.GetUIDError;
  }
});
Object.defineProperty(exports, "KEY_TYPE_A", {
  enumerable: true,
  get: function () {
    return _Reader.KEY_TYPE_A;
  }
});
Object.defineProperty(exports, "KEY_TYPE_B", {
  enumerable: true,
  get: function () {
    return _Reader.KEY_TYPE_B;
  }
});
Object.defineProperty(exports, "LoadAuthenticationKeyError", {
  enumerable: true,
  get: function () {
    return _errors.LoadAuthenticationKeyError;
  }
});
Object.defineProperty(exports, "NFC", {
  enumerable: true,
  get: function () {
    return _NFC.default;
  }
});
Object.defineProperty(exports, "OPERATION_FAILED", {
  enumerable: true,
  get: function () {
    return _errors.OPERATION_FAILED;
  }
});
Object.defineProperty(exports, "ReadError", {
  enumerable: true,
  get: function () {
    return _errors.ReadError;
  }
});
Object.defineProperty(exports, "Reader", {
  enumerable: true,
  get: function () {
    return _Reader.default;
  }
});
Object.defineProperty(exports, "TAG_ISO_14443_3", {
  enumerable: true,
  get: function () {
    return _Reader.TAG_ISO_14443_3;
  }
});
Object.defineProperty(exports, "TAG_ISO_14443_4", {
  enumerable: true,
  get: function () {
    return _Reader.TAG_ISO_14443_4;
  }
});
Object.defineProperty(exports, "TransmitError", {
  enumerable: true,
  get: function () {
    return _errors.TransmitError;
  }
});
Object.defineProperty(exports, "UNKNOWN_ERROR", {
  enumerable: true,
  get: function () {
    return _errors.UNKNOWN_ERROR;
  }
});
Object.defineProperty(exports, "WriteError", {
  enumerable: true,
  get: function () {
    return _errors.WriteError;
  }
});
var _NFC = _interopRequireDefault(require("./NFC"));
var _Reader = _interopRequireWildcard(require("./Reader"));
var _ACR122Reader = _interopRequireDefault(require("./ACR122Reader"));
var _errors = require("./errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }