"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ClipboardCopy"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ClipboardCopy"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ClipboardCopy);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _ClipboardCopy) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "ClipboardCopy", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ClipboardCopy).default;
    }
  });
  Object.defineProperty(exports, "ClipboardCopyVariant", {
    enumerable: true,
    get: function () {
      return _ClipboardCopy.ClipboardCopyVariant;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});