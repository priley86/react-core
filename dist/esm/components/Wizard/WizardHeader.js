import _pt from "prop-types";
import * as React from 'react';
import styles from "../../@patternfly/patternfly/components/Wizard/wizard.css.js";
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { Title } from '../Title';
import { TimesIcon } from '@patternfly/react-icons';
export var WizardHeader = function WizardHeader(_ref) {
  var _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {
    return undefined;
  } : _ref$onClose,
      title = _ref.title,
      description = _ref.description,
      ariaLabelCloseButton = _ref.ariaLabelCloseButton,
      titleId = _ref.titleId,
      descriptionId = _ref.descriptionId;
  return React.createElement("div", {
    className: css(styles.wizardHeader)
  }, React.createElement(Button, {
    variant: "plain",
    className: css(styles.wizardClose),
    "aria-label": ariaLabelCloseButton,
    onClick: onClose
  }, React.createElement(TimesIcon, {
    "aria-hidden": "true"
  })), React.createElement(Title, {
    size: "3xl",
    className: css(styles.wizardTitle),
    "aria-label": title,
    id: titleId
  }, title), description && React.createElement("p", {
    className: css(styles.wizardDescription),
    id: descriptionId
  }, description));
};
WizardHeader.propTypes = {
  onClose: _pt.func,
  title: _pt.string.isRequired,
  description: _pt.string,
  ariaLabelCloseButton: _pt.string,
  titleId: _pt.string,
  descriptionId: _pt.string
};