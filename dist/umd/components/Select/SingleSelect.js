"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Select/select.css.js", "@patternfly/react-styles", "prop-types", "../../helpers/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Select/select.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("../../helpers/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.selectCss, global.reactStyles, global.propTypes, global.util);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _selectCss, _reactStyles, _propTypes, _util) {
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
    /** Content rendered inside the SingleSelect */
    children: _propTypes2["default"].node.isRequired,

    /** Additional classes added to the SingleSelect control */
    className: _propTypes2["default"].string,

    /** Flag indicating the Select is expanded */
    isExpanded: _propTypes2["default"].bool,

    /** Internal flag indicating whether select was opened via keyboard */
    openedOnEnter: _propTypes2["default"].bool,

    /** Currently selected option */
    selected: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].array]),

    /** Additional props are spread to the container <select> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    isExpanded: false,
    openedOnEnter: false,
    selected: ''
  };

  var SingleSelect =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(SingleSelect, _React$Component);

    function SingleSelect() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, SingleSelect);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SingleSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "refCollection", []);

      _defineProperty(_assertThisInitialized(_this), "sendRef", function (ref, index) {
        _this.refCollection[index] = ref;
      });

      _defineProperty(_assertThisInitialized(_this), "childKeyHandler", function (index, position) {
        (0, _util.keyHandler)(index, position, _this.refCollection, _this.props.children);
      });

      return _this;
    }

    _createClass(SingleSelect, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.openedOnEnter) {
          var selectedRef = this.refCollection.filter(function (ref) {
            return ref.classList.contains('pf-c-select__menu-item--match');
          });
          selectedRef && selectedRef[0] ? selectedRef[0].focus() : this.refCollection[0].focus();
        }
      }
    }, {
      key: "extendChildren",
      value: function extendChildren() {
        var _this2 = this;

        var selected = this.props.selected;
        return _react2["default"].Children.map(this.props.children, function (child, index) {
          return _react2["default"].cloneElement(child, {
            isSelected: selected && selected.constructor === Array ? selected && selected.includes(child.props.value) : selected === child.props.value,
            sendRef: _this2.sendRef,
            keyHandler: _this2.childKeyHandler,
            index: index
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            isExpanded = _this$props.isExpanded,
            openedOnEnter = _this$props.openedOnEnter,
            selected = _this$props.selected,
            props = _objectWithoutProperties(_this$props, ["children", "className", "isExpanded", "openedOnEnter", "selected"]);

        this.renderedChildren = this.extendChildren();
        return _react2["default"].createElement("ul", _extends({}, props, {
          className: (0, _reactStyles.css)(_selectCss2["default"].selectMenu, className),
          role: "listbox"
        }), this.renderedChildren);
      }
    }]);

    return SingleSelect;
  }(_react2["default"].Component);

  SingleSelect.propTypes = propTypes;
  SingleSelect.defaultProps = defaultProps;
  exports["default"] = SingleSelect;
});