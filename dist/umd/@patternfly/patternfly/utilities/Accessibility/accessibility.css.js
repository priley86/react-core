"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./accessibility.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./accessibility.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.accessibility);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-u-screen-reader{position:fixed;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}.pf-u-visible{position:static;overflow:visible;clip:auto;white-space:normal;border:inherit;}.pf-u-hidden{display:none !important;}@media screen and (min-width: 576px){.pf-u-screen-reader-on-sm{position:fixed;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}}@media screen and (min-width: 576px){.pf-u-visible-on-sm{position:static;overflow:visible;clip:auto;white-space:normal;border:inherit;}}@media screen and (min-width: 576px){.pf-u-hidden-on-sm{display:none !important;}}@media screen and (min-width: 768px){.pf-u-screen-reader-on-md{position:fixed;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}}@media screen and (min-width: 768px){.pf-u-visible-on-md{position:static;overflow:visible;clip:auto;white-space:normal;border:inherit;}}@media screen and (min-width: 768px){.pf-u-hidden-on-md{display:none !important;}}@media screen and (min-width: 992px){.pf-u-screen-reader-on-lg{position:fixed;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}}@media screen and (min-width: 992px){.pf-u-visible-on-lg{position:static;overflow:visible;clip:auto;white-space:normal;border:inherit;}}@media screen and (min-width: 992px){.pf-u-hidden-on-lg{display:none !important;}}@media screen and (min-width: 1200px){.pf-u-screen-reader-on-xl{position:fixed;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}}@media screen and (min-width: 1200px){.pf-u-visible-on-xl{position:static;overflow:visible;clip:auto;white-space:normal;border:inherit;}}@media screen and (min-width: 1200px){.pf-u-hidden-on-xl{display:none !important;}}");
});