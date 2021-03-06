"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OptionsMenuPosition = exports.OptionsMenuPosition = {
    right: 'right',
    left: 'left'
  };
  var OptionsMenuDirection = exports.OptionsMenuDirection = {
    up: 'up',
    down: 'down'
  };
});