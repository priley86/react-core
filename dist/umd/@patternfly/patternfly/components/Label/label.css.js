"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./label.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./label.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.label);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-label{--pf-c-label--PaddingTop:var(--pf-global--spacer--xs);--pf-c-label--PaddingRight:var(--pf-global--spacer--sm);--pf-c-label--PaddingBottom:var(--pf-global--spacer--xs);--pf-c-label--PaddingLeft:var(--pf-global--spacer--sm);--pf-c-label--BorderRadius:var(--pf-global--BorderRadius--sm);--pf-c-label--BackgroundColor:var(--pf-global--primary-color--100);--pf-c-label--Color:var(--pf-global--Color--light-100);--pf-c-label--FontSize:var(--pf-global--FontSize--sm);--pf-c-label--m-compact--FontSize:var(--pf-global--FontSize--xs);display:inline-block;padding:var(--pf-c-label--PaddingTop) var(--pf-c-label--PaddingRight) var(--pf-c-label--PaddingBottom) var(--pf-c-label--PaddingLeft);font-size:var(--pf-c-label--FontSize);color:var(--pf-c-label--Color);text-align:center;white-space:nowrap;background-color:var(--pf-c-label--BackgroundColor);border-radius:var(--pf-c-label--BorderRadius);}.pf-c-label.pf-m-compact{--pf-c-label--FontSize:var(--pf-c-label--m-compact--FontSize);}");
});