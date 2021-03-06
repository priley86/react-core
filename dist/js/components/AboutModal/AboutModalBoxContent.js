"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _aboutModalBoxCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/AboutModalBox/about-modal-box.css.js"));

var _titleCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Title/title.css.js"));

var _contentCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Content/content.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** content rendered inside the AboutModalBoxContent */
  children: _propTypes["default"].node.isRequired,

  /** additional classes added to the AboutModalBoxContent */
  className: _propTypes["default"].string,

  /** id to use for About Modal Box aria described by */
  id: _propTypes["default"].string.isRequired,

  /** The Trademark info for the product */
  trademark: _propTypes["default"].string.isRequired,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  className: ''
};

var AboutModalBoxContent = function AboutModalBoxContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      trademark = _ref.trademark,
      id = _ref.id,
      noAboutModalBoxContentContainer = _ref.noAboutModalBoxContentContainer,
      props = _objectWithoutProperties(_ref, ["children", "className", "trademark", "id", "noAboutModalBoxContentContainer"]);

  return _react["default"].createElement("div", _extends({}, props, {
    className: (0, _reactStyles.css)(_aboutModalBoxCss["default"].aboutModalBoxContent, className),
    id: id
  }), _react["default"].createElement("div", {
    className: (0, _reactStyles.css)('pf-c-about-modal-box__body')
  }, noAboutModalBoxContentContainer ? children : _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_contentCss["default"].content)
  }, children)), _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_aboutModalBoxCss["default"].aboutModalBoxStrapline)
  }, _react["default"].createElement("p", {
    className: (0, _reactStyles.css)(_titleCss["default"].title, _titleCss["default"].modifiers.md)
  }, trademark)));
};

AboutModalBoxContent.propTypes = propTypes;
AboutModalBoxContent.defaultProps = defaultProps;
var _default = AboutModalBoxContent;
exports["default"] = _default;