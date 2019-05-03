"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Wizard", "./WizardContext", "./WizardNav", "./WizardNavItem", "./WizardHeader", "./WizardBody", "./WizardFooter", "./WizardToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Wizard"), require("./WizardContext"), require("./WizardNav"), require("./WizardNavItem"), require("./WizardHeader"), require("./WizardBody"), require("./WizardFooter"), require("./WizardToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Wizard, global.WizardContext, global.WizardNav, global.WizardNavItem, global.WizardHeader, global.WizardBody, global.WizardFooter, global.WizardToggle);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Wizard, _WizardContext, _WizardNav, _WizardNavItem, _WizardHeader, _WizardBody, _WizardFooter, _WizardToggle) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Wizard", {
    enumerable: true,
    get: function () {
      return _Wizard.Wizard;
    }
  });
  Object.defineProperty(exports, "WizardContextConsumer", {
    enumerable: true,
    get: function () {
      return _WizardContext.WizardContextConsumer;
    }
  });
  Object.defineProperty(exports, "WizardNav", {
    enumerable: true,
    get: function () {
      return _WizardNav.WizardNav;
    }
  });
  Object.defineProperty(exports, "WizardNavItem", {
    enumerable: true,
    get: function () {
      return _WizardNavItem.WizardNavItem;
    }
  });
  Object.defineProperty(exports, "WizardHeader", {
    enumerable: true,
    get: function () {
      return _WizardHeader.WizardHeader;
    }
  });
  Object.defineProperty(exports, "WizardBody", {
    enumerable: true,
    get: function () {
      return _WizardBody.WizardBody;
    }
  });
  Object.defineProperty(exports, "WizardFooter", {
    enumerable: true,
    get: function () {
      return _WizardFooter.WizardFooter;
    }
  });
  Object.defineProperty(exports, "WizardToggle", {
    enumerable: true,
    get: function () {
      return _WizardToggle.WizardToggle;
    }
  });
});