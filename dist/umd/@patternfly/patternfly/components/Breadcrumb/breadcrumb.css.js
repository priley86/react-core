"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./breadcrumb.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./breadcrumb.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.breadcrumb);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-breadcrumb{--pf-c-breadcrumb__item--FontSize:var(--pf-global--FontSize--sm);--pf-c-breadcrumb__item--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-breadcrumb__item--LineHeight:var(--pf-global--LineHeight--sm);--pf-c-breadcrumb__item--MarginRight:var(--pf-global--spacer--sm);--pf-c-breadcrumb__item-divider--Color:var(--pf-global--BorderColor--200);--pf-c-breadcrumb__item-divider--MarginLeft:var(--pf-global--spacer--sm);--pf-c-breadcrumb__item-divider--FontSize:var(--pf-global--FontSize--sm);--pf-c-breadcrumb__link--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-breadcrumb__link--m-current--Color:var(--pf-global--Color--100);--pf-c-breadcrumb__heading--FontSize:var(--pf-global--FontSize--sm);display:inline-flex;}.pf-c-breadcrumb__list{display:flex;flex-wrap:wrap;align-items:center;}.pf-c-breadcrumb__item{display:flex;align-items:center;font-size:var(--pf-c-breadcrumb__item--FontSize);font-weight:var(--pf-c-breadcrumb__item--FontWeight);line-height:var(--pf-c-breadcrumb__item--LineHeight);cursor:default;}.pf-c-breadcrumb__item:not(:last-child){margin-right:var(--pf-c-breadcrumb__item--MarginRight);}.pf-c-breadcrumb__item-divider{margin-left:var(--pf-c-breadcrumb__item-divider--MarginLeft);font-size:var(--pf-c-breadcrumb__item-divider--FontSize);line-height:1;color:var(--pf-c-breadcrumb__item-divider--Color);}.pf-c-breadcrumb__link{font-size:inherit;font-weight:var(--pf-c-breadcrumb__link--FontWeight);line-height:inherit;}.pf-c-breadcrumb__link.pf-m-current{cursor:default;}.pf-c-breadcrumb__link.pf-m-current,.pf-c-breadcrumb__link.pf-m-current:hover,.pf-c-breadcrumb__link.pf-m-current.pf-m-hover{color:var(--pf-c-breadcrumb__link--m-current--Color);text-decoration:none;}.pf-c-breadcrumb__heading{font-size:var(--pf-c-breadcrumb__heading--FontSize);}");
});