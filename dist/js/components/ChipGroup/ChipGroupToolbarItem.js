"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chipGroupCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/ChipGroup/chip-group.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChipGroupToolbarItem = function ChipGroupToolbarItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      categoryName = _ref.categoryName,
      props = _objectWithoutProperties(_ref, ["children", "className", "categoryName"]);

  if (_react["default"].Children.count(children)) {
    return _react["default"].createElement("ul", _extends({
      className: (0, _reactStyles.css)(_chipGroupCss["default"].chipGroup, _chipGroupCss["default"].modifiers.toolbar)
    }, props), _react["default"].createElement("li", null, _react["default"].createElement("h4", {
      className: (0, _reactStyles.css)(_chipGroupCss["default"].chipGroupLabel)
    }, categoryName), _react["default"].createElement("ul", {
      className: (0, _reactStyles.css)(_chipGroupCss["default"].chipGroup)
    }, children)));
  }

  return null;
};

ChipGroupToolbarItem.propTypes = {
  /**  Category name text */
  categoryName: _propTypes["default"].string,

  /** Content rendered inside the chip text */
  children: _propTypes["default"].node.isRequired,

  /** Additional classes added to the chip item */
  className: _propTypes["default"].string
};
ChipGroupToolbarItem.defaultProps = {
  categoryName: '',
  children: null,
  className: ''
};
var _default = ChipGroupToolbarItem;
exports["default"] = _default;