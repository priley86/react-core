"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AboutModalBoxContent = _interopRequireDefault(require("./AboutModalBoxContent"));

var _AboutModalBoxHeader = _interopRequireDefault(require("./AboutModalBoxHeader"));

var _AboutModalBoxHero = _interopRequireDefault(require("./AboutModalBoxHero"));

var _AboutModalBoxBrand = _interopRequireDefault(require("./AboutModalBoxBrand"));

var _AboutModalBoxCloseButton = _interopRequireDefault(require("./AboutModalBoxCloseButton"));

var _AboutModalBox = _interopRequireDefault(require("./AboutModalBox"));

var _Backdrop = _interopRequireDefault(require("../Backdrop/Backdrop"));

var _Bullseye = _interopRequireDefault(require("../../layouts/Bullseye/Bullseye"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** content rendered inside the About Modal Box Content. */
  children: _propTypes["default"].node.isRequired,

  /** additional classes added to the About Modal Box */
  className: _propTypes["default"].string,

  /** Flag to show the About Modal */
  isOpen: _propTypes["default"].bool,

  /** A callback for when the close button is clicked */
  onClose: _propTypes["default"].func,

  /** Product Name */
  productName: _propTypes["default"].string,

  /** Trademark information */
  trademark: _propTypes["default"].string.isRequired,

  /** the URL of the image for the Brand. */
  brandImageSrc: _propTypes["default"].string.isRequired,

  /** the alternate text of the Brand image. */
  brandImageAlt: _propTypes["default"].string.isRequired,

  /** the URL of the image for the Logo. */
  logoImageSrc: _propTypes["default"].string.isRequired,

  /** the alternate text of the Logo image. */
  logoImageAlt: _propTypes["default"].string.isRequired,

  /** id to use for About Modal Box aria labeled by */
  ariaLabelledbyId: _propTypes["default"].string.isRequired,

  /** id to use for About Modal Box aria described by */
  ariaDescribedById: _propTypes["default"].string.isRequired,

  /** Additional props are spread to the AboutModalBoxContent component */
  '': _propTypes["default"].any
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

  return _react["default"].createElement(_Backdrop["default"], null, _react["default"].createElement(_Bullseye["default"], null, _react["default"].createElement(_AboutModalBox["default"], {
    className: className,
    "aria-labelledby": ariaLabelledbyId,
    "aria-describedby": ariaDescribedById
  }, _react["default"].createElement(_AboutModalBoxBrand["default"], {
    src: brandImageSrc,
    alt: brandImageAlt
  }), _react["default"].createElement(_AboutModalBoxCloseButton["default"], {
    onClose: onClose
  }), productName && _react["default"].createElement(_AboutModalBoxHeader["default"], {
    id: ariaLabelledbyId,
    productName: productName
  }), _react["default"].createElement(_AboutModalBoxContent["default"], _extends({}, props, {
    trademark: trademark,
    id: ariaDescribedById
  }), children), _react["default"].createElement(_AboutModalBoxHero["default"], null))));
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;
var _default = ModalContent;
exports["default"] = _default;