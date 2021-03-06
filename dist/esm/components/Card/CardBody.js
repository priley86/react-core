function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/Card/card.css.js";
import { componentShape } from '../../helpers/componentShape';
var propTypes = {
  /** content rendered inside the Card Body */
  children: PropTypes.any,

  /** additional classes added to the Card Body */
  className: PropTypes.string,

  /** Sets the base component to render. defaults to div */
  component: componentShape,

  /** Enables the body Content to fill the height of the card */
  isFilled: PropTypes.bool,

  /** Additional props are spread to the container component */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  component: 'div',
  isFilled: true
};

var CardBody = function CardBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.component,
      isFilled = _ref.isFilled,
      props = _objectWithoutProperties(_ref, ["children", "className", "component", "isFilled"]);

  return React.createElement(Component, _extends({
    className: css(styles.cardBody, !isFilled && styles.modifiers.noFill, className)
  }, props), children);
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
export default CardBody;