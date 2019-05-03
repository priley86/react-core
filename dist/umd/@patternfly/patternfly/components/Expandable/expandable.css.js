"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./expandable.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./expandable.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.expandable);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-expandable{--pf-c-expandable__toggle--PaddingTop:var(--pf-global--spacer--form-element);--pf-c-expandable__toggle--PaddingRight:var(--pf-global--spacer--md);--pf-c-expandable__toggle--PaddingBottom:var(--pf-global--spacer--form-element);--pf-c-expandable__toggle--PaddingLeft:0;--pf-c-expandable__toggle--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-expandable__toggle--Color:var(--pf-global--link--Color);--pf-c-expandable__toggle--hover--Color:var(--pf-global--link--Color--hover);--pf-c-expandable__toggle--active--Color:var(--pf-global--link--Color--hover);--pf-c-expandable__toggle--focus--Color:var(--pf-global--link--Color--hover);--pf-c-expandable__toggle--m-expanded--Color:var(--pf-global--link--Color--hover);--pf-c-expandable__toggle-icon--MarginRight:var(--pf-global--spacer--sm);--pf-c-expandable__toggle-icon--Color:var(--pf-global--Color--100);--pf-c-expandable__content--MarginTop:var(--pf-global--spacer--md);}.pf-c-expandable.pf-m-expanded{--pf-c-expandable__toggle--Color:var(--pf-c-expandable__toggle--m-expanded--Color);}.pf-c-expandable.pf-m-expanded .pf-c-expandable__toggle-icon{transform:rotate(90deg);}.pf-c-expandable .pf-c-expandable__toggle{padding:var(--pf-c-expandable__toggle--PaddingTop) var(--pf-c-expandable__toggle--PaddingRight) var(--pf-c-expandable__toggle--PaddingBottom) var(--pf-c-expandable__toggle--PaddingLeft);font-weight:var(--pf-c-expandable__toggle--FontWeight);color:var(--pf-c-expandable__toggle--Color);border:none;}.pf-c-expandable .pf-c-expandable__toggle:hover,.pf-c-expandable .pf-c-expandable__toggle.pf-m-hover{--pf-c-expandable__toggle--Color:var(--pf-c-expandable__toggle--hover--Color);}.pf-c-expandable .pf-c-expandable__toggle:active,.pf-c-expandable .pf-c-expandable__toggle.pf-m-active{--pf-c-expandable__toggle--Color:var(--pf-c-expandable__toggle--active--Color);}.pf-c-expandable .pf-c-expandable__toggle:focus,.pf-c-expandable .pf-c-expandable__toggle.pf-m-focus{--pf-c-expandable__toggle--Color:var(--pf-c-expandable__toggle--focus--Color);}.pf-c-expandable .pf-c-expandable__toggle-icon{margin-right:var(--pf-c-expandable__toggle-icon--MarginRight);color:var(--pf-c-expandable__toggle-icon--Color);}.pf-c-expandable .pf-c-expandable__content{margin-top:var(--pf-c-expandable__content--MarginTop);}");
});