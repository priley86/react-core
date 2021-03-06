"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Checkbox"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Checkbox"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Checkbox);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Checkbox) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Checkbox).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Checkbox[key];
      }
    });
  });
});