"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "focus-trap-react", "./ModalBoxBody", "./ModalBoxHeader", "./ModalBoxCloseButton", "./ModalBox", "./ModalBoxFooter", "../Backdrop/Backdrop", "../../@patternfly/patternfly/layouts/Bullseye/bullseye.css.js", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("focus-trap-react"), require("./ModalBoxBody"), require("./ModalBoxHeader"), require("./ModalBoxCloseButton"), require("./ModalBox"), require("./ModalBoxFooter"), require("../Backdrop/Backdrop"), require("../../@patternfly/patternfly/layouts/Bullseye/bullseye.css.js"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.focusTrapReact, global.ModalBoxBody, global.ModalBoxHeader, global.ModalBoxCloseButton, global.ModalBox, global.ModalBoxFooter, global.Backdrop, global.bullseyeCss, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _focusTrapReact, _ModalBoxBody, _ModalBoxHeader, _ModalBoxCloseButton, _ModalBox, _ModalBoxFooter, _Backdrop, _bullseyeCss, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

  var _ModalBoxBody2 = _interopRequireDefault(_ModalBoxBody);

  var _ModalBoxHeader2 = _interopRequireDefault(_ModalBoxHeader);

  var _ModalBoxCloseButton2 = _interopRequireDefault(_ModalBoxCloseButton);

  var _ModalBox2 = _interopRequireDefault(_ModalBox);

  var _ModalBoxFooter2 = _interopRequireDefault(_ModalBoxFooter);

  var _Backdrop2 = _interopRequireDefault(_Backdrop);

  var _bullseyeCss2 = _interopRequireDefault(_bullseyeCss);

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
    /** content rendered inside the Modal. */
    children: _propTypes2["default"].node.isRequired,

    /** additional classes added to the button */
    className: _propTypes2["default"].string,

    /** Flag to show the modal */
    isOpen: _propTypes2["default"].bool,

    /** Content of the Modal Header */
    title: _propTypes2["default"].string.isRequired,

    /** Flag to show the title */
    hideTitle: _propTypes2["default"].bool,

    /** Content of the Modal Footer */
    actions: _propTypes2["default"].any,

    /** A callback for when the close button is clicked */
    onClose: _propTypes2["default"].func,

    /** Default width of the Modal. */
    width: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),

    /** Creates a large version of the Modal */
    isLarge: _propTypes2["default"].bool,

    /** Creates a small version of the Modal */
    isSmall: _propTypes2["default"].bool,

    /** id to use for Modal Box description */
    ariaDescribedById: _propTypes2["default"].string,

    /** id of the ModalBoxBody */
    id: _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the ModalBoxBody component */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    width: null,
    className: '',
    isOpen: false,
    hideTitle: false,
    actions: [],
    onClose: function onClose() {
      return undefined;
    },
    isLarge: false,
    isSmall: false,
    ariaDescribedById: ''
  };

  var ModalContent = function ModalContent(_ref) {
    var children = _ref.children,
        className = _ref.className,
        isOpen = _ref.isOpen,
        title = _ref.title,
        hideTitle = _ref.hideTitle,
        actions = _ref.actions,
        onClose = _ref.onClose,
        isLarge = _ref.isLarge,
        isSmall = _ref.isSmall,
        width = _ref.width,
        ariaDescribedById = _ref.ariaDescribedById,
        id = _ref.id,
        props = _objectWithoutProperties(_ref, ["children", "className", "isOpen", "title", "hideTitle", "actions", "onClose", "isLarge", "isSmall", "width", "ariaDescribedById", "id"]);

    var modalBoxHeader = _react2["default"].createElement(_ModalBoxHeader2["default"], {
      hideTitle: hideTitle
    }, " ", title, " ");

    var modalBoxFooter = actions.length > 0 && _react2["default"].createElement(_ModalBoxFooter2["default"], null, " ", actions, " ");

    if (!isOpen) {
      return null;
    }

    return _react2["default"].createElement(_Backdrop2["default"], null, _react2["default"].createElement(_focusTrapReact2["default"], {
      focusTrapOptions: {
        clickOutsideDeactivates: true
      },
      className: (0, _reactStyles.css)(_bullseyeCss2["default"].bullseye)
    }, _react2["default"].createElement(_ModalBox2["default"], {
      style: {
        width: width
      },
      className: className,
      isLarge: isLarge,
      isSmall: isSmall,
      title: title,
      id: ariaDescribedById || id
    }, _react2["default"].createElement(_ModalBoxCloseButton2["default"], {
      onClose: onClose
    }), modalBoxHeader, _react2["default"].createElement(_ModalBoxBody2["default"], _extends({}, props, {
      id: id
    }), children), modalBoxFooter)));
  };

  ModalContent.propTypes = propTypes;
  ModalContent.defaultProps = defaultProps;
  exports["default"] = ModalContent;
});