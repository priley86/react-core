function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

var ChipButton = function ChipButton(_ref) {
  var ariaLabel = _ref.ariaLabel,
      children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["ariaLabel", "children", "className", "onClick"]);

  return React.createElement(Button, _extends({
    variant: "plain",
    "aria-label": ariaLabel,
    onClick: onClick,
    className: className
  }, props), children);
};

ChipButton.propTypes = {
  /** Aria label for chip button */
  ariaLabel: PropTypes.string,

  /** Content rendered inside the chip item */
  children: PropTypes.node,

  /** Additional classes added to the chip item */
  className: PropTypes.string,

  /** Function that is called when clicking on the chip button */
  onClick: PropTypes.func
};
ChipButton.defaultProps = {
  ariaLabel: 'close',
  children: null,
  className: '',
  onClick: function onClick() {}
};
export default ChipButton;