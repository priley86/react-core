"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js", "@patternfly/react-styles", "./optionsMenuConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"), require("@patternfly/react-styles"), require("./optionsMenuConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.optionsMenuCss, global.reactStyles, global.optionsMenuConstants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _optionsMenuCss, _reactStyles, _optionsMenuConstants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _optionsMenuCss2 = _interopRequireDefault(_optionsMenuCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  var propTypes = {
    /** Classes applied to root element of the Options menu */
    className: _propTypes2["default"].string,

    /** Id of the root element of the Options menu */
    id: _propTypes2["default"].string.isRequired,

    /** Array of OptionsMenuItem and/or OptionMenuItemGroup nodes that will be rendered in the Options menu list */
    menuItems: _propTypes2["default"].arrayOf(_propTypes2["default"].node).isRequired,

    /** Either an OptionsMenuToggle or an OptionsMenuToggleWithText to use to toggle the Options menu */
    toggle: _propTypes2["default"].node.isRequired,

    /** Flag to indicate if menu is open */
    isOpen: _propTypes2["default"].bool,

    /** Flag to indicate the toggle has no border or background */
    isPlain: _propTypes2["default"].bool,

    /** Provides an accessible name for the Options menu */
    ariaLabelMenu: _propTypes2["default"].string,

    /** Display menu above or below Options menu toggle */
    direction: _propTypes2["default"].oneOf(Object.values(_optionsMenuConstants.OptionsMenuDirection)),

    /** Indicates where menu will be aligned horizontally */
    position: _propTypes2["default"].oneOf(Object.values(_optionsMenuConstants.OptionsMenuPosition))
  };
  var defaultProps = {
    className: '',
    isOpen: false,
    isPlain: false,
    ariaLabelMenu: '',
    direction: _optionsMenuConstants.OptionsMenuDirection.down,
    position: _optionsMenuConstants.OptionsMenuPosition.left
  };

  var OptionsMenu =
  /*#__PURE__*/
  function (_Component) {
    _inherits(OptionsMenu, _Component);

    function OptionsMenu() {
      _classCallCheck(this, OptionsMenu);

      return _possibleConstructorReturn(this, _getPrototypeOf(OptionsMenu).apply(this, arguments));
    }

    _createClass(OptionsMenu, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            direction = _this$props.direction,
            position = _this$props.position,
            id = _this$props.id,
            isOpen = _this$props.isOpen,
            isPlain = _this$props.isPlain,
            ariaLabelMenu = _this$props.ariaLabelMenu,
            menuItems = _this$props.menuItems,
            toggle = _this$props.toggle;
        return _react2["default"].createElement("div", {
          id: id,
          className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenu, direction === _optionsMenuConstants.OptionsMenuDirection.up && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'top'), position === _optionsMenuConstants.OptionsMenuPosition.right && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'align-right'), isOpen && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'expanded'), className)
        }, _react.Children.map(toggle, function (oneToggle) {
          return (0, _react.cloneElement)(oneToggle, {
            parentId: id,
            isOpen: isOpen,
            isPlain: isPlain
          });
        }), isOpen && _react2["default"].createElement("ul", _extends({
          className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuMenu, position === _optionsMenuConstants.OptionsMenuPosition.right && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'align-right'))
        }, ariaLabelMenu ? {
          'aria-label': ariaLabelMenu
        } : {
          'aria-labelledby': "".concat(id, "-toggle")
        }), menuItems.map(function (item) {
          return item;
        })));
      }
    }]);

    return OptionsMenu;
  }(_react.Component);

  OptionsMenu.propTypes = propTypes;
  OptionsMenu.defaultProps = defaultProps;
  exports["default"] = OptionsMenu;
});