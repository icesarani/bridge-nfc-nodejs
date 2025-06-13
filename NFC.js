"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pcsclite = _interopRequireDefault(require("@pokusew/pcsclite"));
var _events = _interopRequireDefault(require("events"));
var _Reader = _interopRequireDefault(require("./Reader"));
var _ACR122Reader = _interopRequireDefault(require("./ACR122Reader"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class NFC extends _events.default {
  constructor(logger) {
    super();
    _defineProperty(this, "pcsc", null);
    _defineProperty(this, "logger", null);
    this.pcsc = (0, _pcsclite.default)();
    if (logger) {
      this.logger = logger;
    } else {
      this.logger = {
        log: function () {},
        debug: function () {},
        info: function () {},
        warn: function () {},
        error: function () {}
      };
    }
    this.pcsc.on('reader', reader => {
      this.logger.debug('new reader detected', reader.name);

      // create special object for ARC122U reader with commands specific to this reader
      if (
      // 'acr122' matches ARC122U
      reader.name.toLowerCase().indexOf('acr122') !== -1

      // 'acr125' matches ACR1252U reader because ACR1252U has some common commands with ARC122U
      //   ACR1252U product page: https://www.acs.com.hk/en/products/342/acr1252u-usb-nfc-reader-iii-nfc-forum-certified-reader/
      //   TODO: in the future, this should be refactored:
      //         see discussion in PR#111 https://github.com/pokusew/nfc-pcsc/pull/111
      || reader.name.toLowerCase().indexOf('acr125') !== -1) {
        const device = new _ACR122Reader.default(reader, this.logger);
        this.emit('reader', device);
        return;
      }
      const device = new _Reader.default(reader, this.logger);
      this.emit('reader', device);
    });
    this.pcsc.on('error', err => {
      this.logger.error('PCSC error', err.message);
      this.emit('error', err);
    });
  }
  get readers() {
    return this.pcsc.readers;
  }
  close() {
    this.pcsc.close();
  }
}
var _default = exports.default = NFC;