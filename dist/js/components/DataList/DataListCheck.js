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

var DataListCheck = function DataListCheck(_ref) {
  var className = _ref.className,
      _onChange = _ref.onChange,
      isValid = _ref.isValid,
      isDisabled = _ref.isDisabled,
      isChecked = _ref.isChecked,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "onChange", "isValid", "isDisabled", "isChecked", "checked"]);

  return _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_dataListCss["default"].dataListItemControl, className)
  }, _react["default"].createElement("div", {
    className: (0, _reactStyles.css)('pf-c-data-list__check')
  }, _react["default"].createElement("input", _extends({}, props, {
    type: "checkbox",
    onChange: function onChange(event) {
      return _onChange(event.currentTarget.checked, event);
    },
    "aria-invalid": !isValid,
    disabled: isDisabled,
    checked: isChecked || checked
  }))));
};

DataListCheck.propTypes = {
  /** Additional classes added to the DataList item checkbox */
  className: _propTypes["default"].string,

  /** Flag to show if the DataList checkbox selection is valid or invalid */
  isValid: _propTypes["default"].bool,

  /** Flag to show if the DataList checkbox is disabled */
  isDisabled: _propTypes["default"].bool,

  /** Flag to show if the DataList checkbox is checked */
  isChecked: _propTypes["default"].bool,

  /** A callback for when the DataList checkbox selection changes */
  onChange: _propTypes["default"].func,

  /** Aria-labelledby of the DataList checkbox */
  'aria-labelledby': _propTypes["default"].string.isRequired,

  /** Additional props are spread to the <input> */
  '': _propTypes["default"].any
};
DataListCheck.defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  isChecked: null,
  onChange: function onChange() {
    return undefined;
  }
};
var _default = DataListCheck;
exports["default"] = _default;