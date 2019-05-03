"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./skip-to-content.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./skip-to-content.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.skipToContent);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-skip-to-content{--pf-c-skip-to-content--Top:var(--pf-global--spacer--md);--pf-c-skip-to-content--ZIndex:var(--pf-global--ZIndex--2xl);--pf-c-skip-to-content--focus--Left:var(--pf-global--spacer--md);position:absolute;top:var(--pf-c-skip-to-content--Top);left:-300%;z-index:var(--pf-c-skip-to-content--ZIndex);}.pf-c-skip-to-content.pf-m-focus,.pf-c-skip-to-content:focus{left:var(--pf-c-skip-to-content--focus--Left);}");
});