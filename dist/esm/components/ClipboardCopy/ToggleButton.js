function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css.js";
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';

var ToggleButton = function ToggleButton(_ref) {
  var isExpanded = _ref.isExpanded,
      onClick = _ref.onClick,
      className = _ref.className,
      id = _ref.id,
      textId = _ref.textId,
      contentId = _ref.contentId,
      props = _objectWithoutProperties(_ref, ["isExpanded", "onClick", "className", "id", "textId", "contentId"]);

  return React.createElement("button", _extends({
    onClick: onClick,
    className: css(styles.clipboardCopyGroupToggle, className),
    id: id,
    "aria-labelledby": "".concat(id, " ").concat(textId),
    "aria-controls": "".concat(contentId),
    "aria-expanded": "".concat(isExpanded)
  }, props), React.createElement(AngleRightIcon, {
    "aria-hidden": "true",
    className: css(styles.clipboardCopyGroupToggleIcon)
  }));
};

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  textId: PropTypes.string.isRequired,
  contentId: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  className: PropTypes.string
};
ToggleButton.defaultProps = {
  isExpanded: false,
  className: ''
};
export default ToggleButton;