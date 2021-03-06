"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Avatar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Avatar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Avatar);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Avatar) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Avatar", {
    enumerable: true,
    get: function () {
      return _Avatar.Avatar;
    }
  });
});