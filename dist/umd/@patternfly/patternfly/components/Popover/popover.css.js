"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./popover.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./popover.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.popover);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-popover{--pf-c-popover--MinWidth:calc(var(--pf-c-popover--c-button--sibling--PaddingRight) + 6.25rem);--pf-c-popover--MaxWidth:calc(var(--pf-c-popover--c-button--sibling--PaddingRight) + 18.75rem);--pf-c-popover--BoxShadow:var(--pf-global--BoxShadow--md);--pf-c-popover__content--BackgroundColor:var(--pf-global--BackgroundColor--100);--pf-c-popover__content--PaddingTop:var(--pf-global--spacer--xl);--pf-c-popover__content--PaddingRight:var(--pf-global--spacer--xl);--pf-c-popover__content--PaddingBottom:var(--pf-global--spacer--xl);--pf-c-popover__content--PaddingLeft:var(--pf-global--spacer--xl);--pf-c-popover__arrow--Width:var(--pf-global--arrow--width-lg);--pf-c-popover__arrow--Height:var(--pf-global--arrow--width-lg);--pf-c-popover__arrow--BoxShadow:var(--pf-global--BoxShadow--md);--pf-c-popover__arrow--BackgroundColor:var(--pf-global--BackgroundColor--100);--pf-c-popover__arrow--m-top--Transform:translate(-50%, 50%) rotate(45deg);--pf-c-popover__arrow--m-right--Transform:translate(-50%, -50%) rotate(45deg);--pf-c-popover__arrow--m-bottom--Transform:translate(-50%, -50%) rotate(45deg);--pf-c-popover__arrow--m-left--Transform:translate(50%, -50%) rotate(45deg);--pf-c-popover--c-button--MarginLeft:var(--pf-global--spacer--sm);--pf-c-popover--c-button--Top:calc(var(--pf-c-popover__content--PaddingTop) - var(--pf-global--spacer--form-element) + 0.0625rem);--pf-c-popover--c-button--Right:var(--pf-global--spacer--md);--pf-c-popover--c-button--sibling--PaddingRight:var(--pf-global--spacer--lg);--pf-c-popover--c-title--MarginBottom:var(--pf-global--spacer--lg);--pf-c-popover__footer--MarginTop:var(--pf-global--spacer--lg);position:relative;min-width:var(--pf-c-popover--MinWidth);max-width:var(--pf-c-popover--MaxWidth);box-shadow:var(--pf-c-popover--BoxShadow);}.pf-c-popover.pf-m-top .pf-c-popover__arrow{bottom:0;left:50%;transform:var(--pf-c-popover__arrow--m-top--Transform);}.pf-c-popover.pf-m-bottom .pf-c-popover__arrow{top:0;left:50%;transform:var(--pf-c-popover__arrow--m-bottom--Transform);}.pf-c-popover.pf-m-left .pf-c-popover__arrow{top:50%;right:0;transform:var(--pf-c-popover__arrow--m-left--Transform);}.pf-c-popover.pf-m-right .pf-c-popover__arrow{top:50%;left:0;transform:var(--pf-c-popover__arrow--m-right--Transform);}.pf-c-popover__content{position:relative;padding:var(--pf-c-popover__content--PaddingTop) var(--pf-c-popover__content--PaddingRight) var(--pf-c-popover__content--PaddingBottom) var(--pf-c-popover__content--PaddingLeft);background-color:var(--pf-c-popover__content--BackgroundColor);}.pf-c-popover__content > .pf-c-button{position:absolute;top:var(--pf-c-popover--c-button--Top);right:var(--pf-c-popover--c-button--Right);}.pf-c-popover__content > .pf-c-button + *{padding-right:var(--pf-c-popover--c-button--sibling--PaddingRight);}.pf-c-popover__arrow{position:absolute;width:var(--pf-c-popover__arrow--Width);height:var(--pf-c-popover__arrow--Height);pointer-events:none;background-color:var(--pf-c-popover__arrow--BackgroundColor);box-shadow:var(--pf-c-popover__arrow--BoxShadow);}.pf-c-title{margin-bottom:var(--pf-c-popover--c-title--MarginBottom);line-height:1;}.pf-c-popover__body{word-wrap:break-word;}.pf-c-popover__footer{margin-top:var(--pf-c-popover__footer--MarginTop);}");
});