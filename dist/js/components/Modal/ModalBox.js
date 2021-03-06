"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _modalBoxCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/ModalBox/modal-box.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** content rendered inside the ModalBox. */
  children: _propTypes["default"].node.isRequired,

  /** additional classes added to the ModalBox */
  className: _propTypes["default"].string,

  /** Creates a large version of the ModalBox */
  isLarge: _propTypes["default"].bool,

  /** Creates a small version of the ModalBox. */
  isSmall: _propTypes["default"].bool,

  /** string to use for Modal Box label */
  title: _propTypes["default"].string.isRequired,

  /** id to use for Modal Box description */
  id: _propTypes["default"].string.isRequired,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  className: '',
  isLarge: false,
  isSmall: false
};

var ModalBox = function ModalBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isLarge = _ref.isLarge,
      isSmall = _ref.isSmall,
      title = _ref.title,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["children", "className", "isLarge", "isSmall", "title", "id"]);

  return _react["default"].createElement("div", _extends({}, props, {
    role: "dialog",
    "aria-label": title,
    "aria-describedby": id,
    "aria-modal": "true",
    className: (0, _reactStyles.css)(_modalBoxCss["default"].modalBox, className, isLarge && _modalBoxCss["default"].modifiers.lg, isSmall && _modalBoxCss["default"].modifiers.sm)
  }), children);
};

ModalBox.propTypes = propTypes;
ModalBox.defaultProps = defaultProps;
var _default = ModalBox;
exports["default"] = _default;