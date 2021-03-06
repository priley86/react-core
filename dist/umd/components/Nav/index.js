"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Nav", "./NavList", "./NavGroup", "./NavItem", "./NavItemSeparator", "./NavExpandable", "./NavVariants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Nav"), require("./NavList"), require("./NavGroup"), require("./NavItem"), require("./NavItemSeparator"), require("./NavExpandable"), require("./NavVariants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Nav, global.NavList, global.NavGroup, global.NavItem, global.NavItemSeparator, global.NavExpandable, global.NavVariants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _Nav, _NavList, _NavGroup, _NavItem, _NavItemSeparator, _NavExpandable, _NavVariants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Nav", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Nav).default;
    }
  });
  Object.defineProperty(exports, "NavList", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_NavList).default;
    }
  });
  Object.defineProperty(exports, "NavGroup", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_NavGroup).default;
    }
  });
  Object.defineProperty(exports, "NavItem", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_NavItem).default;
    }
  });
  Object.defineProperty(exports, "NavItemSeparator", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_NavItemSeparator).default;
    }
  });
  Object.defineProperty(exports, "NavExpandable", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_NavExpandable).default;
    }
  });
  Object.defineProperty(exports, "NavVariants", {
    enumerable: true,
    get: function () {
      return _NavVariants.NavVariants;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});