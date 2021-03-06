"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./gallery.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./gallery.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.gallery);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-l-gallery{--pf-l-gallery--m-gutter--GridGap:var(--pf-global--gutter);--pf-l-gallery--GridTemplateColumns:repeat(auto-fill, minmax(250px, 1fr));--pf-l-gallery--GridTemplateRows:auto;display:grid;grid-template-columns:var(--pf-l-gallery--GridTemplateColumns);grid-template-rows:var(--pf-l-gallery--GridTemplateRows);}.pf-l-gallery.pf-m-gutter{grid-gap:var(--pf-l-gallery--m-gutter--GridGap);}");
});