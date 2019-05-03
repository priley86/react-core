"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "./background-image.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("./background-image.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.backgroundImage);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = _reactStyles.StyleSheet.parse(".pf-c-background-image{--pf-c-background-image--BackgroundColor:var(--pf-global--BackgroundColor--dark-100);--pf-c-background-image--BackgroundImage:url(\"../../assets/images/pfbg_576.jpg\");--pf-c-background-image--BackgroundImage-2x:url(\"../../assets/images/pfbg_576@2x.jpg\");--pf-c-background-image--BackgroundImage--sm:url(\"../../assets/images/pfbg_768.jpg\");--pf-c-background-image--BackgroundImage--sm-2x:url(\"../../assets/images/pfbg_768@2x.jpg\");--pf-c-background-image--BackgroundImage--lg:url(\"../../assets/images/pfbg_2000.jpg\");--pf-c-background-image--Filter:url(\"#image_overlay\");}.pf-c-background-image::before{position:fixed;top:0;left:0;z-index:-1;width:100%;height:100%;content:\"\";background-color:var(--pf-c-background-image--BackgroundColor);background-image:var(--pf-c-background-image--BackgroundImage);filter:var(--pf-c-background-image--Filter);background-repeat:no-repeat;background-size:cover;}@media (max-width: 576px) and (-webkit-min-device-pixel-ratio: 2), (max-width: 576px) and (min-resolution: 192dpi){.pf-c-background-image::before{--pf-c-background-image--BackgroundImage:var(--pf-c-background-image--BackgroundImage-2x);}}@media (min-width: 576px){.pf-c-background-image::before{--pf-c-background-image--BackgroundImage:var(--pf-c-background-image--BackgroundImage--sm);}}@media (min-width: 576px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 576px) and (min-resolution: 192dpi){.pf-c-background-image::before{--pf-c-background-image--BackgroundImage:var(--pf-c-background-image--BackgroundImage--sm-2x);}}@media (min-width: 992px){.pf-c-background-image::before{--pf-c-background-image--BackgroundImage:var(--pf-c-background-image--BackgroundImage--lg);}}.pf-c-background-image__filter{display:block;}");
});