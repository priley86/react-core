"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _aboutModalBoxCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/AboutModalBox/about-modal-box.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** additional classes added to the About Modal Brand */
  className: _propTypes["default"].string,

  /** the URL of the image for the Brand. */
  src: _propTypes["default"].string,

  /** the alternate text of the Brand image. */
  alt: _propTypes["default"].string.isRequired,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  className: '',
  src: ''
};

var AboutModalBoxBrand = function AboutModalBoxBrand(_ref) {
  var className = _ref.className,
      src = _ref.src,
      alt = _ref.alt,
      props = _objectWithoutProperties(_ref, ["className", "src", "alt"]);

  return _react["default"].createElement("div", _extends({}, props, {
    className: (0, _reactStyles.css)(_aboutModalBoxCss["default"].aboutModalBoxBrand, className)
  }), _react["default"].createElement("img", {
    className: (0, _reactStyles.css)(_aboutModalBoxCss["default"].aboutModalBoxBrandImage),
    src: src,
    alt: alt
  }));
};

AboutModalBoxBrand.propTypes = propTypes;
AboutModalBoxBrand.defaultProps = defaultProps;
var _default = AboutModalBoxBrand;
exports["default"] = _default;