"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _reactIcons = require("@patternfly/react-icons");

var _dataListCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/DataList/data-list.css.js"));

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataListToggle = function DataListToggle(_ref) {
  var className = _ref.className,
      isExpanded = _ref.isExpanded,
      ariaControls = _ref['aria-controls'],
      ariaLabel = _ref['aria-label'],
      ariaLabelledBy = _ref['aria-labelledby'],
      rowid = _ref.rowid,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["className", "isExpanded", "aria-controls", "aria-label", "aria-labelledby", "rowid", "id"]);

  return _react["default"].createElement("div", _extends({
    className: (0, _reactStyles.css)(_dataListCss["default"].dataListItemControl, className)
  }, props), _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_dataListCss["default"].dataListToggle)
  }, _react["default"].createElement(_Button.Button, {
    id: id,
    variant: _Button.ButtonVariant.plain,
    "aria-controls": ariaControls !== '' && ariaControls,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabel !== 'Details' ? null : "".concat(rowid, " ").concat(id),
    "aria-expanded": isExpanded
  }, _react["default"].createElement(_reactIcons.AngleRightIcon, null))));
};

DataListToggle.propTypes = {
  /** Additional classes added to the DataList cell */
  className: _propTypes["default"].string,

  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: _propTypes["default"].bool,

  /** Identify the DataList toggle number */
  id: _propTypes["default"].string.isRequired,

  /** Adds accessible text to the DataList toggle */
  'aria-labelledby': _propTypes["default"].string,

  /** Adds accessible text to the DataList toggle */
  'aria-label': _propTypes["default"].string,

  /** Allows users of some screen readers to shift focus to the controlled element. Should be used when the controlled contents are not adjacent to the toggle that controls them. */
  'aria-controls': _propTypes["default"].string,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
DataListToggle.defaultProps = {
  'aria-controls': '',
  'aria-label': 'Details',
  'aria-labelledby': '',
  className: '',
  isExpanded: false
};
var _default = DataListToggle;
exports["default"] = _default;