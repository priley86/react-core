function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/Accordion/accordion.css.js";

var AccordionContent = function AccordionContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      isHidden = _ref.isHidden,
      isFixed = _ref.isFixed,
      ariaLabel = _ref['aria-label'],
      props = _objectWithoutProperties(_ref, ["className", "children", "id", "isHidden", "isFixed", "aria-label"]);

  return React.createElement("dd", _extends({
    id: id,
    className: css(styles.accordionExpandedContent, isFixed && styles.modifiers.fixed, !isHidden && styles.modifiers.expanded, className),
    hidden: isHidden,
    "aria-label": ariaLabel
  }, props), React.createElement("div", {
    className: css(styles.accordionExpandedContentBody)
  }, children));
};

AccordionContent.propTypes = {
  /** Content rendered inside the Accordion */
  children: PropTypes.node,

  /** Additional classes added to the Accordion content */
  className: PropTypes.string,

  /** Identify the AccordionContent item */
  id: PropTypes.string,

  /** Flag to show if the expanded content of the Accordion item is visible */
  isHidden: PropTypes.bool,

  /** Flag to indicate Accordion content is fixed */
  isFixed: PropTypes.bool,

  /** Adds accessible text to the Accordion content */
  'aria-label': PropTypes.string,

  /** Additional props are spread to the container <dd> */
  '': PropTypes.any
};
AccordionContent.defaultProps = {
  className: '',
  id: '',
  isHidden: false,
  isFixed: false,
  'aria-label': ''
};
export default AccordionContent;