function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/Form/form.css.js";
import { css } from '@patternfly/react-styles';
import { FormContext } from '../Form/FormContext';
var propTypes = {
  /** Anything that can be rendered as ActionGroup content. */
  children: PropTypes.node,

  /** Additional classes added to the ActionGroup. */
  className: PropTypes.string,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: ''
};

var ActionGroup = function ActionGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var customClassName = css(styles.formGroup, styles.modifiers.action, className);
  var classesHorizontal = css(styles.formHorizontalGroup);
  var formActionsComponent = React.createElement("div", {
    className: css(styles.formActions)
  }, children);
  return React.createElement(FormContext.Consumer, null, function (_ref2) {
    var isHorizontal = _ref2.isHorizontal;
    return React.createElement("div", _extends({}, props, {
      className: customClassName
    }), isHorizontal ? React.createElement("div", {
      className: classesHorizontal
    }, formActionsComponent) : formActionsComponent);
  });
};

ActionGroup.propTypes = propTypes;
ActionGroup.defaultProps = defaultProps;
export default ActionGroup;