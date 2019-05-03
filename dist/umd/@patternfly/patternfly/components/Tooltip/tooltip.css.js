"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./tooltip.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./tooltip.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.tooltip);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-tooltip{--pf-c-tooltip--MaxWidth:18.75rem;--pf-c-tooltip__content--PaddingTop:var(--pf-global--spacer--md);--pf-c-tooltip__content--PaddingRight:var(--pf-global--spacer--lg);--pf-c-tooltip__content--PaddingBottom:var(--pf-global--spacer--md);--pf-c-tooltip__content--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-tooltip__content--Color:var(--pf-global--Color--light-100);--pf-c-tooltip__content--BackgroundColor:var(--pf-global--BackgroundColor--dark-100);--pf-c-tooltip__content--FontSize:var(--pf-global--FontSize--sm);--pf-c-tooltip__arrow--Width:var(--pf-global--arrow--width);--pf-c-tooltip__arrow--Height:var(--pf-global--arrow--width);--pf-c-tooltip__arrow--m-top--Transform:translate(-50%, 50%) rotate(45deg);--pf-c-tooltip__arrow--m-right--Transform:translate(-50%, -50%) rotate(45deg);--pf-c-tooltip__arrow--m-bottom--Transform:translate(-50%, -50%) rotate(45deg);--pf-c-tooltip__arrow--m-left--Transform:translate(50%, -50%) rotate(45deg);position:relative;max-width:var(--pf-c-tooltip--MaxWidth);}.pf-c-tooltip.pf-m-top .pf-c-tooltip__arrow{bottom:0;left:50%;transform:var(--pf-c-tooltip__arrow--m-top--Transform);}.pf-c-tooltip.pf-m-bottom .pf-c-tooltip__arrow{top:0;left:50%;transform:var(--pf-c-tooltip__arrow--m-bottom--Transform);}.pf-c-tooltip.pf-m-left .pf-c-tooltip__arrow{top:50%;right:0;transform:var(--pf-c-tooltip__arrow--m-left--Transform);}.pf-c-tooltip.pf-m-right .pf-c-tooltip__arrow{top:50%;left:0;transform:var(--pf-c-tooltip__arrow--m-right--Transform);}.pf-c-tooltip__content{position:relative;padding:var(--pf-c-tooltip__content--PaddingTop) var(--pf-c-tooltip__content--PaddingRight) var(--pf-c-tooltip__content--PaddingBottom) var(--pf-c-tooltip__content--PaddingLeft);font-size:var(--pf-c-tooltip__content--FontSize);color:var(--pf-c-tooltip__content--Color);text-align:center;background-color:var(--pf-c-tooltip__content--BackgroundColor);}.pf-c-tooltip__arrow{position:absolute;width:var(--pf-c-tooltip__arrow--Width);height:var(--pf-c-tooltip__arrow--Height);pointer-events:none;background-color:var(--pf-c-tooltip__content--BackgroundColor);}");
});