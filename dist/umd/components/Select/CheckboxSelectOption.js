"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Select/select.css.js", "../../@patternfly/patternfly/components/Check/check.css.js", "@patternfly/react-styles", "prop-types", "./selectConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Select/select.css.js"), require("../../@patternfly/patternfly/components/Check/check.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("./selectConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.selectCss, global.checkCss, global.reactStyles, global.propTypes, global.selectConstants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _selectCss, _checkCss, _reactStyles, _propTypes, _selectConstants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _selectCss2 = _interopRequireDefault(_selectCss);

  var _checkCss2 = _interopRequireDefault(_checkCss);

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
    /** the value for the option */
    children: _propTypes2["default"].string,

    /** additional classes added to the Select Option */
    className: _propTypes2["default"].string,

    /** the value for the option */
    value: _propTypes2["default"].string,

    /** flag indicating if the option is disabled */
    isDisabled: _propTypes2["default"].bool,

    /** Optional on click callback */
    onClick: _propTypes2["default"].func,

    /** Additional props are spread to the container <button> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    value: null,
    isDisabled: false,
    onClick: Function.prototype
  };

  var CheckboxSelectOption =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CheckboxSelectOption, _React$Component);

    function CheckboxSelectOption() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, CheckboxSelectOption);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxSelectOption)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "ref", _react2["default"].createRef());

      _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
        if (event.key === _selectConstants.KeyTypes.Tab) return;
        event.preventDefault();

        if (event.key === _selectConstants.KeyTypes.ArrowUp) {
          _this.props.keyHandler(_this.props.index, 'up');
        } else if (event.key === _selectConstants.KeyTypes.ArrowDown) {
          _this.props.keyHandler(_this.props.index, 'down');
        } else if (event.key === _selectConstants.KeyTypes.Enter || event.key === _selectConstants.KeyTypes.Space) {
          _this.ref.current.click && _this.ref.current.click();

          _this.ref.current.focus();
        }
      });

      return _this;
    }

    _createClass(CheckboxSelectOption, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.sendRef(this.ref.current, this.props.index);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            value = _this$props.value,
            onClick = _this$props.onClick,
            isDisabled = _this$props.isDisabled,
            isChecked = _this$props.isChecked,
            sendRef = _this$props.sendRef,
            keyHandler = _this$props.keyHandler,
            index = _this$props.index,
            props = _objectWithoutProperties(_this$props, ["children", "className", "value", "onClick", "isDisabled", "isChecked", "sendRef", "keyHandler", "index"]);

        return _react2["default"].createElement(_selectConstants.SelectContext.Consumer, null, function (_ref) {
          var onSelect = _ref.onSelect;
          return _react2["default"].createElement("label", _extends({}, props, {
            className: (0, _reactStyles.css)(_checkCss2["default"].check, _selectCss2["default"].selectMenuItem, isDisabled && _selectCss2["default"].modifiers.disabled, className),
            onKeyDown: _this2.onKeyDown
          }), _react2["default"].createElement("input", {
            id: value,
            className: (0, _reactStyles.css)(_checkCss2["default"].checkInput),
            type: "checkbox",
            onChange: function onChange(event) {
              if (!isDisabled) {
                onClick && onClick(event);
                onSelect && onSelect(event, value);
              }
            },
            ref: _this2.ref,
            checked: isChecked || false,
            disabled: isDisabled
          }), _react2["default"].createElement("span", {
            className: (0, _reactStyles.css)(_checkCss2["default"].checkLabel, isDisabled && _selectCss2["default"].modifiers.disabled)
          }, value));
        });
      }
    }]);

    return CheckboxSelectOption;
  }(_react2["default"].Component);

  CheckboxSelectOption.propTypes = propTypes;
  CheckboxSelectOption.defaultProps = defaultProps;
  exports["default"] = CheckboxSelectOption;
});