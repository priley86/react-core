import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
var propTypes = {
  firstIndex: PropTypes.number,
  lastIndex: PropTypes.number,
  itemCount: PropTypes.number,
  itemsTitle: PropTypes.string
};
var defaultProps = {
  firstIndex: 0,
  lastIndex: 0,
  itemCount: 0,
  itemsTitle: 'items'
};

var ToggleTemplate = function ToggleTemplate(_ref) {
  var firstIndex = _ref.firstIndex,
      lastIndex = _ref.lastIndex,
      itemCount = _ref.itemCount,
      itemsTitle = _ref.itemsTitle;
  return React.createElement(Fragment, null, React.createElement("strong", null, firstIndex, " - ", lastIndex), " of ", React.createElement("strong", null, itemCount), " ", itemsTitle);
};

ToggleTemplate.propTypes = propTypes;
ToggleTemplate.defaultProps = defaultProps;
export default ToggleTemplate;