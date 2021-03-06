"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardBody = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _wizardCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WizardBody = function WizardBody(_ref) {
  var children = _ref.children,
      _ref$hasBodyPadding = _ref.hasBodyPadding,
      hasBodyPadding = _ref$hasBodyPadding === void 0 ? true : _ref$hasBodyPadding;
  return React.createElement("main", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardMain, !hasBodyPadding && 'pf-m-no-padding')
  }, React.createElement("div", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardMainBody)
  }, children));
};

exports.WizardBody = WizardBody;
WizardBody.propTypes = {
  children: _propTypes["default"].any.isRequired,
  hasBodyPadding: _propTypes["default"].bool.isRequired
};