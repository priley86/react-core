"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./EmptyState", "./EmptyStateBody", "./EmptyStateIcon", "./EmptyStateSecondaryActions"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./EmptyState"), require("./EmptyStateBody"), require("./EmptyStateIcon"), require("./EmptyStateSecondaryActions"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.EmptyState, global.EmptyStateBody, global.EmptyStateIcon, global.EmptyStateSecondaryActions);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _EmptyState, _EmptyStateBody, _EmptyStateIcon, _EmptyStateSecondaryActions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "EmptyState", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_EmptyState).default;
    }
  });
  Object.defineProperty(exports, "EmptyStateVariant", {
    enumerable: true,
    get: function () {
      return _EmptyState.EmptyStateVariant;
    }
  });
  Object.defineProperty(exports, "EmptyStateBody", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_EmptyStateBody).default;
    }
  });
  Object.defineProperty(exports, "EmptyStateIcon", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_EmptyStateIcon).default;
    }
  });
  Object.defineProperty(exports, "EmptyStateSecondaryActions", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_EmptyStateSecondaryActions).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});