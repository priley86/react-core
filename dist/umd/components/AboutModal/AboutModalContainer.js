"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./AboutModalBoxContent", "./AboutModalBoxHeader", "./AboutModalBoxHero", "./AboutModalBoxBrand", "./AboutModalBoxCloseButton", "./AboutModalBox", "../Backdrop/Backdrop", "../../layouts/Bullseye/Bullseye"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./AboutModalBoxContent"), require("./AboutModalBoxHeader"), require("./AboutModalBoxHero"), require("./AboutModalBoxBrand"), require("./AboutModalBoxCloseButton"), require("./AboutModalBox"), require("../Backdrop/Backdrop"), require("../../layouts/Bullseye/Bullseye"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.AboutModalBoxContent, global.AboutModalBoxHeader, global.AboutModalBoxHero, global.AboutModalBoxBrand, global.AboutModalBoxCloseButton, global.AboutModalBox, global.Backdrop, global.Bullseye);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _AboutModalBoxContent, _AboutModalBoxHeader, _AboutModalBoxHero, _AboutModalBoxBrand, _AboutModalBoxCloseButton, _AboutModalBox, _Backdrop, _Bullseye) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _AboutModalBoxContent2 = _interopRequireDefault(_AboutModalBoxContent);

  var _AboutModalBoxHeader2 = _interopRequireDefault(_AboutModalBoxHeader);

  var _AboutModalBoxHero2 = _interopRequireDefault(_AboutModalBoxHero);

  var _AboutModalBoxBrand2 = _interopRequireDefault(_AboutModalBoxBrand);

  var _AboutModalBoxCloseButton2 = _interopRequireDefault(_AboutModalBoxCloseButton);

  var _AboutModalBox2 = _interopRequireDefault(_AboutModalBox);

  var _Backdrop2 = _interopRequireDefault(_Backdrop);

  var _Bullseye2 = _interopRequireDefault(_Bullseye);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var propTypes = {
    /** content rendered inside the About Modal Box Content. */
    children: _propTypes2["default"].node.isRequired,

    /** additional classes added to the About Modal Box */
    className: _propTypes2["default"].string,

    /** Flag to show the About Modal */
    isOpen: _propTypes2["default"].bool,

    /** A callback for when the close button is clicked */
    onClose: _propTypes2["default"].func,

    /** Product Name */
    productName: _propTypes2["default"].string,

    /** Trademark information */
    trademark: _propTypes2["default"].string.isRequired,

    /** the URL of the image for the Brand. */
    brandImageSrc: _propTypes2["default"].string.isRequired,

    /** the alternate text of the Brand image. */
    brandImageAlt: _propTypes2["default"].string.isRequired,

    /** the URL of the image for the Logo. */
    logoImageSrc: _propTypes2["default"].string.isRequired,

    /** the alternate text of the Logo image. */
    logoImageAlt: _propTypes2["default"].string.isRequired,

    /** id to use for About Modal Box aria labeled by */
    ariaLabelledbyId: _propTypes2["default"].string.isRequired,

    /** id to use for About Modal Box aria described by */
    ariaDescribedById: _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the AboutModalBoxContent component */
    '': _propTypes2["default"].any
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

    return _react2["default"].createElement(_Backdrop2["default"], null, _react2["default"].createElement(_Bullseye2["default"], null, _react2["default"].createElement(_AboutModalBox2["default"], {
      className: className,
      "aria-labelledby": ariaLabelledbyId,
      "aria-describedby": ariaDescribedById
    }, _react2["default"].createElement(_AboutModalBoxBrand2["default"], {
      src: brandImageSrc,
      alt: brandImageAlt
    }), _react2["default"].createElement(_AboutModalBoxCloseButton2["default"], {
      onClose: onClose
    }), productName && _react2["default"].createElement(_AboutModalBoxHeader2["default"], {
      id: ariaLabelledbyId,
      productName: productName
    }), _react2["default"].createElement(_AboutModalBoxContent2["default"], _extends({}, props, {
      trademark: trademark,
      id: ariaDescribedById
    }), children), _react2["default"].createElement(_AboutModalBoxHero2["default"], null))));
  };

  ModalContent.propTypes = propTypes;
  ModalContent.defaultProps = defaultProps;
  exports["default"] = ModalContent;
});