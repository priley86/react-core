"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./split.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./split.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.split);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-l-split{--pf-l-split--m-gutter--MarginRight:var(--pf-global--gutter);display:flex;flex-wrap:nowrap;padding:0;margin:0;}.pf-l-split__item.pf-m-fill{flex-grow:1;}.pf-l-split.pf-m-gutter > *:not(:last-child){margin-right:var(--pf-l-split--m-gutter--MarginRight);}");
});