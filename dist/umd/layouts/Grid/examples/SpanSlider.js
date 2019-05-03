"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactCore);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactCore) {
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
    id: _propTypes2["default"].string.isRequired,
    label: _propTypes2["default"].string.isRequired,
    value: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]).isRequired,
    onChange: _propTypes2["default"].func.isRequired,
    min: _propTypes2["default"].number
  };
  var defaultProps = {
    min: 3
  };

  var SpanSlider = function SpanSlider(_ref) {
    var label = _ref.label,
        id = _ref.id,
        onChange = _ref.onChange,
        min = _ref.min,
        value = _ref.value;
    return _react2["default"].createElement(_reactCore.Grid, null, _react2["default"].createElement(_reactCore.GridItem, {
      span: 4
    }, _react2["default"].createElement("label", {
      htmlFor: id
    }, label)), _react2["default"].createElement(_reactCore.GridItem, {
      span: 7
    }, _react2["default"].createElement("input", {
      id: id,
      type: "range",
      min: min,
      max: 12,
      value: value,
      onChange: onChange
    })), _react2["default"].createElement(_reactCore.GridItem, {
      span: 1
    }, value));
  };

  SpanSlider.propTypes = propTypes;
  SpanSlider.defaultProps = defaultProps;
  exports["default"] = SpanSlider;
});