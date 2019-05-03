import React from 'react';
import PropTypes from 'prop-types';
import { CaretDownIcon } from '@patternfly/react-icons';
import styles from "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js";
import { css, getModifier } from '@patternfly/react-styles';
import { fillTemplate } from '../../helpers/util';

var OptionsMenuToggle = function OptionsMenuToggle(_ref) {
  var parentId = _ref.parentId,
      onToggle = _ref.onToggle,
      isOpen = _ref.isOpen,
      isPlain = _ref.isPlain,
      isHovered = _ref.isHovered,
      isActive = _ref.isActive,
      isFocused = _ref.isFocused,
      hideCaret = _ref.hideCaret,
      ariaLabel = _ref["aria-label"],
      ToggleTemplate = _ref.toggleTemplate,
      toggleTemplateProps = _ref.toggleTemplateProps;
  var template = ToggleTemplate && typeof ToggleTemplate === 'string' ? fillTemplate(ToggleTemplate, toggleTemplateProps) : React.createElement(ToggleTemplate, {
    toggleTemplateProps: toggleTemplateProps
  });
  return React.createElement("button", {
    className: css(styles.optionsMenuToggle, isPlain && getModifier(styles, 'plain'), isHovered && getModifier(styles, 'hover'), isActive && getModifier(styles, 'active'), isFocused && getModifier(styles, 'focus')),
    id: "".concat(parentId, "-toggle"),
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-expanded": isOpen,
    onClick: onToggle
  }, ToggleTemplate && (!isPlain ? React.createElement("span", {
    className: css(styles.optionsMenuToggleText)
  }, template) : React.createElement(React.Fragment, null, template)), !hideCaret && React.createElement(CaretDownIcon, {
    "aria-hidden": true,
    className: css(styles.optionsMenuToggleIcon)
  }));
};

OptionsMenuToggle.propTypes = {
  /** Id of the parent Options menu component */
  parentId: PropTypes.string,

  /** Callback for when this Options menu is toggled */
  onToggle: PropTypes.func,

  /** Flag to indicate if menu is open */
  isOpen: PropTypes.bool,

  /** Flag to indicate if the button is plain */
  isPlain: PropTypes.bool,

  /** Forces display of the hover state of the Options menu */
  isHovered: PropTypes.bool,

  /** Forces display of the active state of the Options menu */
  isActive: PropTypes.bool,

  /** Forces display of the hover state of the Options menu */
  isFocused: PropTypes.bool,

  /** Content to be rendered in the Options menu toggle button */
  toggleTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** Props to be passed to the Options menu toggle button template */
  toggleTemplateProps: PropTypes.object,

  /** hide the toggle caret */
  hideCaret: PropTypes.bool,

  /** Provides an accessible name for the button when an icon is used instead of text*/
  "aria-label": PropTypes.string
};
OptionsMenuToggle.defaultProps = {
  parentId: '',
  onToggle: Function.prototype,
  isOpen: false,
  isPlain: false,
  isHovered: false,
  isActive: false,
  isFocused: false,
  toggleTemplate: '',
  toggleTemplateProps: undefined,
  hideCaret: false,
  "aria-label": 'Options menu'
};
export default OptionsMenuToggle;