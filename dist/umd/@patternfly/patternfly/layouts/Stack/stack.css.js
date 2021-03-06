"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./stack.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./stack.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.stack);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-l-stack{--pf-l-stack--m-gutter--MarginBottom:var(--pf-global--gutter);display:flex;flex-direction:column;height:100%;}.pf-l-stack__item.pf-m-fill{flex-grow:1;}.pf-l-stack.pf-m-gutter > *:not(:last-child){margin-bottom:var(--pf-l-stack--m-gutter--MarginBottom);}");
});