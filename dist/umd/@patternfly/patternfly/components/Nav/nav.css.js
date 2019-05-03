"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./nav.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./nav.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.nav);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-nav{--pf-c-nav--Width:18.125rem;--pf-c-nav--Transition:var(--pf-global--Transition);--pf-c-nav__list-link--PaddingTop:var(--pf-global--spacer--md);--pf-c-nav__list-link--PaddingRight:var(--pf-global--spacer--md);--pf-c-nav__list-link--md--PaddingRight:var(--pf-global--spacer--lg);--pf-c-nav__list-link--PaddingBottom:var(--pf-global--spacer--sm);--pf-c-nav__list-link--PaddingLeft:var(--pf-global--spacer--md);--pf-c-nav__list-link--md--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-nav__list-link--after--Width:3.125rem;--pf-c-nav__list-link--after--Height:0.1875rem;--pf-c-nav__list-link--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-nav__list-link--active--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-nav__list-link--focus--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-nav__list-link--Color:var(--pf-global--Color--dark-100);--pf-c-nav__list-link--hover--Color:var(--pf-global--link--Color);--pf-c-nav__list-link--active--Color:var(--pf-global--link--Color);--pf-c-nav__list-link--focus--Color:var(--pf-global--link--Color);--pf-c-nav__list-link--after--Left:var(--pf-c-nav__list-link--PaddingLeft);--pf-c-nav__list-link--after--md--Left:var(--pf-c-nav__list-link--md--PaddingLeft);--pf-c-nav__list-link--hover--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__list-link--active--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__list-link--focus--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__simple-list-link--PaddingTop:var(--pf-global--spacer--sm);--pf-c-nav__simple-list-link--PaddingRight:var(--pf-global--spacer--lg);--pf-c-nav__simple-list-link--PaddingBottom:var(--pf-global--spacer--sm);--pf-c-nav__simple-list-link--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-nav__simple-list-link--nested--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-nav__simple-list-link--nested--md--PaddingLeft:calc(var(--pf-global--spacer--lg) + var(--pf-global--spacer--md));--pf-c-nav__simple-list-link--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-nav__simple-list-link--active--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-nav__simple-list-link--focus--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-nav__simple-list-link--Color:var(--pf-global--Color--dark-100);--pf-c-nav__simple-list-link--hover--Color:var(--pf-global--link--Color);--pf-c-nav__simple-list-link--active--Color:var(--pf-global--link--Color);--pf-c-nav__simple-list-link--focus--Color:var(--pf-global--link--Color);--pf-c-nav__simple-list-link--hover--BackgroundColor:var(--pf-global--BackgroundColor--150);--pf-c-nav__simple-list-link--active--BackgroundColor:var(--pf-global--BackgroundColor--150);--pf-c-nav__simple-list-link--focus--BackgroundColor:var(--pf-global--BackgroundColor--150);--pf-c-nav__horizontal-list-item--MarginRight:var(--pf-global--spacer--xl);--pf-c-nav__horizontal-list-link--PaddingTop:var(--pf-global--spacer--md);--pf-c-nav__horizontal-list-link--PaddingBottom:var(--pf-global--spacer--sm);--pf-c-nav__horizontal-list-link--lg--PaddingBottom:var(--pf-global--spacer--lg);--pf-c-nav__horizontal-list-link--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-nav__horizontal-list-link--active--FontWeight:var(--pf-global--FontWeight--bold);--pf-c-nav__horizontal-list-link--focus--FontWeight:var(--pf-global--FontWeight--bold);--pf-c-nav__horizontal-list-link--Color:#d2d2d2;--pf-c-nav__horizontal-list-link--hover--Color:var(--pf-global--link--Color);--pf-c-nav__horizontal-list-link--active--Color:var(--pf-global--link--Color);--pf-c-nav__horizontal-list-link--focus--Color:var(--pf-global--link--Color);--pf-c-nav__horizontal-list-link--after--Height:0.1875rem;--pf-c-nav__horizontal-list-link--hover--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__horizontal-list-link--active--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__horizontal-list-link--focus--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__tertiary-list-item--MarginRight:var(--pf-global--spacer--xl);--pf-c-nav__tertiary-list-link--PaddingTop:var(--pf-global--spacer--md);--pf-c-nav__tertiary-list-link--PaddingBottom:var(--pf-global--spacer--sm);--pf-c-nav__tertiary-list-link--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-nav__tertiary-list-link--active--FontWeight:var(--pf-global--FontWeight--bold);--pf-c-nav__tertiary-list-link--focus--FontWeight:var(--pf-global--FontWeight--bold);--pf-c-nav__tertiary-list-link--Color:var(--pf-global--Color--dark-100);--pf-c-nav__tertiary-list-link--hover--Color:var(--pf-global--link--Color);--pf-c-nav__tertiary-list-link--active--Color:var(--pf-global--link--Color);--pf-c-nav__tertiary-list-link--focus--Color:var(--pf-global--link--Color);--pf-c-nav__tertiary-list-link--after--Height:0.1875rem;--pf-c-nav__tertiary-list-link--hover--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__tertiary-list-link--active--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__tertiary-list-link--focus--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__subnav--MarginTop:var(--pf-global--spacer--sm);--pf-c-nav__subnav--MaxHeight:37.5rem;--pf-c-nav__list-toggle--PaddingRight:var(--pf-global--spacer--sm);--pf-c-nav__list-toggle--PaddingLeft:var(--pf-global--spacer--sm);--pf-c-nav__list-toggle--FontSize:1rem;--pf-c-nav__list-toggle--Transition:.1s ease-in-out;--pf-c-nav__section--MarginTop:var(--pf-global--spacer--sm);--pf-c-nav__section__section--MarginTop:var(--pf-global--spacer--xl);--pf-c-nav__section-title--PaddingTop:var(--pf-global--spacer--sm);--pf-c-nav__section-title--PaddingRight:var(--pf-global--spacer--lg);--pf-c-nav__section-title--PaddingBottom:var(--pf-global--spacer--sm);--pf-c-nav__section-title--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-nav__section-title--FontSize:var(--pf-global--FontSize--sm);--pf-c-nav__section-title--Color:var(--pf-global--Color--dark-200);--pf-c-nav__section-title--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-nav__list-link--m-current--Color:var(--pf-global--link--Color);--pf-c-nav__list-link--m-current--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-nav__list-link--m-current--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__simple-list-link--m-current--Color:var(--pf-global--link--Color);--pf-c-nav__simple-list-link--m-current--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-nav__simple-list-link--m-current--BackgroundColor:var(--pf-global--BackgroundColor--150);--pf-c-nav__separator--Height:var(--pf-global--BorderWidth--sm);--pf-c-nav__separator--BackgroundColor:var(--pf-global--BorderColor--100);--pf-c-nav__separator--MarginTop:var(--pf-global--spacer--sm);--pf-c-nav__separator--MarginBottom:var(--pf-global--spacer--sm);--pf-c-nav__separator--MarginLeft:var(--pf-c-nav__list-link--PaddingLeft);--pf-c-nav__simple-list__separator--MarginLeft:var(--pf-c-nav__simple-list-link--PaddingLeft);--pf-c-nav__simple-list--nested__separator--MarginLeft:var(--pf-c-nav__simple-list-link--nested--PaddingLeft);--pf-c-nav__horizontal-list-link--m-current--Color:var(--pf-global--link--Color);--pf-c-nav__horizontal-list-link--m-current--FontWeight:var(--pf-global--FontWeight--bold);--pf-c-nav__horizontal-list-link--m-current--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__tertiary-list-link--m-current--Color:var(--pf-global--link--Color);--pf-c-nav__tertiary-list-link--m-current--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-nav__tertiary-list-link--m-current--after--BackgroundColor:var(--pf-global--link--Color);--pf-c-nav__scroll-button--Top:var(--pf-global--spacer--sm);--pf-c-nav__scroll-button--ZIndex:var(--pf-global--ZIndex--md);--pf-c-nav__scroll-button--Width:var(--pf-global--spacer--xl);--pf-c-nav__scroll-button--Height:2.5rem;--pf-c-nav__scroll-button--PaddingRight:var(--pf-global--spacer--sm);--pf-c-nav__scroll-button--PaddingLeft:var(--pf-global--spacer--sm);--pf-c-nav__scroll-button--BackgroundColor:var(--pf-global--BackgroundColor--100);--pf-c-nav__scroll-button--hover--Color:var(--pf-global--link--Color);--pf-c-nav__scroll-button--nth-of-type-1--BoxShadow:20px 0 10px -4px rgba(255, 255, 255, .7);--pf-c-nav__scroll-button--nth-of-type-2--BoxShadow:-20px 0 10px -4px rgba(255, 255, 255, .7);--pf-c-nav__scroll-button--m-dark--nth-of-type-1--BoxShadow:20px 0 10px -4px rgba(21, 21, 21, .7);--pf-c-nav__scroll-button--m-dark--nth-of-type-2--BoxShadow:-20px 0 10px -4px rgba(21, 21, 21, .7);position:relative;}@media screen and (min-width: 768px){.pf-c-nav{--pf-c-nav__list-link--PaddingRight:var(--pf-c-nav__list-link--md--PaddingRight);--pf-c-nav__list-link--PaddingLeft:var(--pf-c-nav__list-link--md--PaddingLeft);}}@media screen and (min-width: 768px){.pf-c-nav{--pf-c-nav__list-link--after--Left:var(--pf-c-nav__list-link--after--md--Left);}}@media screen and (min-width: 768px){.pf-c-nav{--pf-c-nav__simple-list-link--nested--PaddingLeft:var(--pf-c-nav__simple-list-link--nested--md--PaddingLeft);}}@media screen and (min-width: 992px){.pf-c-nav{--pf-c-nav__horizontal-list-link--PaddingBottom:var(--pf-c-nav__horizontal-list-link--lg--PaddingBottom);}}.pf-c-nav .pf-c-nav__scroll-button{display:none;visibility:hidden;}.pf-c-nav [class*=\"list\"] [class*=\"link\"],.pf-c-nav [class*=\"list\"] [class*=\"link\"]:hover,.pf-c-nav [class*=\"list\"] [class*=\"link\"]:focus,.pf-c-nav [class*=\"list\"] [class*=\"link\"]:active{text-decoration:none;}.pf-c-nav.pf-m-start .pf-c-nav__scroll-button:nth-of-type(1){display:block;visibility:visible;}.pf-c-nav.pf-m-end .pf-c-nav__scroll-button:nth-of-type(2){display:block;visibility:visible;}@media screen and (min-width: 768px){.pf-c-page__sidebar .pf-c-nav{width:var(--pf-c-nav--Width);}}.pf-c-page__header-nav .pf-c-nav__scroll-button{background-color:var(--pf-global--BackgroundColor--100);}.pf-c-page__header-nav .pf-c-nav__scroll-button:nth-of-type(1){box-shadow:var(--pf-c-nav__scroll-button--m-dark--nth-of-type-1--BoxShadow);}.pf-c-page__header-nav .pf-c-nav__scroll-button:nth-of-type(2){box-shadow:var(--pf-c-nav__scroll-button--m-dark--nth-of-type-2--BoxShadow);}.pf-c-nav__list > .pf-c-nav__item{position:relative;}.pf-c-nav__list > .pf-c-nav__item > .pf-c-nav__link::after{position:absolute;bottom:0;left:var(--pf-c-nav__list-link--after--Left);width:var(--pf-c-nav__list-link--after--Width);height:var(--pf-c-nav__list-link--after--Height);content:\"\";}.pf-c-nav__list .pf-c-nav__link{position:relative;display:flex;align-items:baseline;padding:var(--pf-c-nav__list-link--PaddingTop) var(--pf-c-nav__list-link--PaddingRight) var(--pf-c-nav__list-link--PaddingBottom) var(--pf-c-nav__list-link--PaddingLeft);font-weight:var(--pf-c-nav__list-link--FontWeight);color:var(--pf-c-nav__list-link--Color);}.pf-c-nav__list .pf-c-nav__link.pf-m-hover,.pf-c-nav__list .pf-c-nav__link:hover{--pf-c-nav__list-link--Color:var(--pf-c-nav__list-link--hover--Color);}.pf-c-nav__list .pf-c-nav__link.pf-m-hover::after,.pf-c-nav__list .pf-c-nav__link:hover::after{background-color:var(--pf-c-nav__list-link--hover--after--BackgroundColor);}.pf-c-nav__list .pf-c-nav__link.pf-m-active,.pf-c-nav__list .pf-c-nav__link:active{--pf-c-nav__list-link--FontWeight:var(--pf-c-nav__list-link--active--FontWeight);--pf-c-nav__list-link--Color:var(--pf-c-nav__list-link--active--Color);}.pf-c-nav__list .pf-c-nav__link.pf-m-active::after,.pf-c-nav__list .pf-c-nav__link:active::after{background-color:var(--pf-c-nav__list-link--active--after--BackgroundColor);}.pf-c-nav__list .pf-c-nav__link.pf-m-focus,.pf-c-nav__list .pf-c-nav__link:focus{--pf-c-nav__list-link--FontWeight:var(--pf-c-nav__list-link--focus--FontWeight);--pf-c-nav__list-link--Color:var(--pf-c-nav__list-link--focus--Color);}.pf-c-nav__list .pf-c-nav__link.pf-m-focus::after,.pf-c-nav__list .pf-c-nav__link:focus::after{background-color:var(--pf-c-nav__list-link--focus--after--BackgroundColor);}.pf-c-nav__list .pf-m-current.pf-c-nav__link,.pf-c-nav__list .pf-m-current > .pf-c-nav__link{--pf-c-nav__list-link--FontWeight:var(--pf-c-nav__list-link--m-current--FontWeight);--pf-c-nav__list-link--Color:var(--pf-c-nav__list-link--m-current--Color);}.pf-c-nav__list .pf-m-current.pf-c-nav__link::after,.pf-c-nav__list .pf-m-current > .pf-c-nav__link::after{background-color:var(--pf-c-nav__list-link--m-current--after--BackgroundColor);}.pf-c-nav__separator{height:var(--pf-c-nav__separator--Height);margin-top:var(--pf-c-nav__separator--MarginTop);margin-bottom:var(--pf-c-nav__separator--MarginBottom);margin-left:var(--pf-c-nav__separator--MarginLeft);background-color:var(--pf-c-nav__separator--BackgroundColor);}.pf-c-nav__simple-list .pf-c-nav__separator{--pf-c-nav__separator--MarginLeft:var(--pf-c-nav__simple-list__separator--MarginLeft);}.pf-c-nav__item .pf-c-nav__separator{--pf-c-nav__separator--MarginLeft:var(--pf-c-nav__simple-list--nested__separator--MarginLeft);}.pf-c-nav__toggle{flex:none;padding-right:var(--pf-c-nav__list-toggle--PaddingRight);padding-left:var(--pf-c-nav__list-toggle--PaddingLeft);margin-left:auto;font-size:var(--pf-c-nav__list-toggle--FontSize);line-height:1;pointer-events:none;border:0;}.pf-c-nav__toggle > *{transition:var(--pf-c-nav__list-toggle--Transition);}.pf-c-nav__item.pf-m-expanded .pf-c-nav__toggle > *{transform:rotate(90deg);}.pf-c-nav__simple-list .pf-c-nav__link{display:block;padding:var(--pf-c-nav__simple-list-link--PaddingTop) var(--pf-c-nav__simple-list-link--PaddingRight) var(--pf-c-nav__simple-list-link--PaddingBottom) var(--pf-c-nav__simple-list-link--PaddingLeft);font-weight:var(--pf-c-nav__simple-list-link--FontWeight);color:var(--pf-c-nav__simple-list-link--Color);}.pf-c-nav__simple-list .pf-c-nav__link.pf-m-hover,.pf-c-nav__simple-list .pf-c-nav__link:hover{--pf-c-nav__simple-list-link--Color:var(--pf-c-nav__simple-list-link--hover--Color);background-color:var(--pf-c-nav__simple-list-link--hover--BackgroundColor);}.pf-c-nav__simple-list .pf-c-nav__link.pf-m-focus,.pf-c-nav__simple-list .pf-c-nav__link:focus{--pf-c-nav__simple-list-link--FontWeight:var(--pf-c-nav__simple-list-link--focus--FontWeight);--pf-c-nav__simple-list-link--Color:var(--pf-c-nav__simple-list-link--focus--Color);background-color:var(--pf-c-nav__simple-list-link--focus--BackgroundColor);}.pf-c-nav__simple-list .pf-c-nav__link.pf-m-active,.pf-c-nav__simple-list .pf-c-nav__link:active{--pf-c-nav__simple-list-link--FontWeight:var(--pf-c-nav__simple-list-link--active--FontWeight);--pf-c-nav__simple-list-link--Color:var(--pf-c-nav__simple-list-link--active--Color);background-color:var(--pf-c-nav__simple-list-link--active--BackgroundColor);}.pf-c-nav__simple-list .pf-c-nav__link.pf-m-current{--pf-c-nav__simple-list-link--FontWeight:var(--pf-c-nav__simple-list-link--m-current--FontWeight);--pf-c-nav__simple-list-link--Color:var(--pf-c-nav__simple-list-link--m-current--Color);background-color:var(--pf-c-nav__simple-list-link--m-current--BackgroundColor);}.pf-c-nav__item .pf-c-nav__simple-list .pf-c-nav__link{--pf-c-nav__simple-list-link--PaddingLeft:var(--pf-c-nav__simple-list-link--nested--PaddingLeft);}.pf-c-nav__horizontal-list,.pf-c-nav__tertiary-list{scrollbar-width:none;-ms-overflow-style:-ms-autohiding-scrollbar;display:inline-flex;max-width:100%;overflow-x:auto;}.pf-c-nav__horizontal-list::-webkit-scrollbar,.pf-c-nav__tertiary-list::-webkit-scrollbar{display:none;}.pf-c-nav__horizontal-list .pf-c-nav__link,.pf-c-nav__tertiary-list .pf-c-nav__link{position:relative;display:inline-block;}.pf-c-nav__horizontal-list .pf-c-nav__item{margin-right:var(--pf-c-nav__horizontal-list-item--MarginRight);}.pf-c-nav__horizontal-list .pf-c-nav__link{padding-top:var(--pf-c-nav__horizontal-list-link--PaddingTop);padding-bottom:var(--pf-c-nav__horizontal-list-link--PaddingBottom);font-weight:var(--pf-c-nav__horizontal-list-link--FontWeight);color:var(--pf-c-nav__horizontal-list-link--Color);white-space:nowrap;}.pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-hover,.pf-c-nav__horizontal-list .pf-c-nav__link:hover{--pf-c-nav__horizontal-list-link--Color:var(--pf-c-nav__horizontal-list-link--hover--Color);}.pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-hover::after,.pf-c-nav__horizontal-list .pf-c-nav__link:hover::after{background-color:var(--pf-c-nav__horizontal-list-link--hover--after--BackgroundColor);}.pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-focus,.pf-c-nav__horizontal-list .pf-c-nav__link:focus{--pf-c-nav__horizontal-list-link--FontWeight:var(--pf-c-nav__horizontal-list-link--focus--FontWeight);--pf-c-nav__horizontal-list-link--Color:var(--pf-c-nav__horizontal-list-link--focus--Color);}.pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-focus::after,.pf-c-nav__horizontal-list .pf-c-nav__link:focus::after{background-color:var(--pf-c-nav__horizontal-list-link--focus--after--BackgroundColor);}.pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-active,.pf-c-nav__horizontal-list .pf-c-nav__link:active{--pf-c-nav__horizontal-list-link--FontWeight:var(--pf-c-nav__horizontal-list-link--active--FontWeight);--pf-c-nav__horizontal-list-link--Color:var(--pf-c-nav__horizontal-list-link--active--Color);}.pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-active::after,.pf-c-nav__horizontal-list .pf-c-nav__link:active::after{background-color:var(--pf-c-nav__horizontal-list-link--active--after--BackgroundColor);}.pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-current{--pf-c-nav__horizontal-list-link--FontWeight:var(--pf-c-nav__horizontal-list-link--m-current--FontWeight);--pf-c-nav__horizontal-list-link--Color:var(--pf-c-nav__horizontal-list-link--m-current--Color);}.pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-current::after{background-color:var(--pf-c-nav__horizontal-list-link--m-current--after--BackgroundColor);}.pf-c-nav__horizontal-list .pf-c-nav__link::after{position:absolute;bottom:0;left:0;display:block;width:100%;height:var(--pf-c-nav__horizontal-list-link--after--Height);content:\"\";}.pf-c-nav__tertiary-list .pf-c-nav__item{margin-right:var(--pf-c-nav__tertiary-list-item--MarginRight);}.pf-c-nav__tertiary-list .pf-c-nav__link{padding-top:var(--pf-c-nav__tertiary-list-link--PaddingTop);padding-bottom:var(--pf-c-nav__tertiary-list-link--PaddingBottom);font-weight:var(--pf-c-nav__tertiary-list-link--FontWeight);color:var(--pf-c-nav__tertiary-list-link--Color);white-space:nowrap;}.pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-hover,.pf-c-nav__tertiary-list .pf-c-nav__link:hover{--pf-c-nav__tertiary-list-link--Color:var(--pf-c-nav__tertiary-list-link--hover--Color);}.pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-hover::after,.pf-c-nav__tertiary-list .pf-c-nav__link:hover::after{background-color:var(--pf-c-nav__tertiary-list-link--hover--after--BackgroundColor);}.pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-focus,.pf-c-nav__tertiary-list .pf-c-nav__link:focus{--pf-c-nav__tertiary-list-link--FontWeight:var(--pf-c-nav__tertiary-list-link--focus--FontWeight);--pf-c-nav__tertiary-list-link--Color:var(--pf-c-nav__tertiary-list-link--focus--Color);}.pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-focus::after,.pf-c-nav__tertiary-list .pf-c-nav__link:focus::after{background-color:var(--pf-c-nav__tertiary-list-link--focus--after--BackgroundColor);}.pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-active,.pf-c-nav__tertiary-list .pf-c-nav__link:active{--pf-c-nav__tertiary-list-link--FontWeight:var(--pf-c-nav__tertiary-list-link--active--FontWeight);--pf-c-nav__tertiary-list-link--Color:var(--pf-c-nav__tertiary-list-link--active--Color);}.pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-active::after,.pf-c-nav__tertiary-list .pf-c-nav__link:active::after{background-color:var(--pf-c-nav__tertiary-list-link--active--after--BackgroundColor);}.pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-current{--pf-c-nav__tertiary-list-link--FontWeight:var(--pf-c-nav__tertiary-list-link--m-current--FontWeight);--pf-c-nav__tertiary-list-link--Color:var(--pf-c-nav__tertiary-list-link--m-current--Color);}.pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-current::after{background-color:var(--pf-c-nav__tertiary-list-link--m-current--after--BackgroundColor);}.pf-c-nav__tertiary-list .pf-c-nav__link::after{position:absolute;bottom:0;left:0;display:block;width:100%;height:var(--pf-c-nav__tertiary-list-link--after--Height);content:\"\";}.pf-c-nav__subnav{flex:1 0 100%;max-height:0;margin-top:0;overflow:hidden;opacity:0;transition:var(--pf-c-nav--Transition);}.pf-c-nav__subnav::-webkit-scrollbar{display:none;visibility:hidden;}.pf-c-nav__item.pf-m-expanded .pf-c-nav__subnav{max-height:var(--pf-c-nav__subnav--MaxHeight);margin-top:var(--pf-c-nav__subnav--MarginTop);overflow-y:auto;opacity:1;}.pf-c-nav__section{margin-top:var(--pf-c-nav__section--MarginTop);}.pf-c-nav__section + .pf-c-nav__section{--pf-c-nav__section--MarginTop:var(--pf-c-nav__section__section--MarginTop);}.pf-c-nav__section-title{padding:var(--pf-c-nav__section-title--PaddingTop) var(--pf-c-nav__section-title--PaddingRight) var(--pf-c-nav__section-title--PaddingBottom) var(--pf-c-nav__section-title--PaddingLeft);font-size:var(--pf-c-nav__section-title--FontSize);font-weight:var(--pf-c-nav__section-title--FontWeight);color:var(--pf-c-nav__section-title--Color);}.pf-c-nav__scroll-button{position:absolute;top:var(--pf-c-nav__scroll-button--Top);bottom:0;z-index:var(--pf-c-nav__scroll-button--ZIndex);width:var(--pf-c-nav__scroll-button--Width);height:var(--pf-c-nav__scroll-button--Height);padding-right:var(--pf-c-nav__scroll-button--PaddingRight);padding-left:var(--pf-c-nav__scroll-button--PaddingLeft);background-color:var(--pf-c-nav__scroll-button--BackgroundColor);border:0;}.pf-c-nav__scroll-button.pf-m-hover,.pf-c-nav__scroll-button:hover,.pf-c-nav__scroll-button.pf-m-active,.pf-c-nav__scroll-button:active,.pf-c-nav__scroll-button.pf-m-focus,.pf-c-nav__scroll-button:focus{color:var(--pf-c-nav__scroll-button--hover--Color);}.pf-c-nav__scroll-button:nth-of-type(1){left:0;box-shadow:var(--pf-c-nav__scroll-button--nth-of-type-1--BoxShadow);}.pf-c-nav__scroll-button:nth-of-type(2){right:0;box-shadow:var(--pf-c-nav__scroll-button--nth-of-type-2--BoxShadow);}");
});