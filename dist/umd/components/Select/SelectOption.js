"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Select/select.css.js", "@patternfly/react-styles", "@patternfly/react-icons", "prop-types", "./selectConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Select/select.css.js"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("prop-types"), require("./selectConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.selectCss, global.reactStyles, global.reactIcons, global.propTypes, global.selectConstants);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _selectCss, _reactStyles, _reactIcons, _propTypes, _selectConstants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _selectCss2 = _interopRequireDefault(_selectCss);

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
    /** additional classes added to the Select Option */
    className: _propTypes2["default"].string,

    /** the value for the option */
    value: _propTypes2["default"].string,

    /** internal index of the option */
    index: _propTypes2["default"].number,

    /** flag indicating if the option is disabled */
    isDisabled: _propTypes2["default"].bool,

    /** flag indicating if the option acts as a placeholder */
    isPlaceholder: _propTypes2["default"].bool,

    /** Internal flag indicating if the option is selected */
    isSelected: _propTypes2["default"].bool,

    /** Optional on click callback */
    onClick: _propTypes2["default"].func,

    /** Internal callback for ref tracking */
    sendRef: _propTypes2["default"].func,

    /** Internal callback for keyboard navigation */
    keyHandler: _propTypes2["default"].func,

    /** Additional props are spread to the container <button> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    value: null,
    index: 0,
    isDisabled: false,
    isPlaceholder: false,
    isSelected: false,
    onClick: Function.prototype,
    sendRef: Function.prototype,
    keyHandler: Function.prototype
  };

  var SelectOption =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(SelectOption, _React$Component);

    function SelectOption() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, SelectOption);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectOption)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "ref", _react2["default"].createRef());

      _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
        if (event.key === _selectConstants.KeyTypes.Tab) return;
        event.preventDefault();

        if (event.key === _selectConstants.KeyTypes.ArrowUp) {
          _this.props.keyHandler(_this.props.index, 'up');
        } else if (event.key === _selectConstants.KeyTypes.ArrowDown) {
          _this.props.keyHandler(_this.props.index, 'down');
        } else if (event.key === _selectConstants.KeyTypes.Enter) {
          _this.ref.current.click && _this.ref.current.click();
        }
      });

      return _this;
    }

    _createClass(SelectOption, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.sendRef(this.ref.current, this.props.index);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            value = _this$props.value,
            _onClick = _this$props.onClick,
            isDisabled = _this$props.isDisabled,
            isPlaceholder = _this$props.isPlaceholder,
            isSelected = _this$props.isSelected,
            sendRef = _this$props.sendRef,
            keyHandler = _this$props.keyHandler,
            index = _this$props.index,
            props = _objectWithoutProperties(_this$props, ["className", "value", "onClick", "isDisabled", "isPlaceholder", "isSelected", "sendRef", "keyHandler", "index"]);

        return _react2["default"].createElement(_selectConstants.SelectContext.Consumer, null, function (_ref) {
          var onSelect = _ref.onSelect,
              onClose = _ref.onClose;
          return _react2["default"].createElement("li", {
            role: "presentation"
          }, _react2["default"].createElement("button", _extends({}, props, {
            className: (0, _reactStyles.css)(_selectCss2["default"].selectMenuItem, isSelected && _selectCss2["default"].modifiers.selected, isDisabled && _selectCss2["default"].modifiers.disabled, className),
            onClick: function onClick(event) {
              if (!isDisabled) {
                _onClick && _onClick(event);
                onSelect && onSelect(event, value, isPlaceholder);
                onClose && onClose();
              }
            },
            role: "option",
            "aria-selected": isSelected || null,
            ref: _this2.ref,
            onKeyDown: _this2.onKeyDown
          }), value, isSelected && _react2["default"].createElement(_reactIcons.CheckIcon, {
            noVerticalAlign: true,
            className: (0, _reactStyles.css)(_selectCss2["default"].selectMenuItemIcon),
            "aria-hidden": true
          })));
        });
      }
    }]);

    return SelectOption;
  }(_react2["default"].Component);

  SelectOption.propTypes = propTypes;
  SelectOption.defaultProps = defaultProps;
  exports["default"] = SelectOption;
});