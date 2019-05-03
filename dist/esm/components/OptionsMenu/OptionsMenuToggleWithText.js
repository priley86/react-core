import React from 'react';
import PropTypes from 'prop-types';
import { css, getModifier } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js";

var OptionsMenuToggleWithText = function OptionsMenuToggleWithText(_ref) {
  var parentId = _ref.parentId,
      toggleText = _ref.toggleText,
      toggleTextClassName = _ref.toggleTextClassName,
      toggleButtonContents = _ref.toggleButtonContents,
      toggleButtonContentsClassName = _ref.toggleButtonContentsClassName,
      onToggle = _ref.onToggle,
      isOpen = _ref.isOpen,
      isPlain = _ref.isPlain,
      isHovered = _ref.isHovered,
      isActive = _ref.isActive,
      isFocused = _ref.isFocused,
      ariaLabel = _ref["aria-label"];
  return React.createElement("div", {
    className: css(styles.optionsMenuToggle, getModifier(styles, 'text'), isPlain && getModifier(styles, 'plain'), isHovered && getModifier(styles, 'hover'), isActive && getModifier(styles, 'active'), isFocused && getModifier(styles, 'focus'))
  }, React.createElement("span", {
    className: css(styles.optionsMenuToggleText, toggleTextClassName)
  }, toggleText), React.createElement("button", {
    className: css(styles.optionsMenuToggleButton, toggleButtonContentsClassName),
    id: "".concat(parentId, "-toggle"),
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-expanded": isOpen,
    onClick: onToggle
  }, toggleButtonContents));
};

OptionsMenuToggleWithText.propTypes = {
  /** Id of the parent Options menu component */
  parentId: PropTypes.string,

  /** Content to be rendered inside the Options menu toggle as text or another non-interactive element*/
  toggleText: PropTypes.node.isRequired,

  /** classes to be added to the Options menu toggle text*/
  toggleTextClassName: PropTypes.string,

  /** Content to be rendered inside the Options menu toggle button */
  toggleButtonContents: PropTypes.node.isRequired,

  /** Classes to be added to the Options menu toggle button */
  toggleButtonContentsClassName: PropTypes.string,

  /** Callback for when this Options menu is toggled */
  onToggle: PropTypes.func,

  /** Flag to indicate if menu is open */
  isOpen: PropTypes.bool,

  /** Flag to indicate if the button is plain */
  isPlain: PropTypes.bool,

  /** Forces display of the hover state of the Options menu button */
  isHovered: PropTypes.bool,

  /** Forces display of the active state of the Options menu button */
  isActive: PropTypes.bool,

  /** Forces display of the hover state of the Options menu button */
  isFocused: PropTypes.bool,

  /** Provides an accessible name for the button when an icon is used instead of text */
  "aria-label": PropTypes.string
};
OptionsMenuToggleWithText.defaultProps = {
  parentId: '',
  toggleTextClassName: '',
  toggleButtonContentsClassName: '',
  onToggle: Function.prototype,
  isOpen: false,
  isPlain: false,
  isHovered: false,
  isActive: false,
  isFocused: false,
  "aria-label": 'Options menu'
};
export default OptionsMenuToggleWithText;