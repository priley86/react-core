"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardFooterInternal = exports.WizardFooter = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _wizardCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Wizard/wizard.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _Button = require("../Button");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WizardFooter = function WizardFooter(_ref) {
  var children = _ref.children;
  return React.createElement("footer", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardFooter)
  }, children);
};

exports.WizardFooter = WizardFooter;
WizardFooter.propTypes = {
  children: _propTypes["default"].any.isRequired
};

var WizardFooterInternal = function WizardFooterInternal(_ref2) {
  var onNext = _ref2.onNext,
      onBack = _ref2.onBack,
      onClose = _ref2.onClose,
      isValid = _ref2.isValid,
      firstStep = _ref2.firstStep,
      activeStep = _ref2.activeStep,
      nextButtonText = _ref2.nextButtonText,
      backButtonText = _ref2.backButtonText,
      cancelButtonText = _ref2.cancelButtonText;
  return React.createElement("footer", {
    className: (0, _reactStyles.css)(_wizardCss["default"].wizardFooter)
  }, React.createElement(_Button.Button, {
    variant: _Button.ButtonVariant.primary,
    type: "submit",
    onClick: onNext,
    isDisabled: !isValid
  }, nextButtonText), !activeStep.hideBackButton && React.createElement(_Button.Button, {
    variant: _Button.ButtonVariant.secondary,
    onClick: onBack,
    className: (0, _reactStyles.css)(firstStep && 'pf-m-disabled')
  }, backButtonText), !activeStep.hideCancelButton && React.createElement(_Button.Button, {
    variant: _Button.ButtonVariant.link,
    onClick: onClose
  }, cancelButtonText));
};

exports.WizardFooterInternal = WizardFooterInternal;
WizardFooterInternal.propTypes = {
  onNext: _propTypes["default"].any.isRequired,
  onBack: _propTypes["default"].any.isRequired,
  onClose: _propTypes["default"].any.isRequired,
  isValid: _propTypes["default"].bool.isRequired,
  firstStep: _propTypes["default"].bool.isRequired,
  activeStep: _propTypes["default"].any.isRequired,
  nextButtonText: _propTypes["default"].string.isRequired,
  backButtonText: _propTypes["default"].string.isRequired,
  cancelButtonText: _propTypes["default"].string.isRequired
};