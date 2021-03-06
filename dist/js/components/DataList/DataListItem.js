"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dataListCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/DataList/data-list.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataListItem = function DataListItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isExpanded = _ref.isExpanded,
      ariaLabelledBy = _ref['aria-labelledby'],
      props = _objectWithoutProperties(_ref, ["children", "className", "isExpanded", "aria-labelledby"]);

  return _react["default"].createElement("li", _extends({
    className: (0, _reactStyles.css)(_dataListCss["default"].dataListItem, isExpanded && _dataListCss["default"].modifiers.expanded, className),
    "aria-labelledby": ariaLabelledBy
  }, props), _react["default"].Children.map(children, function (child) {
    return _react["default"].isValidElement(child) && _react["default"].cloneElement(child, {
      rowid: ariaLabelledBy
    });
  }));
};

DataListItem.propTypes = {
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: _propTypes["default"].bool,

  /** Content rendered inside the DataList item */
  children: _propTypes["default"].node.isRequired,

  /** Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent> */
  className: _propTypes["default"].string,

  /** Adds accessible text to the DataList item */
  'aria-labelledby': _propTypes["default"].string.isRequired,

  /** Additional props are spread to the container <li> */
  '': _propTypes["default"].any
};
DataListItem.defaultProps = {
  isExpanded: false,
  className: ''
};
var _default = DataListItem;
exports["default"] = _default;