"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _inputGroupCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/InputGroup/input-group.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormSelect = require("../FormSelect");

var _TextArea = require("../TextArea");

var _TextInput = require("../TextInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputGroup = function InputGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var formCtrls = [_FormSelect.FormSelect, _TextArea.TextArea, _TextInput.TextInput].map(function (comp) {
    return comp.toString();
  });

  var idItem = _react["default"].Children.toArray(children).find(function (child) {
    return !formCtrls.includes(child.type.toString()) && child.props.id;
  });

  return _react["default"].createElement("div", _extends({
    className: (0, _reactStyles.css)(_inputGroupCss["default"].inputGroup, className)
  }, props), idItem ? _react["default"].Children.map(children, function (child) {
    return formCtrls.includes(child.type.toString()) ? _react["default"].cloneElement(child, {
      'aria-describedby': idItem.props.id
    }) : child;
  }) : children);
};

InputGroup.propTypes = {
  /** Additional classes added to the input group. */
  className: _propTypes["default"].string,

  /** Content rendered inside the input group. */
  children: _propTypes["default"].node.isRequired
};
InputGroup.defaultProps = {
  className: ''
};
var _default = InputGroup;
exports["default"] = _default;