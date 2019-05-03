"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./empty-state.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./empty-state.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.emptyState);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-empty-state{--pf-c-empty-state--Padding:var(--pf-global--spacer--xl);--pf-c-empty-state__icon--MarginBottom:var(--pf-global--spacer--lg);--pf-c-empty-state__icon--FontSize:var(--pf-global--icon--FontSize--xl);--pf-c-empty-state__icon--Color:var(--pf-global--icon--Color--light);--pf-c-empty-state__body--MarginTop:var(--pf-global--spacer--md);--pf-c-empty-state__body--Color:var(--pf-global--Color--200);--pf-c-empty-state--c-button--MarginTop:var(--pf-global--spacer--xl);--pf-c-empty-state--c-button__secondary--MarginTop:var(--pf-global--spacer--sm);--pf-c-empty-state__secondary--MarginTop:var(--pf-global--spacer--xl);--pf-c-empty-state__secondary--MarginRight:calc(var(--pf-global--spacer--xs) * -1);--pf-c-empty-state__secondary--MarginBottom:calc(var(--pf-global--spacer--xs) * -1);--pf-c-empty-state__secondary--c-button--MarginRight:var(--pf-global--spacer--xs);--pf-c-empty-state__secondary--c-button--MarginBottom:var(--pf-global--spacer--xs);--pf-c-empty-state--m-sm--MaxWidth:25rem;--pf-c-empty-state--m-lg--MaxWidth:37.5rem;padding:var(--pf-c-empty-state--Padding);text-align:center;}.pf-c-empty-state > .pf-c-button.pf-m-primary{margin-top:var(--pf-c-empty-state--c-button--MarginTop);}.pf-c-empty-state > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary{margin-top:var(--pf-c-empty-state--c-button__secondary--MarginTop);}.pf-c-empty-state.pf-m-sm{max-width:var(--pf-c-empty-state--m-sm--MaxWidth);}.pf-c-empty-state.pf-m-lg{max-width:var(--pf-c-empty-state--m-lg--MaxWidth);}.pf-c-empty-state__icon{margin-bottom:var(--pf-c-empty-state__icon--MarginBottom);font-size:var(--pf-c-empty-state__icon--FontSize);color:var(--pf-c-empty-state__icon--Color);}.pf-c-empty-state__body{margin-top:var(--pf-c-empty-state__body--MarginTop);color:var(--pf-c-empty-state__body--Color);}.pf-c-empty-state__secondary{display:flex;flex-wrap:wrap;justify-content:center;margin-top:var(--pf-c-empty-state__secondary--MarginTop);margin-right:var(--pf-c-empty-state__secondary--MarginRight);margin-bottom:var(--pf-c-empty-state__secondary--MarginBottom);}.pf-c-empty-state__secondary > .pf-c-button{margin-right:var(--pf-c-empty-state__secondary--c-button--MarginRight);margin-bottom:var(--pf-c-empty-state__secondary--c-button--MarginBottom);}");
});