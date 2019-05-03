"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./content.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./content.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.content);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-content{--pf-c-content--MarginBottom:var(--pf-global--spacer--md);--pf-c-content--LineHeight:var(--pf-global--LineHeight--md);--pf-c-content--FontSize:var(--pf-global--FontSize--md);--pf-c-content--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-content--Color:var(--pf-global--Color--100);--pf-c-content--h1--MarginTop:var(--pf-global--spacer--lg);--pf-c-content--h1--MarginBottom:var(--pf-global--spacer--sm);--pf-c-content--h1--LineHeight:var(--pf-global--LineHeight--sm);--pf-c-content--h1--FontSize:var(--pf-global--FontSize--2xl);--pf-c-content--h1--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-content--h2--MarginTop:var(--pf-global--spacer--lg);--pf-c-content--h2--MarginBottom:var(--pf-global--spacer--sm);--pf-c-content--h2--LineHeight:var(--pf-global--LineHeight--sm);--pf-c-content--h2--FontSize:var(--pf-global--FontSize--xl);--pf-c-content--h2--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-content--h3--MarginTop:var(--pf-global--spacer--lg);--pf-c-content--h3--MarginBottom:var(--pf-global--spacer--sm);--pf-c-content--h3--LineHeight:var(--pf-global--LineHeight--md);--pf-c-content--h3--FontSize:var(--pf-global--FontSize--lg);--pf-c-content--h3--FontWeight:var(--pf-global--FontWeight--normal);--pf-c-content--h4--MarginTop:var(--pf-global--spacer--lg);--pf-c-content--h4--MarginBottom:var(--pf-global--spacer--sm);--pf-c-content--h4--LineHeight:var(--pf-global--LineHeight--md);--pf-c-content--h4--FontSize:var(--pf-global--FontSize--md);--pf-c-content--h4--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-content--h5--MarginTop:var(--pf-global--spacer--lg);--pf-c-content--h5--MarginBottom:var(--pf-global--spacer--sm);--pf-c-content--h5--LineHeight:var(--pf-global--LineHeight--md);--pf-c-content--h5--FontSize:var(--pf-global--FontSize--md);--pf-c-content--h5--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-content--h6--MarginTop:var(--pf-global--spacer--lg);--pf-c-content--h6--MarginBottom:var(--pf-global--spacer--sm);--pf-c-content--h6--LineHeight:var(--pf-global--LineHeight--md);--pf-c-content--h6--FontSize:var(--pf-global--FontSize--md);--pf-c-content--h6--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-content--small--MarginBottom:var(--pf-global--spacer--md);--pf-c-content--small--LineHeight:var(--pf-global--LineHeight--md);--pf-c-content--small--FontSize:var(--pf-global--FontSize--sm);--pf-c-content--small--Color:var(--pf-global--Color--200);--pf-c-content--small--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-content--a--Color:var(--pf-global--link--Color);--pf-c-content--a--TextDecoration:var(--pf-global--link--TextDecoration);--pf-c-content--a--hover--Color:var(--pf-global--link--Color--hover);--pf-c-content--a--hover--TextDecoration:var(--pf-global--link--TextDecoration--hover);--pf-c-content--blockquote--PaddingTop:var(--pf-global--spacer--md);--pf-c-content--blockquote--PaddingRight:var(--pf-global--spacer--md);--pf-c-content--blockquote--PaddingBottom:var(--pf-global--spacer--md);--pf-c-content--blockquote--PaddingLeft:var(--pf-global--spacer--md);--pf-c-content--blockquote--FontWeight:var(--pf-global--FontWeight--light);--pf-c-content--blockquote--Color:var(--pf-global--Color--200);--pf-c-content--blockquote--BorderLeftColor:var(--pf-global--BorderColor--100);--pf-c-content--blockquote--BorderLeftWidth:var(--pf-global--BorderWidth--lg);--pf-c-content--ol--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-content--ol--MarginTop:var(--pf-global--spacer--md);--pf-c-content--ol--MarginLeft:var(--pf-global--spacer--lg);--pf-c-content--ol--nested--MarginTop:var(--pf-global--spacer--sm);--pf-c-content--ol--nested--MarginLeft:var(--pf-global--spacer--sm);--pf-c-content--ul--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-content--ul--MarginTop:var(--pf-global--spacer--md);--pf-c-content--ul--MarginLeft:var(--pf-global--spacer--lg);--pf-c-content--ul--nested--MarginTop:var(--pf-global--spacer--sm);--pf-c-content--ul--nested--MarginLeft:var(--pf-global--spacer--sm);--pf-c-content--ul--ListStyle:var(--pf-global--ListStyle);--pf-c-content--li--MarginTop:var(--pf-global--spacer--sm);--pf-c-content--dl--ColumnGap:var(--pf-global--spacer--2xl);--pf-c-content--dl--RowGap:var(--pf-global--spacer--md);--pf-c-content--dt--FontWeight:var(--pf-global--FontWeight--semi-bold);--pf-c-content--dt--MarginTop:var(--pf-global--spacer--md);--pf-c-content--dt--sm--MarginTop:0;--pf-c-content--hr--Height:var(--pf-global--BorderWidth--sm);--pf-c-content--hr--BackgroundColor:var(--pf-global--BorderColor--100);font-size:var(--pf-c-content--FontSize);line-height:var(--pf-c-content--LineHeight);color:var(--pf-c-content--Color);}.pf-c-content a{color:var(--pf-c-content--a--Color);text-decoration:var(--pf-c-content--a--TextDecoration);}.pf-c-content a:hover{--pf-c-content--a--Color:var(--pf-c-content--a--hover--Color);--pf-c-content--a--TextDecoration:var(--pf-c-content--a--hover--TextDecoration);}.pf-c-content li + li{margin-top:var(--pf-c-content--li--MarginTop);}.pf-c-content p:not(:last-child),.pf-c-content dl:not(:last-child),.pf-c-content ol:not(:last-child),.pf-c-content ul:not(:last-child),.pf-c-content blockquote:not(:last-child),.pf-c-content small:not(:last-child),.pf-c-content pre:not(:last-child),.pf-c-content table:not(:last-child),.pf-c-content hr:not(:last-child){margin-bottom:var(--pf-c-content--MarginBottom);}.pf-c-content h1,.pf-c-content h2,.pf-c-content h3,.pf-c-content h4,.pf-c-content h5,.pf-c-content h6,.pf-c-content ol,.pf-c-content ul{margin:0;}.pf-c-content h1{margin-bottom:var(--pf-c-content--h1--MarginBottom);font-size:var(--pf-c-content--h1--FontSize);font-weight:var(--pf-c-content--h1--FontWeight);line-height:var(--pf-c-content--h1--LineHeight);}.pf-c-content h1:not(:first-child){margin-top:var(--pf-c-content--h1--MarginTop);}.pf-c-content h2{margin-bottom:var(--pf-c-content--h2--MarginBottom);font-size:var(--pf-c-content--h2--FontSize);font-weight:var(--pf-c-content--h2--FontWeight);line-height:var(--pf-c-content--h2--LineHeight);}.pf-c-content h2:not(:first-child){margin-top:var(--pf-c-content--h2--MarginTop);}.pf-c-content h3{margin-bottom:var(--pf-c-content--h3--MarginBottom);font-size:var(--pf-c-content--h3--FontSize);font-weight:var(--pf-c-content--h3--FontWeight);line-height:var(--pf-c-content--h3--LineHeight);}.pf-c-content h3:not(:first-child){margin-top:var(--pf-c-content--h3--MarginTop);}.pf-c-content h4{margin-bottom:var(--pf-c-content--h4--MarginBottom);font-size:var(--pf-c-content--h4--FontSize);font-weight:var(--pf-c-content--h4--FontWeight);line-height:var(--pf-c-content--h4--LineHeight);}.pf-c-content h4:not(:first-child){margin-top:var(--pf-c-content--h4--MarginTop);}.pf-c-content h5{margin-bottom:var(--pf-c-content--h5--MarginBottom);font-size:var(--pf-c-content--h5--FontSize);font-weight:var(--pf-c-content--h5--FontWeight);line-height:var(--pf-c-content--h5--LineHeight);}.pf-c-content h5:not(:first-child){margin-top:var(--pf-c-content--h5--MarginTop);}.pf-c-content h6{margin-bottom:var(--pf-c-content--h6--MarginBottom);font-size:var(--pf-c-content--h6--FontSize);font-weight:var(--pf-c-content--h6--FontWeight);line-height:var(--pf-c-content--h6--LineHeight);}.pf-c-content h6:not(:first-child){margin-top:var(--pf-c-content--h6--MarginTop);}.pf-c-content small{display:block;margin-bottom:var(--pf-c-content--small--MarginBottom);font-size:var(--pf-c-content--small--FontSize);line-height:var(--pf-c-content--small--LineHeight);color:var(--pf-c-content--small--Color);}.pf-c-content blockquote{padding:var(--pf-c-content--blockquote--PaddingTop) var(--pf-c-content--blockquote--PaddingRight) var(--pf-c-content--blockquote--PaddingBottom) var(--pf-c-content--blockquote--PaddingLeft);font-weight:var(--pf-c-content--blockquote--FontWeight);color:var(--pf-c-content--blockquote--Color);border-left:var(--pf-c-content--blockquote--BorderLeftWidth) solid var(--pf-c-content--blockquote--BorderLeftColor);}.pf-c-content hr{height:var(--pf-c-content--hr--Height);background-color:var(--pf-c-content--hr--BackgroundColor);border:none;}.pf-c-content ol{padding-left:var(--pf-c-content--ol--PaddingLeft);margin-top:var(--pf-c-content--ol--MarginTop);margin-left:var(--pf-c-content--ol--MarginLeft);}.pf-c-content ol ul{--pf-c-content--ul--MarginTop:var(--pf-c-content--ul--nested--MarginTop);--pf-c-content--ul--MarginLeft:var(--pf-c-content--ul--nested--MarginLeft);}.pf-c-content ol ol{--pf-c-content--ol--MarginTop:var(--pf-c-content--ol--nested--MarginTop);--pf-c-content--ol--MarginLeft:var(--pf-c-content--ol--nested--MarginLeft);}.pf-c-content ul{padding-left:var(--pf-c-content--ul--PaddingLeft);margin-top:var(--pf-c-content--ul--MarginTop);margin-left:var(--pf-c-content--ul--MarginLeft);list-style:var(--pf-c-content--ul--ListStyle);}.pf-c-content ul ul{--pf-c-content--ul--MarginTop:var(--pf-c-content--ul--nested--MarginTop);--pf-c-content--ul--MarginLeft:var(--pf-c-content--ul--nested--MarginLeft);}.pf-c-content ul ol{--pf-c-content--ol--MarginTop:var(--pf-c-content--ol--nested--MarginTop);--pf-c-content--ol--MarginLeft:var(--pf-c-content--ol--nested--MarginLeft);}.pf-c-content dl{display:grid;grid-template-columns:1fr;}@media screen and (min-width: 576px){.pf-c-content dl{grid-template:auto / auto 1fr;grid-column-gap:var(--pf-c-content--dl--ColumnGap);grid-row-gap:var(--pf-c-content--dl--RowGap);}}.pf-c-content dt{font-weight:var(--pf-c-content--dt--FontWeight);}.pf-c-content dt:not(:first-child){margin-top:var(--pf-c-content--dt--MarginTop);}@media screen and (min-width: 576px){.pf-c-content dt:not(:first-child){--pf-c-content--dt--MarginTop:var(--pf-c-content--dt--sm--MarginTop);}}@media screen and (min-width: 576px){.pf-c-content dt{grid-column:1;}}@media screen and (min-width: 576px){.pf-c-content dd{grid-column:2;}}");
});