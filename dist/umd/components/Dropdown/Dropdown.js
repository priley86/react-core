"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Dropdown/dropdown.css.js", "@patternfly/react-styles", "prop-types", "./DropdownMenu", "./dropdownConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Dropdown/dropdown.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("./DropdownMenu"), require("./dropdownConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.dropdownCss, global.reactStyles, global.propTypes, global.DropdownMenu, global.dropdownConstants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _dropdownCss, _reactStyles, _propTypes, _DropdownMenu, _dropdownConstants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdownCss2 = _interopRequireDefault(_dropdownCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

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

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  // seed for the aria-labelledby ID
  var currentId = 0;
  var propTypes = {
    /** Anything which can be rendered in a dropdown */
    children: function children(props) {
      if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
        return new Error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered ");
      }

      return null;
    },

    /** Classes applied to root element of dropdown */
    className: _propTypes2["default"].string,

    /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
    dropdownItems: _propTypes2["default"].array,

    /** Flag to indicate if menu is opened */
    isOpen: _propTypes2["default"].bool,

    /** Display the toggle with no border or background */
    isPlain: _propTypes2["default"].bool,

    /** Indicates where menu will be aligned horizontally */
    position: _propTypes2["default"].oneOf(Object.values(_dropdownConstants.DropdownPosition)),

    /** Display menu above or below dropdown toggle */
    direction: _propTypes2["default"].oneOf(Object.values(_dropdownConstants.DropdownDirection)),

    /** Placeholder to use custom toggle elements */
    toggle: _propTypes2["default"].node.isRequired,

    /** Function callback called when user selects item */
    onSelect: _propTypes2["default"].func,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    dropdownItems: [],
    isOpen: false,
    isPlain: false,
    position: _dropdownConstants.DropdownPosition.left,
    direction: _dropdownConstants.DropdownDirection.down,
    onSelect: Function.prototype
  };

  var Dropdown =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Dropdown);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "onEnter", function () {
        _this.openedOnEnter = true;
      });

      return _this;
    }

    _createClass(Dropdown, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!this.props.isOpen) this.openedOnEnter = false;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            direction = _this$props.direction,
            dropdownItems = _this$props.dropdownItems,
            isOpen = _this$props.isOpen,
            isPlain = _this$props.isPlain,
            onSelect = _this$props.onSelect,
            position = _this$props.position,
            toggle = _this$props.toggle,
            props = _objectWithoutProperties(_this$props, ["children", "className", "direction", "dropdownItems", "isOpen", "isPlain", "onSelect", "position", "toggle"]);

        var id = toggle.props.id || "pf-toggle-id-".concat(currentId++);
        var component;
        var renderedContent;
        var ariaHasPopup = null;

        if (dropdownItems && dropdownItems.length > 0) {
          component = 'ul';
          renderedContent = dropdownItems;
          ariaHasPopup = true;
        } else {
          component = 'div';
          renderedContent = children;
        }

        return _react2["default"].createElement("div", _extends({}, props, {
          className: (0, _reactStyles.css)(_dropdownCss2["default"].dropdown, direction === _dropdownConstants.DropdownDirection.up && _dropdownCss2["default"].modifiers.top, isOpen && _dropdownCss2["default"].modifiers.expanded, className),
          ref: function ref(_ref) {
            _this2.parentRef = _ref;
          }
        }), _react.Children.map(toggle, function (oneToggle) {
          return (0, _react.cloneElement)(oneToggle, {
            parentRef: _this2.parentRef,
            isOpen: isOpen,
            id: id,
            isPlain: isPlain,
            ariaHasPopup: ariaHasPopup,
            onEnter: _this2.onEnter
          });
        }), isOpen && _react2["default"].createElement(_dropdownConstants.DropdownContext.Provider, {
          value: function value(event) {
            return onSelect && onSelect(event);
          }
        }, _react2["default"].createElement(_DropdownMenu2["default"], {
          component: component,
          isOpen: isOpen,
          position: position,
          "aria-labelledby": id,
          openedOnEnter: this.openedOnEnter
        }, renderedContent)));
      }
    }]);

    return Dropdown;
  }(_react2["default"].Component);

  Dropdown.propTypes = propTypes;
  Dropdown.defaultProps = defaultProps;
  exports["default"] = Dropdown;
});