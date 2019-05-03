import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/Title/title.css.js";
export var TitleLevel;

(function (TitleLevel) {
  TitleLevel["h1"] = "h1";
  TitleLevel["h2"] = "h2";
  TitleLevel["h3"] = "h3";
  TitleLevel["h4"] = "h4";
  TitleLevel["h5"] = "h5";
  TitleLevel["h6"] = "h6";
})(TitleLevel || (TitleLevel = {}));

var Title = function Title(_ref) {
  var size = _ref.size,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? '' : _ref$children,
      _ref$headingLevel = _ref.headingLevel,
      HeadingLevel = _ref$headingLevel === void 0 ? TitleLevel.h1 : _ref$headingLevel,
      props = _objectWithoutProperties(_ref, ["size", "className", "children", "headingLevel"]);

  return React.createElement(HeadingLevel, _extends({}, props, {
    className: css(styles.title, getModifier(styles, size), className)
  }), children);
};

Title.propTypes = {
  size: _pt.any.isRequired,
  children: _pt.node,
  className: _pt.string,
  headingLevel: _pt.any
};
export { Title };