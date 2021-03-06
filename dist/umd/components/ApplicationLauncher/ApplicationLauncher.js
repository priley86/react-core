"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/AppLauncher/app-launcher.css.js", "@patternfly/react-styles", "prop-types", "./ApplicationLauncherMenu", "./Toggle", "@patternfly/react-icons", "./applicationLauncherConstants", "../Dropdown/dropdownConstants", "../../helpers/GenerateId/GenerateId"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/AppLauncher/app-launcher.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("./ApplicationLauncherMenu"), require("./Toggle"), require("@patternfly/react-icons"), require("./applicationLauncherConstants"), require("../Dropdown/dropdownConstants"), require("../../helpers/GenerateId/GenerateId"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.appLauncherCss, global.reactStyles, global.propTypes, global.ApplicationLauncherMenu, global.Toggle, global.reactIcons, global.applicationLauncherConstants, global.dropdownConstants, global.GenerateId);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _appLauncherCss, _reactStyles, _propTypes, _ApplicationLauncherMenu, _Toggle, _reactIcons, _applicationLauncherConstants, _dropdownConstants, _GenerateId) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defaultProps = exports.propTypes = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _appLauncherCss2 = _interopRequireDefault(_appLauncherCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _ApplicationLauncherMenu2 = _interopRequireDefault(_ApplicationLauncherMenu);

  var _Toggle2 = _interopRequireDefault(_Toggle);

  var _GenerateId2 = _interopRequireDefault(_GenerateId);

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

  var propTypes = exports.propTypes = {
    /** Additional element css classes */
    className: _propTypes2["default"].string,

    /** Display menu above or below dropdown toggle */
    direction: _propTypes2["default"].oneOf(Object.values(_applicationLauncherConstants.ApplicationLauncherDirection)),

    /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
    dropdownItems: _propTypes2["default"].array,

    /** open bool */
    isOpen: _propTypes2["default"].bool,

    /** Function callback called when user selects item */
    onSelect: _propTypes2["default"].func,

    /** Callback called when application launcher toggle is clicked */
    onToggle: _propTypes2["default"].func,

    /** Indicates where menu will be alligned horizontally */
    position: _propTypes2["default"].oneOf(Object.values(_applicationLauncherConstants.ApplicationLauncherPosition)),

    /** Adds accessible text to the button. Required for plain buttons */
    'aria-label': _propTypes2["default"].string
  };
  var defaultProps = exports.defaultProps = {
    className: '',
    direction: _applicationLauncherConstants.ApplicationLauncherDirection.down,
    dropdownItems: [],
    isOpen: false,
    onSelect: Function.prototype,
    onToggle: Function.prototype,
    position: _applicationLauncherConstants.ApplicationLauncherPosition.left,
    'aria-label': 'Actions'
  };

  var ApplicationLauncher =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ApplicationLauncher, _React$Component);

    function ApplicationLauncher() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ApplicationLauncher);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ApplicationLauncher)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "onEnter", function () {
        _this.openedOnEnter = true;
      });

      return _this;
    }

    _createClass(ApplicationLauncher, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!this.props.isOpen) this.openedOnEnter = false;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            ariaLabel = _this$props['aria-label'],
            children = _this$props.children,
            dropdownItems = _this$props.dropdownItems,
            className = _this$props.className,
            isOpen = _this$props.isOpen,
            onSelect = _this$props.onSelect,
            onToggle = _this$props.onToggle,
            props = _objectWithoutProperties(_this$props, ["aria-label", "children", "dropdownItems", "className", "isOpen", "onSelect", "onToggle"]);

        return _react2["default"].createElement(_GenerateId2["default"], null, function (randomId) {
          return _react2["default"].createElement("div", {
            className: (0, _reactStyles.css)(_appLauncherCss2["default"].appLauncher, isOpen && _appLauncherCss2["default"].modifiers.expanded, className),
            ref: function ref(_ref) {
              _this2.parentRef = _ref;
            }
          }, _react.Children.map(_react2["default"].createElement(_Toggle2["default"], {
            id: "pf-toggle-id-".concat(randomId),
            "aria-label": ariaLabel,
            onToggle: onToggle
          }, _react2["default"].createElement(_reactIcons.ThIcon, null)), function (oneToggle) {
            return (0, _react.cloneElement)(oneToggle, {
              parentRef: _this2.parentRef,
              id: randomId,
              isOpen: isOpen,
              isPlain: true,
              'aria-haspopup': true,
              onEnter: _this2.onEnter
            });
          }), isOpen && _react2["default"].createElement(_dropdownConstants.DropdownContext.Provider, {
            value: function value(event) {
              return onSelect && onSelect(event);
            }
          }, _react2["default"].createElement(_ApplicationLauncherMenu2["default"], {
            isOpen: isOpen,
            position: "left",
            "aria-labelledby": ariaLabel,
            openedOnEnter: _this2.openedOnEnter
          }, dropdownItems)));
        });
      }
    }]);

    return ApplicationLauncher;
  }(_react2["default"].Component);

  ApplicationLauncher.propTypes = propTypes;
  ApplicationLauncher.defaultProps = defaultProps;
  exports["default"] = ApplicationLauncher;
});