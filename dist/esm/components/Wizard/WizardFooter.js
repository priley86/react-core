import _pt from "prop-types";
import * as React from 'react';
import styles from "../../@patternfly/patternfly/components/Wizard/wizard.css.js";
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
export var WizardFooter = function WizardFooter(_ref) {
  var children = _ref.children;
  return React.createElement("footer", {
    className: css(styles.wizardFooter)
  }, children);
};
WizardFooter.propTypes = {
  children: _pt.any.isRequired
};
export var WizardFooterInternal = function WizardFooterInternal(_ref2) {
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
    className: css(styles.wizardFooter)
  }, React.createElement(Button, {
    variant: ButtonVariant.primary,
    type: "submit",
    onClick: onNext,
    isDisabled: !isValid
  }, nextButtonText), !activeStep.hideBackButton && React.createElement(Button, {
    variant: ButtonVariant.secondary,
    onClick: onBack,
    className: css(firstStep && 'pf-m-disabled')
  }, backButtonText), !activeStep.hideCancelButton && React.createElement(Button, {
    variant: ButtonVariant.link,
    onClick: onClose
  }, cancelButtonText));
};
WizardFooterInternal.propTypes = {
  onNext: _pt.any.isRequired,
  onBack: _pt.any.isRequired,
  onClose: _pt.any.isRequired,
  isValid: _pt.bool.isRequired,
  firstStep: _pt.bool.isRequired,
  activeStep: _pt.any.isRequired,
  nextButtonText: _pt.string.isRequired,
  backButtonText: _pt.string.isRequired,
  cancelButtonText: _pt.string.isRequired
};