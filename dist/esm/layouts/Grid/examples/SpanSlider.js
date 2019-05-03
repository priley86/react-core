import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '@patternfly/react-core';
var propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number
};
var defaultProps = {
  min: 3
};

var SpanSlider = function SpanSlider(_ref) {
  var label = _ref.label,
      id = _ref.id,
      onChange = _ref.onChange,
      min = _ref.min,
      value = _ref.value;
  return React.createElement(Grid, null, React.createElement(GridItem, {
    span: 4
  }, React.createElement("label", {
    htmlFor: id
  }, label)), React.createElement(GridItem, {
    span: 7
  }, React.createElement("input", {
    id: id,
    type: "range",
    min: min,
    max: 12,
    value: value,
    onChange: onChange
  })), React.createElement(GridItem, {
    span: 1
  }, value));
};

SpanSlider.propTypes = propTypes;
SpanSlider.defaultProps = defaultProps;
export default SpanSlider;