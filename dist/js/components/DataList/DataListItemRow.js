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

var DataListItemRow = function DataListItemRow(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rowid = _ref.rowid,
      props = _objectWithoutProperties(_ref, ["children", "className", "rowid"]);

  return _react["default"].createElement("div", _extends({
    className: (0, _reactStyles.css)(_dataListCss["default"].dataListItemRow, className)
  }, props), _react["default"].Children.map(children, function (child) {
    return _react["default"].isValidElement(child) && _react["default"].cloneElement(child, {
      rowid: rowid
    });
  }));
};

DataListItemRow.propTypes = {
  /** Content rendered inside the DataList item Row.  Can be <DataListItemCells>, <DataListAction>, <DataListCheck> or <DataListToggle> */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /** Additional classes added to the DataList item Row */
  className: _propTypes["default"].string,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
DataListItemRow.defaultProps = {
  className: ''
};
var _default = DataListItemRow;
exports["default"] = _default;