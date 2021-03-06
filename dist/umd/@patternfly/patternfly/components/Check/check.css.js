"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./check.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./check.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.check);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-check{--pf-c-check--GridGap:var(--pf-global--spacer--sm);--pf-c-check__label--disabled--Color:var(--pf-global--disabled-color--100);--pf-c-check__label--Color:var(--pf-global--Color--100);--pf-c-check__label--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-check__label--FontSize:var(--pf-global--FontSize--md);--pf-c-check__label--LineHeight:var(--pf-global--LineHeight--sm);--pf-c-check__input--MarginTop:-0.1875rem;display:grid;grid-template-columns:auto 1fr;grid-gap:var(--pf-c-check--GridGap);align-items:center;justify-items:start;}.pf-c-check__label{font-size:var(--pf-c-check__label--FontSize);font-weight:var(--pf-c-check__label--FontWeight);line-height:var(--pf-c-check__label--LineHeight);color:var(--pf-c-check__label--Color);}.pf-c-check__input{margin-top:var(--pf-c-check__input--MarginTop);}label.pf-c-check,.pf-c-check__label,.pf-c-check__input{cursor:pointer;}.pf-c-check__label:disabled,.pf-c-check__label.pf-m-disabled,.pf-c-check__input:disabled,.pf-c-check__input.pf-m-disabled{--pf-c-check__label--Color:var(--pf-c-check__label--disabled--Color);cursor:not-allowed;}");
});