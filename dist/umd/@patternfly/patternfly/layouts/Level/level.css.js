"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./level.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./level.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.level);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-l-level{--pf-l-level--m-gutter--MarginRight:var(--pf-global--gutter);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;}.pf-l-level.pf-m-gutter > *:not(:last-child){margin-right:var(--pf-l-level--m-gutter--MarginRight);}");
});