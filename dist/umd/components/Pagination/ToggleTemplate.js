"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var propTypes = {
    firstIndex: _propTypes2["default"].number,
    lastIndex: _propTypes2["default"].number,
    itemCount: _propTypes2["default"].number,
    itemsTitle: _propTypes2["default"].string
  };
  var defaultProps = {
    firstIndex: 0,
    lastIndex: 0,
    itemCount: 0,
    itemsTitle: 'items'
  };

  var ToggleTemplate = function ToggleTemplate(_ref) {
    var firstIndex = _ref.firstIndex,
        lastIndex = _ref.lastIndex,
        itemCount = _ref.itemCount,
        itemsTitle = _ref.itemsTitle;
    return _react2["default"].createElement(_react.Fragment, null, _react2["default"].createElement("strong", null, firstIndex, " - ", lastIndex), " of ", _react2["default"].createElement("strong", null, itemCount), " ", itemsTitle);
  };

  ToggleTemplate.propTypes = propTypes;
  ToggleTemplate.defaultProps = defaultProps;
  exports["default"] = ToggleTemplate;
});