function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css.js";
import { css } from '@patternfly/react-styles';
import { CopyIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import { Tooltip, TooltipPosition } from '../Tooltip';

var CopyButton = function CopyButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      exitDelay = _ref.exitDelay,
      entryDelay = _ref.entryDelay,
      maxWidth = _ref.maxWidth,
      position = _ref.position,
      children = _ref.children,
      ariaLabel = _ref['aria-label'],
      id = _ref.id,
      textId = _ref.textId,
      props = _objectWithoutProperties(_ref, ["className", "onClick", "exitDelay", "entryDelay", "maxWidth", "position", "children", "aria-label", "id", "textId"]);

  return React.createElement(Tooltip, {
    trigger: 'mouseenter focus click',
    exitDelay: exitDelay,
    entryDelay: entryDelay,
    maxWidth: maxWidth,
    position: position,
    content: React.createElement("div", null, children)
  }, React.createElement("button", _extends({
    onClick: onClick,
    className: css(styles.clipboardCopyGroupCopy, className),
    "aria-label": ariaLabel,
    id: id,
    "aria-labelledby": "".concat(id, " ").concat(textId)
  }, props), React.createElement(CopyIcon, null)));
};

CopyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  textId: PropTypes.string.isRequired,
  className: PropTypes.string,
  exitDelay: PropTypes.number,
  entryDelay: PropTypes.number,
  maxWidth: PropTypes.string,
  position: PropTypes.oneOf(Object.keys(TooltipPosition)),
  'aria-label': PropTypes.string
};
CopyButton.defaultProps = {
  className: '',
  exitDelay: 100,
  entryDelay: 100,
  maxWidth: '100px',
  position: 'top',
  'aria-label': 'Copyable input'
};
export default CopyButton;