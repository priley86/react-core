"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Dropdown/dropdown.css.js", "@patternfly/react-styles", "prop-types", "../../helpers/componentShape", "react-dom", "../../helpers/util", "./dropdownConstants", "../../helpers/constants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Dropdown/dropdown.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("../../helpers/componentShape"), require("react-dom"), require("../../helpers/util"), require("./dropdownConstants"), require("../../helpers/constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.dropdownCss, global.reactStyles, global.propTypes, global.componentShape, global.reactDom, global.util, global.dropdownConstants, global.constants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _dropdownCss, _reactStyles, _propTypes, _componentShape, _reactDom, _util, _dropdownConstants, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdownCss2 = _interopRequireDefault(_dropdownCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactDom2 = _interopRequireDefault(_reactDom);

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
    /** Anything which can be rendered as dropdown items */
    children: _propTypes2["default"].node,

    /** Classess applied to root element of dropdown menu */
    className: _propTypes2["default"].string,

    /** Flag to indicate if menu is opened */
    isOpen: _propTypes2["default"].bool,

    /** Indicates which component will be used as dropdown menu */
    component: _componentShape.componentShape,

    /** Indicates where menu will be alligned horizontally */
    position: _propTypes2["default"].oneOf(Object.values(_dropdownConstants.DropdownPosition)),

    /** Additional props are spread to the container component */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    isOpen: true,
    position: _dropdownConstants.DropdownPosition.left,
    component: 'ul'
  };

  var DropdownMenu =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DropdownMenu, _React$Component);

    function DropdownMenu() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DropdownMenu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "refsCollection", []);

      _defineProperty(_assertThisInitialized(_this), "childKeyHandler", function (index, position) {
        var custom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        (0, _util.keyHandler)(index, position, _this.refsCollection, _this.props.children, custom);
      });

      _defineProperty(_assertThisInitialized(_this), "sendRef", function (index, node, isDisabled) {
        if (!node.getAttribute) {
          _this.refsCollection[index] = _reactDom2["default"].findDOMNode(node);
        } else if (isDisabled || node.getAttribute('role') === 'separator') {
          _this.refsCollection[index] = null;
        } else {
          _this.refsCollection[index] = node;
        }
      });

      return _this;
    }

    _createClass(DropdownMenu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.openedOnEnter) {
          if (this.props.component === 'ul') this.refsCollection[0].focus();else {
            this.refsCollection[0].current.focus && this.refsCollection[0].current.focus() || _reactDom2["default"].findDOMNode(this.refsCollection[0].current).focus();
          }
        }
      }
    }, {
      key: "extendChildren",
      value: function extendChildren() {
        return _react2["default"].Children.map(this.props.children, function (child, index) {
          return _react2["default"].cloneElement(child, {
            index: index
          });
        });
      }
    }, {
      key: "extendCustomChildren",
      value: function extendCustomChildren() {
        var _this2 = this;

        var mappedChildren = _react2["default"].Children.map(this.props.children, function (child, index) {
          var mappedChild = _react2["default"].cloneElement(child, {
            ref: _react2["default"].createRef(),
            className: "".concat((0, _reactStyles.css)(child.props.isDisabled && _dropdownCss2["default"].modifiers.disabled, child.props.isHovered && _dropdownCss2["default"].modifiers.hover, _dropdownCss2["default"].dropdownMenuItem)).concat(child.props.className ? child.props.className : ''),
            tabIndex: -1,
            onKeyDown: function onKeyDown(event) {
              if (event.keyCode === _constants.KEY_CODES.TAB) return;
              event.preventDefault();

              if (event.keyCode === _constants.KEY_CODES.ARROW_UP) {
                (0, _util.keyHandler)(index, _constants.KEYHANDLER_DIRECTION.up, _this2.refsCollection, _this2.props.children, true);
              } else if (event.keyCode === _constants.KEY_CODES.ARROW_DOWN) {
                (0, _util.keyHandler)(index, _constants.KEYHANDLER_DIRECTION.DOWN, _this2.refsCollection, _this2.props.children, true);
              }
            }
          });

          !mappedChild.props.disabled ? _this2.refsCollection[index] = mappedChild.ref : _this2.refsCollection[index] = null;
          return mappedChild;
        });

        return mappedChildren;
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props = this.props,
            className = _this$props.className,
            isOpen = _this$props.isOpen,
            position = _this$props.position,
            children = _this$props.children,
            Component = _this$props.component,
            openedOnEnter = _this$props.openedOnEnter,
            props = _objectWithoutProperties(_this$props, ["className", "isOpen", "position", "children", "component", "openedOnEnter"]);

        return _react2["default"].createElement(_dropdownConstants.DropdownArrowContext.Provider, {
          value: {
            keyHandler: this.childKeyHandler,
            sendRef: this.sendRef
          }
        }, Component === 'div' ? _react2["default"].createElement(_dropdownConstants.DropdownContext.Consumer, null, function (onSelect) {
          return _react2["default"].createElement("ul", {
            className: (0, _reactStyles.css)(_dropdownCss2["default"].dropdownMenu, position === _dropdownConstants.DropdownPosition.right && _dropdownCss2["default"].modifiers.alignRight, className),
            hidden: !isOpen,
            onClick: function onClick(event) {
              return onSelect && onSelect(event);
            }
          }, _react2["default"].createElement(Component, props, _this3.extendCustomChildren()));
        }) : _react2["default"].createElement(Component, _extends({}, props, {
          className: (0, _reactStyles.css)(_dropdownCss2["default"].dropdownMenu, position === _dropdownConstants.DropdownPosition.right && _dropdownCss2["default"].modifiers.alignRight, className),
          hidden: !isOpen,
          role: "menu"
        }), this.extendChildren()));
      }
    }]);

    return DropdownMenu;
  }(_react2["default"].Component);

  DropdownMenu.propTypes = propTypes;
  DropdownMenu.defaultProps = defaultProps;
  exports["default"] = DropdownMenu;
});