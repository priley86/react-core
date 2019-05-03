"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./card.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./card.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.card);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-card{--pf-c-card--BackgroundColor:var(--pf-global--BackgroundColor--100);--pf-c-card--BoxShadow:var(--pf-global--BoxShadow--sm);--pf-c-card--m-hoverable--hover--BoxShadow:var(--pf-global--BoxShadow--lg);--pf-c-card--first-child--PaddingTop:var(--pf-global--spacer--lg);--pf-c-card--child--PaddingRight:var(--pf-global--spacer--lg);--pf-c-card--child--PaddingBottom:var(--pf-global--spacer--lg);--pf-c-card--child--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-card__header--not-last-child--PaddingBottom:var(--pf-global--spacer--md);--pf-c-card__body--FontSize:var(--pf-global--FontSize--sm);--pf-c-card__footer--FontSize:var(--pf-global--FontSize--sm);display:flex;flex-direction:column;background-color:var(--pf-c-card--BackgroundColor);box-shadow:var(--pf-c-card--BoxShadow);}.pf-c-card.pf-m-hoverable:hover{box-shadow:var(--pf-c-card--m-hoverable--hover--BoxShadow);}.pf-c-card .pf-c-card__header,.pf-c-card .pf-c-card__body,.pf-c-card .pf-c-card__footer{flex:0 0 auto;padding-right:var(--pf-c-card--child--PaddingRight);padding-bottom:var(--pf-c-card--child--PaddingBottom);padding-left:var(--pf-c-card--child--PaddingLeft);}.pf-c-card .pf-c-card__header:first-child,.pf-c-card .pf-c-card__body:first-child,.pf-c-card .pf-c-card__footer:first-child{padding-top:var(--pf-c-card--first-child--PaddingTop);}.pf-c-card__header:not(:last-child){padding-bottom:var(--pf-c-card__header--not-last-child--PaddingBottom);}.pf-c-card__body{font-size:var(--pf-c-card__body--FontSize);}.pf-c-card__body:not(.pf-m-no-fill){flex:1 1 auto;}.pf-c-card__footer{font-size:var(--pf-c-card__footer--FontSize);}");
});