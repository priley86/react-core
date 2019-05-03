"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./badge.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./badge.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.badge);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-badge{--pf-c-badge--BorderRadius:var(--pf-global--BorderRadius--lg);--pf-c-badge--FontSize:var(--pf-global--FontSize--xs);--pf-c-badge--FontWeight:var(--pf-global--FontWeight--bold);--pf-c-badge--PaddingRight:var(--pf-global--spacer--sm);--pf-c-badge--PaddingLeft:var(--pf-global--spacer--sm);--pf-c-badge--Color:var(--pf-global--Color--dark-100);--pf-c-badge--MinWidth:var(--pf-global--spacer--xl);--pf-c-badge--m-read--BackgroundColor:var(--pf-global--BackgroundColor--300);--pf-c-badge--m-read--Color:var(--pf-global--Color--dark-100);--pf-c-badge--m-unread--BackgroundColor:var(--pf-global--primary-color--100);--pf-c-badge--m-unread--Color:var(--pf-global--Color--light-100);display:inline-block;min-width:var(--pf-c-badge--MinWidth);padding-right:var(--pf-c-badge--PaddingRight);padding-left:var(--pf-c-badge--PaddingLeft);font-size:var(--pf-c-badge--FontSize);font-weight:var(--pf-c-badge--FontWeight);color:var(--pf-c-badge--Color);text-align:center;background-color:var(--pf-c-badge--BackgroundColor);border-radius:var(--pf-c-badge--BorderRadius);}.pf-c-badge.pf-m-read{--pf-c-badge--Color:var(--pf-c-badge--m-read--Color);--pf-c-badge--BackgroundColor:var(--pf-c-badge--m-read--BackgroundColor);}.pf-c-badge.pf-m-unread{--pf-c-badge--Color:var(--pf-c-badge--m-unread--Color);--pf-c-badge--BackgroundColor:var(--pf-c-badge--m-unread--BackgroundColor);}");
});