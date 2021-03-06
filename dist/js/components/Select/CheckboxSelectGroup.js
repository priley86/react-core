"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _selectCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Select/select.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Checkboxes within group */
  children: _propTypes["default"].node,

  /** Additional classes added to the CheckboxSelectGroup control */
  className: _propTypes["default"].string,

  /** Group label */
  label: _propTypes["default"].string,

  /** Additional props are spread to the container <select> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  label: ''
};

var CheckboxSelectGroup = function CheckboxSelectGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      label = _ref.label,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["children", "className", "label", "titleId"]);

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", _extends({}, props, {
    className: (0, _reactStyles.css)(_selectCss["default"].selectMenuGroup, className)
  }), _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_selectCss["default"].selectMenuGroupTitle),
    id: titleId || '',
    "aria-hidden": true
  }, label), children));
};

CheckboxSelectGroup.propTypes = propTypes;
CheckboxSelectGroup.defaultProps = defaultProps;
var _default = CheckboxSelectGroup;
exports["default"] = _default;