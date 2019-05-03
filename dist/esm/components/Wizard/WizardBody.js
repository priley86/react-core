import _pt from "prop-types";
import * as React from 'react';
import styles from "../../@patternfly/patternfly/components/Wizard/wizard.css.js";
import { css } from '@patternfly/react-styles';
export var WizardBody = function WizardBody(_ref) {
  var children = _ref.children,
      _ref$hasBodyPadding = _ref.hasBodyPadding,
      hasBodyPadding = _ref$hasBodyPadding === void 0 ? true : _ref$hasBodyPadding;
  return React.createElement("main", {
    className: css(styles.wizardMain, !hasBodyPadding && 'pf-m-no-padding')
  }, React.createElement("div", {
    className: css(styles.wizardMainBody)
  }, children));
};
WizardBody.propTypes = {
  children: _pt.any.isRequired,
  hasBodyPadding: _pt.bool.isRequired
};