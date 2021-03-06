import _pt from "prop-types";
import * as React from 'react';
import styles from "../../@patternfly/patternfly/components/Wizard/wizard.css.js";
import { css } from '@patternfly/react-styles';
export var WizardNav = function WizardNav(_ref) {
  var children = _ref.children,
      ariaLabel = _ref.ariaLabel,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$returnList = _ref.returnList,
      returnList = _ref$returnList === void 0 ? false : _ref$returnList;
  var innerList = React.createElement("ol", {
    className: css(styles.wizardNavList)
  }, children);

  if (returnList) {
    return innerList;
  }

  return React.createElement("nav", {
    className: css(styles.wizardNav, isOpen && 'pf-m-expanded'),
    "aria-label": ariaLabel
  }, React.createElement("ol", {
    className: css(styles.wizardNavList)
  }, children));
};
WizardNav.propTypes = {
  children: _pt.any,
  ariaLabel: _pt.string,
  isOpen: _pt.bool,
  returnList: _pt.bool
};