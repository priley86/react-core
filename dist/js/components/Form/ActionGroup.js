"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Form/form.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _FormContext = require("../Form/FormContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Anything that can be rendered as ActionGroup content. */
  children: _propTypes["default"].node,

  /** Additional classes added to the ActionGroup. */
  className: _propTypes["default"].string,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: ''
};

var ActionGroup = function ActionGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var customClassName = (0, _reactStyles.css)(_formCss["default"].formGroup, _formCss["default"].modifiers.action, className);
  var classesHorizontal = (0, _reactStyles.css)(_formCss["default"].formHorizontalGroup);

  var formActionsComponent = _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_formCss["default"].formActions)
  }, children);

  return _react["default"].createElement(_FormContext.FormContext.Consumer, null, function (_ref2) {
    var isHorizontal = _ref2.isHorizontal;
    return _react["default"].createElement("div", _extends({}, props, {
      className: customClassName
    }), isHorizontal ? _react["default"].createElement("div", {
      className: classesHorizontal
    }, formActionsComponent) : formActionsComponent);
  });
};

ActionGroup.propTypes = propTypes;
ActionGroup.defaultProps = defaultProps;
var _default = ActionGroup;
exports["default"] = _default;