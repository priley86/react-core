"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/DataList/data-list.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/DataList/data-list.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.dataListCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _dataListCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _dataListCss2 = _interopRequireDefault(_dataListCss);

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

  var DataListAction =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DataListAction, _React$Component);

    function DataListAction(props) {
      var _this;

      _classCallCheck(this, DataListAction);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DataListAction).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "onToggle", function (isOpen) {
        _this.setState({
          isOpen: isOpen
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onSelect", function (event) {
        _this.setState(function (prevState) {
          return {
            isOpen: !prevState.isOpen
          };
        });
      });

      _this.state = {
        isOpen: false
      };
      return _this;
    }

    _createClass(DataListAction, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            id = _this$props.id,
            ariaLabel = _this$props['aria-label'],
            ariaLabelledBy = _this$props['aria-labelledby'],
            props = _objectWithoutProperties(_this$props, ["children", "className", "id", "aria-label", "aria-labelledby"]);

        return _react2["default"].createElement("div", {
          className: (0, _reactStyles.css)(_dataListCss2["default"].dataListItemAction, className)
        }, _react2["default"].createElement("div", _extends({
          className: (0, _reactStyles.css)(_dataListCss2["default"].dataListAction, className)
        }, props), children));
      }
    }]);

    return DataListAction;
  }(_react2["default"].Component);

  DataListAction.propTypes = {
    /** Content rendered as DataList Action  (e.g <Button> or <Dropdown>) */
    children: _propTypes2["default"].oneOfType([_propTypes2["default"].arrayOf(_propTypes2["default"].node), _propTypes2["default"].node]).isRequired,

    /** Additional classes added to the DataList Action */
    className: _propTypes2["default"].string,

    /** Identify the DataList toggle number */
    id: _propTypes2["default"].string.isRequired,

    /** Adds accessible text to the DataList Action */
    'aria-labelledby': _propTypes2["default"].string.isRequired,

    /** Adds accessible text to the DataList Action */
    'aria-label': _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  DataListAction.defaultProps = {
    className: ''
  };
  exports["default"] = DataListAction;
});