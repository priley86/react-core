import React from 'react';
import PropTypes from 'prop-types';

var OptionsMenuItemsGroup = function OptionsMenuItemsGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel;
  return React.createElement("li", null, React.createElement("ul", {
    className: className,
    "aria-label": ariaLabel
  }, children));
};

OptionsMenuItemsGroup.propTypes = {
  /** Content to be rendered in the Options menu items component */
  children: PropTypes.node,

  /** Classes applied to root element of the Options menu items group */
  className: PropTypes.string,

  /** Provides an accessible name for the Options menu items group */
  ariaLabel: PropTypes.string
};
OptionsMenuItemsGroup.defaultValues = {
  children: null,
  className: '',
  ariaLabel: ''
};
export default OptionsMenuItemsGroup;