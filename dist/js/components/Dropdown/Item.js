"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _componentShape = require("../../helpers/componentShape");

var _dropdownConstants = require("./dropdownConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Item = function Item(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return _react["default"].createElement(_dropdownConstants.DropdownArrowContext.Consumer, null, function (context) {
    return _react["default"].createElement(_DropdownItem["default"], _extends({}, props, {
      context: context,
      role: "menuitem",
      tabIndex: -1
    }));
  });
};

Item.propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: _propTypes["default"].node,

  /** Classess applied to root element of dropdown item */
  className: _propTypes["default"].string,

  /** Indicates which component will be used as dropdown item */
  component: _componentShape.componentShape,

  /** Render dropdown item as disabled option */
  isDisabled: _propTypes["default"].bool,

  /** Forces display of the hover state of the element */
  isHovered: _propTypes["default"].bool,

  /** Default hyperlink location */
  href: _propTypes["default"].string,

  /** Additional props are passed to the DropdownItem */
  '': _propTypes["default"].any
};
Item.defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isDisabled: false,
  href: '#'
};
var _default = Item;
exports["default"] = _default;