function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import AboutModalBoxContent from './AboutModalBoxContent';
import AboutModalBoxHeader from './AboutModalBoxHeader';
import AboutModalBoxHero from './AboutModalBoxHero';
import AboutModalBoxBrand from './AboutModalBoxBrand';
import AboutModalBoxCloseButton from './AboutModalBoxCloseButton';
import AboutModalBox from './AboutModalBox';
import Backdrop from '../Backdrop/Backdrop';
import Bullseye from '../../layouts/Bullseye/Bullseye';
var propTypes = {
  /** content rendered inside the About Modal Box Content. */
  children: PropTypes.node.isRequired,

  /** additional classes added to the About Modal Box */
  className: PropTypes.string,

  /** Flag to show the About Modal */
  isOpen: PropTypes.bool,

  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,

  /** Product Name */
  productName: PropTypes.string,

  /** Trademark information */
  trademark: PropTypes.string.isRequired,

  /** the URL of the image for the Brand. */
  brandImageSrc: PropTypes.string.isRequired,

  /** the alternate text of the Brand image. */
  brandImageAlt: PropTypes.string.isRequired,

  /** the URL of the image for the Logo. */
  logoImageSrc: PropTypes.string.isRequired,

  /** the alternate text of the Logo image. */
  logoImageAlt: PropTypes.string.isRequired,

  /** id to use for About Modal Box aria labeled by */
  ariaLabelledbyId: PropTypes.string.isRequired,

  /** id to use for About Modal Box aria described by */
  ariaDescribedById: PropTypes.string.isRequired,

  /** Additional props are spread to the AboutModalBoxContent component */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  isOpen: false,
  onClose: function onClose() {
    return undefined;
  },
  productName: ''
};

var ModalContent = function ModalContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      productName = _ref.productName,
      trademark = _ref.trademark,
      brandImageSrc = _ref.brandImageSrc,
      brandImageAlt = _ref.brandImageAlt,
      logoImageSrc = _ref.logoImageSrc,
      logoImageAlt = _ref.logoImageAlt,
      ariaLabelledbyId = _ref.ariaLabelledbyId,
      ariaDescribedById = _ref.ariaDescribedById,
      props = _objectWithoutProperties(_ref, ["children", "className", "isOpen", "onClose", "productName", "trademark", "brandImageSrc", "brandImageAlt", "logoImageSrc", "logoImageAlt", "ariaLabelledbyId", "ariaDescribedById"]);

  if (!isOpen) {
    return null;
  }

  return React.createElement(Backdrop, null, React.createElement(Bullseye, null, React.createElement(AboutModalBox, {
    className: className,
    "aria-labelledby": ariaLabelledbyId,
    "aria-describedby": ariaDescribedById
  }, React.createElement(AboutModalBoxBrand, {
    src: brandImageSrc,
    alt: brandImageAlt
  }), React.createElement(AboutModalBoxCloseButton, {
    onClose: onClose
  }), productName && React.createElement(AboutModalBoxHeader, {
    id: ariaLabelledbyId,
    productName: productName
  }), React.createElement(AboutModalBoxContent, _extends({}, props, {
    trademark: trademark,
    id: ariaDescribedById
  }), children), React.createElement(AboutModalBoxHero, null))));
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;
export default ModalContent;