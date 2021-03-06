"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.KeyTypes = exports.SelectVariant = exports.SelectContext = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var SelectContext = exports.SelectContext = _react2["default"].createContext({
    onSelect: function onSelect() {},
    onClose: function onClose() {}
  });

  var SelectVariant = exports.SelectVariant = {
    single: 'single',
    checkbox: 'checkbox',
    typeahead: 'typeahead',
    typeaheadMulti: 'typeaheadmulti'
  };
  var KeyTypes = exports.KeyTypes = {
    Tab: 'Tab',
    Space: ' ',
    Escape: 'Escape',
    Enter: 'Enter',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown'
  };
});