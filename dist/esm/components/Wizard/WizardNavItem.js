import _pt from "prop-types";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/Wizard/wizard.css.js";
export var WizardNavItem = function WizardNavItem(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$isCurrent = _ref.isCurrent,
      isCurrent = _ref$isCurrent === void 0 ? false : _ref$isCurrent,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      step = _ref.step,
      _ref$onNavItemClick = _ref.onNavItemClick,
      onNavItemClick = _ref$onNavItemClick === void 0 ? function () {
    return undefined;
  } : _ref$onNavItemClick;
  return React.createElement("li", {
    className: css(styles.wizardNavItem)
  }, React.createElement("a", {
    "aria-current": isCurrent && !children ? 'page' : false,
    onClick: function onClick() {
      return onNavItemClick(step);
    },
    className: css(styles.wizardNavLink, isCurrent && 'pf-m-current', isDisabled && 'pf-m-disabled'),
    "aria-disabled": isDisabled ? true : false,
    tabIndex: isDisabled ? -1 : undefined
  }, text), children);
};
WizardNavItem.propTypes = {
  children: _pt.node,
  text: _pt.string,
  isCurrent: _pt.bool,
  isDisabled: _pt.bool,
  step: _pt.number.isRequired
};