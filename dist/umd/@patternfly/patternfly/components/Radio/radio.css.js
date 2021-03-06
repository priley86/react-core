"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./radio.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./radio.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.radio);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-radio{--pf-c-radio--GridGap:var(--pf-global--spacer--sm);--pf-c-radio__label--disabled--Color:var(--pf-global--disabled-color--100);--pf-c-radio__label--Color:var(--pf-global--Color--100);--pf-c-radio__label--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-radio__label--FontSize:var(--pf-global--FontSize--md);--pf-c-radio__label--LineHeight:var(--pf-global--LineHeight--sm);--pf-c-radio__input--MarginTop:-0.1875rem;display:grid;grid-template-columns:auto 1fr;grid-gap:var(--pf-c-radio--GridGap);align-items:center;justify-items:start;}.pf-c-radio__label{font-size:var(--pf-c-radio__label--FontSize);font-weight:var(--pf-c-radio__label--FontWeight);line-height:var(--pf-c-radio__label--LineHeight);color:var(--pf-c-radio__label--Color);}.pf-c-radio__input{margin-top:var(--pf-c-radio__input--MarginTop);}label.pf-c-radio,.pf-c-radio__label,.pf-c-radio__input{cursor:pointer;}.pf-c-radio__label:disabled,.pf-c-radio__label.pf-m-disabled,.pf-c-radio__input:disabled,.pf-c-radio__input.pf-m-disabled{--pf-c-radio__label--Color:var(--pf-c-radio__label--disabled--Color);cursor:not-allowed;}");
});