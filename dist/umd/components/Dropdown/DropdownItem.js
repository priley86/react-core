"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-dom", "../../@patternfly/patternfly/components/Dropdown/dropdown.css.js", "../../@patternfly/patternfly/components/AppLauncher/app-launcher.css.js", "@patternfly/react-styles", "prop-types", "../../helpers/componentShape", "./dropdownConstants", "../../helpers/constants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-dom"), require("../../@patternfly/patternfly/components/Dropdown/dropdown.css.js"), require("../../@patternfly/patternfly/components/AppLauncher/app-launcher.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("../../helpers/componentShape"), require("./dropdownConstants"), require("../../helpers/constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.dropdownCss, global.appLauncherCss, global.reactStyles, global.propTypes, global.componentShape, global.dropdownConstants, global.constants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactDom, _dropdownCss, _appLauncherCss, _reactStyles, _propTypes, _componentShape, _dropdownConstants, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _dropdownCss2 = _interopRequireDefault(_dropdownCss);

  var _appLauncherCss2 = _interopRequireDefault(_appLauncherCss);

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
    /** Anything which can be rendered as dropdown item */
    children: _propTypes2["default"].node,

    /** Classes applied to root element of dropdown item */
    className: _propTypes2["default"].string,

    /** Indicates which component will be used as dropdown item */
    component: _componentShape.componentShape,

    /** Render dropdown item as disabled option */
    isDisabled: _propTypes2["default"].bool,

    /** Forces display of the hover state of the element */
    isHovered: _propTypes2["default"].bool,

    /** Default hyperlink location */
    href: _propTypes2["default"].string,
    index: _propTypes2["default"].number,
    context: _propTypes2["default"].shape({
      keyHandler: _propTypes2["default"].func,
      sendRef: _propTypes2["default"].func
    }),

    /** Additional props are spread to the container component */
    '': _propTypes2["default"].any,

    /** Callback for click event */
    onClick: _propTypes2["default"].func
  };
  var defaultProps = {
    children: null,
    className: '',
    isHovered: false,
    component: 'a',
    isDisabled: false,
    href: '#',
    onClick: Function.prototype,
    index: -1,
    context: {
      keyHandler: Function.prototype,
      sendRef: Function.prototype
    }
  };

  var DropdownItem =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DropdownItem, _React$Component);

    function DropdownItem() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DropdownItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "ref", _react2["default"].createRef());

      _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
        // Detected key press on this item, notify the menu parent so that the appropriate
        // item can be focused
        if (event.keyCode === _constants.KEY_CODES.TAB) return;
        event.preventDefault();

        if (event.keyCode === _constants.KEY_CODES.ARROW_UP) {
          _this.props.context.keyHandler(_this.props.index, _constants.KEYHANDLER_DIRECTION.UP);
        } else if (event.keyCode === _constants.KEY_CODES.ARROW_DOWN) {
          _this.props.context.keyHandler(_this.props.index, _constants.KEYHANDLER_DIRECTION.DOWN);
        } else if (event.keyCode === _constants.KEY_CODES.ENTER) {
          if (!_this.ref.current.getAttribute) _reactDom2["default"].findDOMNode(_this.ref.current).click();else {
            _this.ref.current.click && _this.ref.current.click();
          }
        }
      });

      return _this;
    }

    _createClass(DropdownItem, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.context.sendRef(this.props.index, this.ref.current, this.props.isDisabled);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            isHovered = _this$props.isHovered,
            context = _this$props.context,
            _onClick = _this$props.onClick,
            Component = _this$props.component,
            isAppLauncher = _this$props.isAppLauncher,
            isDisabled = _this$props.isDisabled,
            index = _this$props.index,
            props = _objectWithoutProperties(_this$props, ["className", "children", "isHovered", "context", "onClick", "component", "isAppLauncher", "isDisabled", "index"]);

        var additionalProps = props;
        var classes;

        if (Component === 'a') {
          additionalProps['aria-disabled'] = isDisabled;
          additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
        } else if (Component === 'button') {
          additionalProps.disabled = isDisabled;
          additionalProps.type = additionalProps.type || 'button';
        }

        if (isAppLauncher) {
          classes = (0, _reactStyles.css)(_appLauncherCss2["default"].appLauncherMenuItem, isDisabled && _appLauncherCss2["default"].modifiers.disabled, isHovered && _appLauncherCss2["default"].modifiers.hover, className);
        } else {
          this.props.role === 'separator' ? classes = className : classes = (0, _reactStyles.css)(_dropdownCss2["default"].dropdownMenuItem, isDisabled && _dropdownCss2["default"].modifiers.disabled, isHovered && _dropdownCss2["default"].modifiers.hover, className);
        }

        return _react2["default"].createElement(_dropdownConstants.DropdownContext.Consumer, null, function (onSelect) {
          return _react2["default"].createElement("li", {
            role: "none"
          }, _react2["default"].isValidElement(children) ? _react2["default"].Children.map(children, function (child) {
            return _react2["default"].cloneElement(child, {
              className: "".concat((0, _reactStyles.css)(isDisabled && _dropdownCss2["default"].modifiers.disabled, isHovered && _dropdownCss2["default"].modifiers.hover, className), " ").concat(child.props.className),
              ref: _this2.ref,
              onKeyDown: _this2.onKeyDown,
              onClick: function onClick(event) {
                if (!isDisabled) {
                  _onClick && _onClick(event);
                  onSelect && onSelect(event);
                }
              }
            });
          }) : _react2["default"].createElement(Component, _extends({}, additionalProps, {
            className: classes,
            ref: _this2.ref,
            onKeyDown: _this2.onKeyDown,
            onClick: function onClick(event) {
              if (!isDisabled) {
                _onClick && _onClick(event);
                onSelect && onSelect(event);
              }
            }
          }), children));
        });
      }
    }]);

    return DropdownItem;
  }(_react2["default"].Component);

  DropdownItem.propTypes = propTypes;
  DropdownItem.defaultProps = defaultProps;
  exports["default"] = DropdownItem;
});