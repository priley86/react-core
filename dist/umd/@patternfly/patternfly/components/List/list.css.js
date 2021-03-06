"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./list.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./list.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.list);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-list{--pf-c-list--PaddingLeft:var(--pf-global--spacer--lg);--pf-c-list--nested--MarginTop:var(--pf-global--spacer--sm);--pf-c-list--nested--MarginLeft:var(--pf-global--spacer--sm);--pf-c-list--ul--ListStyle:var(--pf-global--ListStyle);--pf-c-list--li--MarginTop:var(--pf-global--spacer--sm);--pf-c-list--m-inline--li--MarginRight:var(--pf-global--spacer--lg);padding-left:var(--pf-c-list--PaddingLeft);}.pf-c-list ol,.pf-c-list ul{margin-top:var(--pf-c-list--nested--MarginTop);margin-left:var(--pf-c-list--nested--MarginLeft);}.pf-c-list li + li{margin-top:var(--pf-c-list--li--MarginTop);}ul.pf-c-list:not(.pf-m-inline){list-style:var(--pf-c-list--ul--ListStyle);}.pf-c-list.pf-m-inline{--pf-c-list--PaddingLeft:0;display:flex;flex-wrap:wrap;}.pf-c-list.pf-m-inline li{--pf-c-list--li--MarginTop:0;}.pf-c-list.pf-m-inline li:not(:last-child){margin-right:var(--pf-c-list--m-inline--li--MarginRight);}");
});