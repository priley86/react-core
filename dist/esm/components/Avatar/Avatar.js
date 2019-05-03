import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styles from "../../@patternfly/patternfly/components/Avatar/avatar.css.js";
import { css } from '@patternfly/react-styles';
export var Avatar = function Avatar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$src = _ref.src,
      src = _ref$src === void 0 ? '' : _ref$src,
      alt = _ref.alt,
      props = _objectWithoutProperties(_ref, ["className", "src", "alt"]);

  return React.createElement("img", _extends({}, props, {
    src: src,
    alt: alt,
    className: css(styles.avatar, className)
  }));
};
Avatar.propTypes = {
  className: _pt.string,
  src: _pt.string,
  alt: _pt.string.isRequired
};