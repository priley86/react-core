"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCore = require("@patternfly/react-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  id: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  min: _propTypes["default"].number
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
  return _react["default"].createElement(_reactCore.Grid, null, _react["default"].createElement(_reactCore.GridItem, {
    span: 4
  }, _react["default"].createElement("label", {
    htmlFor: id
  }, label)), _react["default"].createElement(_reactCore.GridItem, {
    span: 7
  }, _react["default"].createElement("input", {
    id: id,
    type: "range",
    min: min,
    max: 12,
    value: value,
    onChange: onChange
  })), _react["default"].createElement(_reactCore.GridItem, {
    span: 1
  }, value));
};

SpanSlider.propTypes = propTypes;
SpanSlider.defaultProps = defaultProps;
var _default = SpanSlider;
exports["default"] = _default;