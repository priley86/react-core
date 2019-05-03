function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from "../../@patternfly/patternfly/components/Accordion/accordion.css.js";

var AccordionToggle = function AccordionToggle(_ref) {
  var className = _ref.className,
      id = _ref.id,
      isExpanded = _ref.isExpanded,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "id", "isExpanded", "children"]);

  return React.createElement("dt", null, React.createElement("h3", null, React.createElement("button", _extends({
    id: id,
    className: css(styles.accordionToggle, isExpanded && styles.modifiers.expanded, className)
  }, props, {
    variant: "plain",
    "aria-expanded": isExpanded
  }), React.createElement("span", {
    className: css(styles.accordionToggleText)
  }, children), React.createElement(AngleRightIcon, {
    className: css(styles.accordionToggleIcon)
  }))));
};

AccordionToggle.propTypes = {
  /** Additional classes added to the Accordion Toggle */
  className: PropTypes.string,

  /** Flag to show if the expanded content of the Accordion item is visible */
  isExpanded: PropTypes.bool,

  /** Identify the Accordion toggle number */
  id: PropTypes.string.isRequired,

  /** Additional props are spread to the container <dt> */
  '': PropTypes.any
};
AccordionToggle.defaultProps = {
  className: '',
  isExpanded: false
};
export default AccordionToggle;