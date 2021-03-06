"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Dropdown/dropdown.css.js", "@patternfly/react-styles", "prop-types", "../../helpers/constants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Dropdown/dropdown.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("../../helpers/constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.dropdownCss, global.reactStyles, global.propTypes, global.constants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _dropdownCss, _reactStyles, _propTypes, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdownCss2 = _interopRequireDefault(_dropdownCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  var propTypes = {
    /** HTML ID of dropdown toggle */
    id: _propTypes2["default"].string.isRequired,

    /** Anything which can be rendered as dropdown toggle */
    children: _propTypes2["default"].node,

    /** Classes applied to root element of dropdown toggle */
    className: _propTypes2["default"].string,

    /** Flag to indicate if menu is opened */
    isOpen: _propTypes2["default"].bool,

    /** Callback called when toggle is clicked */
    onToggle: _propTypes2["default"].func,

    /** Element which wraps toggle */
    parentRef: _propTypes2["default"].any,

    /** Forces focus state */
    isFocused: _propTypes2["default"].bool,

    /** Forces hover state */
    isHovered: _propTypes2["default"].bool,

    /** Forces active state */
    isActive: _propTypes2["default"].bool,

    /** Disables the dropdown toggle */
    isDisabled: _propTypes2["default"].bool,

    /** Display the toggle with no border or background */
    isPlain: _propTypes2["default"].bool,

    /** Style the toggle as a child of a split button */
    isSplitButton: _propTypes2["default"].bool,

    /** Additional props are spread to the container <button> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    isOpen: false,
    parentRef: null,
    isFocused: false,
    isHovered: false,
    isActive: false,
    isDisabled: false,
    isPlain: false,
    onToggle: Function.prototype
  };

  var Toggle =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Toggle, _Component);

    function Toggle() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Toggle);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Toggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
        document.addEventListener('mousedown', _this.onDocClick);
        document.addEventListener('touchstart', _this.onDocClick);
        document.addEventListener('keydown', _this.onEscPress);
      });

      _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
        document.removeEventListener('mousedown', _this.onDocClick);
        document.removeEventListener('touchstart', _this.onDocClick);
        document.removeEventListener('keydown', _this.onEscPress);
      });

      _defineProperty(_assertThisInitialized(_this), "onDocClick", function (event) {
        if (_this.props.isOpen && _this.props.parentRef && !_this.props.parentRef.contains(event.target)) {
          _this.props.onToggle && _this.props.onToggle(false);

          _this.toggle.focus();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onEscPress", function (event) {
        var parentRef = _this.props.parentRef;
        var keyCode = event.keyCode || event.which;

        if (_this.props.isOpen && (keyCode === _constants.KEY_CODES.ESCAPE_KEY || event.key === 'Tab') && parentRef && parentRef.contains(event.target)) {
          _this.props.onToggle && _this.props.onToggle(false);

          _this.toggle.focus();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
        if (event.key === 'Tab' && !_this.props.isOpen) return;
        event.preventDefault();

        if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && _this.props.isOpen) {
          _this.props.onToggle(!_this.props.isOpen);
        } else if ((event.key === 'Enter' || event.key === ' ') && !_this.props.isOpen) {
          _this.props.onToggle(!_this.props.isOpen);

          _this.props.onEnter();
        }
      });

      return _this;
    }

    _createClass(Toggle, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            isOpen = _this$props.isOpen,
            isFocused = _this$props.isFocused,
            isActive = _this$props.isActive,
            isHovered = _this$props.isHovered,
            isDisabled = _this$props.isDisabled,
            isPlain = _this$props.isPlain,
            isSplitButton = _this$props.isSplitButton,
            ariaHasPopup = _this$props.ariaHasPopup,
            onToggle = _this$props.onToggle,
            onEnter = _this$props.onEnter,
            parentRef = _this$props.parentRef,
            id = _this$props.id,
            type = _this$props.type,
            props = _objectWithoutProperties(_this$props, ["className", "children", "isOpen", "isFocused", "isActive", "isHovered", "isDisabled", "isPlain", "isSplitButton", "ariaHasPopup", "onToggle", "onEnter", "parentRef", "id", "type"]);

        return _react2["default"].createElement("button", _extends({}, props, {
          id: id,
          ref: function ref(toggle) {
            _this2.toggle = toggle;
          },
          className: (0, _reactStyles.css)(isSplitButton ? _dropdownCss2["default"].dropdownToggleButton : _dropdownCss2["default"].dropdownToggle, isFocused && _dropdownCss2["default"].modifiers.focus, isHovered && _dropdownCss2["default"].modifiers.hover, isActive && _dropdownCss2["default"].modifiers.active, isPlain && _dropdownCss2["default"].modifiers.plain, isDisabled && _dropdownCss2["default"].modifiers.disabled, className),
          type: type || 'button',
          onClick: function onClick(_event) {
            return onToggle && onToggle(!isOpen);
          },
          "aria-expanded": isOpen,
          "aria-haspopup": ariaHasPopup,
          onKeyDown: this.onKeyDown,
          disabled: isDisabled
        }), children);
      }
    }]);

    return Toggle;
  }(_react.Component);

  Toggle.propTypes = propTypes;
  Toggle.defaultProps = defaultProps;
  exports["default"] = Toggle;
});