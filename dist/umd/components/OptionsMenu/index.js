"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./OptionsMenu", "./OptionsMenuItem", "./OptionsMenuItemGroup", "./OptionsMenuSeparator", "./OptionsMenuToggle", "./OptionsMenuToggleWithText", "./optionsMenuConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./OptionsMenu"), require("./OptionsMenuItem"), require("./OptionsMenuItemGroup"), require("./OptionsMenuSeparator"), require("./OptionsMenuToggle"), require("./OptionsMenuToggleWithText"), require("./optionsMenuConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.OptionsMenu, global.OptionsMenuItem, global.OptionsMenuItemGroup, global.OptionsMenuSeparator, global.OptionsMenuToggle, global.OptionsMenuToggleWithText, global.optionsMenuConstants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _OptionsMenu, _OptionsMenuItem, _OptionsMenuItemGroup, _OptionsMenuSeparator, _OptionsMenuToggle, _OptionsMenuToggleWithText, _optionsMenuConstants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "OptionsMenu", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_OptionsMenu).default;
    }
  });
  Object.defineProperty(exports, "OptionsMenuItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_OptionsMenuItem).default;
    }
  });
  Object.defineProperty(exports, "OptionsMenuItemGroup", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_OptionsMenuItemGroup).default;
    }
  });
  Object.defineProperty(exports, "OptionsMenuSeparator", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_OptionsMenuSeparator).default;
    }
  });
  Object.defineProperty(exports, "OptionsMenuToggle", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_OptionsMenuToggle).default;
    }
  });
  Object.defineProperty(exports, "OptionsMenuToggleWithText", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_OptionsMenuToggleWithText).default;
    }
  });
  Object.defineProperty(exports, "OptionsMenuDirection", {
    enumerable: true,
    get: function () {
      return _optionsMenuConstants.OptionsMenuDirection;
    }
  });
  Object.defineProperty(exports, "OptionsMenuPosition", {
    enumerable: true,
    get: function () {
      return _optionsMenuConstants.OptionsMenuPosition;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});