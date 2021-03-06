"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./TextArea"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./TextArea"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.TextArea);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _TextArea) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "TextArea", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TextArea).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});